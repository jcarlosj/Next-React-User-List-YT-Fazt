/** Next */
import Head from 'next/head';

/** Components */
import MainLayout from '../components/layout/Main';

/** Page */
const Home = ({ data }) => {

    console .log( 'Usuarios', data );

    return (
        <MainLayout>
            <Head>
                <title>NextJS - Home</title>
            </Head>
            <h1>Home</h1>
        </MainLayout>
    );
}

/** Data Fetching */
export async function getServerSideProps() {

    try {
        const 
            response = await fetch( 'https://jsonplaceholder.typicode.com/users' ),
            data = await response .json();
    
        console .log( 'Data', data );

        // Pass data to the page via props
        return { props: { data } }

    } catch ( error ) {
        console .log( 'Ooops!', error );   
    }
    
}

export default Home;