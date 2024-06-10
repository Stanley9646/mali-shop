"use client"
import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import Image from 'next/image';

const HomeBanner: React.FC = () => {
  return (
    <div className="container mx-auto px-4 ">
      <section className="lg:py-4 flex flex-col lg:flex-row items-center space-x-12">
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
          <div className="w-[300px] h-[300px] lg:w-[600px] lg:h-[400px] relative">
            <Image
              src="/mali2.webp"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
              width={600}
              height={600}
            />
          </div>
        </div>
        
        <div className="w-full lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            <h1 className="mb-1 text-2xl md:text-3xl lg:text-3xl font-extrabold">
             
              <span className=" bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Dress with the Best {" "}
          </span>
          <br></br>
              <TypeAnimation
                sequence={[
                  "Elevate your Style",
                  1000,
                  "Boost your Confidence",
                  1000,
                  "Fashion Fueled by Passion",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h1>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomeBanner;

