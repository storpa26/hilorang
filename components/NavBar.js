import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import Link from "next/link";
import Image from "next/image";
import {
    MenuIcon,
    XIcon,
    HomeIcon,
    CogIcon,
    PencilIcon,
    UserIcon,
} from "@heroicons/react/outline";
import { useRouter } from "next/router";

const NavBar = () => {
    const solutions = [
        {
            name: "Home",
            href: "/",
            icon: HomeIcon,
        },
        {
            name: "Team",
            href: "team",
            icon: CogIcon,
        },
        {
            name: "Schedule",
            href: "schedule",
            icon: PencilIcon,
        },
        {
            name: "Profile",
            href: "profile",
            icon: UserIcon,
        },
    ];

    const route = useRouter();

    const navButtonHandler = (e) => {
        let buttonPressed = e.target.outerText.toLowerCase();
        if (buttonPressed === "home") {
            route.push("/");
        } else {
            route.push(`/${buttonPressed}`);
        }
    };
    return (
        <div className="sticky top-0 z-10 ">
            <Popover className="relative bg-white">
                <div className="max-w-9xl mx-auto">
                    <div className="flex justify-between items-center py-3 md:justify-start md:space-x-10">
                        <div className="flex justify-start lg:w-0 lg:flex-1">
                            <Link href="/">
                                <div className="scale-175 w-28 h-10 relative md:w-56 md:h-14 sm:w-">
                                    <Image
                                        src="/asset/Logo.svg"
                                        alt="logo"
                                        className="p-0.5 cursor-pointer"
                                        fill
                                        sizes="true"
                                    />
                                </div>
                            </Link>
                        </div>
                        <div className="-mr-2 -my-2 md:hidden">
                            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                <MenuIcon
                                    className="h-6 w-6"
                                    aria-hidden="true"
                                />
                            </Popover.Button>
                        </div>
                        <div className="hidden md:flex items-center justify-center md:flex-1 lg:w-0">
                            <Link href="/">
                                <button
                                    className={`ml-8 inline-flex items-center justify-center mx-4 py-2 transition duration-150 font-medium border-b-4 border-transparent hover:border-hilorangOrange ${
                                        route.pathname === "/"
                                            ? "border-hilorangOrange"
                                            : "bg-white"
                                    }`}
                                    onClick={navButtonHandler}
                                >
                                    Home
                                </button>
                            </Link>
                            <button
                                className={`ml-8 inline-flex items-center justify-center mx-4 py-2 transition duration-150 font-medium border-b-4 border-transparent hover:border-hilorangOrange ${
                                    route.pathname === "/team"
                                        ? "border-hilorangOrange"
                                        : "bg-white"
                                }`}
                                onClick={navButtonHandler}
                            >
                                Shop
                            </button>
                            <button
                                className={`ml-8 inline-flex items-center justify-center mx-4 py-2 transition duration-150 font-medium border-b-4 border-transparent hover:border-hilorangOrange ${
                                    route.pathname === "/schedule"
                                        ? "border-hilorangOrange"
                                        : "bg-white"
                                }`}
                                onClick={navButtonHandler}
                            >
                                Bulk Order
                            </button>
                            <button
                                className={`ml-8 inline-flex items-center justify-center mx-4 py-2 transition duration-150 font-medium border-b-4 border-transparent hover:border-hilorangOrange ${
                                    route.pathname === "/schedule"
                                        ? "border-hilorangOrange"
                                        : "bg-white"
                                }`}
                                onClick={navButtonHandler}
                            >
                                Contact
                            </button>
                        </div>
                    </div>
                </div>
                <Transition
                    as={Fragment}
                    enter="duration-200 ease-out"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="duration-100 ease-in"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                    style={{ backgroundColor: "white" }}
                >
                    <Popover.Panel
                        focus
                        className="absolute z-10 top-0 inset-x-0 transition transform origin-top-right md:hidden"
                    >
                        <div className="rounded-lg shadow-lg ring-1 ring-white ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                            <div className="pt-5 pb-6 px-5">
                                <div className="flex items-center justify-between">
                                    <Link href="/">
                                        <div className="md:px-7 px-6 scale-175 h-8 w-auto sm:h-10">
                                            {/* <Image
                                                src="/vercel.svg"
                                                alt=""
                                                fill
                                            /> */}
                                        </div>
                                    </Link>
                                    <div className="-mr-2">
                                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500">
                                            <span className="sr-only">
                                                Close menu
                                            </span>
                                            <XIcon
                                                className="h-6 w-6"
                                                aria-hidden="true"
                                            />
                                        </Popover.Button>
                                    </div>
                                </div>
                                <div className="mt-10">
                                    <nav className="grid gap-y-8">
                                        {solutions.map((item) => (
                                            <a
                                                className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                                                onClick={navButtonHandler}
                                                key={item.name}
                                            >
                                                <item.icon
                                                    className="flex-shrink-0 h-6 w-6 text-indigo-600"
                                                    aria-hidden="true"
                                                />
                                                <span className="ml-3 text-base font-medium text-gray-900">
                                                    {item.name}
                                                </span>
                                            </a>
                                        ))}
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </Popover.Panel>
                </Transition>
            </Popover>
        </div>
    );
};

export default NavBar;
