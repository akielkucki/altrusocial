"use client"
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {ArrowRight, Leaf} from 'lucide-react';
// import CountUp from 'react-countup'
import About from "@/components/about";
import Numbers from "@/components/numbers";

const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  const [stars, setStars] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
      setInterval(()=> {
          setStars((prev) => prev + 1);
      },1000)

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [stars]);


  return (
      <>
          <div className={"relative"}>


      <div className="relative overflow-hidden bg-gradient-to-b from-emerald-900 to-emerald-800 min-h-screen flex items-center">
        {/* Animated forest particles */}
        <div className="absolute inset-0">
          {[...Array(40)].map((_, i) => (
              <motion.div
                  key={i}
                  className="absolute rounded-full bg-emerald-100 opacity-30"
                  initial={{
                    width: Math.random() * 8 + 4,
                    height: Math.random() * 8 + 4,
                    x: Math.random() * 100 + '%',
                    y: -20,
                  }}
                  animate={{
                    y: '120vh',
                    rotate: Math.random() * 360,
                  }}
                  transition={{
                    duration: Math.random() * 20 + 10,
                    repeat: Infinity,
                    ease: 'linear',
                    delay: Math.random() * 10,
                  }}
                  style={{
                    filter: 'blur(1px)',
                  }}
              />
          ))}
        </div>

        {/* Parallax forest silhouette */}
        <div
            className="absolute bottom-0 left-0 right-0 h-64 bg-contain bg-bottom bg-repeat-x"
            style={{
              backgroundImage: "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1000 320\" preserveAspectRatio=\"none\"><path d=\"M0,320 L60,280 L100,300 L160,220 L220,270 L280,200 L340,250 L380,180 L440,220 L500,150 L560,200 L620,170 L680,230 L740,200 L800,250 L860,190 L920,240 L960,210 L1000,240 L1000,320 L0,320 Z\" fill=\"%23064e3b\"/></svg>')",
              transform: `translateY(${scrollY * 0.1}px)`,
            }}
        />
        <div
            className="absolute bottom-0 left-0 right-0 h-48 bg-contain bg-bottom bg-repeat-x"
            style={{
              backgroundImage: "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1000 240\" preserveAspectRatio=\"none\"><path d=\"M0,240 L40,200 L100,220 L140,170 L200,210 L260,160 L320,190 L360,150 L420,180 L480,120 L540,170 L600,140 L660,190 L720,160 L780,200 L840,150 L900,190 L940,160 L1000,190 L1000,240 L0,240 Z\" fill=\"%23065f46\"/></svg>')",
              transform: `translateY(${scrollY * 0.2}px)`,
            }}
        />
        <div
            className="absolute bottom-0 left-0 right-0 h-32 bg-contain bg-bottom bg-repeat-x"
            style={{
              backgroundImage: "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1000 160\" preserveAspectRatio=\"none\"><path d=\"M0,160 L30,130 L60,145 L120,110 L180,140 L240,100 L300,125 L360,85 L420,120 L480,80 L540,115 L600,95 L660,130 L720,100 L780,135 L840,95 L900,125 L960,95 L1000,120 L1000,160 L0,160 Z\" fill=\"%23059669\"/></svg>')",
              transform: `translateY(${scrollY * 0.3}px)`,
            }}
        />

        {/* Content */}
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
              <motion.div
                  initial={{opacity: 0, y: 20}}
                  animate={{opacity: 1, y: 0}}
                  transition={{duration: 0.8}}
              >
                  <div className="flex items-center space-x-2 mb-6">
                      <Leaf className="text-emerald-300 h-6 w-6"/>
                      <div className="flex flex-col justify-end items-start">


                          <span className="text-emerald-200 font-medium tracking-wide">NATURALLY BETTER</span>
                      </div>
                      <span className="text-emerald-200 font-medium tracking-wide flex">

                </span>
                  </div>

                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                      Grow Your Business <br className="hidden md:block"/>
                      <span className="text-emerald-300">Naturally</span>
                  </h1>
                  <p className="text-lg md:text-xl text-emerald-100 mb-8 max-w-2xl">
                      Sustainable solutions that help your business thrive while respecting our planet.
                      Join the movement towards a greener future.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                      <Button
                          className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-6 rounded-md text-lg transition-all duration-200 shadow-lg hover:shadow-emerald-500/25">
                          Get Started
                      </Button>
                      <Button variant="outline"
                              className="border-emerald-400 text-emerald-500 hover:bg-emerald-800/50 px-8 py-6 rounded-md text-lg flex items-center gap-2 transition-all duration-200">
                          Learn More
                          <ArrowRight className="h-5 w-5"/>
                      </Button>
                  </div>
              </motion.div>
          </div>
        </div>

          {/* Light effects */}
          <div
              className="absolute top-1/4 -right-32 w-96 h-96 bg-emerald-400 rounded-full filter blur-3xl opacity-20"></div>
          <div
              className="absolute bottom-1/3 -left-32 w-96 h-96 bg-emerald-400 rounded-full filter blur-3xl opacity-20"></div>
      </div>
          <About/>
          </div>
          <Numbers/>
      </>
  );
};

export default Home;