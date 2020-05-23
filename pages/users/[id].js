import { useRouter } from 'next/router';

/** Dynamic Component */
const UserProfile = () => {

    /** Get Params */
    const 
        router = useRouter(),
        { id } = router .query;

    return (
        <h1>User Profile { id }</h1>
    );
}

export default UserProfile;