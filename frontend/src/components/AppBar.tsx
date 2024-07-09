import { Link } from "react-router-dom"

interface App {
    type?: string;
}

export const AppBar = ({ type }: App) => {

    return (
        <div className="border-b p-3">
            {type === "home" ?
                <div className="flex justify-between items-center">
                    <div>
                        <Link to={type === "home" ? "/" : "/blogs"} className="text-3xl font-bold capitalize">medium</Link>
                    </div>
                    <div className="flex items-center gap-x-4 ">
                        <Link to={"/signin"} className="hidden md:block text-lg font-medium underline cursor-pointer">signin</Link>
                        <Link to={"/signup"} >
                            <button type="button" className="mr-4  text-white bg-neutral-900 hover:bg-neutral-950 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 ">Get Started</button>
                        </Link>
                    </div>
                </div>
                :
                <div className="flex justify-between items-center">
                    <Link to={"/blogs"} className="text-3xl font-bold">medium</Link>
                    <div className="flex gap-2 items-center">
                        <Link to={"/publish"}>
                            <button type="button" className="mr-4  text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 ">New</button>
                        </Link>
                        {/* avatar */}
                        <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                            <svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                        </div>

                    </div>
                </div>
            }
        </div>
    )
}