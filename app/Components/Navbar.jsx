'use client'
import Link from "next/link";
import { useState } from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { IoCloseOutline } from "react-icons/io5";

export default function Navbar() {

    const [menu, setMenu] = useState(false);

    const toggleMenu = () => {
        setMenu(prevOpt => !prevOpt);
    }

    return (
        <div className="w-full fixed top-0 z-50 py-2 bg-black/10 backdrop-blur-sm">
            <div className="w-11/12 mx-auto flex justify-between items-center uppercase font-medium">
                <Link href={'/'} className="font-medium hidden md:block">Great Alexander (ADG).</Link>
                <Link href={'/'} className="font-light text-2xl md:hidden block">ADG</Link>
                <div className="hidden lg:flex gap-12">
                    <Link href={'/'} className="text-green-500 hover:text-gray-500 duration-500">Adg</Link>
                    <Link href={'#about'} className="text-gray-500 hover:text-green-500 duration-500">About</Link>
                    <Link href={'#pjx'} className="text-gray-500 hover:text-green-500 duration-500">Projects</Link>
                    <Link href={'#'} className="text-gray-500 hover:text-green-500 duration-500">Services</Link>
                    <Link href={'#cta'} className="text-gray-500 hover:text-green-500 duration-500">Contact</Link>
                </div>
                <div className="lg:hidden block">
                    <HiOutlineBars3BottomRight onClick={toggleMenu} className="h-8 w-8 hover:text-green-500 hover:cursor-pointer duration-500" />
                </div>
            </div>
            {menu && (
                <div className="fixed top-0 bg-green-800 newMenu w-full mx-auto flex flex-col uppercase font-medium lg:hidden">
                    <div className="h-full w-11/12 mx-auto relative">
                        <div className="h-full flex flex-col justify-center items-start uppercase">
                            <div className="flex flex-col gap-5 text-4xl">
                                <h1 className="uppercase text-base">Links</h1>
                                <Link href={'/'} onClick={toggleMenu} className="hover:text-green-500 duration-500">Home</Link>
                                <Link href={'#about'} onClick={toggleMenu} className="hover:text-green-500 duration-500">About</Link>
                                <Link href={'#pjx'} onClick={toggleMenu} className="hover:text-green-500 duration-500">Projects</Link>
                                <Link href={'#'} onClick={toggleMenu} className="hover:text-green-500 duration-500">Services</Link>
                                <Link href={'#cta'} onClick={toggleMenu} className="hover:text-green-500 duration-500">Contact</Link>
                            </div>
                        </div>
                        <div className="w-full absolute top-0 right-0 mx-auto flex justify-between py-2 left-0">
                            <Link href={'/'} className="font-light text-2xl md:hidden block">ADG</Link>
                            <div className="lg:hidden block">
                                <IoCloseOutline onClick={toggleMenu} className="h-8 w-8 hover:text-green-500 hover:cursor-pointer duration-500" />
                            </div>
                        </div>
                        <div className="w-full absolute bottom-0 right-0 mx-auto flex gap-5 flex-col py-2 left-0">
                            <h1 className="uppercase text-base">Socials</h1>
                            <div className="flex gap-5 pb-16 justify-between">
                                <Link href={'https://github.com/devalexdgreat'} onClick={toggleMenu} className='hover:text-green-500 duration-500' passHref legacyBehavior>
                                    <a target="_blank">
                                        <FaGithub />
                                    </a>
                                </Link>
                                <Link href={'https://www.linkedin.com/in/great-alexander-adgdev'} onClick={toggleMenu} className='hover:text-green-500 duration-500' passHref legacyBehavior>
                                    <a target="_blank">
                                        <FaLinkedin />
                                    </a>
                                </Link>
                                <Link href={'https://x.com/adgdev_'} onClick={toggleMenu} className='hover:text-green-500 duration-500' passHref legacyBehavior>
                                    <a target="_blank">
                                        <FaSquareXTwitter />
                                    </a>
                                </Link>
                                <Link href={'https://www.instagram.com/adg.dev/'} onClick={toggleMenu} className='hover:text-green-500 duration-500' passHref legacyBehavior>
                                    <a target="_blank">
                                        <FaInstagram />
                                    </a>
                                </Link>
                                <Link href={'https://web.facebook.com/adgdevfb/'} onClick={toggleMenu} className='hover:text-green-500 duration-500' passHref legacyBehavior>
                                    <a target="_blank">
                                        <FaFacebook />
                                    </a>
                                </Link>
                                <Link href={'https://www.tiktok.com/@adg.dev'} onClick={toggleMenu} className='hover:text-green-500 duration-500' passHref legacyBehavior>
                                    <a target="_blank">
                                        <FaTiktok />
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}