import { Link, useNavigate } from "react-router-dom"
import { Label } from "./ui/Lable"
import { useState } from "react";
import { SignUpType } from "@rajsahani/medium-common";
import axios from "axios";
import { BACKEND_URL } from "../config";

export const Auth = ({ type }: {
    type: "signin" | "signup"
}) => {

    const navigate = useNavigate();

    const [userInputs, setUserInputs] = useState<SignUpType>({
        name: "",
        email: "",
        password: ""
    })


    const sendRequest = async () => {
        try {
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`, userInputs);
            const jwt = await response.data;
            localStorage.setItem("token", jwt);
            navigate("/blogs");
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <>
            <div className="h-screen flex justify-center items-center">
                <div className="w-[50vh] ">
                    <div className="px-10">
                        <div className="text-3xl font-extrabold capitalize text-center">
                            {type === "signup" ? "Create an account" : "Sign in to your account"}
                        </div>
                        <div className="text-slate-500 text-center">
                            {type === "signin" ? "Don't have an account?" : "Already have an account?"}
                            <Link className="pl-2 underline" to={type === "signin" ? "/signup" : "/signin"}>
                                {type === "signin" ? "Sign up" : "Sign in"}
                            </Link>
                        </div>
                    </div>
                    <div className="mt-4 flex flex-col space-y-2">
                        {type === "signup" ? <Label label="Name" placeholder="Enter your name" onChange={(e) => {
                            setUserInputs({
                                ...userInputs,
                                name: e.target.value
                            })
                        }} /> : null}

                        <Label label="Email" placeholder="Enter your email" onChange={(e) => {
                            setUserInputs({
                                ...userInputs,
                                email: e.target.value
                            })
                        }} type="email" />
                        <Label label="Password" placeholder="Enter your password" onChange={(e) => {
                            setUserInputs({
                                ...userInputs,
                                password: e.target.value
                            })
                        }} type="password" />
                    </div>
                    <div>
                        <button onClick={sendRequest} className="bg-black text-white rounded-md w-full p-3 mt-2">
                            {type === "signin" ? "Sign in" : "Sign up"}
                        </button>
                    </div>
                </div>

            </div>
        </>
    )
}