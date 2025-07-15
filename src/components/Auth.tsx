// import type{ SignupInput } from "@chandan2312/medium-common";
// import { useState, type ChangeEvent } from "react";
// import {Link,useNavigate} from "react-router-dom";
// import axios from "axios";


// const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
// export const Auth = ({type}:{type:"signup" | "signin"}) =>{
//     const navigate = useNavigate();
//     const [postInputs,setPostInputs] = useState<SignupInput>({
//         name:"",
//         username:"",
//         password:""
//     });

//     async function sendRequest (){
//         try {
//             const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`,postInputs);
//             const jwt  =  response.data.jwt;
//             localStorage.setItem("token",jwt)
//             navigate("/blogs")

//         } catch (error) {
//             alert("Error While singning up ")
//             // alert the user here that the request failed
            
//         }
//     }
//     return <div className="h-screen flex justify-center flex-col">
//         <div className="flex justify-center">
//             <div>
//                 <div className="px-10">
//                     <div className="text-3xl font-extrabold">
//                         Create an account
//                     </div>
//                     <div className="text-slate-500">
//                         {type === "signin" ? "Don't have an account?" : "Already have an account?"}
//                         <Link className="pl-2 underline " to={type === "signin" ? "/signup" : "/signin"}>
//                             {type === "signin" ? "Sign up" : "Sign in"}
//                         </Link>
//                     </div>

//                 </div>
//                 <div>
//                     {type === "signup" ?<LabelledInput label="Name" placeholder="Chandan Gupta..." onChange={(e) => {
//                         setPostInputs(c => ({
//                             ...c,
//                             name: e.target.value

//                         }))

//                     }} />: null}

//                     <LabelledInput label="Username" placeholder="ag541387@gmail.com" onChange={(e) => {
//                         setPostInputs(c => ({
//                             ...c,
//                             username: e.target.value

//                         }))

//                     }} />

//                     <LabelledInput label="Password" type={"password"} placeholder="12345" onChange={(e) => {
//                         setPostInputs(c => ({
//                             ...c,
//                             password: e.target.value

//                         }))

//                     }} />

//                     <button onClick={sendRequest}type="button" className="mt-8 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{type==="signup" ? "Sign up" : "Sign in"}</button>


//                 </div>
//             </div>
//         </div>
//     </div>
// }

// interface LabelledInputType {
//     label : string;
//     placeholder : string;
//     onChange : (e:ChangeEvent<HTMLInputElement>) => void;
//     type? :string;
// }   


// function LabelledInput({label,placeholder,onChange,type}:LabelledInputType){
//     return <div>
//         <label className="block mb-2 text-sm text-black text-bold font-bold pt-4">{label}</label>
//         <input onChange={onChange} type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder={placeholder} required />
//     </div>
// }


import type { SignupInput } from "@chandan2312/medium-common";
import { useState, type ChangeEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const navigate = useNavigate();
  const [postInputs, setPostInputs] = useState<SignupInput>({
    name: "",
    username: "",
    password: "",
  });

  async function sendRequest() {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`,
        postInputs
      );
      const jwt = response.data.jwt;
      localStorage.setItem("token", jwt);
      navigate("/blogs");
    } catch (error) {
      alert("Error While signing up");
    }
  }

  return (
    <div className="h-screen flex justify-center flex-col">
      <div className="flex justify-center">
        <div>
          <div className="px-10">
            <div className="text-3xl font-extrabold">Create an account</div>
            <div className="text-slate-500">
              {type === "signin"
                ? "Don't have an account?"
                : "Already have an account?"}
              <Link
                className="pl-2 underline"
                to={type === "signin" ? "/signup" : "/signin"}
              >
                {type === "signin" ? "Sign up" : "Sign in"}
              </Link>
            </div>
          </div>
          <div>
            {type === "signup" ? (
              <LabelledInput
                label="Name"
                placeholder="Chandan Gupta..."
                onChange={(e) => {
                  setPostInputs((c) => ({
                    ...c,
                    name: e.target.value,
                  }));
                }}
              />
            ) : null}

            <LabelledInput
              label="Username"
              placeholder="ag541387@gmail.com"
              onChange={(e) => {
                setPostInputs((c) => ({
                  ...c,
                  username: e.target.value,
                }));
              }}
            />

            <LabelledInput
              label="Password"
              type="password"
              placeholder="12345"
              onChange={(e) => {
                setPostInputs((c) => ({
                  ...c,
                  password: e.target.value,
                }));
              }}
            />

            <button
              onClick={sendRequest}
              type="button"
              className="mt-8 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              {type === "signup" ? "Sign up" : "Sign in"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

interface LabelledInputType {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

// ✅ Updated LabelledInput with password visibility toggle
function LabelledInput({
  label,
  placeholder,
  onChange,
  type = "text",
}: LabelledInputType) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";

  return (
    <div className="pt-4">
      <label className="block mb-2 text-sm font-bold text-black">{label}</label>
      <div className="relative">
        <input
          onChange={onChange}
          type={isPassword && !showPassword ? "password" : "text"}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pr-10"
          placeholder={placeholder}
          required
        />
        {isPassword && (
          <span
            className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-500"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        )}
      </div>
    </div>
  );
}
