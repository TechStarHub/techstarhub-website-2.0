import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { anOldHope } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import reactIcon from '../../assets/react.svg';
import javascriptIcon from '../../assets/js.svg';
import pythonIcon from '../../assets/python.svg';
import { AiOutlineClose } from 'react-icons/ai';
import { motion } from 'framer-motion';

const learnings = ['React', 'JavaScript', 'Python'];
const languages = ['react', 'javascript', 'python'];

const code = [
  `import React from 'react';
import ReactDOM from 'react-dom/client';

function Hello(props) {
    return <h1>Hello World!</h1>;   
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(<Hello />);
  `,
  `function factorial(n) {
if (n === 0) {
    return 1;
}
return n * factorial(n - 1);

console.log(factorial(5)); // 120

`,
  `from fastapi import FastAPI
import uvicorn

app = FastAPI()
  
@app.get("/")
def read_root():
    return {"Hello": "World"}

if __name__ == "__main__":
    uvicorn.run(app)
  `,
];

export default function Learn() {
  const mode = useSelector((state) => state.mode.mode);
  const isDark = mode === 'dark' ? true : false;

  const [codeIdx, setCodeIdx] = useState(0);

  return (
    <div
      className="w-full flex flex-col gap-5 justify-center items-center min-h-screen py-10"
      style={{
        backgroundColor: isDark ? '#0f172a' : '#ffffff',
        color: isDark ? '#fff' : '#000',
      }}
    >
      <div className="w-full px-4 md:px-[9vw] mb-4">
        <h6 className="text-xl font-bold text-[#B15EFF] uppercase">
          Full Stack Web Development
        </h6>
        <h2 className="text-3xl mt-1 capitalize">
          Learn to build full stack web applications.
        </h2>
      </div>

      <div className="w-full flex flex-col gap-5 md:flex-row justify-center items-center">
        <div className=" w-[90vw] md:w-[40vw] p-4 bg-gray-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 flex flex-col gap-2">
          <div className="w-full flex  ">
            <span
              style={{
                border: codeIdx == 0 && '0 0 1px 0 #fff',
                borderBottom: codeIdx == 0 && '2px solid #00d8ff',
              }}
              onClick={() => setCodeIdx(0)}
              className="text-md cursor-pointer rounded hover:bg-slate-600 px-2 py-1 "
            >
              <img src={reactIcon} className="w-4 inline-block mr-1" alt="" />
              <span className="hidden sm:inline-block">React.jsx</span>
              <AiOutlineClose className="sm:inline-block ml-2 hidden" />
            </span>
            <span
              style={{
                border: codeIdx == 1 && '0 0 1px 0 #fff',
                borderBottom: codeIdx == 1 && '2px solid #F4CE14',
              }}
              onClick={() => setCodeIdx(1)}
              className="text-md cursor-pointer rounded hover:bg-slate-600 px-2 py-1 "
            >
              <img
                src={javascriptIcon}
                className="w-4 -mt-1 inline-block mr-1"
                alt=""
              />

              <span className="hidden sm:inline-block">JavaScript.js</span>
              <AiOutlineClose className="sm:inline-block ml-2 hidden" />
            </span>
            <span
              style={{
                border: codeIdx == 2 && '0 0 1px 0 #fff',
                borderBottom: codeIdx == 2 && '2px solid #45474B',
              }}
              onClick={() => setCodeIdx(2)}
              className="text-md cursor-pointer rounded hover:bg-slate-600 px-2 py-1 "
            >
              <img
                src={pythonIcon}
                className="w-5 -mt-1 inline-block mr-1"
                alt=""
              />

              <span className="hidden sm:inline-block">Python.py</span>
              <AiOutlineClose className="sm:inline-block ml-2 hidden" />
            </span>
          </div>
          <div className="">
            <SyntaxHighlighter
              useInlineStyles
              showLineNumbers
              showInlineLineNumbers
              language={languages[codeIdx]}
              style={anOldHope}
              className="min-h-[45vh]"
            >
              {code[codeIdx]}
            </SyntaxHighlighter>
            <code className=""></code>
          </div>
        </div>
        <div className="w-[40vw] flex justify-center items-center">
          {codeIdx === 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="w-full flex flex-col justify-center items-center gap-4"
            >
              <motion.img
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
                src={reactIcon}
                className="w-1/2  "
                style={{ filter: 'drop-shadow(0px 0px 10px #00d8ff)' }}
                alt=""
              />
              <h2 className="text-3xl text-center mt-6">
                Learn React by building projects.
              </h2>
            </motion.div>
          )}
          {codeIdx === 1 && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="w-full flex flex-col justify-center items-center"
            >
              <motion.img
                whileHover={{ scale: 1.1 }}
                src={javascriptIcon}
                className="w-1/2  "
                style={{ filter: 'drop-shadow(0px 0px 10px #F4CE14)' }}
                alt=""
              />
              <h2 className="text-3xl text-center mt-6">
                Start your coding journey with JavaScript.
              </h2>
            </motion.div>
          )}
          {codeIdx === 2 && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="w-full flex flex-col justify-center items-center"
            >
              <motion.img
                whileHover={{ scale: 1.1 }}
                src={pythonIcon}
                className="w-1/2  "
                style={{ filter: 'drop-shadow(0px 0px 10px #45474B)' }}
                alt=""
              />
              <h2 className="text-3xl text-center mt-6">
                Build your backend APIs with Python.
              </h2>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
