'use client'
import Image from "next/image";
import heroImg from '@/public/hero.jpg'
import Link from "next/link";
import pjxOne from '@/public/pjx2.jpg';
import pjxTwo from '@/public/pjx1.jpg';
import pjxThr from '@/public/project3.jpg';
import pjxFor from '@/public/pjx3.jpg';
import pjxFiv from '@/public/pjx5.jpg';
import pjxSix from '@/public/project6.jpg';
import userOne from '@/public/user1.jpeg';
import userTwo from '@/public/user2.jpeg';
import userThr from '@/public/user3.jpeg';
import { motion } from 'framer-motion';
import { GoArrowUpRight, GoInfo } from "react-icons/go";
import { BsChevronRight } from "react-icons/bs";
import { FaBootstrap, FaCss3Alt, FaFigma, FaGitAlt, FaGithub, FaHtml5, FaNodeJs, FaPhp, FaReact } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiFramer, SiMongodb, SiPostman } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { LuDot } from "react-icons/lu";
import { PiCertificateLight, PiReadCvLogoLight } from "react-icons/pi";
import { AiOutlineApi, AiOutlineCloudServer, AiOutlineLayout } from "react-icons/ai";
import { FiCode, FiImage } from "react-icons/fi";
import { useState } from "react";

import apexIcon from '@/public/apex.webp'

const data = [
  {id: 1, title: 'Why work with me ?', content: 'In today’s fast-paced world, flexibility is essential. I offer high-quality design and web development expertise on a flexible basis, so you get the skills you need without the commitment of full-time hiring. Whether it’s a short-term project or ongoing support, pay only for what you need, when you need it. This approach means you’re not tied down to unnecessary costs.'},
  {id: 2, title: 'Are there any refunds if i dont like the services?', content: 'Unfortunately we do not provide any refunds. This is due to the time and effort invested into producing high-quality design and development work. We can either continue improving the development until you are satisfied or you can pause/cancel your subscription.'},
  {id: 3, title: 'What if I already have a design? Can you build from it?', content: 'Certainly! If you have a design ready, I can develop a fully functional website based on it. I work closely with designers and clients to ensure the final product aligns with the original vision and functions seamlessly.'},
  {id: 4, title: 'How much does it cost to build a website?', content: 'The cost of a website depends on the project’s scope, complexity, and features. My starting rate is $300, which covers essential elements. For more advanced functionalities or larger projects, the price will adjust accordingly. I’d be happy to discuss your specific needs and provide a customized estimate!'},
  {id: 5, title: 'How long does it take to complete a website?', content: "The timeline for completing a website depends on the project’s size and requirements. A basic website may take around 1–2 weeks, while more complex sites can take several weeks. After discussing your needs, I'll provide an estimated timeframe to match your goals."},
]

function AccordionItem({title, content, isExpanded, onToggle}) {
  return (
    <div className={`bg-green-900 border-2 border-green-800 flex justify-center flex-col rounded-md overflow-hidden transition-all duration-500 py-4 group ${isExpanded ? "max-h-80" : "max-h-16" }`}>
      <div className="flex justify-between items-start pt-4 px-5 cursor-pointer" onClick={onToggle}>
        <div className={`${isExpanded ? 'text-green-500' : 'text-white'} uppercase font-medium`}>
          {title}
        </div>
        <BsChevronRight className={`group-hover:translate-x-1 group-hover:text-green-500 transition-all duration-300 h-6 ${isExpanded ? "rotate-90 text-green-500" : "" }`} />
      </div>

      <div className={`text-gray-100 px-5 pb-4 overflow-hidden translate-all duration-500 ${isExpanded ? "opacity-100 pt-5" : "opacity-0" }`}>
        <div>{content}</div>
      </div>
    </div>
  );
}

export default function Home() {

  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <main className="overflow-hidden">
      <section className="w-full flex justify-center items-center pt-32 pb-20" id="adg">
        <div className="w-11/12 mx-auto flex flex-col md:flex-row items-center gap-6">
          <div className="w-full md:w-7/12">
              <motion.h1 
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg md:text-2xl lg:text-4xl uppercase">
                I’m Great Alexander, a Fullstack Developer specializing in creating robust, scalable, and visually appealing web solutions.
              </motion.h1>
              <motion.div 
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="w-full flex gap-3 mt-5 md:mt-10 uppercase">
                <Link href={'#about'} className="bg-green-500 text-white py-1.5 px-6 rounded-md border-2 border-green-800 hover:bg-green-700 duration-500">About</Link>
                <Link href={'#cta'} className="bg-green-500 text-white py-1.5 px-6 rounded-md border-2 border-green-800 hover:bg-green-700 duration-500">Let&rsquo;s Work</Link>
              </motion.div>
          </div>
          <div className="w-full md:w-5/12 flex justify-center">
            <motion.div 
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="h-72 md:h-full w-full md:w-8/12 overflow-hidden rounded-md">
              <Image src='/hero.jpg' height={1000} width={1000} className="scale-150 h-full w-full object-cover object-center rounded-md" alt="" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="w-full py-20" id="pjx">
        <div className="w-11/12 mx-auto">
          <motion.div 
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="w-full flex gap-2 items-center overflow-hidden">
            <div className="border py-3 border-green-500"></div>
            <motion.h1 
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="mt-0.5 font-medium uppercase">Featured Projects</motion.h1>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
            <motion.div 
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.71, ease: [0.16, 1, 0.3, 1] }}
            className="w-full group">
              <div className="overflow-hidden rounded-md relative">
                <Link href={'#'} className="absolute top-0 left-0 z-10 h-full w-full"></Link>
                <Image src={pjxFiv} alt="" className="h-full w-full object-cover rounded-md scale-125 group-hover:scale-150 group-hover:cursor-pointer duration-500" />
              </div>
              <div className="mt-2 w-full flex items-center justify-between text-gray-500">
                <div className="w-8/12 truncate">
                  <h1 className="uppercase text-white">Bivora Ltd.</h1>
                  <span className="text-gray-500 truncate w-full">Web Development, Api Integration</span>
                </div>
                <div className="w-4/12 flex flex-col justify-end items-end">
                  <span className="text-gray-500">2024</span>
                  <Link href={'#'} className="">
                    <GoArrowUpRight className="h-6 w-6 hover:text-green-500 duration-500" />
                  </Link>
                </div>
              </div>
            </motion.div>
            <motion.div 
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.71, ease: [0.16, 1, 0.3, 1] }}
            className="w-full group">
              <div className="overflow-hidden rounded-md relative">
                <Link href={'#'} className="absolute top-0 left-0 z-10 h-full w-full"></Link>
                <Image src={pjxFor} alt="" className="h-full w-full object-cover rounded-md scale-125 group-hover:scale-150 group-hover:cursor-pointer duration-500" />
              </div>
              <div className="mt-2 w-full flex items-center justify-between text-gray-500">
                <div className="w-8/12 truncate">
                  <h1 className="uppercase text-white">StreetGottalent</h1>
                  <span className="text-gray-500 truncate w-full">Development, Api Integration</span>
                </div>
                <div className="w-4/12 flex flex-col justify-end items-end">
                  <span className="text-gray-500">2024</span>
                  <Link href={'https://www.streetgottalent.com/'} className="">
                    <GoArrowUpRight className="h-6 w-6 hover:text-green-500 duration-500" />
                  </Link>
                </div>
              </div>
            </motion.div>
            <motion.div 
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.71, ease: [0.16, 1, 0.3, 1] }}
            className="w-full group">
              <div className="overflow-hidden rounded-md relative">
                <Link href={'#'} className="absolute top-0 left-0 z-10 h-full w-full"></Link>
                <Image src={pjxOne} alt="" className="h-full w-full object-cover rounded-md scale-125 group-hover:scale-150 group-hover:cursor-pointer duration-500" />
              </div>
              <div className="mt-2 w-full flex items-center justify-between text-gray-500">
                <div className="w-8/12 truncate">
                  <h1 className="uppercase text-white">JandJay Hairs.</h1>
                  <span className="text-gray-500 truncate w-full">Design, Web Development</span>
                </div>
                <div className="w-4/12 flex flex-col justify-end items-end">
                  <span className="text-gray-500">2022</span>
                  <Link href={'https://jandjaynaturalhairs.vercel.app/'} className="">
                    <GoArrowUpRight className="h-6 w-6 hover:text-green-500 duration-500" />
                  </Link>
                </div>
              </div>
            </motion.div>
            <motion.div 
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.71, ease: [0.16, 1, 0.3, 1] }}
            className="w-full group">
              <div className="overflow-hidden rounded-md relative">
                <Link href={'#'} className="absolute top-0 left-0 z-10 h-full w-full"></Link>
                <Image src={pjxSix} alt="" className="h-full w-full object-cover rounded-md scale-125 group-hover:scale-150 group-hover:cursor-pointer duration-500" />
              </div>
              <div className="mt-2 w-full flex items-center justify-between text-gray-500">
                <div className="w-8/12 truncate">
                  <h1 className="uppercase text-white">Inventig ltd.</h1>
                  <span className="text-gray-500 truncate w-full">Web Design, Web Development</span>
                </div>
                <div className="w-4/12 flex flex-col justify-end items-end">
                  <span className="text-gray-500">2023</span>
                  <Link href={'https://jandjaynaturalhairs.vercel.app/'} className="">
                    <GoArrowUpRight className="h-6 w-6 hover:text-green-500 duration-500" />
                  </Link>
                </div>
              </div>
            </motion.div>
            <motion.div 
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.71, ease: [0.16, 1, 0.3, 1] }}
            className="w-full group">
              <div className="overflow-hidden rounded-md relative">
                <Link href={'#'} className="absolute top-0 left-0 z-10 h-full w-full"></Link>
                <Image src={pjxTwo} alt="" className="h-full w-full object-cover rounded-md scale-125 group-hover:scale-150 group-hover:cursor-pointer duration-500" />
              </div>
              <div className="mt-2 w-full flex items-center justify-between text-gray-500">
                <div className="w-8/12 truncate">
                  <h1 className="uppercase text-white">AK Global Pte.</h1>
                  <span className="text-gray-500 truncate w-full">Development, Api Integration</span>
                </div>
                <div className="w-4/12 flex flex-col justify-end items-end">
                  <span className="text-gray-500">2023</span>
                  <Link href={'https://www.akglobalshipservices.com/'} className="">
                    <GoArrowUpRight className="h-6 w-6 hover:text-green-500 duration-500" />
                  </Link>
                </div>
              </div>
            </motion.div>
            <motion.div 
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.71, ease: [0.16, 1, 0.3, 1] }}
            className="w-full group">
              <div className="overflow-hidden rounded-md relative">
                <Link href={'#'} className="absolute top-0 left-0 z-10 h-full w-full"></Link>
                <Image src={pjxThr} alt="" className="h-full w-full object-cover rounded-md scale-125 group-hover:scale-150 group-hover:cursor-pointer duration-500" />
              </div>
              <div className="mt-2 w-full flex items-center justify-between text-gray-500">
                <div className="w-8/12 truncate">
                  <h1 className="uppercase text-white">Medisync</h1>
                  <span className="text-gray-500 truncate w-full">Frontend Development</span>
                </div>
                <div className="w-4/12 flex flex-col justify-end items-end">
                  <span className="text-gray-500">2021</span>
                  <Link href={'https://medicsynclub.vercel.app/'} className="">
                    <GoArrowUpRight className="h-6 w-6 hover:text-green-500 duration-500" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
          <motion.div 
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center items-center mt-6">
            <Link href={'#'} className="bg-green-500 py-1.5 px-6 rounded-md uppercase border-2 border-green-800">See more</Link>
          </motion.div>
        </div>
      </section>

      <section className="w-full py-20" id="about">
        <div className="w-11/12 mx-auto">
          <motion.div 
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="w-full flex gap-2 items-center overflow-hidden">
            <div className="border py-3 border-green-500"></div>
            <motion.h1 
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="mt-0.5 font-medium uppercase">About the Mind Behind the Code</motion.h1><GoInfo className="text-green-500 hover:cursor-pointer" />
          </motion.div>
          <div className="mt-5 w-full flex flex-col md:flex-row gap-12 md:gap-3">
            <motion.div 
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="w-full md:w-6/12">
                <p>I’m a Fullstack Developer with 4 years of experience creating high-performance, user-centered web applications. Specializing in Next.js, React.js, Node.js, and MongoDB, I blend technical expertise with a passion for sleek, functional design.</p>
                <br/>
                <p className="mb-5">Using tools like Framer Motion, GSAP, and Tailwind CSS, I deliver smooth animations and responsive, visually engaging interfaces that elevate brands and engage users.</p>
                <div className="w-full flex gap-2 items-center mb-3">
                  <div className="border py-3 border-green-500"></div>
                  <h1 className="mt-0.5 font-medium uppercase">My Certifications and CV</h1>
                </div>
                <div className="mb-5 flex gap-3">
                  <Link href={'/res.pdf'} className="" passHref legacyBehavior>
                    <a target="_blank" className="flex gap-2 bg-green-500 py-1.5 border-2 border-green-800 rounded-md px-6 hover:bg-green-700 duration-500">
                      <PiReadCvLogoLight className="h-6 w-6" /><span className="uppercase">CV</span>
                    </a>
                  </Link>
                  <Link href={'/cert.pdf'} className="" passHref legacyBehavior>
                    <a target="_blank" className="flex gap-2 bg-green-500 py-1.5 border-2 border-green-800 rounded-md px-6 hover:bg-green-700 duration-500">
                      <PiCertificateLight className="h-6 w-6" /><span className="uppercase">Certificate</span>
                    </a>
                  </Link>
                </div>
                <div className="w-full flex gap-2 items-center mb-3">
                  <div className="border py-3 border-green-500"></div>
                  <h1 className="mt-0.5 font-medium uppercase">My Stack / tools</h1>
                </div>
                <div className="flex flex-wrap gap-3 mb-6">
                  <FaHtml5 className="h-10 w-10 text-gray-200" />
                  <FaCss3Alt className="h-10 w-10 text-gray-200" />
                  <FaBootstrap className="h-10 w-10 text-gray-200" />
                  <RiTailwindCssFill className="h-10 w-10 text-gray-200" />
                  <SiFramer className="h-10 w-10 text-gray-200" />
                  <FaFigma className="h-10 w-10 text-gray-200" />
                  <RiNextjsFill className="h-10 w-10 text-gray-200" />
                  <FaReact className="h-10 w-10 text-gray-200" />
                  <FaNodeJs className="h-10 w-10 text-gray-200" />
                  <SiMongodb className="h-10 w-10 text-gray-200" />
                  <SiExpress className="h-10 w-10 text-gray-200" />
                  <FaPhp className="h-10 w-10 text-gray-200" />
                  <TbApi className="h-10 w-10 text-gray-200" />
                  <FaGitAlt className="h-10 w-10 text-gray-200" />
                  <FaGithub className="h-10 w-10 text-gray-200" />
                  <SiPostman className="h-10 w-10 text-gray-200" />
                </div>
                <Link href={'#cta'} className="rounded-md py-1.5 px-6 border-green-800 border-2 bg-green-500 duration-500 hover:bg-green-600 uppercase">Let&rsquo;s Work</Link>
            </motion.div>
            <motion.div 
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="w-full md:w-6/12">
              <div className="w-full flex gap-2 items-center mb-5">
                <div className="border py-3 border-green-500"></div>
                <h1 className="mt-0.5 font-medium uppercase">Work Experience</h1>
              </div>
              {/* treeline */}
              <div>
                <div class="group relative flex gap-x-5">
                  <div class="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
                    <div class="relative z-10 size-6 flex justify-center items-center">
                      <svg class="shrink-0 size-6 text-gray-800 dark:text-neutral-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 12h.01"/><path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><path d="M22 13a18.15 18.15 0 0 1-20 0"/><rect width="20" height="14" x="2" y="6" rx="2"/></svg>
                    </div>
                  </div>
                  <div class="grow pb-8 group-last:pb-0">
                    <h3 class="mb-1 text-sm text-gray-500">
                      10/2022 - Present
                    </h3>

                    <p class="font-medium text-base text-gray-800 dark:text-neutral-200">
                      Freelance Fullstack Web Designer & Web Developer
                    </p>

                    <p class="mt-1 text-sm text-gray-500">
                      Worked with a diverse range of clients, delivering tailored design solutions, developed and maintained strong client relationships through effective communication and project management.
                    </p>
                  </div>
                </div>
                <div class="group relative flex gap-x-5">
                  <div class="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
                    <div class="relative z-10 size-6 flex justify-center items-center">
                      <Image src={apexIcon} className="" alt="" />
                    </div>
                  </div>
                  <div class="grow pb-8 group-last:pb-0">
                    <h3 class="mb-1 text-sm text-gray-500">
                      02/2022 - 10/2022
                    </h3>

                    <p class="font-medium text-base text-gray-800 dark:text-neutral-200">
                      Fullstack Software Developer at Apexloaded Ltd.
                    </p>

                    <p class="mt-1 text-sm text-gray-500">
                      Apexloaded Global Limited is a technology company solving problems by developing custom software based solutions to meet individual and business needs.
                    </p>
                  </div>
                </div>
                <div class="group relative flex gap-x-5">
                  <div class="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
                    <div class="relative z-10 size-6 flex justify-center items-center">
                      <Image src={apexIcon} className="" alt="" />
                    </div>
                  </div>
                  <div class="grow pb-8 group-last:pb-0">
                    <h3 class="mb-1 text-sm text-gray-500">
                      09/2021 - 02/2022
                    </h3>

                    <p class="font-medium text-base text-gray-800 dark:text-neutral-200">
                      Intern Frontend Developer at Apexloaded
                    </p>

                    <p class="mt-1 text-sm text-gray-500">
                      I was awarded the Best Junior Frontend Developer in Apexloaded🏆.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="w-full py-20" id="services">
        <div className="w-11/12 mx-auto flex flex-col">
          <motion.div 
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="w-full flex gap-2 items-center overflow-hidden">
            <div className="border py-3 border-green-500"></div>
            <motion.h1 
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="mt-0.5 font-medium uppercase">Services</motion.h1>
          </motion.div>
          <div className="w-full">
            <div className="w-full flex flex-col text-3xl md:text-5xl pt-2">
              <motion.div 
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="border-b border-green-500 py-4 flex items-center gap-2 hover:text-green-500 duration-500 hover:cursor-pointer">
                <AiOutlineLayout />UI/UX Design
              </motion.div>
              <motion.div 
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="border-b border-green-500 py-4 flex items-center gap-2 hover:text-green-500 duration-500 hover:cursor-pointer">
                <FiImage />Graphics Design
              </motion.div>
              <motion.div 
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="border-b border-green-500 py-4 flex items-center gap-2 hover:text-green-500 duration-500 hover:cursor-pointer">
                <FiCode />Web Development
              </motion.div>
              <motion.div 
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="border-b border-green-500 py-4 flex items-center gap-2 hover:text-green-500 duration-500 hover:cursor-pointer">
                <AiOutlineCloudServer />Backend Development
              </motion.div>
              <motion.div 
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="border-b border-green-500 py-4 flex items-center gap-2 hover:text-green-500 duration-500 hover:cursor-pointer">
                <AiOutlineApi />Api Integration
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-20">
        <div className="w-11/12 mx-auto">
          <motion.div 
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="w-full flex gap-2 items-center overflow-hidden">
            <div className="border py-3 border-green-500"></div>
            <motion.h1 
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="mt-0.5 font-medium uppercase">Words of appreciation</motion.h1>
          </motion.div>
          <div className="w-full mt-5 columns-1 md:columns-1 lg:columns-3 gap-40 md:gap-5">
            <motion.div
            initial={{ y: 100, opacity: 0, rotate: 358 }}
            whileInView={{ y: 0, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ delay: 0, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="bg-green-500/30 p-2 rounded-md rotate-[358deg] shadow-green-500/10 shadow-lg">
              <div className="border border-green-500/20 px-3 py-5 rounded-md">
                <div>
                  <span className="text-sm">Alexander is an incredibly talented developer with a keen eye. Working with him has been perfect because he is creative, collaborative and constantly exceeding my expectations, making him a valuable asset to any project. Highly recommended!</span>
                </div>
                <div className="w-full flex items-center gap-2 mt-3">
                  <div className="h-10 w-10">
                    <Image src={userOne} className="h-full w-full object-cover rounded-full" alt="" />
                  </div>
                  <div>
                    <div><span>Arinze Onyebuchi</span></div>
                    <div className="text-gray-400 text-sm flex items-center"><span>Product Designer</span><LuDot /><span>DeSci</span></div>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
            initial={{ y: 100, opacity: 0, rotate: 2 }}
            whileInView={{ y: 0, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ delay: 0, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="bg-green-500/30 p-2 rounded-md rotate-[2deg] shadow-green-500/10 shadow-lg mt-6 md:mt-0">
              <div className="border border-green-500/20 px-3 py-5 rounded-md">
                <div>
                  <span className="text-sm">Partnering with Alexander for the design of our Garnerly product and promotional video was an absolute pleasure. Alex&rsquo;s design sense is extraordinary, and he exceeded all expectations. From the initial sitemap through to the final designs, every step of the process was handled with precision and care. The communication was seamless, and deadlines were consistently met.</span>
                </div>
                <div className="w-full flex items-center gap-2 mt-3">
                  <div className="h-10 w-10">
                    <Image src={userTwo} className="h-full w-full object-cover rounded-full" alt="" />
                  </div>
                  <div>
                    <div><span>Benjamin Osemwengie</span></div>
                    <div className="text-gray-400 text-sm flex items-center"><span>Product Designer</span><LuDot /><span>Latcheckout</span></div>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
            initial={{ y: 100, opacity: 0, rotate: 358 }}
            whileInView={{ y: 0, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ delay: 0, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="bg-green-500/30 p-2 rounded-md rotate-[358deg] shadow-green-500/10 shadow-lg mt-6 md:mt-0">
              <div className="border border-green-500/20 px-3 py-5 rounded-md">
                <div>
                  <span className="text-sm">Working with Alexander has been a game-changer. His ability to turn complex user needs into intuitive, beautifully crafted designs is outstanding. He consistently delivered on time, collaborated seamlessly, and brought a level of creativity that elevated every project. I highly recommend Ossai for any team!</span>
                </div>
                <div className="w-full flex items-center gap-2 mt-3">
                  <div className="h-10 w-10">
                    <Image src={userThr} className="h-full w-full object-cover rounded-full" alt="" />
                  </div>
                  <div>
                    <div><span>Obose Iyoke</span></div>
                    <div className="text-gray-400 text-sm flex items-center"><span>Product Manager</span><LuDot /><span>ZST</span></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className='w-full py-20'>
        <div className="w-11/12 flex flex-col md:flex-row mx-auto">
            <motion.div 
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="w-full md:w-6/12">
              <motion.div 
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="w-full flex gap-2 items-center text-center md:text-left">
                <div className="border py-3 px-0 md:px-0 md:py-12 border-green-500"></div>
                <h1 className="uppercase font-medium md:text-8xl">FAQs</h1>
              </motion.div>
            </motion.div>
            <motion.div 
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="pt-5 md:pt-3 w-full md:w-6/12 flex flex-col gap-3">
              {data.map((item)=> (
                <AccordionItem key={item.id} {...item} isExpanded={expandedId === item.id} onToggle={() => toggleExpand(item.id)}/>
              ))}
            </motion.div>
        </div>
      </section>

      <section className="w-full py-20" id="cta">
        <div className="w-11/12 mx-auto">
          <motion.div 
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="w-full flex gap-2 items-center">
            <div className="border py-3 border-green-500"></div>
            <h1 className="mt-0.5 font-medium uppercase">Get in touch</h1>
          </motion.div>
          <motion.div 
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="mt-5 w-full">
            <div className="w-full md:w-6/12 flex flex-col">
              <h1 className="text-3xl uppercase">Need help with a project ?</h1>
              <span className="text-gray-500">Feel free to reach out if you&rsquo;d like to collaborate, need help with a project, or just want to connect. I&rsquo;m open to new opportunities and ideas.</span>
              <div className="w-full mt-5">
                <Link href={'mailto:alex_dgeat001@protonmail.com'} className="bg-green-500 rounded-md py-1.5 px-6 uppercase border-2 border-green-800 duration-500 hover:bg-green-800 hover:border-green-700 hover:text-green-500">Let&rsquo;s Work</Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
