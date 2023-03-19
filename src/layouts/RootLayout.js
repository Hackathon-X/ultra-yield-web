import {NavBar} from "../components/NavBar";
import {Outlet} from "react-router-dom";


export function RootLayout() {

    return (
        <div>
            <NavBar/>
            <Outlet/>
        </div>
    )
}