import Link from "next/link";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";

export default function Navbar() {
    return (
        <div className="w-full fixed top-0 z-50 py-2 bg-black/10 backdrop-blur-sm">
            <div className="w-11/12 mx-auto flex justify-between items-center uppercase font-medium">
                <h1 className="font-medium hidden md:block">Great Alexander (ADG).</h1>
                <h1 className="font-light text-2xl md:hidden block">ADG</h1>
                <div className="hidden lg:flex gap-12">
                    <Link href={'#'} className="text-green-500 hover:text-gray-500 duration-500">Adg</Link>
                    <Link href={'#'} className="text-gray-500 hover:text-green-500 duration-500">About</Link>
                    <Link href={'#'} className="text-gray-500 hover:text-green-500 duration-500">Projects</Link>
                    <Link href={'#'} className="text-gray-500 hover:text-green-500 duration-500">Services</Link>
                    <Link href={'#'} className="text-gray-500 hover:text-green-500 duration-500">Contact</Link>
                </div>
                <div className="lg:hidden block">
                    <HiOutlineBars3BottomRight className="h-8 w-8 hover:text-gray-500 hover:cursor-pointer duration-500" />
                </div>
            </div>
        </div>
    );
}