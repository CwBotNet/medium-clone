
const Signup = () => {
    return (
        <div className="">
            <div className="flex">

                <div className="flex flex-col items-center justify-center w-[50vw]">
                    <div className="space-y-1 flex flex-col items-center">
                        <h1 className="text-5xl font-bold">Create an account</h1>
                        <p className="text-2xl font-medium text-neutral-400 ">Already have an account? <a href="/signin" className="underline text-black">signin</a></p>
                    </div>
                    <form className="flex justify-center p-12 w-[30vw]">
                        <div className="flex flex-col items-start w-full space-y-2 capitalize">
                            <label htmlFor="" className="text-lg font-semibold">username</label>
                            <input type="text" placeholder="Name" className="border p-2 rounded-md w-full" />
                            <label htmlFor="" className="text-lg font-semibold">Email</label>
                            <input type="email" placeholder="Email" className="border p-2 rounded-md w-full" />
                            <label htmlFor="" className="text-lg font-semibold">password</label>
                            <input type="password" placeholder="password" className="border p-2 rounded-md w-full" />
                            <button type="submit" className="bg-black text-white w-full p-3 rounded-md"> signup </button>
                        </div>
                    </form>
                </div>
                <div className="capitalize p-24 gap-y-2 w-[50vw] h-screen flex flex-col justify-center items-center bg-neutral-200">
                    <div className="flex flex-col space-y-2 justify-start">
                        <h1 className="text-4xl font-black">"the customer service i received was exceptional. the support team went above and beyond to address my concerns."</h1>
                        <span>
                            <h1 className="text-lg font-bold">jules winnfield</h1>
                            <p className="text-neutral-600 font-bold">CEO, Acme Inc</p>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Signup }