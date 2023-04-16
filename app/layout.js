'use client';
import React, { useState, useEffect, createContext } from 'react';
import Navbar from '@/components/Navbar';
import './globals.css';

export const metadata = {
  title: 'Nicholas Abell',
  description: 'Portfolio',
}

export const DarkModeContext = createContext();

export default function RootLayout({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(true);

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
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      <html lang="en">
        <body className='dark:bg-black bg-[#ECF0F3]'>
          <Navbar />
          {children}
        </body>
      </html>
    </DarkModeContext.Provider>
  )
}
