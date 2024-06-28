
const Signin = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="flex flex-col items-center justify-center w-[50vw]">
                <div className="space-y-1 flex flex-col items-center">
                    <h1 className="text-5xl font-bold">Signin to your account</h1>
                    <p className="text-2xl font-medium text-neutral-400">Don't have an account? <a href="/signup" className="underline text-black">signup</a></p>
                </div>
                <form className="flex justify-center p-12 w-[30vw]">
                    <div className="flex flex-col items-start w-full space-y-2 capitalize">
                        <label htmlFor="" className="text-lg font-semibold">Email</label>
                        <input type="email" placeholder="Email" className="border p-2 rounded-md w-full" />
                        <label htmlFor="" className="text-lg font-semibold">password</label>
                        <input type="password" placeholder="password" className="border p-2 rounded-md w-full" />
                        <button type="submit" className="bg-black text-white w-full p-3 rounded-md"> signin </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export { Signin }