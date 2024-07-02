import { AppBar } from "../components/AppBar"
import BlogCard from "../components/BlogCard"
import Loader from "../components/ui/Loader"
import { useBlogs } from "../hooks"


export const Blogs = () => {
    const { loading, blogs } = useBlogs()

    if (loading) {
        return (

            <div className="flex justify-center items-center h-screen">
                <Loader />
            </div>

        )
    }

    return (
        <div>
            <AppBar />
            {
                blogs?.map((blog) =>
                    <BlogCard content={blog.content} id={blog.id} title={blog.title} autherName={blog.author.name} date="July 2024" key={blog.id} />
                )
            }
        </div>
    )
}

