/** Component */
const UserListItem = ({ users }) => {

    console .log( 'UserListItem > Usuarios', users );

    return (
        users .map( user => (
            <li 
                key={ user .id }
                class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
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