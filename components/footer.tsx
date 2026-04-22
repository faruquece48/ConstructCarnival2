import React from 'react';
import { Link } from "@nextui-org/link";
import { Divider } from "@nextui-org/react";
import { DiscordIcon, FacebookIcon, GithubIcon, InstagramIcon, LinkedInIcon, TwitterIcon, YoutubeIcon } from "@/components/icons";
import { siteConfig } from '@/config/site';

function FooterSection() {
    return (
        <div className="flex flex-col items-center w-full h-max justify-center bg-gray-600 dark:bg-gray-900 p-10">
            <div className="flex flex-col items-center justify-center">
                <div className="flex justify-center gap-3 mb-5">
                    <Link isExternal href="" aria-label="Twitter">
                        <FacebookIcon className="text-default-300 dark:text-default-500" />
                    </Link>
                    <Link isExternal href="" aria-label="Discord">
                        <LinkedInIcon className="text-default-300 dark:text-default-500" />
                    </Link>
                    <Link isExternal href="" aria-label="Github">
                        <InstagramIcon className="text-default-300 dark:text-default-500" />
                    </Link>
                    <Link isExternal href="" aria-label="Github">
                        <YoutubeIcon className="text-default-300 dark:text-default-500" />
                    </Link>
                    <Link isExternal href="" aria-label="Twitter">
                        <TwitterIcon className="text-default-300 dark:text-default-500" />
                    </Link>
                </div>

                <div className="flex justify-center gap-3 flex-wrap">
                    <Link
                        className='text-gray-300 dark:text-gray-400 hover:text-slate-100 hover:font-bold transition-colors duration-200'
                        href="/"
                    >
                        Home
                    </Link>
                    <Link
                        className='text-gray-300 dark:text-gray-400 hover:text-slate-100 hover:font-bold transition-colors duration-200'
                        href="/contests"
                    >
                        Contests
                    </Link>
                    <Link
                        className='text-gray-300 dark:text-gray-400 hover:text-slate-100 hover:font-bold transition-colors duration-200'
                        href="/memories"
                    >
                        Memories
                    </Link>
                    <Link
                        className='text-gray-300 dark:text-gray-400 hover:text-slate-100 hover:font-bold transition-colors duration-200'
                        href="/archive"
                    >
                        Archive
                    </Link>
                    <Link
                        className='text-gray-300 dark:text-gray-400 hover:text-slate-100 hover:font-bold transition-colors duration-200'
                        href="/contact"
                    >
                        Contact Us
                    </Link>
                </div>

                <Divider className='bg-gray-500 my-3' />
                <p className="text-center text-gray-300 dark:text-gray-400">
                    &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
                </p>
            </div>
        </div>
    )
}

export default FooterSection