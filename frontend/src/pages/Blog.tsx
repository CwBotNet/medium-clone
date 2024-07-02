import { useParams } from "react-router-dom"
import { AppBar } from "../components/AppBar"
import { Author } from "../components/Author"
import { useBlog } from "../hooks";
import Loader from "../components/ui/Loader";


const Blog = () => {
    const { id } = useParams();

    const { loading, blog } = useBlog({
        id: id as string
    })


    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <Loader />
            </div>
        )
    }

    return (
        <>
            <AppBar />
            <div className="flex flex-col md:flex-row p-12 gap-x-6 justify-center  min-h-screen">
                <div className="w-[60vw] space-y-2">
                    <h1 className="text-4xl font-bold">{blog?.title}</h1>
                    <p className="text-lg font-semibold text-neutral-400">Post on june 2024</p>

                    <div>
                        <p className="text-lg font-medium">
                            {blog?.content}
                        </p>
                    </div>
                </div>
                <Author author={blog?.author.name || "anonymous"} />
            </div>
        </>
    )
}

export { Blog }