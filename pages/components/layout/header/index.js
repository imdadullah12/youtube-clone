/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useState } from "react";

const Header = () => {
  const [toggle, setToggle] = useState(true);
  const menus = [
    {
      label: "home",
      icon: "home",
    },
    {
      label: "shorts",
      icon: "app_shortcut",
    },
    {
      label: "Music",
      icon: "headphones",
    },
    {
      label: "Playlist",
      icon: "playlist_add",
    },
    {
      label: "History",
      icon: "history",
    },
    {
      label: "Watch Later",
      icon: "schedule",
    },
    {
      label: "Your Videos",
      icon: "video_library",
    },
    {
      label: "subscription",
      icon: "subscriptions",
    },
  ];
  const videos = [
    {
      title: "Creating a Hacking Animation using JavaScript",
      thumbnail:
        "https://i.ytimg.com/vi/-vLtT91fSQQ/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBSGzG_8S3Z_Hi1AbR0B0dKsX0Kpg",
      views: "10k",
      uploaded: "3 months ago",
      channel: "Imdad Edition",
      channel_image:
        "https://yt3.googleusercontent.com/8AakyU6UeQ8_tifxyT2pDpRrI2OGaFcEbLOE2AekFFhh46fWVq5msqAX8jNTxKNmtE7PKQtCvw=s176-c-k-c0x00ffffff-no-rj",
    },
    {
      title: "Earn Money by Selling Book with ChatGPT",
      thumbnail:
        "https://i.ytimg.com/vi/0ZYZLJla5pI/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBbV_iBIvxnvcQBzTpd_SK9PIQlqw",
      views: "25k",
      uploaded: "3 months ago",
      channel: "Imdad Edition",
      channel_image:
        "https://yt3.googleusercontent.com/8AakyU6UeQ8_tifxyT2pDpRrI2OGaFcEbLOE2AekFFhh46fWVq5msqAX8jNTxKNmtE7PKQtCvw=s176-c-k-c0x00ffffff-no-rj",
    },
    {
      title: "Designing Mobile App | Adobe XD Tutorial | Graphics Design",
      thumbnail:
        "https://i.ytimg.com/vi/wui8Bx7d-Pg/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBKJKSOU7wE0QZui52SwdGW-wSakA",
      views: "1.8k",
      uploaded: "3 months ago",
      channel: "Imdad Edition",
      channel_image:
        "https://yt3.googleusercontent.com/8AakyU6UeQ8_tifxyT2pDpRrI2OGaFcEbLOE2AekFFhh46fWVq5msqAX8jNTxKNmtE7PKQtCvw=s176-c-k-c0x00ffffff-no-rj",
    },
    {
      title: "Studio Beej के Accessories मे Kya Sharks Invest Karega?",
      thumbnail:
        "https://i.ytimg.com/vi/Rd-vESd7dRM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAxyDp9xVJLAmTJCILkcwkYSVtLsw",
      views: "80k",
      uploaded: "4 months ago",
      channel: "Share Tank",
      channel_image:
        "https://yt3.ggpht.com/g_V8HPxmEoE8exOkI1F1Vud9rg91SccSjoEKNdGE9otuFnVUxbFTqI71g33SS367FFhOLtrCBqU=s68-c-k-c0x00ffffff-no-rj",
    },
    {
      title: "Creating a Hacking Animation using JavaScript",
      thumbnail:
        "https://i.ytimg.com/vi/-vLtT91fSQQ/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBSGzG_8S3Z_Hi1AbR0B0dKsX0Kpg",
      views: "10k",
      uploaded: "3 months ago",
      channel: "Imdad Edition",
      channel_image:
        "https://yt3.googleusercontent.com/8AakyU6UeQ8_tifxyT2pDpRrI2OGaFcEbLOE2AekFFhh46fWVq5msqAX8jNTxKNmtE7PKQtCvw=s176-c-k-c0x00ffffff-no-rj",
    },
    {
      title: "Earn Money by Selling Book with ChatGPT",
      thumbnail:
        "https://i.ytimg.com/vi/0ZYZLJla5pI/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBbV_iBIvxnvcQBzTpd_SK9PIQlqw",
      views: "25k",
      uploaded: "3 months ago",
      channel: "Imdad Edition",
      channel_image:
        "https://yt3.googleusercontent.com/8AakyU6UeQ8_tifxyT2pDpRrI2OGaFcEbLOE2AekFFhh46fWVq5msqAX8jNTxKNmtE7PKQtCvw=s176-c-k-c0x00ffffff-no-rj",
    },
    {
      title: "Designing Mobile App | Adobe XD Tutorial | Graphics Design",
      thumbnail:
        "https://i.ytimg.com/vi/wui8Bx7d-Pg/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBKJKSOU7wE0QZui52SwdGW-wSakA",
      views: "1.8k",
      uploaded: "3 months ago",
      channel: "Imdad Edition",
      channel_image:
        "https://yt3.googleusercontent.com/8AakyU6UeQ8_tifxyT2pDpRrI2OGaFcEbLOE2AekFFhh46fWVq5msqAX8jNTxKNmtE7PKQtCvw=s176-c-k-c0x00ffffff-no-rj",
    },
    {
      title: "Studio Beej के Accessories मे Kya Sharks Invest Karega?",
      thumbnail:
        "https://i.ytimg.com/vi/Rd-vESd7dRM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAxyDp9xVJLAmTJCILkcwkYSVtLsw",
      views: "80k",
      uploaded: "4 months ago",
      channel: "Share Tank",
      channel_image:
        "https://yt3.ggpht.com/g_V8HPxmEoE8exOkI1F1Vud9rg91SccSjoEKNdGE9otuFnVUxbFTqI71g33SS367FFhOLtrCBqU=s68-c-k-c0x00ffffff-no-rj",
    },
    {
      title: "Creating a Hacking Animation using JavaScript",
      thumbnail:
        "https://i.ytimg.com/vi/-vLtT91fSQQ/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBSGzG_8S3Z_Hi1AbR0B0dKsX0Kpg",
      views: "10k",
      uploaded: "3 months ago",
      channel: "Imdad Edition",
      channel_image:
        "https://yt3.googleusercontent.com/8AakyU6UeQ8_tifxyT2pDpRrI2OGaFcEbLOE2AekFFhh46fWVq5msqAX8jNTxKNmtE7PKQtCvw=s176-c-k-c0x00ffffff-no-rj",
    },
    {
      title: "Earn Money by Selling Book with ChatGPT",
      thumbnail:
        "https://i.ytimg.com/vi/0ZYZLJla5pI/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBbV_iBIvxnvcQBzTpd_SK9PIQlqw",
      views: "25k",
      uploaded: "3 months ago",
      channel: "Imdad Edition",
      channel_image:
        "https://yt3.googleusercontent.com/8AakyU6UeQ8_tifxyT2pDpRrI2OGaFcEbLOE2AekFFhh46fWVq5msqAX8jNTxKNmtE7PKQtCvw=s176-c-k-c0x00ffffff-no-rj",
    },
    {
      title: "Designing Mobile App | Adobe XD Tutorial | Graphics Design",
      thumbnail:
        "https://i.ytimg.com/vi/wui8Bx7d-Pg/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBKJKSOU7wE0QZui52SwdGW-wSakA",
      views: "1.8k",
      uploaded: "3 months ago",
      channel: "Imdad Edition",
      channel_image:
        "https://yt3.googleusercontent.com/8AakyU6UeQ8_tifxyT2pDpRrI2OGaFcEbLOE2AekFFhh46fWVq5msqAX8jNTxKNmtE7PKQtCvw=s176-c-k-c0x00ffffff-no-rj",
    },
    {
      title: "Studio Beej के Accessories मे Kya Sharks Invest Karega?",
      thumbnail:
        "https://i.ytimg.com/vi/Rd-vESd7dRM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAxyDp9xVJLAmTJCILkcwkYSVtLsw",
      views: "80k",
      uploaded: "4 months ago",
      channel: "Share Tank",
      channel_image:
        "https://yt3.ggpht.com/g_V8HPxmEoE8exOkI1F1Vud9rg91SccSjoEKNdGE9otuFnVUxbFTqI71g33SS367FFhOLtrCBqU=s68-c-k-c0x00ffffff-no-rj",
    },
    {
      title: "Creating a Hacking Animation using JavaScript",
      thumbnail:
        "https://i.ytimg.com/vi/-vLtT91fSQQ/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBSGzG_8S3Z_Hi1AbR0B0dKsX0Kpg",
      views: "10k",
      uploaded: "3 months ago",
      channel: "Imdad Edition",
      channel_image:
        "https://yt3.googleusercontent.com/8AakyU6UeQ8_tifxyT2pDpRrI2OGaFcEbLOE2AekFFhh46fWVq5msqAX8jNTxKNmtE7PKQtCvw=s176-c-k-c0x00ffffff-no-rj",
    },
    {
      title: "Earn Money by Selling Book with ChatGPT",
      thumbnail:
        "https://i.ytimg.com/vi/0ZYZLJla5pI/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBbV_iBIvxnvcQBzTpd_SK9PIQlqw",
      views: "25k",
      uploaded: "3 months ago",
      channel: "Imdad Edition",
      channel_image:
        "https://yt3.googleusercontent.com/8AakyU6UeQ8_tifxyT2pDpRrI2OGaFcEbLOE2AekFFhh46fWVq5msqAX8jNTxKNmtE7PKQtCvw=s176-c-k-c0x00ffffff-no-rj",
    },
    {
      title: "Designing Mobile App | Adobe XD Tutorial | Graphics Design",
      thumbnail:
        "https://i.ytimg.com/vi/wui8Bx7d-Pg/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBKJKSOU7wE0QZui52SwdGW-wSakA",
      views: "1.8k",
      uploaded: "3 months ago",
      channel: "Imdad Edition",
      channel_image:
        "https://yt3.googleusercontent.com/8AakyU6UeQ8_tifxyT2pDpRrI2OGaFcEbLOE2AekFFhh46fWVq5msqAX8jNTxKNmtE7PKQtCvw=s176-c-k-c0x00ffffff-no-rj",
    },
    {
      title: "Studio Beej के Accessories मे Kya Sharks Invest Karega?",
      thumbnail:
        "https://i.ytimg.com/vi/Rd-vESd7dRM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAxyDp9xVJLAmTJCILkcwkYSVtLsw",
      views: "80k",
      uploaded: "4 months ago",
      channel: "Share Tank",
      channel_image:
        "https://yt3.ggpht.com/g_V8HPxmEoE8exOkI1F1Vud9rg91SccSjoEKNdGE9otuFnVUxbFTqI71g33SS367FFhOLtrCBqU=s68-c-k-c0x00ffffff-no-rj",
    },
    {
      title: "Creating a Hacking Animation using JavaScript",
      thumbnail:
        "https://i.ytimg.com/vi/-vLtT91fSQQ/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBSGzG_8S3Z_Hi1AbR0B0dKsX0Kpg",
      views: "10k",
      uploaded: "3 months ago",
      channel: "Imdad Edition",
      channel_image:
        "https://yt3.googleusercontent.com/8AakyU6UeQ8_tifxyT2pDpRrI2OGaFcEbLOE2AekFFhh46fWVq5msqAX8jNTxKNmtE7PKQtCvw=s176-c-k-c0x00ffffff-no-rj",
    },
    {
      title: "Earn Money by Selling Book with ChatGPT",
      thumbnail:
        "https://i.ytimg.com/vi/0ZYZLJla5pI/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBbV_iBIvxnvcQBzTpd_SK9PIQlqw",
      views: "25k",
      uploaded: "3 months ago",
      channel: "Imdad Edition",
      channel_image:
        "https://yt3.googleusercontent.com/8AakyU6UeQ8_tifxyT2pDpRrI2OGaFcEbLOE2AekFFhh46fWVq5msqAX8jNTxKNmtE7PKQtCvw=s176-c-k-c0x00ffffff-no-rj",
    },
    {
      title: "Designing Mobile App | Adobe XD Tutorial | Graphics Design",
      thumbnail:
        "https://i.ytimg.com/vi/wui8Bx7d-Pg/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBKJKSOU7wE0QZui52SwdGW-wSakA",
      views: "1.8k",
      uploaded: "3 months ago",
      channel: "Imdad Edition",
      channel_image:
        "https://yt3.googleusercontent.com/8AakyU6UeQ8_tifxyT2pDpRrI2OGaFcEbLOE2AekFFhh46fWVq5msqAX8jNTxKNmtE7PKQtCvw=s176-c-k-c0x00ffffff-no-rj",
    },
    {
      title: "Studio Beej के Accessories मे Kya Sharks Invest Karega?",
      thumbnail:
        "https://i.ytimg.com/vi/Rd-vESd7dRM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAxyDp9xVJLAmTJCILkcwkYSVtLsw",
      views: "80k",
      uploaded: "4 months ago",
      channel: "Share Tank",
      channel_image:
        "https://yt3.ggpht.com/g_V8HPxmEoE8exOkI1F1Vud9rg91SccSjoEKNdGE9otuFnVUxbFTqI71g33SS367FFhOLtrCBqU=s68-c-k-c0x00ffffff-no-rj",
    },
    {
      title: "Creating a Hacking Animation using JavaScript",
      thumbnail:
        "https://i.ytimg.com/vi/-vLtT91fSQQ/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBSGzG_8S3Z_Hi1AbR0B0dKsX0Kpg",
      views: "10k",
      uploaded: "3 months ago",
      channel: "Imdad Edition",
      channel_image:
        "https://yt3.googleusercontent.com/8AakyU6UeQ8_tifxyT2pDpRrI2OGaFcEbLOE2AekFFhh46fWVq5msqAX8jNTxKNmtE7PKQtCvw=s176-c-k-c0x00ffffff-no-rj",
    },
    {
      title: "Earn Money by Selling Book with ChatGPT",
      thumbnail:
        "https://i.ytimg.com/vi/0ZYZLJla5pI/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBbV_iBIvxnvcQBzTpd_SK9PIQlqw",
      views: "25k",
      uploaded: "3 months ago",
      channel: "Imdad Edition",
      channel_image:
        "https://yt3.googleusercontent.com/8AakyU6UeQ8_tifxyT2pDpRrI2OGaFcEbLOE2AekFFhh46fWVq5msqAX8jNTxKNmtE7PKQtCvw=s176-c-k-c0x00ffffff-no-rj",
    },
    {
      title: "Designing Mobile App | Adobe XD Tutorial | Graphics Design",
      thumbnail:
        "https://i.ytimg.com/vi/wui8Bx7d-Pg/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBKJKSOU7wE0QZui52SwdGW-wSakA",
      views: "1.8k",
      uploaded: "3 months ago",
      channel: "Imdad Edition",
      channel_image:
        "https://yt3.googleusercontent.com/8AakyU6UeQ8_tifxyT2pDpRrI2OGaFcEbLOE2AekFFhh46fWVq5msqAX8jNTxKNmtE7PKQtCvw=s176-c-k-c0x00ffffff-no-rj",
    },
    {
      title: "Studio Beej के Accessories मे Kya Sharks Invest Karega?",
      thumbnail:
        "https://i.ytimg.com/vi/Rd-vESd7dRM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAxyDp9xVJLAmTJCILkcwkYSVtLsw",
      views: "80k",
      uploaded: "4 months ago",
      channel: "Share Tank",
      channel_image:
        "https://yt3.ggpht.com/g_V8HPxmEoE8exOkI1F1Vud9rg91SccSjoEKNdGE9otuFnVUxbFTqI71g33SS367FFhOLtrCBqU=s68-c-k-c0x00ffffff-no-rj",
    },
  ];
  return (
    <>
      <nav className="fixed top-0 left-0 w-full h-16 px-5 flex items-center justify-between border-b bg-white backdrop-blur-lg">
        <div className="nav-items flex items-center gap-x-3">
          <button
            onClick={() => setToggle(!toggle)}
            className="w-10 h-10 rounded-full flex justify-center items-center hover:bg-gray-200"
          >
            <span className="material-icons-outlined" style={{ fontSize: 25 }}>
              menu
            </span>
          </button>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
            alt="Logo"
            width={100}
            height={100}
          />
        </div>
        <div className="searchflex w-1/2 flex-col hidden lg:block">
          <form action="" className="flex">
            <input
              type="text"
              className="border border-blank rounded-full rounded-r h-10 flex-1 px-5 flex items-center justify-center focus:outline-slate-200"
              placeholder="Search"
            />
            <button className="border border-blank rounded-l w-20 h-10 flex justify-center bg-slate-100 items-center rounded-full hover:bg-gray-200">
              <span
                className="material-icons-outlined"
                style={{ fontSize: 25 }}
              >
                search
              </span>
            </button>
          </form>
        </div>
        <div className="accounts flex items-center gap-x-3">
          <button className="w-10 h-10 rounded-full flex justify-center items-center hover:bg-gray-200">
            <span className="material-icons-outlined" style={{ fontSize: 25 }}>
              videocam
            </span>
          </button>
          <button className="w-10 h-10 rounded-full flex justify-center items-center hover:bg-gray-200">
            <span className="material-icons-outlined" style={{ fontSize: 25 }}>
              notifications
            </span>
          </button>
          <button className="w-10 h-10 rounded-full flex justify-center items-center hover:bg-gray-200">
            <img
              src="https://yt3.ggpht.com/yti/AHXOFjWjKUdJcqMol63gVvAAUYyzRgsdCHPGWaTE0hxChA=s88-c-k-c0x00ffffff-no-rj-mo"
              alt=""
              className="rounded-full"
            />
          </button>
        </div>
      </nav>
      <aside
        className="h-full fixed top-0 left mt-16 px-5 flex flex-col gap-y-3 border-r pt-3"
        style={{
          display: toggle ? "flex" : "none",
          width: toggle ? 250 : 0,
          transition: "0.2s",
        }}
      >
        {menus.map((item, index) => (
          <button
            key={index}
            className="flex gap-x-5 py-2 px-2 rounded-lg hover:bg-gray-100"
          >
            <span className="material-icons-outlined" style={{ fontSize: 25 }}>
              {item.icon}
            </span>
            <span className="capitalize text-slate-700">{item.label}</span>
          </button>
        ))}
      </aside>
      <section
        className="mt-16 p-5"
        style={{
          marginLeft: toggle ? 250 : 0,
        }}
      >
        <div className="main-section grid grid-cols-1 md:grid-cols-4 gap-4 gap-y-7 ">
          {videos.map((video, index) => (
            <div className="video-with-thumbnail" key={index}>
              <img
                src={video.thumbnail}
                alt=""
                className="rounded-lg shadow-md w-full"
              />
              <div className="information mt-2 flex gap-x-4">
                <img
                  src={video.channel_image}
                  alt=""
                  className="rounded-full w-10 h-10"
                />
                <div className="details">
                  <h6 className="font-bold">{video.title}</h6>
                  <div className="channel">
                    <p className="text-sm flex gap-1 items-center text-slate-500">
                      {video.channel}
                      <span
                        className="material-icons text-gray-700"
                        style={{ fontSize: 17 }}
                      >
                        check_circle
                      </span>
                    </p>
                    <p className="text-sm text-slate-500">
                      {video.views} views &#8226; {video.uploaded}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Header;
