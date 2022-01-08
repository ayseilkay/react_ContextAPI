import React from 'react'
import UserContext from '../context/UserContext'
import { useContext,useState } from 'react'

function Profile() {
    
    const {user,setUser} = useContext(UserContext)
    const [loading,setLoading] = useState(false)
    const handleLogin = () =>{
        setLoading(true)
       setTimeout(()=>{
        setUser({id:1,username:"İlka",bio: "lorem ipsum skfjsfsdsdfjsd"})
        setLoading(false)
       },1500)
       
    }
    const handleLogout = () =>{
        setUser(null);
    }
   
    return (
        <div>
            {!user &&  <button onClick={handleLogin}>{loading ? "loading...." :'Login' }</button>}
           
            <code>{JSON.stringify(user)}</code>
            <br/>
            {user && <button onClick={handleLogout}>Logout</button>}
        </div>
        
    )
}

export default Profile
