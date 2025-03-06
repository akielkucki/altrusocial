import React from 'react';
import { motion } from 'framer-motion';
import { Sprout, Droplets, Wind, TreePine } from 'lucide-react';
import Image from 'next/image';
interface FeatureCardProps {
    icon: React.ElementType;
    title: string;
    description: string;
}
const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
    return (
        <motion.div
            className="bg-emerald-900/80 backdrop-blur-md rounded-lg p-6 border border-emerald-800/50 shadow-lg"
            whileHover={{ y: -5, boxShadow: '0 15px 30px rgba(5, 150, 105, 0.2)' }}
            transition={{ duration: 0.3 }}
        >
            <div className="bg-emerald-700/40 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Icon className="text-emerald-300 h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-emerald-50 mb-2">{title}</h3>
            <p className="text-emerald-200/90">{description}</p>
        </motion.div>
    );
};

const ForestAbout = () => {
    // Staggered animation for elements
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    return (
        <section className="sticky top-0 min-h-screen flex items-center justify-center py-24">
            {/* Full-screen background image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/tree.PNG"
                    alt="Forest background"
                    fill
                    className="object-cover"
                    priority
                    quality={90}
                />
                {/* Overlay to ensure content visibility */}
                <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/70 via-emerald-900/60 to-emerald-950/70"></div>
            </div>

            {/* Centered content container */}
            <div className="container mx-auto px-4 relative z-10 max-w-6xl">
                {/* Header section */}
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.8}}
                    viewport={{once: true}}
                    className="text-center mb-20"
                >
                    <h2 className="text-sm uppercase tracking-wider text-emerald-400 font-medium mb-3">About Us</h2>
                    <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">Growing a Sustainable Future</h3>
                    <p className="text-emerald-100 text-lg max-w-2xl mx-auto">
                        we&#39;ve been pioneering <span className={"tracking-widest text-emerald-500"}>organic</span> digital solutions that help businesses thrive
                        while
                        minimizing their environmental impact. Our approach combines innovation with responsibility.
                    </p>
                </motion.div>

                {/* Feature cards */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true}}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
                >
                    <motion.div variants={itemVariants}>
                        <FeatureCard
                            icon={Sprout}
                            title="Sustainable Growth"
                            description="We help businesses grow in ways that preserve natural resources and minimize environmental impact."
                        />
                    </motion.div>
                    <motion.div variants={itemVariants}>
                        <FeatureCard
                            icon={Droplets}
                            title="Resource Efficiency"
                            description="Our solutions optimize resource utilization, reducing waste and improving operational efficiency."
                        />
                    </motion.div>
                    <motion.div variants={itemVariants}>
                        <FeatureCard
                            icon={Wind}
                            title="Carbon Reduction"
                            description="We implement strategies that actively reduce carbon emissions in digital operations and development."
                        />
                    </motion.div>
                    <motion.div variants={itemVariants}>
                        <FeatureCard
                            icon={TreePine}
                            title="Environmental Impact"
                            description="For every project completed, we plant trees to offset carbon and support forest restoration."
                        />
                    </motion.div>
                </motion.div>

                {/* Quote section */}
                <motion.div
                    initial={{opacity: 0, y: 30}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.8, delay: 0.2}}
                    viewport={{once: true}}
                    className="text-center bg-emerald-900/50 backdrop-blur-sm py-12 px-4 rounded-xl border border-emerald-800/50 max-w-3xl mx-auto"
                >
                    <div className="w-16 h-16 mx-auto mb-6 opacity-20">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24">
                            <path
                                d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/>
                        </svg>
                    </div>
                    <p className="text-2xl md:text-3xl text-emerald-200 font-light italic mb-6">
                        &#34;Our mission is to prove that digital innovation and environmental responsibility can go hand in
                        hand. Every line of code we write is a step toward a greener future.&#34;
                    </p>
                    <div className="flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-emerald-700/40 flex items-center justify-center mr-3">
                            <span className="text-emerald-300 font-semibold">SC</span>
                        </div>
                        <div className="text-left">
                            <p className="text-white font-medium">Christain Devos</p>
                            <p className="text-emerald-300">Founder & CEO</p>

                        </div>
                    </div>

                </motion.div>
                <br/>
                <div className="bg-white  border-gray-300 p-6 w-96 text-center mx-auto border-b-[15px] border-b-blue-800">
                    <h1 className="text-lg font-semibold">I&#39;m CEO, <span className="text-gray-800">Bitch.</span></h1>
                    <p className="mt-4 text-gray-800 font-medium">christain devos</p>
                    <div className="mt-2 border-t border-gray-300 pt-2">
                        <p className="text-sm text-gray-700 font-semibold"><b className={"text-cyan-800"}>facebook</b> CORPORATE HEADQUARTERS</p>
                        <p className="text-xs text-gray-600">1516 university avenue, palo alto, ca 94301-1605</p>
                        <p className="text-xs text-gray-600 mt-1">phone: 650-543-4800 &nbsp; fax: 650-543-4801</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ForestAbout;