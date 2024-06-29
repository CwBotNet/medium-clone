import { Auth } from "../components/Auth"
import { Quote } from "../components/Quots"

const Signup = () => {
    return (
        <>
            <div className="grid grid-cols-1 xl:grid-cols-2">
                <Auth type="signup" />
                <div className="hidden xl:block">
                    <Quote />
                </div>
            </div>
        </>

    )
}

export { Signup }