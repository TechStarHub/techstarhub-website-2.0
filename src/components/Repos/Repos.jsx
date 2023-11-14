import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import RepoCard from './RepoCard';
import { TbLayoutList } from 'react-icons/tb';
import { TbLayoutGrid } from 'react-icons/tb';
import { FaAngleRight } from 'react-icons/fa';
import { FaAngleLeft } from 'react-icons/fa';

export default function Repos({ repos }) {
  const mode = useSelector((state) => state.mode.mode);
  const isDark = mode === 'dark' ? true : false;

  const [view, setView] = useState('list'); // list or grid
  const [query, setQuery] = useState('');

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth < 640) {
        setView('list');
      }
    });
    return () => {
      window.removeEventListener('resize', () => {
        if (window.innerWidth < 640) {
          setView('list');
        }
      });
    };
  }, []);

  return (
    <div
      className="w-full bg-[#181823]"
      style={{
        backgroundColor: isDark ? '#181823' : '#fff',
        color: isDark ? '#fff' : '#000',
      }}
    >
      <div className="container mx-auto p-4 ">
        <h1
          className="text-3xl font-medium my-3"
          style={{ color: isDark ? '#fff' : '#000' }}
        >
          Repositories
        </h1>
        <div className="w-full">
          <input
            type="search"
            className="w-full px-2 py-2 rounded-md border-2 border-gray-400 outline-none focus:border-gray-600"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{
              color: isDark ? '#fff' : '#000',
              backgroundColor: isDark ? '#181823' : '#fff',
            }}
          />
        </div>
        <div className="w-full flex items-center justify-between gap-2 my-2">
          <span className="">
            Total Repositories:{' '}
            <span className="font-medium">{repos.length}</span>
          </span>
          <div className="flex items-center ">
            <span className="text-md font-medium mr-2">Layout :</span>
            <span
              onClick={() => setView('list')}
              className={`bg-gray-600 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 p-1 rounded-l-md ${
                view == 'list' ? 'bg-opacity-40' : 'bg-opacity-10'
              } `}
            >
              <TbLayoutList className="w-6 h-6 cursor-pointer" />
            </span>
            <span
              onClick={() => setView('grid')}
              className={`hidden sm:block bg-gray-600 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-r border-t border-b border-gray-100 p-1 rounded-r-md ${
                view == 'grid' ? 'bg-opacity-40' : 'bg-opacity-10'
              }`}
            >
              <TbLayoutGrid className="w-6 h-6 cursor-pointer" />
            </span>
          </div>
        </div>
        <div
          className={` ${
            view == 'list' ? 'flex flex-col ' : 'grid grid-cols-2 grid-flow-row'
          } gap-3  `}
        >
          {repos ? (
            repos.map((repo) => (
              <RepoCard key={repo.id} repo={repo} isDark={isDark} view={view} />
            ))
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-2xl font-medium">No repos found</span>
            </div>
          )}
        </div>
        <div className="w-full flex justify-center items-center my-2">
          <span className="text-2xl font-medium cursor-pointer">
            <FaAngleLeft />
          </span>
          <span className="text-xl">1/2</span>
          <span className="text-2xl font-medium cursor-pointer">
            <FaAngleRight />
          </span>
        </div>
      </div>
    </div>
  );
}
