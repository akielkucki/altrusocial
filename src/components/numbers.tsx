import React from 'react';
import { motion } from 'framer-motion';
import CountUp from "react-countup";

interface NumberItemProps {
    number: string;
    label: string;
}
const NumberItem = ({ number, label }: NumberItemProps) => {
    const val = number.split("+")[0];
    const num: number = parseInt(val);
    return (
        <motion.div
            className="bg-emerald-900/20 backdrop-blur-sm p-8 rounded-lg border border-emerald-800/30"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
        >

            <h3 className="text-5xl md:text-6xl font-bold text-emerald-300 mb-2"><CountUp end={num}/>+</h3>

            <p className="text-emerald-100 text-lg">{label}</p>
        </motion.div>
    );
};

const Numbers = () => {
    return (
        <section className="py-24 bg-gradient-to-b from-emerald-950 to-emerald-900 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <svg className="absolute bottom-0 right-0 text-emerald-800/10 w-96 h-96" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="currentColor" d="M47,-52.2C59.8,-40.6,68.7,-25.1,71.3,-8.5C73.9,8.1,70.2,25.8,59.8,38.5C49.3,51.1,32.2,58.7,14.9,62.1C-2.5,65.4,-20,64.5,-34.8,57.5C-49.6,50.5,-61.7,37.3,-67.1,21.5C-72.5,5.7,-71.2,-12.8,-63.5,-27.2C-55.9,-41.7,-41.9,-52.2,-27.2,-62.5C-12.5,-72.8,2.9,-82.7,17.2,-79.2C31.5,-75.7,44.5,-58.8,47,-52.2Z" transform="translate(100 100)" />
                </svg>
                <svg className="absolute -top-48 -left-48 text-emerald-800/10 w-96 h-96" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="currentColor" d="M54.6,-64.5C68.1,-55.3,74.5,-35.1,75.4,-16C76.3,3.2,71.6,21.3,62.8,37.1C53.9,52.9,40.8,66.4,25.2,71.8C9.6,77.1,-8.6,74.4,-26.5,68.5C-44.4,62.5,-62.1,53.2,-71.1,38.2C-80.2,23.2,-80.8,2.4,-75.3,-15.7C-69.9,-33.8,-58.3,-49.2,-43.9,-58.1C-29.4,-67,-14.7,-69.4,3,-73C20.7,-76.6,41.1,-73.7,54.6,-64.5Z" transform="translate(100 100)" />
                </svg>
            </div>

            <div className="flex items-center justify-between mx-auto px-4 relative z-10">
                <div className="max-w-3xl mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-5xl font-bold text-white mb-4">our numbers:</h2>
                        <p className="text-lg text-emerald-100">
                            With every project we take on, we strive to deliver the best results for our clients.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                    <NumberItem number="100+" label="Hours of video created" />
                    <NumberItem number="280+" label="Leads generated for our clients" />
                    <NumberItem number="90+" label="Of our clients come back" />
                    <NumberItem number="98+" label="Net Promoting Score" />
                </div>
            </div>
        </section>
    );
};

export default Numbers;