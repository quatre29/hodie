import { Bars3Icon } from "@heroicons/react/24/solid";
import { signOut, useSession } from "next-auth/react";

export default function Navbar(): JSX.Element {
  const { data: sessionData } = useSession();

  return (
    <div className="navbar bg-base-100 px-8">
      <div className="flex-1">
        <label
          htmlFor="my-drawer"
          className="btn-ghost drawer-button btn text-xl normal-case"
        >
          <Bars3Icon className=" h-10" />
        </label>
      </div>

      <div className="flex-none">
        <button className="btn-ghost btn-circle btn mx-4">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="badge-primary badge badge-xs indicator-item"></span>
          </div>
        </button>
        <div className="dropdown-end dropdown">
          <label tabIndex={0} className="btn-ghost btn-circle avatar btn">
            <div className="w-10 rounded-full">
              <img src={sessionData?.user.image!} />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a onClick={() => void signOut()}>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
