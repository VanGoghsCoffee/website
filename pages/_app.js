import { DefaultSeo } from 'next-seo';

import './styles.scss';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <DefaultSeo
                openGraph={{
                    type: 'website',
                    locale: 'en_IE',
                    url: 'https://www.davidrochholz.de/',
                    site_name: 'David Rochholz'
                }}
                description={'David Rochholz website and blog. Get David Rochholz CV and latest blog posts.'}
            />
            <Component {...pageProps} />
        </>
    )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp
