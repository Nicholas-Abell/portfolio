'use client';
import React, { useState, createContext } from 'react';
import Navbar from '@/components/Navbar';
import './globals.css';

export const metadata = {
  title: 'Nicholas Abell',
  description: 'Portfolio',
}

export const DarkModeContext = createContext();

export default function RootLayout({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(prevState => !prevState)
  }

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      <html lang="en">
        <body className={isDarkMode ? 'bg-black' : 'bg-[#ECF0F3]'}>
          <Navbar />
          {children}
        </body>
      </html>
    </DarkModeContext.Provider>
  )
}
