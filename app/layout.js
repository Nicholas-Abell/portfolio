'use client';
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import './globals.css';

export default function RootLayout({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(null);

  useEffect(() => {
    if (isDarkMode === null) {
      const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(prefersDarkMode);
    }
  }, []);

  useEffect(() => {
    const html = document.querySelector('html');
    if (isDarkMode) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(prevState => !prevState)
  }

  return (
    <html lang="en">
      <body className='dark:bg-black bg-[#ECF0F3]'>
        <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
        {children}
      </body>
    </html>
  )
}
