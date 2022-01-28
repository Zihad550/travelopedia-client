import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { Fragment } from "react";

export default function Example({ setFilter }) {
  return (
    <div className="right-0 w-full md:w-32 mr-1 text-right absolute top-16 ">
      <Menu as="div" className="relative inline-block text-left w-full ">
        <div>
          <Menu.Button className="inline-flex justify-center w-full md:w-32 px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md  md:hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 mt-1">
            Filter
            <ChevronDownIcon
              className="w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none h-screen">
            <div className="p-5">
              <h4 className="text-2xl">Top Rated Spots</h4>
              <p>Palestine</p>
              <p>Dubai</p>
              <p>Chicago</p>
              <p>Paris</p>
            </div>
            <div className="px-5">
              <h4 className="text-2xl">Filter Options</h4>
              <button
                onClick={() => setFilter("topRated")}
                className="bg-yellow-500 rounded-lg py-1 px-2 text-white my-2 focus:bg-green-500"
              >
                Top Rated
              </button>
              <button
                onClick={() => setFilter("leastRated")}
                className="bg-yellow-500 rounded-lg py-1 px-2 text-white my-2 focus:bg-green-500"
              >
                Least Rated
              </button>
              <button
                onClick={() => setFilter("mostExpensive")}
                className="bg-yellow-500 rounded-lg py-1 px-2 text-white my-2 focus:bg-green-500"
              >
                Most Expensive
              </button>
              <button
                onClick={() => setFilter("leastExpensive")}
                className="bg-yellow-500 rounded-lg py-1 px-2 text-white my-2 focus:bg-green-500"
              >
                Least Expensive
              </button>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
