'use client';
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import './globals.css';

export default function RootLayout({ children }) {
  const [mobileNav, setMobileNav] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme !== null) {
      setIsDarkMode(storedTheme === 'dark');
    } else {
      const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(prefersDarkMode);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(prevState => !prevState);
  }

  return (
    <html lang="en" className={isDarkMode ? 'dark' : 'light'}>
      <body className='dark:bg-black bg-[#ECF0F3]' style={mobileNav ? { overflow: 'hidden' } : { overflow: 'auto' }}>
        <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} mobileNav={mobileNav} setMobileNav={setMobileNav} />
        {children}
      </body>
    </html>
  )
}
