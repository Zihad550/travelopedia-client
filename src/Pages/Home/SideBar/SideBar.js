import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { Fragment } from "react";

export default function Example({
  setFilter,
  setApplyFilter,
  filterOptions,
  setFilterOptions,
  setNoBlogs,
}) {
  const handleFilterOption = (e) => {
    setApplyFilter(false);
    const newData = { ...filterOptions };
    newData[e.target.name] = e.target.value;
    setFilterOptions(newData);
  };
  console.log(filterOptions);
  const authors = [
    { id: 1, name: "Select Author name" },
    { id: 2, name: "Muzahid" },
    { id: 3, name: "Rabbi" },
    { id: 4, name: "John" },
    { id: 5, name: "Muhaymin" },
    { id: 6, name: "Maria" },
    { id: 7, name: "Jehad Hossain" },
    { id: 8, name: "Albert Robin" },
    { id: 9, name: "Zunayet" },
  ];

  const countries = [
    {
      id: 8,
      name: "Select Country",
    },
    {
      id: 1,
      name: "Paris, France",
    },
    {
      id: 2,
      name: "London",
    },
    {
      id: 3,
      name: "Russia",
    },
    {
      id: 4,
      name: "Paris",
    },
    {
      id: 5,
      name: "India",
    },
    {
      id: 6,
      name: "Pakistan",
    },
    {
      id: 7,
      name: "Palestine",
    },
  ];
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
            <div className="px-5">
              <h4 className="text-2xl mt-5">Filter Options</h4>
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

              {/* custom filter */}
              <div>
                <h3 className="text-xl mt-3 mb-2">Custom filter options</h3>
                {/* filter by author */}
                <div>
                  <label
                    for="countries"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                  >
                    Filter by Author:
                  </label>
                  <select
                    name="author"
                    onChange={handleFilterOption}
                    id="countries"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    {authors.map((author) => (
                      <option key={author.id} value={author.name}>
                        {author.name}
                      </option>
                    ))}
                  </select>
                </div>
                {/* filter by author */}

                {/* filter by country */}
                <div className="mt-3">
                  <label
                    for="countries"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                  >
                    Filter by Country:
                  </label>
                  <select
                    name="country"
                    onChange={handleFilterOption}
                    id="countries"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    {countries.map((country) => (
                      <option key={country.id} value={country.name}>
                        {country.name}
                      </option>
                    ))}
                  </select>
                </div>
                {/* filter by country */}

                {/* Select Price Range */}
                {/* <div className="mt-3">
                  <label
                    for="countries"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                  >
                    Price Range:
                  </label>
                  <div className="flex">
                    <input
                      name="minPrice"
                      onBlur={handleFilterOption}
                      placeholder="Minium Price"
                      min="0"
                      type="number"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                    />
                    <input
                      onBlur={handleFilterOption}
                      name="maxPrice"
                      placeholder="Maximum Price"
                      min="0"
                      type="number"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ml-1"
                      required
                    />
                  </div>
                </div> */}
                {/* filter Select Price Range */}

                {/* filter applying btn */}
                <button
                  onClick={() => setApplyFilter(true)}
                  type="button"
                  className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 mt-3"
                >
                  Apply Custom Filter
                </button>
              </div>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
