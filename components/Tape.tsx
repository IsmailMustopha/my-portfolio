'use client';
import StarIcon from "@/public/star.svg";
import { motion } from "framer-motion";
// import Image from "next/image";

const words = [
    "Performant",
    "Accessible",
    "Secure",
    "Interactive",
    "Scalable",
    "User Friendly",
    "Maintenable",
    "Usable",
    "Reliable",
]

const Tape = () => {
  return (
    <div className="py-16 w-full max-w-full bg-black-100 sm:-px-10 -px-5">
        {/* <div className="bg-gradient-to-r from-emerald-300 to-sky-400 overflow-x-clip"> */}
            {/* <div className="flex">
                <div className="flex flex-none gap-4">
                    {words.map((word)=>(
                        <div className="inline-flex gap-4" key={word}>
                            <span>{word}</span>
                            <StarIcon className='size-6' />
                        </div>
                    ))}
                </div>
            </div> */}
        <div className="overflow-hidden flex mt-9 py-3 -rotate-3">
          <motion.div 
            className="flex flex-none gap-16 pr-16"
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'linear',
            }}
            initial={{ translateX: 0 }}
            animate={{ translateX: "-20%" }}
          >
                    {words.map((word)=>(
                        <div className="inline-flex gap-4" key={word}>
                            <span>{word}</span>
                            <StarIcon className='size-6' />
                        </div>
                    ))}
                    {words.map((word)=>(
                        <div className="inline-flex gap-4 items-center" key={word}>
                            <span className="uppercase font-extrabold text-sm">{word}</span>
                            <StarIcon className='size-6' />
                        </div>
                    ))}
          </motion.div>
        </div>
        {/* </div> */}
    </div>
  )
}

export default Tape