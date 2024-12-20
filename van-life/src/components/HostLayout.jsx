import { Outlet } from "react-router-dom"
import HostHeader from "./HostHeader"

export default function Layout() {
    return (
        <>
            <HostHeader />
            <Outlet />
        </>
    )
}