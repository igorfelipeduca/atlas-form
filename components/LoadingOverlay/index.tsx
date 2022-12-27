import { Fragment, SetStateAction, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import ReactLoading from "react-loading";

type LoadingOverlayProps = {
  open: boolean;
  setOpen: React.Dispatch<SetStateAction<boolean>>;
};

const LoadingOverlay: React.FC<LoadingOverlayProps> = ({ open, setOpen }) => {
  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-75"
          leave="ease-in duration-200"
          leaveFrom="opacity-75"
          leaveTo="opacity-0"
        >
          <div className="w-72 h-72 bg-gray-900 bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-75 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-75 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-gray-900 px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6 w-screen">
                <div className="flex justify-center">
                  <ReactLoading
                    type={"spin"}
                    color={"#FFF"}
                    height={100}
                    width={100}
                  />
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default LoadingOverlay;
