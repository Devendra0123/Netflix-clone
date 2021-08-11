import axios from "axios";
import React,{useState} from "react";
import "./signIn.css";

function SignIn(){

    const [input, setInput] = useState({username:"",email:"",password:""});
    function handleChange(event){
        const newValue = event.target.value;
        const inputName = event.target.name;
        setInput(prevValue=>{
            if(inputName==="username"){
                return{
                    username: newValue,
                    email: prevValue.email,
                    password: prevValue.password
                }
            }if (inputName==="email"){
                return{
                    username: prevValue.username,
                    email: newValue,
                    password: prevValue.password
                }
            }if(inputName==="password"){
                return{
                    username: prevValue.username,
                    email: prevValue.email,
                    password: newValue
                }
            }
        });
    }
    function formHandeler(event){
        event.preventDefault();
       const data= axios.post("/server",{
           username: input.username,
           email: input.email,
           password: input.password
       }).then(function(result) {
        console.log(result); // "Stuff worked!"
      }, function(err) {
        console.log(err); // Error: "It broke"
      });
       setInput({username:"",email:"",password:""});
    }
   return(<div className="sign_in">
       <div className="sign_in_container">
           <h2>Sign In</h2>
           <form onSubmit={formHandeler}>
               <input name="username" onChange={handleChange} type="text" name="username" placeholder="Enter Username..." value={input.username}></input> 
               <input name="email" onChange={handleChange} type="email" placeholder="Enter Email..." value={input.email}></input>
               <input name="password" onChange={handleChange} type="password" placeholder="Enter Password..." value={input.password}></input>
               <button type="submit">Sign In</button>
           </form>
       </div>
   </div>)
}

export default SignIn;