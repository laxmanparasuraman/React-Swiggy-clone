import { useEffect, useState,useContext } from "react"
import { LOGO_URL } from "../utils/constants"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"
import UserContext from "../utils/UserContext"
import { useSelector } from "react-redux"
const Header=()=>{

    let btnName={
        name:"login",
        bool:true,
    }
    const loginData=useContext(UserContext)
    const onlineStatus=useOnlineStatus()
    const [btnNameReact,setbtnNameReact]=useState(["login"])
    useEffect(()=>{
        console.log("USE EFFECT IN HEADER ")
    },[btnNameReact])

    console.log("header ")
    console.log(loginData.loggedIntUser)
//subscrbing to carts
    const cartItems=useSelector((store)=>store.cart.items)
    return(
        <div className="header flex  justify-between bg-blue-900 shadow-lg  ">
            {/* <h1>header</h1> */}
            <div className="logo-container">
                <img className="logo w-56" src= {LOGO_URL}//"https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?size=2"  alt="Burger Logo"
                />
            </div>
            <div className="nav-item flex  items-center ">
                <ul className="head flex p-4 m-4   "// list px-4 py-2 border border-solid border-black m-4 bg-red-700  
                >
                   {/*  <li className="  list px-4 py-2 border border-solid border-black m-4 bg-red-700">Online Status : {onlineStatus? "online":"offiline"}</li>
 */}                    {/* <li className="list px-4  bg-red-700      list px-4 py-2 border border-solid border-black m-4 bg-red-700">

                    <Link to="/">Home </Link>
                     </li> */}
                    {/* <li className="list px-4 py-2 border border-solid border-black m-4 bg-red-700"  >
                        <Link to="/about">About Us</Link>
                    </li> */}
                   {/*  <li className="list    list px-4 py-2 border border-solid border-black m-4 bg-red-700">
                    <Link to="/contact">Contact Us</Link>
                    </li>  */}
                    {/* <li className="list   list px-4 py-2 border border-solid border-black m-4 bg-red-700"> 
                     <Link to="/Cart">Cart-{cartItems.length} items</Link>  
                        </li> */}

                   {/*  <li className="    list px-4 py-2 border border-solid border-black m-4 bg-red-700"    ><Link to="/Grocery">Grocery  </Link></li>
                    */} {/* <li className="login list     list px-4 py-2 border border-solid border-black m-4 bg-red-700"  onClick={()=>{
                        btnName="logout"
                       btnNameReact==="login"? setbtnNameReact("logout"):setbtnNameReact("login")
                        console.log({btnNameReact}) 
                    }}> {btnNameReact}</li> */}
               {/*  <li className="list px-4 py-2 border border-solid border-black m-4 bg-red-700">  {loginData.loggedInUser}{console.log(' hi from header in return jsx ',loginData)}</li>
                 */}</ul>

            </div>

        </div>
    )
}
export default  Header
