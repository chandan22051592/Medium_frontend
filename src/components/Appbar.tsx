import { Link } from "react-router-dom"
import { Avatar } from "./BlogCard"


export const Appbar = ({ type = "" }: { type?: "homepage" | "" }) => {
    return <div className="border-b flex justify-between px-10 py-4">

        {type === "homepage" ? <div className="flex direction-col justify-center font-extrabold text-2xl">
            Medium
        </div> : <Link to={'/blogs'}>
            <div className="flex direction-col justify-center cursor-pointer font-extrabold text-2xl">
                Medium
            </div>
        </Link>}



        {type === "homepage" ? <Link to={'/signin'}> <button className="bg-black text-white px-6 py-2 rounded-full font-medium">
            Get started
        </button> </Link>
            : <div>
                <Link to={'/publish'}>
                    <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600           dark:hover:bg-green-700 dark:focus:ring-green-800">New</button>
                </Link>

                <Avatar size={"big"} name="Chandan" />
            </div>
        }


    </div>
}