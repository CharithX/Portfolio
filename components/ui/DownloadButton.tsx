
"use client"; 

import React from "react";

const DownloadButton = () => {
  const handleDownloadClick = () => {
    const googleDriveFileUrl =
      "https://drive.google.com/file/d/1lQXK71915vXd9ENq0nUEs2LqXF5KWZj4/view?usp=sharing";
    window.open(googleDriveFileUrl, "_blank");
  };

  return (
    <button
      className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
      onClick={handleDownloadClick}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00e599_0%,#393BB2_50%,#00e599_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-1 text-sm font-medium text-white backdrop-blur-3xl">
        Download CV
      </span>
    </button>
  );
};

export default DownloadButton;
