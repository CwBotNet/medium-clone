import { useState } from "react";
import { AppBar } from "../components/AppBar"
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export interface Post {
    title: string;
    content: string;
}

export const Publish = () => {
    const [post, setPost] = useState<Post>({
        title: "",
        content: ""
    })
    const navigation = useNavigate()

    const handelPost = async () => {
        const res = await axios.post(`${BACKEND_URL}/api/v1/blog`, post, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
        if (!res) {
            alert("Something went wrong while posting")
        }
        navigation(`/blog/${res.data.id}`)
    }
    return (
        <>
            <AppBar />
            <div className="flex justify-center">
                <div className="max-w-screen-lg w-screen m-24">
                    <label className="block mb-2 text-6xl font-medium text-gray-900 mt-2 ">Title</label>
                    <input type="text" onChange={(e) => {
                        setPost({
                            ...post,
                            title: e.target.value
                        })
                    }} className="block  focus:outline-none p-8 w-full text-3xl text-gray-900  rounded-lg  " placeholder="Title" />
                    <label className="block mb-2 text-3xl font-medium text-gray-900 mt-2 ">Content</label>
                    <textarea rows={14} onChange={(e) => {
                        setPost({
                            ...post,
                            content: e.target.value
                        })
                    }} className="block focus:outline-none p-2.5 w-full text-xl text-gray-900 rounded-lg  " placeholder="Write your thoughts here..."></textarea>
                    <div className="flex justify-end">
                        <button onClick={handelPost} className="bg-black text-white p-3 w-56 mt-2 rounded-md">
                            publish
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}