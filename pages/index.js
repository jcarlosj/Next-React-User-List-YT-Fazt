/** Next */
import Head from 'next/head';

/** Components */
import MainLayout from '../components/layout/Main';

/** Page */
const Home = () => {
    return (
        <MainLayout>
            <Head>
                <title>NextJS - Home</title>
            </Head>
            <h1>Home</h1>
        </MainLayout>
    );
}

export default Home;