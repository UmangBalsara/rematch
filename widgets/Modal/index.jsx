import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

const Modal = ({ open, closeModal, children }) => {
  return (
    <Transition show={open} as={Fragment}>
      <Dialog onClose={closeModal} className="fixed z-10 inset-0">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="flex items-center justify-center min-h-screen">
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

            <div className="relative bg-purple-200 rounded max-w-sm mx-auto py-4 px-8 text-purple-800">
              {children}
            </div>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};

export default Modal;
