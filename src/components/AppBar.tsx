import { useState } from "react";
import { SearchBar } from "./SearchBar";
import { LeftBar } from "./LeftBar";


export const AppBar = () => {

     const [leftBarVisible, setLeftBarVisible] = useState(false);

    const showLeftbar = () => {
        setLeftBarVisible(true);
    };

    return <div className="flex justify-between pt-3">
        <button className="lg:hidden md:hidden inline-flex items-center pl-3" onClick={showLeftbar}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fill-rule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd" />
            </svg>
        </button>
        <div className="inline-flex items-center">
            <img src={"YouTube-Logo.png"} className="w-25 h-10"></img>
        </div>
        <div>
            <SearchBar />
        </div>
        <div>SignIn</div>
    </div>
} 

function showLeftbar() {
    return <div>
    {    <LeftBar />}
    </div>
}