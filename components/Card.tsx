import React, { PropsWithChildren } from 'react'
import { twMerge } from 'tailwind-merge'
import grainImage from "@/public/grain.jpg";

const Card = ({
    className,
    children,
}: PropsWithChildren<{className?: string}>) => {
  return (
    <div 
    className={twMerge("rounded-3xl sticky top-0 z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 px-8  pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 after:pointer-events-none p-6", className)}
    style={{
    background: "rgb(4,7,29)",
    backgroundColor:
        "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
    }}
    >
        <div 
            className="absolute inset-0 -z-10 opacity-5"
            style={{
            backgroundImage: `url(${grainImage.src})`,
            }}
        >
        </div>
        {children}
    </div>
  )
}

export default Card