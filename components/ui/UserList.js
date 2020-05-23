/** Components */
import UserListItem from './UserListItem';

/** Component */
const UserList = ({ users }) => {
    return (
        <>
            <h2>Usuarios</h2>
            <ul>
                <UserListItem 
                    users={ users }
                />
            </ul>
        </>
    );
}

export default UserListItem;