import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import project1 from "../../public/images/projects/portfolio.png"
import project2 from "../../public/images/projects/agency-frontend.png"
import project3 from "../../public/images/projects/crypto-screener-cover-image.jpg"
import { GithubIcon } from '@/components/icon'
import { motion } from 'framer-motion'
import TransitionEffect from '@/components/TransitionEffect'


 const FramerImage = motion(Image);

const FeaturedProjects = ({ type, title, summary, img, link, github}) => {
    return(
        <article className='w-full flex items-center justify-between rounded-br-2xl  rounded-3xl  border border-solid border-dark bg-light dark:border-light dark:bg-dark shadow-2xl p-12 relative lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-2xl xs:p-4'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]'/>
        <Link href={link} target='_blank' 
        className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'>
            <FramerImage
            whileHover={{scale:1.05}}
            transition={{duration:0.2}}
             src={img} alt={title}  className='w-full h-auto'
             priority
               sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"/>
        </Link>
        <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
            <span className=' text-primary dark:text-primaryDark font-medium  text-xl xs:text-base'>{type}</span>
            <Link className='hover:underline underline-offset-2' href={link} target='_blank'>
            <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm'>{title}</h2>
            </Link>
            <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
            <div className='mt-2 flex items-center'>
                <Link className='w-10' href={github} target='_blank'>{" "}<GithubIcon/>{" "}</Link>
                <Link className='ml-4 rounded-lg bg-dark text-light dark:bg-light dark:text-dark p-2 text-lg px-6 font-semibold sm:px-4 sm:text-base' href={link} target='_blank'>Visit project</Link>
            </div>

        </div>
        </article>
    )
}
const Project = ({ type, title,  img, summary, link, github}) => {
    return(
        <article className='w-full flex flex-col items-center justify-center rounded-2xl  border border-solid border-dark bg-light dark:border-light dark:bg-dark p-6 relative xs:p-4'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]'/>
            
        <Link href={link} target='_blank' 
        className='w-full cursor-pointer overflow-hidden rounded-lg'>
            <FramerImage
            whileHover={{scale:1.05}}
            transition={{duration:0.2}}
             src={img} alt={title}  className='w-full h-auto'/>
        </Link>
        <div className='w-full flex flex-col items-start justify-between mt-4 '>
            <span className=' text-primary dark:text-primaryDark font-medium  text-xl lg:text-lg md:text-base'>{type}</span>
            <Link className='hover:underline underline-offset-2' href={link} target='_blank'>
            <h2 className='my-2 w-full text-left text-3xl font-bold dark:text-light lg:text-2xl '>{title}</h2>
            </Link>
            <p className='my-2 font-medium text-dark dark:text-light sm:text-sm '>{summary}</p>
            <div className='w-full mt-2 flex items-center justify-between'>
                <Link className=' text-lg font-semibold dark:text-light underline md:text-base' href={link} target='_blank'>Visit</Link>
                <Link className='w-8 md:w-6' href={github} target='_blank'>{" "}<GithubIcon/> {" "}</Link>
            </div>

        </div>
        </article>
    )
}

const projects = () => {
  return (
    <>
          <Head>
        <title>Mudassar | Project </title>
        <meta name='description' content='projects page' />
    </Head>
    <TransitionEffect/>
    <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-16 '>
            <AnimatedText classname='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl' text="Imagination Trumps Knowledge!" />
            <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0 '>
                <div className='col-span-12 '>
                    <FeaturedProjects
                    title="Mudasssar Ali" 
                    img={project1}
                    summary="I am developing a portfolio website using Next.js 14 to showcase my frontend development expertise. The site features an interactive interface highlighting my latest projects, including dynamic visuals and responsive design. It emphasizes performance and user experience across all devices. This portfolio demonstrates my skills and creativity in frontend development."
                    link="https://mudassar-rana.vercel.app"
                    github=""
                    type='Porfolio'

                    />
                </div>
                <div className='col-span-6 sm:col-span-12 '>
                <Project
                    title="Agency-frontend-without-responsive" 
                    img={project2}
                    summary=' frontend project'
                    link="https://agency-website-not-r.vercel.app"
                    github="/"
                    type='agency-project'
                    />
                </div>
                <div className='col-span-6 sm:col-span-12'>
                <Project
                    title="Unique-blog" 
                    img={project3}
                    summary='both frontend and backend project'
                    link="/"
                    github=""
                    type='bloging-project'
                    />
                </div>
            </div>
        </Layout>
    </main>
    </>
  )
}

export default projects







// 'https://formsubmit.co/el/budano'   this is link formsubmit

// "https://formspree.io/f/meojklda" this is link for formspree