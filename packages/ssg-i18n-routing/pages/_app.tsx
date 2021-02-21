import { DefaultSeo } from 'next-seo'
import App from 'next/app'
import * as React from 'react'
import { IntlProvider } from 'react-intl'

import { polyfill } from '../polyfills'

import '../styles/globals.css'

function MyApp({ Component, pageProps, locale, messages }) {
  return (
    <IntlProvider locale={locale} defaultLocale="en" messages={messages}>
      <DefaultSeo />
      <Component {...pageProps} />
    </IntlProvider>
  )
}

/**
 * Get the messages and also do locale negotiation. A multi-lingual user
 * can specify locale prefs like ['ja', 'en-GB', 'en'] which is interpreted as
 * Japanese, then British English, then English
 * @param locales list of requested locales
 * @returns {[string, Promise]} A tuple containing the negotiated locale
 * and the promise of fetching the translated messages
 */
function getMessages(locales: string | string[] = ['en']) {
  if (!Array.isArray(locales)) {
    locales = [locales]
  }
  let langBundle
  let locale
  for (let i = 0; i < locales.length && !locale; i++) {
    locale = locales[i]
    switch (locale) {
      case 'fr':
        langBundle = import('../compiled-lang/fr.json')
        break
      default:
        break
      // Add more languages
    }
  }
  if (!langBundle) {
    return ['en', import('../compiled-lang/en.json')]
  }
  return [locale, langBundle]
}

const getInitialProps: typeof App.getInitialProps = async appContext => {
  const {
    ctx: { req },
  } = appContext
  const requestedLocales: string | string[] =
    (req as any)?.locale ||
    (typeof navigator !== 'undefined' && navigator.languages) ||
    // IE11
    (typeof navigator !== 'undefined' && (navigator as any).userLanguage) ||
    (typeof window !== 'undefined' && (window as any).LOCALE) ||
    'en'

  const [supportedLocale, messagePromise] = getMessages(requestedLocales)

  const [, messages, appProps] = await Promise.all([
    polyfill(supportedLocale),
    messagePromise,
    App.getInitialProps(appContext),
  ])

  return {
    ...(appProps as any),
    locale: supportedLocale,
    messages: messages.default,
  }
}

MyApp.getInitialProps = getInitialProps

export default MyApp
