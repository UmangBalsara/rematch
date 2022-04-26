import { memo } from "react";
import { useDispatch } from "react-redux";
import useModal from "@/hooks/useModal";
import Modal from "@/widgets/Modal";
import { toast } from "react-toastify";

const DeleteUser = ({ user }) => {
  const dispatch = useDispatch();

  const { open, openModal, closeModal } = useModal();

  const onRemoveUser = async (e, data) => {
    e.preventDefault();
    await dispatch.users.removeUser(data);
    toast.success(`${data.name} user remove successfully`);
  };

  return (
    <>
      <button type="button" onClick={openModal}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="red"
        >
          <path
            fillRule="evenodd"
            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <Modal open={open} closeModal={closeModal}>
        <>
          <div className="flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-20 w-20"
              viewBox="0 0 20 20"
              fill="red"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <h5 className="text-center font-semibold text-2xl mb-2 text-red-500 md:px-20 px-2">
            Are you sure?
          </h5>
          <h6 className="text-center text-red-500">
            You want to delete this user?
          </h6>
          <div className="flex items-center justify-end gap-3 mt-4">
            <button
              onClick={(e) => onRemoveUser(e, user)}
              className="border border-red-500 hover:bg-red-500 hover:text-white text-red-500 px-3 py-1 transition-all rounded focus:outline-none"
            >
              Yes
            </button>
            <button
              onClick={closeModal}
              className="border border-purple-800 hover:bg-purple-800 hover:text-white px-3 py-1 transition-all rounded focus:outline-none"
            >
              No
            </button>
          </div>
        </>
      </Modal>
    </>
  );
};

export default memo(DeleteUser);
