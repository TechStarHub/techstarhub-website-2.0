import React from 'react';
import { Link } from 'react-router-dom';
import { FaCodeFork } from 'react-icons/fa6';
import { FaRegStar } from 'react-icons/fa6';
import { GoIssueOpened } from 'react-icons/go';
import { RiGitPullRequestLine } from 'react-icons/ri';
import { SiGoogledocs } from 'react-icons/si';

export default function RepoCard({ repo, key, isDark, view = 'list' }) {
  const lastUpdated = new Date(repo.pushed_at).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  const getColor = (language) => {
    switch (language) {
      case 'JavaScript':
        return '#f1e05a';
      case 'TypeScript':
        return '#2b7489';
      case 'Python':
        return '#3572A5';
      case 'C++':
        return '#f34b7d';
      case 'C':
        return '#555555';
      case 'Shell':
        return '#89e051';
      case 'Java':
        return '#b07219';
      case 'Rust':
        return '#dea584';
      case 'Ruby':
        return '#701516';
      case 'Dart':
        return '#00B4AB';
      case 'CSS':
        return '#563d7c';
      case 'Go':
        return '#00ADD8';
      case 'PHP':
        return '#4F5D95';
      case 'C#':
        return '#178600';
      default:
        return '#fff';
    }
  };
  return (
    <div
      className="p-3 bg-gray-600 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100"
      style={{
        color: isDark ? '#fff' : '#000',
        borderColor: isDark ? '#dddddd' : '#000',
      }}
      key={key}
    >
      <div className="flex items-center gap-2">
        <Link
          to={repo.html_url}
          className="text-2xl font-medium text-[#2f81f7] hover:underline"
        >
          {repo.name}
        </Link>
        <span className="px-2 rounded-full bg-gray-600 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
          {repo.private ? `Private` : `Public`}
        </span>
      </div>
      <div className="flex flex-col">
        <p
          className="text-sm font-medium text-slate-300 mt-1"
          style={{ color: isDark ? '' : '#000' }}
        >
          {repo.description == null ? 'No description' : repo.description}
        </p>
        {view == 'list' && (
          <div className="flex items-center flex-wrap gap-1 mt-2">
            {repo.topics.length != 0 ? (
              repo.topics.map((topic) => (
                <span className="px-2 py-0 rounded-full bg-[#2f81f7] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-[#2f81f7] text-sm font-medium text-[#2f81f7] hover:bg-opacity-30">
                  {topic}
                </span>
              ))
            ) : (
              <span className="text-sm">No topics</span>
            )}
          </div>
        )}
        <div className="flex items-center gap-3 mt-2 text-sm">
          <div className="flex items-center gap-1">
            <span
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: getColor(repo.language) }}
            ></span>
            <span className="">
              {repo.language == null ? 'N/A' : repo.language}
            </span>
          </div>
          <div className="flex items-center gap-1 hover:text-[#2f81f7] hover:scale-[1.1] cursor-pointer">
            <FaCodeFork />
            <span>{repo.forks}</span>
          </div>
          <div className="flex items-center gap-1 hover:text-[#2f81f7] hover:scale-[1.1] cursor-pointer">
            <FaRegStar />
            <span>{repo.stargazers_count}</span>
          </div>
          <div className="flex items-center gap-1 hover:text-[#2f81f7] hover:scale-[1.1] cursor-pointer">
            <GoIssueOpened />
            <span>{repo.open_issues}</span>
          </div>
          <div className="flex items-center gap-1 hover:text-[#2f81f7] hover:scale-[1.1] cursor-pointer">
            <RiGitPullRequestLine />
            <span>{repo.open_issues}</span>
          </div>
          {view == 'list' && (
            <div className="hidden sm:flex items-center gap-1 ">
              <SiGoogledocs />
              <span className="text-sm font-medium hover:text-orange-500">
                {repo.license == null ? 'No license' : repo.license.name}
              </span>
            </div>
          )}
          {view == 'list' && (
            <div className="hidden sm:flex items-center gap-1">
              <span className="text-sm  ">Last updated on </span>
              <span className="text-sm font-medium ">{lastUpdated}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
