import * as React from 'react'
import { FormattedMessage, useIntl } from 'react-intl'

import Layout from '../components/Layout'

export default function Home() {
  const intl = useIntl();

  return (
    <Layout
      title={intl.formatMessage({
        defaultMessage: 'Home',
      })}
    >
      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          <FormattedMessage defaultMessage="Welcome to" />{' '}
          <a className="text-blue-600" href="https://nextjs.org?utm_source=next-showcase" target="_blank" rel="noopener noreferrer">
            Next.js!
          </a>
        </h1>

        <p className="mt-3 text-2xl">
          <FormattedMessage defaultMessage="A Showcase for Static Site Generation (SSG) in multiple languages" />
        </p>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <a
            href="https://nextjs.org/docs"
            className="p-6 mx-2 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">
              <FormattedMessage defaultMessage="Blog Post" /> &rarr;
            </h3>
            <p className="mt-4 text-xl">
              <FormattedMessage defaultMessage="More explanations on how it works." />
            </p>
          </a>

          <a
            href="https://nextjs.org/docs"
            className="p-6 mx-2 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">
              <FormattedMessage defaultMessage="Code" /> &rarr;
            </h3>
            <p className="mt-4 text-xl">
              <FormattedMessage defaultMessage="All the code with next and react-intl." />
            </p>
          </a>
        </div>
      </main>
    </Layout>
  );
}
