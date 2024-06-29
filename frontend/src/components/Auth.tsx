import { Link } from "react-router-dom"
import { Label } from "./ui/Lable"

export const Auth = ({ type }: {
    type: "signin" | "signup"
}) => {
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
                        {type === "signup" ? <Label label="Name" placeholder="Enter your name" onChange={() => null} /> : null}

                        <Label label="Email" placeholder="Enter your email" onChange={() => null} type="email" />
                        <Label label="Password" placeholder="Enter your password" onChange={() => null} type="password" />
                    </div>
                    <div>
                        <button className="bg-black text-white rounded-md w-full p-3 mt-2">
                            {type === "signin" ? "Sign in" : "Sign up"}
                        </button>
                    </div>
                </div>

            </div>
        </>
    )
}