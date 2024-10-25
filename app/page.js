'use client'
import Image from "next/image";
import heroImg from '@/public/img.jpg'
import Link from "next/link";
import pjxOne from '@/public/project1.jpg';
import pjxTwo from '@/public/project6.jpg';
import pjxThr from '@/public/project3.jpg';
import { GoArrowUpRight, GoPlus } from "react-icons/go";
import { BsChevronRight } from "react-icons/bs";
import { FaCss3Alt, FaGitAlt, FaGithub, FaHtml5, FaNodeJs, FaPhp, FaReact } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb, SiPostman } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { LuDot } from "react-icons/lu";
import { useState } from "react";

const data = [
  {id: 1, title: 'Why work with Me ?', content: 'We understand that in today’s fast-paced worlds, flexibility is key. Our model allows you to get world-class design and Webflow Development without needing to hire full-time staff. Pay for what you need, for as long as you need it, so you never have to worry about paying for an employee that you don’t have work for.'},
  {id: 2, title: 'Are there any refunds if i dont like the services?', content: 'Unfortunately we do not provide any refunds. This is due to the time and effort invested into producing high-quality design and development work. We can either continue improving the development until you are satisfied or you can pause/cancel your subscription.'},
  {id: 3, title: 'What if I already have a design? Can you build from it?', content: 'Certainly! If you have a design ready, I can develop a fully functional website based on it. I work closely with designers and clients to ensure the final product aligns with the original vision and functions seamlessly.'},
  {id: 4, title: 'How much does it cost to build a website?', content: 'The cost of a website depends on the project’s scope, complexity, and features. My starting rate is $300, which covers essential elements. For more advanced functionalities or larger projects, the price will adjust accordingly. I’d be happy to discuss your specific needs and provide a customized estimate!'},
  {id: 5, title: 'How long does it take to complete a website?', content: "The timeline for completing a website depends on the project’s size and requirements. A basic website may take around 1–2 weeks, while more complex sites can take several weeks. After discussing your needs, I'll provide an estimated timeframe to match your goals."},
]

function AccordionItem({title, content, isExpanded, onToggle}) {
  return (
    <div className={`bg-green-500 border-4 border-green-800 flex justify-center flex-col rounded-md overflow-hidden transition-all duration-500 py-4 ${isExpanded ? "max-h-80" : "max-h-16" }`}>
      <div className="flex justify-between items-start pt-4 px-5 cursor-pointer" onClick={onToggle}>
        <div className="uppercase font-medium">
          {title}
        </div>
        <BsChevronRight className={`transition-all duration-300 h-6 ${isExpanded ? "rotate-90" : "" }`} />
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
      <section className="w-full flex justify-center items-center py-32">
        <div className="w-11/12 mx-auto flex flex-col md:flex-row items-center gap-6">
          <div className="w-full md:w-7/12">
              <h1 className="text-3xl md:text-3xl lg:text-5xl uppercase">
                I’m Great Alexander a Fullstack Developer specializing in ReactJS & Next.js
              </h1>
              <div className="hidden w-full md:flex gap-3 mt-10 uppercase">
                <Link href={'#'} className="bg-green-500 text-white py-1.5 px-6 rounded-md border-2 border-green-800">About</Link>
                <Link href={'#'} className="bg-green-500 text-white py-1.5 px-6 rounded-md border-2 border-green-800">Contact Me</Link>
              </div>
              <div className="w-full flex gap-3 mt-4 md:mt-5">
                <div className="py-1 rounded-md">
                  <span className="font-bold text-gray-500">+4 Years <span className="font-bold">EXP.</span></span>
                </div>
                <div className="border border-green-500"></div>
                <div className="py-1 rounded-md">
                  <span className="font-bold text-gray-500">+19 Clients</span>
                </div>
                <div className="border border-green-500"></div>
                <div className="py-1 rounded-md">
                  <span className="font-bold text-gray-500">+54 Pjxs</span>
                </div>
              </div>
          </div>
          <div className="w-full md:w-5/12 flex justify-center">
            <div className="h-72 md:h-full w-full md:w-8/12 overflow-hidden rounded-md">
              <Image src={heroImg} className="scale-150 h-full w-full object-cover object-center rounded-md" alt="" />
            </div>
          </div>
          <div className="md:hidden w-full flex gap-3 mt-1 uppercase">
            <Link href={'#'} className="bg-green-500 text-white py-1.5 px-6 rounded-md w-full text-center border-2 border-green-800">About</Link>
            <Link href={'#'} className="bg-green-500 text-white py-1.5 px-6 rounded-md w-full text-center border-2 border-green-800">Contact Me</Link>
          </div>
        </div>
      </section>

      <section className="w-full py-16">
        <div className="w-11/12 mx-auto">
          <div className="w-full flex flex-col-reverse md:flex-row gap-1 md:gap-2 items-center justify-center md:justify-start">
            <div className="border px-8 md:px-0 md:py-3  border-green-500"></div>
            <h1 className="mt-0.5 font-medium uppercase">Featured Projects</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
            <div className="w-full group">
              <div className="overflow-hidden rounded-md relative">
                <Link href={'#'} className="absolute top-0 left-0 z-10 h-full w-full"></Link>
                <Image src={pjxOne} alt="" className="h-full w-full object-cover rounded-md scale-125 group-hover:scale-150 group-hover:cursor-pointer duration-500" />
              </div>
              <div className="mt-2 w-full flex items-center justify-between text-gray-500">
                <div className="w-8/12 truncate">
                  <h1 className="uppercase text-white">Amazon Mfb.</h1>
                  <span className="text-gray-500 truncate w-full">Api Integration</span>
                </div>
                <div className="w-4/12 flex flex-col justify-end items-end">
                  <span className="text-gray-500">2021</span>
                  <Link href={'#'} className="">
                    <GoArrowUpRight className="h-6 w-6 hover:text-green-500 duration-500" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full group">
              <div className="overflow-hidden rounded-md relative">
                <Link href={'#'} className="absolute top-0 left-0 z-10 h-full w-full"></Link>
                <Image src={pjxTwo} alt="" className="h-full w-full object-cover rounded-md scale-125 group-hover:scale-150 group-hover:cursor-pointer duration-500" />
              </div>
              <div className="mt-2 w-full flex items-center justify-between text-gray-500">
                <div className="w-8/12 truncate">
                  <h1 className="uppercase text-white">Amazon Mfb.</h1>
                  <span className="text-gray-500 truncate w-full">Api Integration</span>
                </div>
                <div className="w-4/12 flex flex-col justify-end items-end">
                  <span className="text-gray-500">2021</span>
                  <Link href={'#'} className="">
                    <GoArrowUpRight className="h-6 w-6 hover:text-green-500 duration-500" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full group">
              <div className="overflow-hidden rounded-md relative">
                <Link href={'#'} className="absolute top-0 left-0 z-10 h-full w-full"></Link>
                <Image src={pjxThr} alt="" className="h-full w-full object-cover rounded-md scale-125 group-hover:scale-150 group-hover:cursor-pointer duration-500" />
              </div>
              <div className="mt-2 w-full flex items-center justify-between text-gray-500">
                <div className="w-8/12 truncate">
                  <h1 className="uppercase text-white">Amazon Mfb.</h1>
                  <span className="text-gray-500 truncate w-full">Api Integration</span>
                </div>
                <div className="w-4/12 flex flex-col justify-end items-end">
                  <span className="text-gray-500">2021</span>
                  <Link href={'#'} className="">
                    <GoArrowUpRight className="h-6 w-6 hover:text-green-500 duration-500" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center mt-6">
            <Link href={'#'} className="bg-green-500 py-1.5 px-6 rounded-md uppercase border-2 border-green-800">See more</Link>
          </div>
        </div>
      </section>

      <section className="w-full py-16">
        <div className="w-11/12 mx-auto">
          <div className="w-full flex flex-col-reverse md:flex-row gap-1 md:gap-2 items-center justify-center md:justify-start">
            <div className="border px-8 md:px-0 md:py-3  border-green-500"></div>
            <h1 className="mt-0.5 font-medium uppercase">My Stack</h1>
          </div>
          <div className="xl:flex hidden w-full mt-5">
            <div className="bg-green-500 p-2 rounded-md border-4 border-green-800 shadow-lg shadow-green-500/30 rotate-[2deg] z-10">
              <FaHtml5 className="h-12 w-12 text-white" />
            </div>
            <div className="bg-green-500 p-2 rounded-md border-4 border-green-800 shadow-lg shadow-green-500/30 rotate-[352deg]">
              <FaCss3Alt className="h-12 w-12 text-white" />
            </div>
            <div className="bg-green-500 p-2 rounded-md border-4 border-green-800 shadow-lg shadow-green-500/30 rotate-[2deg] z-10">
              <RiTailwindCssFill className="h-12 w-12 text-white" />
            </div>
            <div className="bg-green-500 p-2 rounded-md border-4 border-green-800 shadow-lg shadow-green-500/30 rotate-[352deg]">
              <RiNextjsFill className="h-12 w-12 text-white" />
            </div>
            <div className="bg-green-500 p-2 rounded-md border-4 border-green-800 shadow-lg shadow-green-500/30 rotate-[2deg] z-10">
              <FaReact className="h-12 w-12 text-white" />
            </div>
            <div className="bg-green-500 p-2 rounded-md border-4 border-green-800 shadow-lg shadow-green-500/30 rotate-[352deg]">
              <FaNodeJs className="h-12 w-12 text-white" />
            </div>
            <div className="bg-green-500 p-2 rounded-md border-4 border-green-800 shadow-lg shadow-green-500/30 rotate-[2deg] z-10">
              <SiMongodb className="h-12 w-12 text-white" />
            </div>
            <div className="bg-green-500 p-2 rounded-md border-4 border-green-800 shadow-lg shadow-green-500/30 rotate-[352deg]">
              <SiExpress className="h-12 w-12 text-white" />
            </div>
            <div className="bg-green-500 p-2 rounded-md border-4 border-green-800 shadow-lg shadow-green-500/30 rotate-[2deg] z-10">
              <FaPhp className="h-12 w-12 text-white" />
            </div>
            <div className="bg-green-500 p-2 rounded-md border-4 border-green-800 shadow-lg shadow-green-500/30 rotate-[352deg]">
              <TbApi className="h-12 w-12 text-white" />
            </div>
            <div className="bg-green-500 p-2 rounded-md border-4 border-green-800 shadow-lg shadow-green-500/30 rotate-[2deg] z-10">
              <FaGitAlt className="h-12 w-12 text-white" />
            </div>
            <div className="bg-green-500 p-2 rounded-md border-4 border-green-800 shadow-lg shadow-green-500/30 rotate-[352deg]">
              <FaGithub className="h-12 w-12 text-white" />
            </div>
            <div className="bg-green-500 p-2 rounded-md border-4 border-green-800 shadow-lg shadow-green-500/30 rotate-[2deg] z-10">
              <SiPostman className="h-12 w-12 text-white" />
            </div>
          </div>
          <div className="w-full mt-5 xl:hidden">
            <div className="grid grid-cols-5 md:grid-cols-10 lg:grid-cols-12">
              <div className="flex justify-center bg-green-500 p-2 rounded-md border-4 border-green-800 shadow-lg shadow-green-500/30 rotate-[5deg] z-10">
                <FaHtml5 className="h-12 w-12 text-white" />
              </div>
              <div className="flex justify-center bg-green-500 p-2 rounded-md border-4 border-green-800 shadow-lg shadow-green-500/30 rotate-[352deg]">
                <FaCss3Alt className="h-12 w-12 text-white" />
              </div>
              <div className="flex justify-center bg-green-500 p-2 rounded-md border-4 border-green-800 shadow-lg shadow-green-500/30 rotate-[5deg] z-10">
                <RiTailwindCssFill className="h-12 w-12 text-white" />
              </div>
              <div className="flex justify-center bg-green-500 p-2 rounded-md border-4 border-green-800 shadow-lg shadow-green-500/30 rotate-[352deg]">
                <RiNextjsFill className="h-12 w-12 text-white" />
              </div>
              <div className="flex justify-center bg-green-500 p-2 rounded-md border-4 border-green-800 shadow-lg shadow-green-500/30 rotate-[5deg] z-10">
                <FaReact className="h-12 w-12 text-white" />
              </div>
              <div className="flex justify-center bg-green-500 p-2 rounded-md border-4 border-green-800 shadow-lg shadow-green-500/30 rotate-[352deg]">
                <FaNodeJs className="h-12 w-12 text-white" />
              </div>
              <div className="flex justify-center bg-green-500 p-2 rounded-md border-4 border-green-800 shadow-lg shadow-green-500/30 rotate-[5deg] z-10">
                <SiMongodb className="h-12 w-12 text-white" />
              </div>
              <div className="flex justify-center bg-green-500 p-2 rounded-md border-4 border-green-800 shadow-lg shadow-green-500/30 rotate-[352deg]">
                <SiExpress className="h-12 w-12 text-white" />
              </div>
              <div className="flex justify-center bg-green-500 p-2 rounded-md border-4 border-green-800 shadow-lg shadow-green-500/30 rotate-[5deg] z-10">
                <FaPhp className="h-12 w-12 text-white" />
              </div>
              <div className="flex justify-center bg-green-500 p-2 rounded-md border-4 border-green-800 shadow-lg shadow-green-500/30 rotate-[352deg]">
                <TbApi className="h-12 w-12 text-white" />
              </div>
              <div className="flex justify-center bg-green-500 p-2 rounded-md border-4 border-green-800 shadow-lg shadow-green-500/30 rotate-[5deg] z-10">
                <FaGitAlt className="h-12 w-12 text-white" />
              </div>
              <div className="flex justify-center bg-green-500 p-2 rounded-md border-4 border-green-800 shadow-lg shadow-green-500/30 rotate-[352deg]">
                <FaGithub className="h-12 w-12 text-white" />
              </div>
              <div className="flex justify-center bg-green-500 p-2 rounded-md border-4 border-green-800 shadow-lg shadow-green-500/30 rotate-[5deg] z-10">
                <SiPostman className="h-12 w-12 text-white" />
              </div>
            </div>
          </div>
          {/* <div className="w-full mt-5 grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="border-green-500 border-l p-3">
              <h1 className="uppercase">Frontend Development</h1>
              <div className="flex gap-5 mt-3">
                <FaHtml5 className="h-9 w-9 text-white" />
                <FaCss3Alt className="h-9 w-9 text-white" />
                <RiTailwindCssFill className="h-9 w-9 text-white" />
                <RiNextjsFill className="h-9 w-9 text-white" />
                <FaReact className="h-9 w-9 text-white" />
              </div>
            </div>
            <div className="border-green-500 border-l p-3">
              <h1 className="uppercase">Backend Development</h1>
              <div className="flex gap-5 mt-3">
                <FaNodeJs className="h-9 w-9 text-white" />
                <SiMongodb className="h-9 w-9 text-white" />
                <SiExpress className="h-9 w-9 text-white" />
                <FaPhp className="h-9 w-9 text-white" />
                <TbApi className="h-9 w-9 text-white" />
              </div>
            </div>
            <div className="border-green-500 border-l p-3">
              <h1 className="uppercase">Tools</h1>
              <div className="flex gap-5 mt-3">
                <FaGitAlt className="h-9 w-9 text-white" />
                <FaGithub className="h-9 w-9 text-white" />
                <SiPostman className="h-9 w-9 text-white" />
              </div>
            </div>
          </div> */}
        </div>
      </section>

      <section className="w-full py-16">
        <div className="w-11/12 mx-auto">
          <div className="w-full flex flex-col-reverse md:flex-row gap-1 md:gap-2 items-center justify-center md:justify-start">
            <div className="border px-8 md:px-0 md:py-3  border-green-500"></div>
            <h1 className="mt-0.5 font-medium uppercase">Words of appreciation</h1>
          </div>
          <div className="w-full mt-5 columns-1 md:columns-3 gap-40 md:gap-5">
            <div className="bg-green-500/30 p-2 rounded-md rotate-[358deg] shadow-green-500/10 shadow-lg">
              <div className="border border-green-500/20 px-3 py-5 rounded-md">
                <div>
                  <span className="text-sm">Alexander is an incredibly talented product designer with a keen eye. Working with him has been perfect because he is creative, collaborative and constantly exceeding my expectations, making him a valuable asset to any project. Highly recommended!</span>
                </div>
                <div className="w-full flex items-center gap-2 mt-3">
                  <div className="h-10 w-10">
                    <Image src={heroImg} className="h-full w-full object-cover rounded-full" alt="" />
                  </div>
                  <div>
                    <div><span>Arinze Onyebuchi</span></div>
                    <div className="text-gray-400 text-sm flex items-center"><span>Product Designer</span><LuDot /><span>DeSci</span></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-green-500/30 p-2 rounded-md rotate-[2deg] shadow-green-500/10 shadow-lg mt-6 md:mt-0">
              <div className="border border-green-500/20 px-3 py-5 rounded-md">
                <div>
                  <span className="text-sm">Partnering with Alexander for the design of our Garnerly product and promotional video was an absolute pleasure. Emmanuel’s design sense is extraordinary, and he exceeded all expectations. From the initial sitemap through to the final designs, every step of the process was handled with precision and care. The communication was seamless, and deadlines were consistently met.</span>
                </div>
                <div className="w-full flex items-center gap-2 mt-3">
                  <div className="h-10 w-10">
                    <Image src={heroImg} className="h-full w-full object-cover rounded-full" alt="" />
                  </div>
                  <div>
                    <div><span>Benjamin Osemwengie</span></div>
                    <div className="text-gray-400 text-sm flex items-center"><span>Product Designer</span><LuDot /><span>Latcheckout</span></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-green-500/30 p-2 rounded-md rotate-[358deg] shadow-green-500/10 shadow-lg mt-6 md:mt-0">
              <div className="border border-green-500/20 px-3 py-5 rounded-md">
                <div>
                  <span className="text-sm">Working with Ossai has been a game-changer. His ability to turn complex user needs into intuitive, beautifully crafted designs is outstanding. He consistently delivered on time, collaborated seamlessly, and brought a level of creativity that elevated every project. I highly recommend Ossai for any team!</span>
                </div>
                <div className="w-full flex items-center gap-2 mt-3">
                  <div className="h-10 w-10">
                    <Image src={heroImg} className="h-full w-full object-cover rounded-full" alt="" />
                  </div>
                  <div>
                    <div><span>Obose Iyoke</span></div>
                    <div className="text-gray-400 text-sm flex items-center"><span>Product Manager</span><LuDot /><span>ZST</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='w-full py-16'>
        <div className="w-11/12 flex flex-col md:flex-row mx-auto">
            <div className="w-full md:w-6/12">
              <div className="w-full flex flex-col-reverse md:flex-row gap-2 items-center justify-center md:justify-start text-center md:text-left">
                <div className="border py-0 px-8 md:px-0 md:py-12 border-green-500"></div>
                <h1 className="uppercase text-4xl md:text-8xl">FAQs</h1>
              </div>
            </div>
            <div className="pt-5 md:pt-3 w-full md:w-6/12 flex flex-col gap-3">
              {data.map((item)=> (
                <AccordionItem key={item.id} {...item} isExpanded={expandedId === item.id} onToggle={() => toggleExpand(item.id)}/>
              ))}
            </div>
        </div>
      </section>

      <section className="w-full py-16">
        <div className="w-11/12 mx-auto">
          <div className="w-full flex gap-2 items-center">
            <div className="border py-3 border-green-500"></div>
            <h1 className="mt-0.5 font-medium uppercase">Get in touch</h1>
          </div>
          <div className="mt-5 w-full">
            <div className="w-full md:w-6/12 flex flex-col">
              <h1 className="text-3xl uppercase">Need help with a project ?</h1>
              <span className="text-gray-500">Feel free to reach out if you&rsquo;d like to collaborate, need help with a project, or just want to connect. I&rsquo;m open to new opportunities and ideas.</span>
              <div className="w-full mt-5">
                <Link href={'#'} className="bg-green-500 rounded-md py-1.5 px-6 uppercase border-2 border-green-800 animate-pulse">Say Hello</Link>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </main>
  );
}
