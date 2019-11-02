import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head>
                    <link href="https://fonts.googleapis.com/css?family=Lexend+Deca&display=swap" rel="stylesheet" />
                </Head>
                <body>
                    <style jsx global>{`
                        html {
                            height:100%;
                        }
                        body {
                            margin: 0;
                            height: 100vh;
                            font-family: 'Lexend Deca', sans-serif;
                        }
                    `}</style>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;