import { Href } from "../Href/Href"
import { Item } from "../Item"

export function List({userData}) {
    return (
        <ul>
            {userData && userData.map((user, index) =>(
            <Item>
                <p>{user.id}</p>
                <Href url={`/user/${user.id}`}>{user.first_name}</Href>
            </Item>
            ))}
        </ul>
    )
}