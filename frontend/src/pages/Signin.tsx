import { Auth } from "../components/Auth"
import { Quote } from "../components/Quots"

const Signin = () => {
    return (
        <div className="grid grid-cols-1 xl:grid-cols-2">
            <Auth type="signin" />
            <div className="hidden xl:block">
                <Quote />
            </div>
        </div>
    )
}

export { Signin }