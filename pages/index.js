/** Next */
import Head from 'next/head';

/** Components */
import MainLayout from '../components/layout/Main';
import UserList from '../components/ui/UserList';

/** Page */
const Home = ({ users }) => {

    console .log( 'Home > Usuarios', users );

    return (
        <MainLayout>
            <Head>
                <title>NextJS - Home</title>
            </Head>
            <h1>Home</h1>
            <UserList users={ users } />
        </MainLayout>
    );
}

/** Data Fetching */
export async function getServerSideProps() {

    try {
        const 
            response = await fetch( 'https://reqres.in/api/users' ),
            JSONData = await response .json();
    
        console .log( 'Data', JSONData );

        // Pass data to the page via props
        return { props: { users: JSONData .data } }

    } catch ( error ) {
        console .log( 'Ooops!', error );   
    }
    
}

export default Home;