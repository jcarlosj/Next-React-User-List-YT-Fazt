/** Next */
import Head from 'next/head';

/** Components */
import MainLayout from '../components/layout/Main';

/** Page */
const About = () => {
    return (
        <MainLayout>
            <Head>
                <title>NextJS - About</title>
            </Head>
            <h1>About!</h1>
        </MainLayout>
    );
}

export default About;