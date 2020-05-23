/** Next */
import Router from "next/router";

/** Component */
const UserListItem = ({ users }) => {

    console .log( 'UserListItem > Usuarios', users );

    return (
        users .map( user => (
            <li 
                key={ user .id }
                className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                style={{ cursor: 'pointer' }}
                onClick={ event => Router .push( '/users/[id]', `/users/${ user .id }` ) }
            >
                <div className="data-user">
                    <h4>{ user .first_name } { user .last_name }</h4>
                    <p>Email: { user .email }</p>
                </div>
                <img 
                    style={{ borderRadius: '50%' }}
                    src={ user .avatar } 
                    alt={ `${ user .first_name } ${ user .last_name }` }
                />
            </li>
        ))
    );
}

export default UserListItem;