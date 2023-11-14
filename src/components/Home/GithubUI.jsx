import React from 'react';
import { motion } from 'framer-motion';
import { BsGithub, BsArrowLeftShort } from 'react-icons/bs';
import { AiOutlineMenu } from 'react-icons/ai';
import { Avatar } from '@mui/material';
import { TbGitCompare } from 'react-icons/tb';
import { TiTick } from 'react-icons/ti';
import { DiGitCommit } from 'react-icons/di';
import { BsFileEarmarkDiff } from 'react-icons/bs';
import { PiUsersBold } from 'react-icons/pi';
import { FaMousePointer } from 'react-icons/fa';
import { GoCopy } from 'react-icons/go';
import { FiCode } from 'react-icons/fi';

export default function GithubUI() {
  const date = new Date();
  const dateStr = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
  return (
    <div className="w-full bg-[] relative">
      <motion.span
        animate={{ y: [0, 100, 170, 170, 170], x: [0, 100, 400, 400, 400] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'linear',
        }}
        className="absolute top-5 left-4 z-50"
      >
        <FaMousePointer className="text-2xl text-slate-100 " />
      </motion.span>
      <div className="flex justify-between items-center gap-3 w-full bg-[#010409] px-3 py-2">
        <div className="flex items-center gap-3">
          <span className="border border-slate-400 rounded p-[4px] cursor-pointer hover:border-slate-300">
            <AiOutlineMenu className="text-xl text-slate-400" />
          </span>
          <BsGithub className="text-3xl text-slate-100" />
          <span className="text-white">
            TechStarHub / <span className="font-medium">react</span>
          </span>
        </div>
        <span className=" cursor-pointer">
          <Avatar
            sx={{ width: 30, height: 30 }}
            sizes="sm"
            src="/identicon.png"
            className="  "
          />
        </span>
      </div>
      <div className="w-full bg-[#0d1117] p-3">
        <h4 className="text-lg text-white">Comparing changes</h4>
        <p className="text-sm text-slate-400">
          Choose two branches to see what’s changed or to start a new pull
          request.
        </p>
        <div className=" w-full flex items-center bg-gray-600 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-600 py-1 px-2 my-2">
          <TbGitCompare className="text-xl text-slate-400 mr-2" />
          <span className="text-slate-400 px-1 bg-gray-600 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-700">
            base:<span className="text-white">main</span>
          </span>
          <BsArrowLeftShort className="text-xl text-slate-400" />
          <span className="text-slate-400 px-1 bg-gray-600 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-700">
            compare:<span className="text-white">feature</span>
          </span>
          <span className="text-[#239150] font-medium ml-3">
            <TiTick className="text-2xl inline-block" />
            Able to merge.
          </span>
        </div>
        <div className="bg-[#537FE7] rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-[#537FE7] flex items-center justify-between px-2 py-1">
          <span className="text-white text-[12px]">
            Discuss and review the changes in this comparison with others.
          </span>
          <span className="w-[10rem] px-2 p-1 rounded-md text-white text-sm cursor-pointer bg-[#239150] hover:bg-[#2ea043]">
            Create pull request
          </span>
        </div>
        <div className="w-full px-2 py-2 border border-slate-400 mt-3 rounded flex justify-around">
          <span className="text-sm text-slate-400">
            <DiGitCommit className="inline-block mr-1 text-xl" />
            <span className="text-white mr-1">1</span>
            commits
          </span>
          <span className="text-sm text-slate-400">
            <BsFileEarmarkDiff className="inline-block mr-1 text-xl" />
            <span className="text-white mr-1">6</span>
            files changed
          </span>
          <span className="text-sm text-slate-400">
            <PiUsersBold className="inline-block mr-1 text-xl" />
            <span className="text-white mr-1">3</span>
            contributors
          </span>
        </div>
        <div className="w-full mt-3">
          <DiGitCommit className="inline-block mr-1 text-xl text-slate-400" />
          <span className="text-slate-400 text-sm">Commits on {dateStr}</span>
          <div className="w-full mt-2 border border-slate-300 rounded-md">
            <div className="px-3 py-2">
              <div className="flex items-start justify-between">
                <span className="text-white hover:underline hover:text-[#1b66f7] cursor-pointer ">
                  [ADD]: requested feature added
                </span>
                <div className="flex items-center gap-3">
                  <div className="bg-gray-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 flex items-center p-0">
                    <span className="p-1 cursor-pointer">
                      <GoCopy className="text-xl text-slate-400" />
                    </span>
                    <span className="text-sm border-l p-1 pl-2 cursor-pointer">
                      ebdgg56
                    </span>
                  </div>
                  <div className="bg-gray-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 p-1 cursor-pointer">
                    <FiCode className="text-xl text-slate-400" />
                  </div>
                </div>
              </div>
              <span className="flex items-center gap-2 text-sm">
                <Avatar
                  sx={{ width: 20, height: 20 }}
                  sizes="sm"
                  src="/identicon.png"
                  className="cursor-pointer"
                />
                <span className="text-white">user</span>
                <span className="text-slate-400">commited 2 hours ago</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
