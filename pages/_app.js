import Head from 'next/head';
import { useRouter } from 'next/router';

import HeaderComponent from '../components/header';
import FooterComponent from '../components/footer';

function MyApp({ Component, pageProps }) {
  const { attributes } = pageProps;
  const router = useRouter();

  if (['/_error', '/admin'].includes(router.pathname)) {
    return <Component {...pageProps} />;
  }

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>{attributes.page_title && `${attributes.page_title} | `}Personal HR</title>
        {attributes.page_description && (
          <meta name="description" content={attributes?.page_description} />
        )}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <div className="page-wrapper">
        <div className="header-top"></div>

        <HeaderComponent />
        <Component {...pageProps} />
        <FooterComponent />
      </div>

      <link href="/css/bootstrap.css" rel="stylesheet" />
      <link href="/css/style.css" rel="stylesheet" />
      <link href="/css/responsive.css" rel="stylesheet" />
      <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
    </>
  );
}

export default MyApp;
