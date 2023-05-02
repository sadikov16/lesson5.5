import { Link } from "react-router-dom"
import { Item } from "../Item"

export function List({userData}) {
    return (
        <ul>
            {userData && userData.map((user, index) =>(
            <Item>
                <p>{user.id}</p>
               <Link to={`/user/${user.id}`}>{user.first_name}</Link> 
            </Item>
            ))}
        </ul>
    )
}