import React from 'react';
import logo from '../../assets/logo.png'
import { RiFacebookCircleFill } from "react-icons/ri";
import { FaInstagram, FaGithub } from "react-icons/fa";
import { SlSocialYoutube } from "react-icons/sl";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-b from-[#5e7784] to-[#4b626e] text-white py-10 shadow-inner backdrop-blur-md">
            <div className="container mx-auto flex flex-col items-center justify-center space-y-5">

                {/* Logo */}
                <img
                    className="w-20 h-20 rounded-full border-2 border-white shadow-md hover:scale-110 transition-transform duration-300"
                    src={logo}
                    alt="Share A Bite Logo"
                />

                {/* Social Title */}
                <p className="font-semibold tracking-wide text-lg">
                    Follow us on
                </p>

                {/* Social Icons */}
                <div className="flex space-x-6 text-2xl">

                    <a href="https://www.facebook.com/"
                        className="hover:text-blue-300 hover:scale-125 transition-all duration-300">
                        <RiFacebookCircleFill />
                    </a>

                    <a href="https://www.instagram.com/"
                        className="hover:text-pink-300 hover:scale-125 transition-all duration-300">
                        <FaInstagram />
                    </a>

                    <a href="https://www.youtube.com/"
                        className="hover:text-red-300 hover:scale-125 transition-all duration-300">
                        <SlSocialYoutube />
                    </a>

                    <a href="https://github.com/"
                        className="hover:text-gray-300 hover:scale-125 transition-all duration-300">
                        <FaGithub />
                    </a>

                </div>

                {/* Divider */}
                <div className="w-32 h-[1px] bg-white/30"></div>

                {/* Copyright */}
                <p className="text-sm tracking-wide opacity-80">
                    © {new Date().getFullYear()} Share A Bite — All Rights Reserved.
                </p>

            </div>
        </footer>
    );
};

export default Footer;