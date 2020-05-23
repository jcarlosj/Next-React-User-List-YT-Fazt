/** Component */
const UserListItem = ({ users }) => {
    return (
        users .map( ( user, i ) => (
            <li key={ i }>{ user .name }</li>
        ))
    );
}

export default UserListItem;