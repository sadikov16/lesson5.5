import { Href } from "../Href/Href";
import { useParams } from "react-router-dom";

export function Profil({ userData }) {
    let { userId } = useParams()

    let foundUser = userData.find(user => user.id = userId)
    return (
        <>
            {
                foundUser && <section>
                    <Href url={"/"}>Back to home</Href>
                    <div style={{ width: "800px", margin: "50px auto" }}>
                        <img style={{ borderRadius: "50%" }} src={foundUser.avatar} alt="" width={50} height={50} />
                        <h1>Name: {foundUser.first_name}</h1>
                        <h2>Last name: {foundUser.last_name}</h2>
                        <Href url={`mailto: ${foundUser.email}`}>{foundUser.email}</Href>
                    </div>
                </section>
            }
        </>
    )
}