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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <link href="css/bootstrap.css" rel="stylesheet" />
        <link href="css/responsive.css" rel="stylesheet" />
        <link href="css/style.css" rel="stylesheet" />
        <link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="images/favicon.ico" type="image/x-icon" />
      </Head>

      <div className="page-wrapper">
        <div className="header-top"></div>

        <HeaderComponent />
        <Component {...pageProps} />
        <FooterComponent />
      </div>

      <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
    </>
  );
}

export default MyApp;
