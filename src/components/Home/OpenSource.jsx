import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import wave from '../../assets/wave.svg';
import githubIcon from '../../assets/github.svg';
import gitIcon from '../../assets/git.svg';
import gitlabIcon from '../../assets/gitlab.svg';
import { SiGnubash } from 'react-icons/si';
import { BsGithub } from 'react-icons/bs';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { anOldHope } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import GithubUI from './GithubUI';

const code = `user@device MINGW64 /d/Projects (main) $ git add .
user@device MINGW64 /d/Projects (main) $ git status
On branch main
Your branch is up to date with 'origin/main'.

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        new file:   main.js

user@device MINGW64 /d/Projects (main) $ git commit -m "Added a new feature"
user@device MINGW64 /d/Projects (main) $ git pull origin main
user@device MINGW64 /d/Projects (main) $ git push origin main
`;

export default function OpenSource() {
  const mode = useSelector((state) => state.mode.mode);
  const isDark = mode === 'dark' ? true : false;

  const [codeIdx, setCodeIdx] = useState(0);

  return (
    <div
      className="w-full flex flex-col justify-center items-center min-h-screen relative py-10"
      style={{
        backgroundColor: isDark ? '#213555' : '#F0F0F0',
        color: isDark ? '#ffffff' : '#000000',
      }}
    >
      <img src={wave} alt="wave" className="absolute top-0 left-0 w-full" />

      <div className="w-full px-4 md:px-[9vw] mb-4 z-10">
        <h1 className="text-xl font-bold uppercase text-[#191D88]">
          Open Source Contribution
        </h1>
        <p className="text-3xl ">
          Make your first contribution to open source.
        </p>
      </div>

      <div className="w-full h-full flex flex-col md:flex-row justify-center items-center z-10">
        <div className=" w-[80vw] md:w-[40vw] flex ">
          <motion.img
            animate={{
              x: [0, 160, 0, 0],
              y: [0, 100, 200, 0],
              scale: [1, 1.1, 1.3, 1],
            }}
            style={{ filter: 'drop-shadow( 0 0 5px #00000055)' }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            src={githubIcon}
            className="w-full"
            alt=""
          />
          <motion.img
            animate={{
              x: [-100, 0, 0, -100],
              y: [100, 160, 0, 100],
              scale: [1, 1.1, 1.3, 1],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            src={gitIcon}
            style={{ filter: 'drop-shadow( 0 0 5px #F94A2955)' }}
            className="w-full"
            alt=""
          />
          <motion.img
            animate={{
              x: [0, -160, 0, 0],
              y: [0, 100, 200, 0],
              scale: [1, 1.1, 1.3, 1],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            src={gitlabIcon}
            style={{ filter: 'drop-shadow( 0 0 5px #F94A2955)' }}
            className="w-full"
            alt=""
          />
        </div>
        <div className="w-[100vw] md:w-[40vw] h-full">
          <div className="h-full w-full p-4 bg-gray-600 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 flex flex-col gap-1">
            <div className="flex w-full">
              <span
                style={{
                  border: codeIdx == 0 && '0 0 1px 0 #fff',
                  borderBottom: codeIdx == 0 && '2px solid #00FFCA',
                }}
                onClick={() => setCodeIdx(0)}
                className="text-md cursor-pointer rounded hover:bg-slate-600 px-2 py-1"
              >
                <SiGnubash className="inline-block mr-2" />
                <span className="mr-2">bash</span>
              </span>
              <span
                style={{
                  border: codeIdx == 1 && '0 0 1px 0 #fff',
                  borderBottom: codeIdx == 1 && '2px solid #181823',
                }}
                onClick={() => setCodeIdx(1)}
                className="text-md cursor-pointer rounded hover:bg-slate-600 px-2 py-1"
              >
                <BsGithub className="inline-block mr-2" />
                <span className="mr-2">GitHub</span>
              </span>
            </div>
            {codeIdx === 0 && (
              <SyntaxHighlighter
                language="bash"
                style={anOldHope}
                className="rounded-md"
              >
                {code}
              </SyntaxHighlighter>
            )}
            {codeIdx === 1 && (
              <div className="">
                <GithubUI />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
