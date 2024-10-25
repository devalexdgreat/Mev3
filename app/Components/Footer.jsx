import Link from "next/link";
import { FaFacebook, FaGithub, FaInstagram, FaTiktok } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function Footer() {
    return (
        <div className="w-full py-3 border-t-[0.5px] border-gray-900">
            <div className="w-11/12 mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-3">
                <h1 className=" text-gray-500">&copy; Great Alexander, All Rights Reserved 2024.</h1>
                <div className="flex text-gray-500 gap-5">
                    <Link href={'#'} className='hover:text-green-500 duration-500'>
                        <FaGithub />
                    </Link>
                    <Link href={'#'} className='hover:text-green-500 duration-500'>
                        <FaSquareXTwitter />
                    </Link>
                    <Link href={'#'} className='hover:text-green-500 duration-500'>
                        <FaInstagram />
                    </Link>
                    <Link href={'#'} className='hover:text-green-500 duration-500'>
                        <FaFacebook />
                    </Link>
                    <Link href={'#'} className='hover:text-green-500 duration-500'>
                        <FaTiktok />
                    </Link>
                </div>
            </div>
        </div>
    );
}