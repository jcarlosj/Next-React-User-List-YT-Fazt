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
        <div className="container p-4">
            { props .children }
        </div>
        
        {/* <!-- JS, Popper.js, and jQuery --> */}
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossOrigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossOrigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossOrigin="anonymous"></script>
    </div>
);

export default MainLayout;