import React from 'react';
import logo from '../../assets/logo.png'
import { RiFacebookCircleLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { SlSocialYoutube } from "react-icons/sl";

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-horizontal footer-center  text-black p-10 bg-[#5e7784]">
                <aside>
                    <img className='w-26 h-26 rounded-b-full' src={logo} alt="" />
                    <nav>
                        <p className='font-semibold mb-3'>Follow us on</p>
                        <div className="grid grid-flow-col gap-4 mb-4">
                            <a href='https://www.facebook.com/'>
                                <RiFacebookCircleLine size={26} />
                            </a>
                            <a href='https://www.instagram.com/'>
                                <FaInstagram size={25} />

                            </a>
                            <a href='https://www.youtube.com/'>
                                <SlSocialYoutube size={26} />
                            </a>
                        </div>
                    </nav>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
                </aside>

            </footer>


        </div>
    );
};

export default Footer;