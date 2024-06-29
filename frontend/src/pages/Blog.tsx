import { AppBar } from "../components/AppBar"
import { Author } from "../components/Author"


const Blog = () => {
    return (
        <>
            <AppBar />
            <div className="flex flex-col md:flex-row p-12 gap-x-6 justify-center  min-h-screen">
                <div className="w-[60vw] space-y-2">
                    <h1 className="text-4xl font-bold">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet dolores iste in.</h1>
                    <p className="text-lg font-semibold text-neutral-400">Post on june 2024.</p>

                    <div>
                        <p className="text-lg font-medium">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae rerum assumenda sapiente nemo, et cumque accusantium, ut magni laudantium expedita, fuga minus incidunt atque sequi natus odit ullam hic facere harum fugit illum culpa possimus repudiandae tempore! Odio nesciunt autem quidem dolorem cum corporis, vitae ullam ex voluptates dolor amet ab recusandae sunt necessitatibus delectus maxime perspiciatis natus culpa veniam voluptatem. Mollitia temporibus modi nemo doloribus cupiditate recusandae repellat laborum rem explicabo unde, sequi illum fuga iusto. Repellendus eum asperiores quisquam, maiores ipsum vero possimus, eaque sit et consectetur deserunt in nam corrupti iste perferendis quis odit eligendi vel aliquam?
                        </p>
                    </div>
                </div>
                <Author />
            </div>
        </>
    )
}

export { Blog }