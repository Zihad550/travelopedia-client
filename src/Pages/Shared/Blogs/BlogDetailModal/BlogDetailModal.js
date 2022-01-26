import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dialog, Transition } from "@headlessui/react";
import { StarIcon } from "@heroicons/react/solid";
import { Fragment } from "react";

export default function BlogDetailModal({ isOpen, setIsOpen, blog }) {
  function closeModal() {
    setIsOpen(false);
  }
  const {
    date,
    expense,
    location,
    rating,
    src,
    time,
    title,
    author,
    description,
  } = blog;

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto "
          onClose={closeModal}
        >
          <div className="min-h-screen text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                {/* title */}
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  {title}
                </Dialog.Title>
                {/* about */}
                <div className="mt-2">
                  <p className="text-sm text-gray-500">{description}</p>
                </div>
                {/* more info */}
                <div className="px-3 my-4">
                  {/* card info */}
                  <div className="flex justify-between  mb-2">
                    <div>
                      <p className="">Location: {location}</p>
                      <p>
                        {date}
                        <span className="ml-1">at: {time}</span>
                      </p>
                    </div>
                    <div>
                      <p>Total Expense: {expense} $</p>
                      <p>
                        Rating:
                        {[...Array(parseInt(rating))].map((rate) => (
                          <>
                            <StarIcon
                              key={rate}
                              className="text-orange-300  h-5 w-5 flex-shrink-0 inline-block"
                              aria-hidden="true"
                            />
                          </>
                        ))}
                      </p>
                    </div>
                  </div>
                  {/* card author information and contact */}
                  <div className="flex justify-between border-t-slate-500 border-t-2 pt-3">
                    <p>
                      <FontAwesomeIcon className="mr-1" icon={faUser} /> Author:{" "}
                      {author}
                    </p>
                    <div className="flex justify-between w-32">
                      <FontAwesomeIcon icon={faFacebookF} />
                      <FontAwesomeIcon icon={faTwitter} />
                      <FontAwesomeIcon icon={faInstagram} />
                      <FontAwesomeIcon icon={faLinkedinIn} />
                    </div>
                  </div>
                </div>

                <div className="mt-4 px-3">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
