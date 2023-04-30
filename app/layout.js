'use client';
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import './globals.css';

export default function RootLayout({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [scrollLock, setScrollLock] = useState(false);

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
      <body className='dark:bg-black bg-[#ECF0F3]' style={!scrollLock ? { overflow: 'hidden' } : { overflow: 'auto' }}>
        <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} setScrollLock={setScrollLock} />
        {children}
      </body>
    </html>
  )
}
