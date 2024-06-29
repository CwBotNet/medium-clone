import { AppBar } from "../components/AppBar"
import BlogCard from "../components/BlogCard"


const content = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic commodi voluptatibus quae excepturi nostrum est earum vero, fugiat recusandae perferendis dolor nesciunt velit aut veniam similique nisi impedit mollitia cumque iste itaque enim. Maiores amet accusantium, non quae possimus dicta cum quas veritatis praesentium repellat? Pariatur ex, corrupti id ea minus, sapiente dolores quae aperiam at ipsa voluptate maiores deserunt, veniam cupiditate accusantium tenetur amet vero sed! Repellat ipsum eveniet provident corporis aliquam. Magni asperiores quod error illo incidunt placeat rem ducimus. Totam doloremque similique tenetur perspiciatis incidunt molestiae iste ipsam, quae possimus doloribus. Nisi et magnam, numquam obcaecati, placeat similique, ut unde aliquam nemo doloribus deleniti consequuntur voluptatem animi! Alias amet totam maiores necessitatibus eum officiis beatae veritatis sequi sint sed impedit repellat nemo fugit illum optio illo nisi velit quas assumenda, rem esse aliquid? Officia minima earum iusto consectetur, dolorum beatae adipisci optio voluptatem fuga eaque natus eveniet."

export const Blogs = () => {
    return (
        <div>
            <AppBar />
            <BlogCard id={1} content={content} title="test" autherName="raj sahani" date="june 2024" />
            <BlogCard id={1} content={content} title="test" autherName="raj sahani" date="june 2024" />
            <BlogCard id={1} content={content} title="test" autherName="raj sahani" date="june 2024" />
            <BlogCard id={1} content={content} title="test" autherName="raj sahani" date="june 2024" />
        </div>
    )
}

