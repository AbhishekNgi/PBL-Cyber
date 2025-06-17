import {faUnlock} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import AttackBlock from "./Items/AttackBlock";

export default function Home() {

    function handleKnowMore() {
        const element = document.getElementById('home--2')
        if (element) element.scrollIntoView({behavior: "smooth"})
    }

    return (
        <div>
            <div className="flex-col md:flex-row flex justify-around mt-8 sm:mt-16 font-['Work_Sans']">

                <div className="sm:hidden flex justify-center">
                    <img alt="" className="rounded-2xl w-[90%] shadow-xl" src="https://i.pinimg.com/736x/67/a1/a1/67a1a1b9b21505a42648010e3669076e.jpg"/>
                </div>

                {/*INFO*/}
                <div className="text-white ml-8 mt-8">
                    <p className="text-3xl sm:text-6xl font-bold">Discover </p>
                    <p className="text-3xl sm:text-6xl font-bold">Graphical Password</p>
                    <p className="text-3xl sm:text-6xl font-bold">Authentication</p>
                    <p className="text-[#9ca3af] text-xl sm:text-2xl mt-6">A Novel Approach For Security </p>
                    <p className="text-[#9ca3af] text-xl sm:text-2xl">And User Experience Of </p>
                    <p className="text-[#9ca3af] text-xl sm:text-2xl">Graphical Password Authentication.</p>
                    <button onClick={handleKnowMore} className="btn-primary sm:w-1/3 rounded-lg px-6 py-3 mt-6 sm:text-xl font-semibold">
                        <FontAwesomeIcon className="text-white mr-3" icon={faUnlock} />
                        Know More
                    </button>
                </div>

                {/*Project Steps*/}
                <div className="hidden sm:block w-1/3 bg-[#1e293b] rounded-2xl p-8 shadow-xl border border-[#475569]">
                    <h2 className="text-2xl font-bold text-white mb-6">How It Works</h2>
                    <div className="space-y-6">
                        <div className="flex items-start">
                            <div className="bg-[#6366f1] rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">1</div>
                            <div>
                                <h3 className="text-white font-semibold text-lg">Create Account</h3>
                                <p className="text-[#cbd5e1] mt-1">Sign up with your email and choose a unique username</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="bg-[#6366f1] rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">2</div>
                            <div>
                                <h3 className="text-white font-semibold text-lg">Select Images</h3>
                                <p className="text-[#cbd5e1] mt-1">Choose a keyword and select 4 images as your password</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="bg-[#6366f1] rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">3</div>
                            <div>
                                <h3 className="text-white font-semibold text-lg">Secure Login</h3>
                                <p className="text-[#cbd5e1] mt-1">Log in by selecting your chosen images in sequence</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="bg-[#6366f1] rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">4</div>
                            <div>
                                <h3 className="text-white font-semibold text-lg">Enhanced Security</h3>
                                <p className="text-[#cbd5e1] mt-1">Protection against keyloggers and phishing attacks</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="home--2" className="sm:mt-48 font-['Work_Sans']">
                <div className="ml-6 sm:ml-28 pt-24">
                    <p className="text-white text-3xl sm:text-5xl font-bold">Resistance To Attacks</p>
                    <p className="text-white text-xl sm:text-2xl mt-3">Our System Provides Security Against Popular Attacks.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 mt-8">
                        <AttackBlock
                            icon="https://img.icons8.com/ios-filled/100/A259FF/re-enter-pincode.png"
                            title="Bruteforce"
                            desc="After reaching max tries, the user will be notified via message through email. And the further authentication through the generic URL/website is disabled for that user account, instead, they have to use the link that will be sent by the company in the notification email. This also lets the legitimate user know about the adversary."
                        />
                        <AttackBlock
                            icon="https://img.icons8.com/ios-filled/100/A259FF/show-password.png"
                            title="Shoulder Surfing"
                            desc="Shoulder surfing is a type of social engineering technique used to obtain information such as personal identification numbers (PINs), passwords and other confidential data by looking over the victim's shoulder. The system we adopt is similar to the Phone pattern system."
                        />
                        <AttackBlock
                            icon="https://img.icons8.com/ios-filled/100/A259FF/spyware-free.png"
                            title="Spyware"
                            desc="Graphical password systems resist spyware more easily than regular passwords. Key-loggers secretly capture keystrokes and transfer, but if the spyware wants to track the mouse movements, it can be tracked, but the adversary wouldn't know which part of the mouse event is actually the graphical password."
                        />
                        <AttackBlock
                            icon="https://img.icons8.com/ios-filled/100/A259FF/enter-pin.png"
                            title="Phishing"
                            desc="Since the adversary is made to believe that the password is a set of images, it's not possible to make a fake page, since the adversary thinks he doesn't know the images."
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}