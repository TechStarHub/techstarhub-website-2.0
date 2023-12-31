import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeMode } from '../store';
import { Link } from 'react-router-dom';
import { Tooltip, IconButton, Menu, MenuItem, Button } from '@mui/material';
import SearchBar from './SearchBar/SearchBar';
import brandLogoLight from '../assets/brand/TechStarHub-rmbg-logo.png';
import brandLogoDark from '../assets/brand/TechStarHub_Brand_Logo-dark-sm-removebg.png';
import { BsGithub } from 'react-icons/bs';
import { BiSun, BiMoon } from 'react-icons/bi';
import { AiFillCaretDown } from 'react-icons/ai';

export default function Header() {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.mode.mode);
  const isDark = mode === 'dark' ? true : false;

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  // Menu controls
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // Toggle Dark Mode
  const toggleDarkMode = () => {
    dispatch(changeMode(mode === 'dark' ? 'light' : 'dark'));
  };

  return (
    <header
      className="w-full flex justify-between items-center gap-3 px-2 py-3"
      style={{
        backgroundColor: isDark ? '#29435C' : '#ffffff',
        color: isDark ? '#fff' : '#000',
      }}
    >
      <Link href="/">
        {isDark ? (
          <img
            src={brandLogoDark}
            className=""
            alt="TechStarHub Logo"
            width={170}
          />
        ) : (
          <img
            src={brandLogoLight}
            className=""
            alt="TechStarHub Logo"
            width={170}
          />
        )}
      </Link>
      <div className="hidden md:flex gap-4 w-1/2 justify-center items-center">
        <Link
          to="/"
          className="text-md rounded p-1 animate-slide-right"
          style={{ color: isDark ? '#fff' : '#000' }}
        >
          Home
        </Link>
        <Link
          to="/learn"
          className="text-md rounded p-1 animate-slide-right"
          style={{ color: isDark ? '#fff' : '#000' }}
        >
          Learn
        </Link>
        <Link
          to="/contact"
          className="text-md rounded p-1 animate-slide-right"
          style={{ color: isDark ? '#fff' : '#000' }}
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
        <Tooltip
          title={mode === 'dark' ? 'Dark mode is on' : 'Light mode is on'}
        >
          <IconButton onClick={toggleDarkMode}>
            {mode === 'dark' ? (
              <BiSun
                style={{ color: isDark ? '#fff' : '#000' }}
                className="text-2xl"
              />
            ) : (
              <BiMoon
                style={{ color: isDark ? '#fff' : 'rgb(100 116 139)' }}
                className="text-2xl"
              />
            )}
          </IconButton>
        </Tooltip>

        <Tooltip title="Github">
          <IconButton size="large">
            <BsGithub
              style={{ color: isDark ? '#fff' : '#000' }}
              className="text-3xl"
            />
          </IconButton>
        </Tooltip>
      </div>
    </header>
  );
}
