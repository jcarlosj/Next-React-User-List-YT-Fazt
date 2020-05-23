/** Next */ 
import { useRouter } from 'next/router';
import Head from 'next/head';

/** Components */
import MainLayout from '../../components/layout/Main';

/** Dynamic Component */
const UserProfile = ({ user }) => {

    console .log( 'User', user );

    /** Get Params */
    const 
        router = useRouter(),
        { id } = router .query;

    return (
        <MainLayout>
            <Head>
            <title>NextJS - Profile { user .last_name }</title>
            </Head>
            <div className="row">
                <div className="col-md-6 offset-md-3">

                    <div className="card">
                        <div className="card-header text-center">
                            <img 
                                src={ user .avatar }
                                alt={ `${ user .first_name } ${ user .last_name }` }
                                style={{ borderRadius: '50%' }}
                            />
                        </div>
                        <div className="card-body text-center">
                            <h3>{ user .id }. { user .first_name } { user .last_name }</h3>
                            <p>{ user .email }</p>
                        </div>
                    </div>

                </div>
            </div>
        </MainLayout>
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