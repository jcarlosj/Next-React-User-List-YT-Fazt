/** Next */
import Head from 'next/head';

/** Components */
import Navigation from '../Navigation';

/** Component */
const MainLayout = ( props ) => (
    <div>
        <Head>
            <title>NextJS</title>
            <meta property="og:title" content="NextJS" key="title" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.0/flatly/bootstrap.min.css" />
        </Head>
        <Navigation />
        <div>
            { props .children }
        </div>
    </div>
);

export default MainLayout;