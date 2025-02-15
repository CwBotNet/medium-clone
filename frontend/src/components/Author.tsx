import Avatar from "./Avatar"

interface Author {
    author: string,

}

export const Author = ({ author }: Author) => {
    return (
        <div className="space-y-3">
            <h3 className="text-lg font-bold">Author</h3>
            <div className=" flex space-x-2 items-center">
                <Avatar name={author} />
                <div>
                    <h2 className="text-xl font-bold">{author}</h2>
                    <p className="font-medium text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
        </div>

    )
}