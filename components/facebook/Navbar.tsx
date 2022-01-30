import Link from 'next/link'
import { FaSearch, FaFacebookSquare, FaDiscord } from 'react-icons/fa'

export default function Navbar() {
  return (
    <div className="fb-nav">
      <div
        className="ml-[16px] flex w-auto items-center py-2"
        style={{ width: '100%' }}
      >
        <svg
          viewBox="0 0 36 36"
          style={{
            display: 'block',
            cursor: 'pointer',
            textAlign: 'inherit',
            color: '#385898',
          }}
          fill="url(#jsc_s_12)"
          height="40"
          width="40"
        >
          <defs>
            <linearGradient
              x1="50%"
              x2="50%"
              y1="97.0782153%"
              y2="0%"
              id="jsc_s_12"
            >
              <stop offset="0%" stopColor="#0062E0"></stop>
              <stop offset="100%" stopColor="#19AFFF"></stop>
            </linearGradient>
          </defs>
          <path d="M15 35.8C6.5 34.3 0 26.9 0 18 0 8.1 8.1 0 18 0s18 8.1 18 18c0 8.9-6.5 16.3-15 17.8l-1-.8h-4l-1 .8z"></path>
          <path
            fill="white"
            d="M25 23l.8-5H21v-3.5c0-1.4.5-2.5 2.7-2.5H26V7.4c-1.3-.2-2.7-.4-4-.4-4.1 0-7 2.5-7 7v4h-4.5v5H15v12.7c1 .2 2 .3 3 .3s2-.1 3-.3V23h4z"
          ></path>
        </svg>

        <label className="fb-search-label">
          <span className="ml-[0.7rem] flex items-center ">
            <FaSearch />
          </span>
          <input
            type="search"
            id="searchInput"
            dir="ltr"
            placeholder="Search Facebook"
            className="relative box-border h-[40px] flex-grow rounded-full border-0 pl-[8px] pt-[7px] pb-[9px] pr-[8px] text-left text-black outline-none"
            style={{
              fontSize: '.9375rem',
              backgroundColor: 'transparent',
            }}
          />
        </label>
        <a
          id="hamburger"
          className="ml-2 flex flex-row items-center justify-center rounded-xl lg:hidden"
        >
          <svg
            viewBox="0 0 28 28"
            height="28"
            width="28"
            style={{ height: '28px', width: '28px', fill: '#65676b' }}
          >
            <path d="M23.5 4a1.5 1.5 0 110 3h-19a1.5 1.5 0 110-3h19zm0 18a1.5 1.5 0 110 3h-19a1.5 1.5 0 110-3h19zm0-9a1.5 1.5 0 110 3h-19a1.5 1.5 0 110-3h19z"></path>
          </svg>
        </a>
      </div>
      <div
        id="navigation"
        className="absolute bottom-2 right-1/2 left-1/2 top-[4px] ml-[16px] mt-2 hidden lg:block"
      >
        <div className="relative flex flex-row justify-center">
          <Link href="/facebook">
            <a>
              <div className="fb-active-square">
                <FaFacebookSquare size={35} color="#1a74e4" />
              </div>
            </a>
          </Link>
          <Link href="/discord">
            <a className="text-gray-800 hover:text-fb-900">
              <div className="fb-inactive-square">
                <FaDiscord size={35} />
              </div>
            </a>
          </Link>
          {/* <Link href="/facebook">
            <a>
              <div className="fb-inactive-square">
                <FaFacebookSquare size={35} color="#666768" />
              </div>
            </a>
          </Link>
          <Link href="/facebook">
            <a>
              <div className="fb-inactive-square">
                <FaFacebookSquare size={35} color="#666768" />
              </div>
            </a>
          </Link>
          <Link href="/facebook">
            <a>
              <div className="fb-inactive-square">
                <FaFacebookSquare size={35} color="#666768" />
              </div>
            </a>
          </Link> */}
        </div>
      </div>
      <div className="ml-[16px] flex w-auto flex-row items-center py-2">
        <div className="mr-4 flex flex-row justify-center">
          <a className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-gray-400">
            <svg viewBox="0 0 44 44" width="1em" height="1em">
              <circle cx="7" cy="7" r="6"></circle>
              <circle cx="22" cy="7" r="6"></circle>
              <circle cx="37" cy="7" r="6"></circle>
              <circle cx="7" cy="22" r="6"></circle>
              <circle cx="22" cy="22" r="6"></circle>
              <circle cx="37" cy="22" r="6"></circle>
              <circle cx="7" cy="37" r="6"></circle>
              <circle cx="22" cy="37" r="6"></circle>
              <circle cx="37" cy="37" r="6"></circle>
            </svg>
          </a>
          <a className="mx-2 flex h-[40px] w-[40px] items-center justify-center rounded-full bg-gray-400">
            <svg viewBox="0 0 28 28" height="20" width="20">
              <path d="M14 2.042c6.76 0 12 4.952 12 11.64S20.76 25.322 14 25.322a13.091 13.091 0 0 1-3.474-.461.956 .956 0 0 0-.641.047L7.5 25.959a.961.961 0 0 1-1.348-.849l-.065-2.134a.957.957 0 0 0-.322-.684A11.389 11.389 0 0 1 2 13.682C2 6.994 7.24 2.042 14 2.042ZM6.794 17.086a.57.57 0 0 0 .827.758l3.786-2.874a.722.722 0 0 1 .868 0l2.8 2.1a1.8 1.8 0 0 0 2.6-.481l3.525-5.592a.57.57 0 0 0-.827-.758l-3.786 2.874a.722.722 0 0 1-.868 0l-2.8-2.1a1.8 1.8 0 0 0-2.6.481Z"></path>
            </svg>
          </a>
          <a className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-gray-400">
            <svg viewBox="0 0 28 28" height="20" width="20">
              <path d="M7.847 23.488C9.207 23.488 11.443 23.363 14.467 22.806 13.944 24.228 12.581 25.247 10.98 25.247 9.649 25.247 8.483 24.542 7.825 23.488L7.847 23.488ZM24.923 15.73C25.17 17.002 24.278 18.127 22.27 19.076 21.17 19.595 18.724 20.583 14.684 21.369 11.568 21.974 9.285 22.113 7.848 22.113 7.421 22.113 7.068 22.101 6.79 22.085 4.574 21.958 3.324 21.248 3.077 19.976 2.702 18.049 3.295 17.305 4.278 16.073L4.537 15.748C5.2 14.907 5.459 14.081 5.035 11.902 4.086 7.022 6.284 3.687 11.064 2.753 15.846 1.83 19.134 4.096 20.083 8.977 20.506 11.156 21.056 11.824 21.986 12.355L21.986 12.356 22.348 12.561C23.72 13.335 24.548 13.802 24.923 15.73Z"></path>
            </svg>
          </a>
          <a className="mx-2 flex h-[40px] w-[40px] items-center justify-center rounded-full bg-gray-400">
            <svg
              viewBox="0 0 20 20"
              width="1em"
              height="1em"
              style={{
                width: '20px',
                height: '20px',
                fill: '#050505',
                display: 'block',
              }}
            >
              <path d="M10 14a1 1 0 0 1-.755-.349L5.329 9.182a1.367 1.367 0 0 1-.205-1.46A1.184 1.184 0 0 1 6.2 7h7.6a1.18 1.18 0 0 1 1.074.721 1.357 1.357 0 0 1-.2 1.457l-3.918 4.473A1 1 0 0 1 10 14z"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}
