import { Appbar } from "../components/Appbar";
import { Hero } from "./Hero";


export const HomePage = () =>{
    return <div>
        <Appbar type="homepage"/>
        <Hero />
    </div>
}