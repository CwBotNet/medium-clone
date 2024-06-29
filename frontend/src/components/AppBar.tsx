import { Link } from "react-router-dom"

export const AppBar = () => {
    return (
        <div className="border-b p-3">
            <div className="flex justify-between">
                <Link to={"/blogs"} className="text-3xl font-bold">medium</Link>
                <div className="flex gap-2">
                    <Link to={"/publish"}>
                        <button type="button" className="mr-4 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 ">New</button>
                    </Link>
                    <div className="w-10 h-10 bg-slate-400 rounded-full">
                    </div>
                </div>
            </div>
        </div>
    )
}