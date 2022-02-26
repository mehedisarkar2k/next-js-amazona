import { ServerStyleSheets } from "@mui/styles";
import Document, { Head, Html, Main, NextScript } from "next/document";
import React from "react";

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <meta charSet="utf-8" />
                </Head>

                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

MyDocument.getInitialProps = async (ctx) => {
    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () => {
        return originalRenderPage({
            enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
        });
    };

    const initialPage = await Document.getInitialProps(ctx);

    return {
        ...initialPage,
        styles: [
            ...React.Children.toArray(initialPage.styles),
            sheets.getStyleElement(),
        ],
    };
};
