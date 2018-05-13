import React from 'react';

export default {
  getSiteData: () => ({
    title: 'React Static',
  }),
  Document: (props) => {
    const {
      Html, Head, Body, children, renderMeta
    } = props;
    const script1 = 'https://www.googletagmanager.com/gtag/js?id=UA-108748352-1';
    const script2 =
        `
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());
    
        gtag('config', 'UA-108748352-1');
        `;
    return (
      <Html lang="pt-br">
        <Head>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1"
          />
          <meta name="author" content="Leonardo Cardoso" />
          <meta
            name="description"
            content="Leonardo Cardoso é um desenvolvedor apaixonado por JavaScript, Node, React, Vue, PHP, Programação funcional, Machine Learning e outras milhares de coisas."
          />
          <title>Leonardo Cardoso</title>
          {renderMeta.styleTags}
          <script async src={script1} />

          <script dangerouslySetInnerHTML={{ __html: script2 }} />
          <link rel="shortcut icon" href="./favicon.png" type="image/x-icon" />

        </Head>
        <Body>{children}</Body>
      </Html>
    );
  },
};
