import { AppBar } from "../components/AppBar"

export const Publish = () => {
    return (
        <>
            <AppBar />
            <div className="flex justify-center">
                <div className="max-w-screen-lg w-screen m-24">
                    <label className="block mb-2 text-6xl font-medium text-gray-900 mt-2 ">Title</label>
                    <input type="text" className="block  focus:outline-none p-8 w-full text-3xl text-gray-900  rounded-lg  " placeholder="Title"  />
                    <label className="block mb-2 text-3xl font-medium text-gray-900 mt-2 ">Content</label>
                    <textarea rows={14} className="block focus:outline-none p-2.5 w-full text-xl text-gray-900 rounded-lg  " placeholder="Write your thoughts here..."></textarea>
                    <div className="flex justify-end">
                        <button className="bg-black text-white p-3 w-56 mt-2 rounded-md">
                            publish
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}