import { Link } from "react-router-dom"


type Props = {

    id: number,
    title: string,
    content: string,
    autherName?: string
    date?: string
}

const BlogCard = ({ id, autherName, content, title, date }: Props) => {
    return (
        <Link to={`/blog/${id}`}>
            <div className="flex justify-center cursor-pointer">
                <div className="border-b flex justify-center p-4 w-screen max-w-screen-md">
                    <div>
                        <div className="text-sm text-slate-600">{autherName} {"."} {date}</div>
                        <h1 className="text-2xl font-bold">{title}</h1>
                        <p className="font-medium">{content.slice(0, 200) + "..."}</p>
                        <div>
                            {`${Math.ceil(content.length) / 100} minut(s) read`}
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default BlogCard