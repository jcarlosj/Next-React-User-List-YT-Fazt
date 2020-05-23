import { useRouter } from 'next/router';

/** Dynamic Component */
const UserProfile = ({ user }) => {

    console .log( 'User', user );

    /** Get Params */
    const 
        router = useRouter(),
        { id } = router .query;

    return (
        <h1>User Profile { id }</h1>
    );
}

/** Data Fetching */
export async function getServerSideProps( ctx ) {

    console .log( 'Context > ID:', ctx .query .id  );        // ID parameter obtained in context 

    const { query: { id } } = ctx; 

    try {
        const 
            response = await fetch( `https://reqres.in/api/users/${ id }` ),
            JSONData = await response .json();
    
        console .log( 'User Data', JSONData );

        // Pass data to the page via props
        return { props: { user: JSONData .data } }

    } catch ( error ) {
        console .log( 'Ooops!', error );   
    }
    
    return { props: {  } }
}

export default UserProfile;