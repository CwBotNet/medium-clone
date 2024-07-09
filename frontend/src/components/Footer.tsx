import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div className="flex md:justify-center items-center p-7 border-t text-black fixed bottom-0 w-full">
            <div className="flex gap-4 ">
                <Link to={"/"}>About</Link>
                <Link to={"/"}>Help</Link>
                <Link to={"/"}>Terms</Link>
                <Link to={"/"}>Privacy</Link>
            </div>
        </div>
    )
}