import { HomeIcon } from "@heroicons/react/outline";

const Header = () => {
  return (
    <>
      <div className="flex flex-row">
        <div className="flex flex-grow text-lg lg:text-lg">
          <HomeIcon className="w-6 h-6 text-blue-600 font-bold" /> Dashboard
        </div>
        <div>
          <div className="relative inline-block text-left">
            <div
              className="
            inline-flex
            flex-row
            text-base text-gray-700
            hover:text-gray-500
            cursor-pointer
          "
            >
              Joel
              <svg
                className="-mr-1 ml-1 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>

            <div
              className="
            hidden
            absolute
            right-0
            mt-2
            w-56
            rounded-md
            shadow-lg
            bg-white
            ring-1 ring-black ring-opacity-5
            focus:outline-none
            z-30
          "
              id="profileDropdown"
            >
              <div className="py-1">
                <a className="text-gray-700 block px-4 py-2 text-sm">
                  Account settings
                </a>
                <a className="text-gray-700 block px-4 py-2 text-sm">Support</a>
                <div className="text-gray-700 block px-4 py-2 text-sm cursor-pointer">
                  Sign out
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
