import { Link } from "react-router-dom";
import { AppBar } from "../components/AppBar";

export default function Home() {

    return (
        <div>
            <AppBar type="home" />
            <div className=" p-4 flex justify-center items-center min-h-screen">
                <div className="flex-col flex gap-6">
                    <h1 className="font-bold text-8xl">
                        Human
                        stories & ideas
                    </h1>
                    <p className="text-xl font-semibold">A place to read, write, and deepen your understanding</p>
                    <div>
                        <Link to={"/signin"}>
                            <button className="p-3 px-12 bg-green-700 hover:bg-green-800 md:hover:bg-neutral-950 text-lg font-medium md:bg-neutral-900 rounded-full text-white">Start reading</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}