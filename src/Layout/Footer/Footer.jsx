import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


function Footer() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <footer className="w-full p-8">
            <div className="flex flex-row flex-wrap items-center justify-center gap-5 container text-center md:justify-between">
                <div className="text-gray-400">
                    <h1 className="text-gray-400 font-semibold text-3xl">
                        IMBA<span className="font-normal">STUDIO</span>
                    </h1>
                    <p>CREATIVE DESIGNERS TEAM</p>
                </div>
                <ul className="flex flex-col items-center text-white">
                    <li>
                        <h1 className="font-normal transition-colors text-base text-gray-400">
                            <Link
                                as="a"
                                to={""}
                            >
                                Contact Us:
                            </Link>
                        </h1>

                    </li>
                    <li>
                        <h1 className="font-normal transition-colors text-sm text-gray-400">
                            Email:
                            <Link
                                as="a"
                                to={"mailto: workimba@gmail.com"}
                            >workimba@gmail.com
                            </Link>
                        </h1>

                    </li>
                    <li>
                        <h1 className="font-normal transition-colors text-sm text-gray-400">
                            Phone:
                            <Link
                                as="a"
                                to={"tel: +998 91 944 94 91"}
                            >+998 91 944 94 91
                            </Link>
                        </h1>

                    </li>
                    <li>
                        <h1 className="font-normal transition-colors text-sm text-gray-400">
                            Whatsapp:
                            <Link
                                as="a"
                                to={"tel: +999 99 566 21 12"}
                            >+998 99 566 21 12
                            </Link>
                        </h1>

                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer