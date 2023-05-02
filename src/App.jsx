import axios from "axios"
import { React, useState, useEffect } from "react"
import { List } from "./components/List/List"
import { Profil } from "./components/Profile"
import { Route, Routes } from "react-router-dom"

function App() {
  let [userData, setUserData] = useState([])
  useEffect(() => {
    axios.get("https://reqres.in/api/users")
      .then((json) => setUserData(json.data.data))
  }, [])

  return (
    <>
      <Routes>
        <Route path="/" element={<List userData={userData}/>}></Route>
        <Route path="/user/:userId" element={<Profil userData={userData}/>}></Route>
        {/* <Profil /> */}
      </Routes>
    </>
  )
}
export default App 