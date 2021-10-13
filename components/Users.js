import Router from 'next/router'

const Users = (props) => {
    console.log(props);
    return (
        <ul className="list-group col-md-12">
            {
                props.users.map(user => (
                        <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" key={user.id} 
                        onClick={e => Router.push('/users/[id]','/users/'+user.id)} style={{cursor: 'pointer'}}>
                            <div>
                                <h5>{user.first_name} {user.last_name}</h5>
                                <p>{user.email}</p>
                            </div>
                            
                        </li>
                    
                ))
            }
        </ul>
    )
}

export default Users