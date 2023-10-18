import { Outlet } from "react-router-dom"
import SideBar from "./sideBar"

const PageTemplate = () => {
    return (
        <>
            <SideBar />
            <div className="main-content" >
                <Outlet />
            </div>
        </>
    )
}

export default PageTemplate
