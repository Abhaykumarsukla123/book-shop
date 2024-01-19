import { signOut } from "firebase/auth"
import { useEffect } from "react"
import { getAuth,onAuthStateChanged } from "firebase/auth"
import { app } from "./Firebase"
import { useState } from "react"
const auth=getAuth(app)
export default function Signout() {
const [user, setuser] = useState(null)
    useEffect(() => {
    onAuthStateChanged(auth,(user)=>
    {
        if(user)
        {
            setuser(user)
        }else
        {
            console.log("logout ");
            setuser(null)
        }
    })
    }, [])
    if(user===null)
    {

        return(

            <>
            </>
        )
    }
  return (
    <div>
      <button onClick={()=>signOut(auth)}>logout</button>
    </div>
  )
}
