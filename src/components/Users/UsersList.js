

const UsersList = props => {
  return (
    <div>
      {props.users.map(user => 
      <li>
        {user.name} ({user.age} years old)
      </li>
      )}
    </div>
  )
}

export default UsersList