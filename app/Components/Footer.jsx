import Link from "next/link";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function Footer() {
    return (
        <div className="w-full py-3 border-t-[0.5px] border-gray-900">
            <div className="w-11/12 mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-3">
                <h1 className=" text-gray-500">&copy; Great Alexander, All Rights Reserved 2024.</h1>
                <div className="flex text-gray-500 gap-5">
                    <Link href={'https://github.com/devalexdgreat'} passHref legacyBehavior>
                        <a target="_blank" className='hover:text-green-500 duration-500'>
                            <FaGithub />
                        </a>
                    </Link>
                    <Link href={'https://www.linkedin.com/in/great-alexander-adgdev'} className='' passHref legacyBehavior>
                        <a target="_blank" className='hover:text-green-500 duration-500'>
                            <FaLinkedin />
                        </a>
                    </Link>
                    <Link href={'https://x.com/adgdev_'} className='' passHref legacyBehavior>
                        <a target="_blank" className='hover:text-green-500 duration-500'>
                            <FaSquareXTwitter />
                        </a>
                    </Link>
                    <Link href={'https://www.instagram.com/adg.dev/'} className='' passHref legacyBehavior>
                        <a target="_blank" className='hover:text-green-500 duration-500'>
                            <FaInstagram />
                        </a>
                    </Link>
                    <Link href={'https://web.facebook.com/adgdevfb/'} className='' passHref legacyBehavior>
                        <a target="_blank" className='hover:text-green-500 duration-500'>
                            <FaFacebook />
                        </a>
                    </Link>
                    <Link href={'https://www.tiktok.com/@adg.dev'} className='' passHref legacyBehavior>
                        <a target="_blank" className='hover:text-green-500 duration-500'>
                            <FaTiktok />
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    );
}