
import { NextSeo } from 'next-seo'
import Head from 'next/head'
import * as React from 'react'
import { FormattedMessage, useIntl } from 'react-intl'

export default function Layout({ title, children }) {
  const intl = useIntl()

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>
          {title ||
            intl.formatMessage({
              defaultMessage: 'SSG With Internationalization',
            })}
        </title>
      </Head>

      <NextSeo title={title} />

      {children}

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <FormattedMessage defaultMessage="Made with" /> {'\u2764'} <FormattedMessage defaultMessage="by" /> &nbsp;
        <a className="text-blue-500" href="https://www.emmanuelgautier.com?utm_source=next-showcase" target="_blank">
          Emmanuel Gautier
        </a>
      </footer>
    </div>
  )
}
