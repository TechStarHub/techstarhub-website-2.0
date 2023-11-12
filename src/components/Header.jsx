import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Tooltip, IconButton, Menu, MenuItem, Button } from '@mui/material';
import SearchBar from './SearchBar/SearchBar';
import brandLogo from '../assets/brand/TechStarHub-rmbg-logo.png';
import { BsGithub } from 'react-icons/bs';
import { BiSun, BiMoon } from 'react-icons/bi';
import { AiFillCaretDown } from 'react-icons/ai';

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  // Menu controls
  const handleMenuOpen = (event) => {
    // setMenuOpen(true);
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    // setMenuOpen(false);
    setAnchorEl(null);
  };

  // Toggle Dark Mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <header className="w-full flex justify-between items-center gap-3 px-2 py-3">
      <Link href="/">
        <img src={brandLogo} className="" alt="TechStarHub Logo" width={170} />
      </Link>
      <div className="hidden md:flex gap-4 w-1/2 justify-center items-center">
        <Link
          to="/"
          className="text-slate-700 text-md rounded p-1 animate-slide-right"
        >
          Home
        </Link>
        <Link
          to="/"
          className="text-slate-700 text-md rounded p-1 animate-slide-right"
        >
          Learn
        </Link>
        <Link
          to="/about"
          className="text-slate-700 text-md rounded p-1 animate-slide-right"
        >
          About
        </Link>
        <Link
          to="/contact"
          className="text-slate-700 text-md rounded p-1 animate-slide-right"
        >
          Contact
        </Link>
        <Button onClick={handleMenuOpen} variant="text" color="inherit">
          Pages
          <AiFillCaretDown className="text-xl inline-block ml-1" />
        </Button>
        <Menu open={open} onClose={handleMenuClose} anchorEl={anchorEl}>
          <MenuItem onClick={handleMenuClose}>
            <Link to="/repos">Repos</Link>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <Link to="/projects">Projects</Link>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <Link to="/people">People</Link>
          </MenuItem>
        </Menu>
      </div>

      <div className="w-full hidden md:block max-w-[300px] ">
        <SearchBar />
      </div>

      <div className="flex items-center border-l-2 border-slate-400 pl-2">
        <Tooltip title="Toggle Dark Mode">
          <IconButton onClick={toggleDarkMode}>
            {darkMode ? (
              <BiSun className="text-2xl text-slate-600" />
            ) : (
              <BiMoon className="text-2xl text-slate-600" />
            )}
          </IconButton>
        </Tooltip>

        <Tooltip title="Github">
          <IconButton size="large">
            <BsGithub className="text-3xl text-black" />
          </IconButton>
        </Tooltip>
      </div>
    </header>
  );
}
