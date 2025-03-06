"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Leaf, ChevronDown } from 'lucide-react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Link from 'next/link';

const ForestNavigation = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { title: 'Home', href: '/' },
        {
            title: 'Solutions',
            href: '/solutions',
            dropdown: [
                { title: 'Sustainable Growth', href: '/solutions/sustainable-growth' },
                { title: 'Eco-Friendly Tools', href: '/solutions/eco-tools' },
                { title: 'Green Analytics', href: '/solutions/green-analytics' },
            ]
        },
        { title: 'About', href: '/about' },
        { title: 'Resources', href: '/resources' },
        { title: 'Contact', href: '/contact' },
    ];

    return (
        <>
            {/* Desktop Navigation */}
            <motion.nav
                className={`fixed w-full z-50 transition-all duration-300 ${
                    isScrolled
                        ? 'bg-emerald-900/90 backdrop-blur-md py-3 shadow-lg'
                        : 'bg-transparent py-5'
                }`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <Link href="/" className="flex items-center space-x-2">
                            <Leaf className="h-7 w-7 text-emerald-400" />
                            <span className="text-xl font-bold text-white">AltruSocial</span>
                        </Link>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-8">
                            {navLinks.map((link) => (
                                <div key={link.title} className="relative">
                                    {link.dropdown ? (
                                        <DropdownMenu>
                                            <DropdownMenuTrigger className="flex items-center space-x-1 text-emerald-100 hover:text-emerald-300 transition-colors duration-200 focus:outline-none">
                                                <span>{link.title}</span>
                                                <ChevronDown className="h-4 w-4" />
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent className="bg-emerald-900/95 backdrop-blur-md border-emerald-700 p-2 rounded-md w-48 shadow-xl shadow-emerald-900/20">
                                                {link.dropdown.map((item) => (
                                                    <DropdownMenuItem key={item.title} asChild>
                                                        <Link
                                                            href={item.href}
                                                            className="text-emerald-100 hover:text-emerald-300 hover:bg-emerald-800/50 px-3 py-2 rounded-md text-sm transition-colors duration-200"
                                                        >
                                                            {item.title}
                                                        </Link>
                                                    </DropdownMenuItem>
                                                ))}
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    ) : (
                                        <Link
                                            href={link.href}
                                            className="text-emerald-100 hover:text-emerald-300 transition-colors duration-200"
                                        >
                                            {link.title}
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <div className="hidden md:block">
                            <Link
                                href="/demo"
                                className="bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2 rounded-md transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-emerald-500/20"
                            >
                                Get Started
                            </Link>
                        </div>

                        {/* Mobile Menu Toggle */}
                        <button
                            className="md:hidden text-white focus:outline-none"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <motion.div
                className={`fixed inset-0 z-40 bg-emerald-900/95 backdrop-blur-lg md:hidden pt-20 px-4 ${
                    mobileMenuOpen ? 'block' : 'hidden'
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={mobileMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
            >
                <div className="flex flex-col space-y-4">
                    {navLinks.map((link) => (
                        <div key={link.title} className="py-2">
                            {link.dropdown ? (
                                <div className="space-y-3">
                                    <div className="text-emerald-300 font-medium text-lg pb-1 border-b border-emerald-800">
                                        {link.title}
                                    </div>
                                    <div className="pl-4 space-y-3">
                                        {link.dropdown.map((item) => (
                                            <Link
                                                key={item.title}
                                                href={item.href}
                                                className="block text-emerald-100 hover:text-emerald-300 transition-colors duration-200"
                                                onClick={() => setMobileMenuOpen(false)}
                                            >
                                                {item.title}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <Link
                                    href={link.href}
                                    className="block text-lg text-emerald-100 hover:text-emerald-300 transition-colors duration-200"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.title}
                                </Link>
                            )}
                        </div>
                    ))}
                    <div className="pt-4 mt-4 border-t border-emerald-800">
                        <Link
                            href="/demo"
                            className="block w-full bg-emerald-500 hover:bg-emerald-600 text-white text-center px-5 py-3 rounded-md transition-all duration-200"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Get Started
                        </Link>
                    </div>
                </div>
            </motion.div>
        </>
    );
};

export default ForestNavigation;