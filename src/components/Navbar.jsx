import React, { useEffect, useState } from 'react';
import { RiCloseLine as RxCross2, RiMenuLine as RxHamburgerMenu } from 'react-icons/ri';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { motion } from 'framer-motion';
export default function Navbar({ reviewSection, topSection, heroSection, categorySection, serviceSection }) {
    const [showMobileMenu, setShowMobileMenu] = useState(false);


    const toggleMobileMenu = () => {
        setShowMobileMenu(!showMobileMenu);
    };

    const doDiable = () => {
        if (!showMobileMenu) {
            const navLinks = document.querySelector('nav-links')
            navLinks.classList.add('disable')
        }
    }


    const navbarVariants = {
        sticky: {
            top: 0,
            position: 'sticky',
            // backgroundColor: 'rgba(245, 245, 245, 0.645)',
            backgroundColor: '#f1f6ff',
            opacity: 0.8,
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.5)',
            zIndex: 1000,
        },
        normal: {
            top: '-100px',
            position: 'static',
            backgroundColor: 'transparent',
            boxShadow: 'none',
            opacity: 1,
        },
    };

    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const linkVariants = {
        initial: { borderBottom: '3px solid transparent' },
        hover: { borderBottom: '3px solid red' },
        transition: { duration: 0.5, delay: 0.2 }
    };

    const scrollToSection = (ref) => {
        if (ref.current) {
            ref.current.scrollIntoView({
                behavior: 'smooth',
                top
            });
        }
    };
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    };

    return (
        <motion.div
            initial={isSticky ? 'sticky' : 'normal'}
            animate={isSticky ? 'sticky' : 'normal'}
            variants={navbarVariants}
            className={`App ${showMobileMenu ? 'mobile-menu-active' : ''}`}
        >
            <nav className="navbar flex align-items-center justify-between">
                <div className="left-nav w-[90%] md:w-[85%] d-flex align-items-center">
                    <div className={`mobile-menu-icon mx-2 ${showMobileMenu ? 'active' : ''}`} onClick={toggleMobileMenu}>
                        {showMobileMenu ? <RxCross2 /> : <RxHamburgerMenu />}
                    </div>
                    <div className="logo mx-1">
                        <img src="logo1.png" className='h-20 w-28' fluid></img>
                    </div>
                    <ul className={`nav-links ${showMobileMenu ? 'show-mobile-menu bg-gray-600 text-black' : 'disable'}`}>
                        <motion.li
                            variants={linkVariants}
                            initial='initial'
                            whileHover="hover"
                            onClick={() => { scrollToTop(); doDiable() }}
                        >
                            <Link to="/" className='home gold text-xl'>Home</Link>
                        </motion.li>

                        <motion.li
                            variants={linkVariants}
                            initial='initial'
                            whileHover="hover"
                            onClick={() => scrollToSection(serviceSection)}
                        >
                            <Link to="/" className='text-xl'>About Us</Link>
                        </motion.li>
                        <motion.li
                            variants={linkVariants}
                            initial='initial'
                            whileHover="hover"
                            onClick={() => scrollToSection(categorySection)}
                        >
                            <Link to="/" className='text-xl'>Products</Link>
                        </motion.li>
                        <motion.li
                            variants={linkVariants}
                            initial='initial'
                            whileHover="hover"
                            onClick={() => scrollToSection(reviewSection)}
                        >
                            <Link to="/" className='text-xl'>Review</Link>
                        </motion.li>
                    </ul>
                </div>
            </nav>
        </motion.div>
    );
}
