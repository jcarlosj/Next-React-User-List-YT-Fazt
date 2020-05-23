/** Components */
import UserListItem from './UserListItem';

/** Component */
const UserList = ({ users }) => {

    //console .log( 'UserList > Usuarios', users );

    return (
        <>
            <h3 className="text-center bg-light text-black-50 p-3">Listado de Usuarios</h3>
            <ul className="list-group mt-5 mb-5">
                <UserListItem
                    users={ users }
                />
            </ul>
        </>
    );
}

export default UserList;