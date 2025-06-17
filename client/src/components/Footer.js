import {Page} from "../util/config";

export default function Footer(props) {
    return (
        <div className="bg-[#1f2937]">
            <div className="bg-[#1f2937] mt-24 flex justify-around flex-col sm:flex-row">
                <div className="ml-4 sm:ml-12 mt-6">
                    <div className="flex">
                        <img className="" width="24px" src="https://img.icons8.com/material-rounded/48/A259FF/cyber-security.png" alt=""/>
                        <p className="sm:text-xl text-white ml-2 font-['Space_Mono']">Graphical Password Auth</p>
                    </div>
                    <p className="text-[#9ca3af] font-['Work_Sans'] mt-2 sm:mt-4">A Novel Approach For Security</p>
                </div>

                <div className="ml-4 sm:ml-0 text-white mt-6">
                    <p className="font-['Space_Mono'] sm:text-xl">Explore</p>
                    <p onClick={() => props.setPage(Page.ABOUT)} className="text-[#9ca3af] font-['Work_Sans'] mt-2 sm:mt-4 cursor-pointer">About Us</p>
                    <p onClick={() => props.setPage(Page.CONTACT)} className="text-[#9ca3af] font-['Work_Sans'] cursor-pointer">Contact</p>
                </div>
            </div>
            <hr className="rounded-full border-gray-300 border-1 bg-gray-200 h-px mt-8 mx-auto w-3/4"/>
            <p className="mt-2 text-[#9b9b9b] sm:text-md text-sm text-center pb-4">
                <a href="https://github.com/AbhishekNgi/PBL-Cyber" target="_blank" rel="noopener noreferrer" className="hover:text-[#6366f1] transition-colors duration-300">
                    github.com/AbhishekNgi/PBL-Cyber
                </a>
            </p>
        </div>
    )
}
