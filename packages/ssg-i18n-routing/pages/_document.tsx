import Document, {
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document'

interface Props {
  locale: string
}

class MyDocument extends Document<Props> {
  render() {
    return (
      <Html lang={this.props.locale}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
