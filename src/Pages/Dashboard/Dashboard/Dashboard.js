/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import logo from "../../../images/logo.png";
import MakeAdminModal from "../MakeAdminModal/MakeAdminModal";

const navigation = [
  { name: "Dashboard", href: "/dashboard", current: true },
  { name: "Home", href: "/home", current: false },
  { name: "Create New Blog", href: "/dashboard/createBlog", current: false },
  { name: "Approve", href: "/dashboard/approve", current: false },
];
const userNavigation = [{ name: "Sign out", href: "#" }];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Dashboard() {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();
  // modal functionality
  let [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-gray-800">
          {({ open }) => (
            <>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img className="" src={logo} alt="logo" />
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className={classNames(
                              item.current
                                ? "bg-gray-900 text-white"
                                : "text-gray-300 hover:bg-gray-700 hover:text-white",
                              "px-3 py-2 rounded-md text-sm font-medium"
                            )}
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                          </Link>
                        ))}
                        <button
                          onClick={() => setIsOpen(true)}
                          className="bg-gray-900 text-white hidden md:block"
                        >
                          Make Admin
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <MenuIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              {/* Mobile Menu */}
              <Disclosure.Panel className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as={Link}
                      to={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "block px-3 py-2 rounded-md text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}

                  <button
                    onClick={() => navigate("/dashboard/makeAdmin")}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    Make Admin
                  </button>
                  <button
                    onClick={logOut}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    Log Out
                  </button>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <main>
          <div>
            {/* Replace with your content */}

            <Outlet />
            {/* /End replace */}
          </div>
        </main>
      </div>

      <MakeAdminModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
