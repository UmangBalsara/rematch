import { memo } from "react";
import { useDispatch } from "react-redux";
import { Dialog } from "@headlessui/react";
import { toast } from "react-toastify";
import useAddUser from "@/hooks/useAddUser";
import useModal from "@/hooks/useModal";
import Input from "@/widgets/Input";
import Modal from "@/widgets/Modal";

const AddUser = () => {
  const dispatch = useDispatch();

  const { open, openModal, closeModal } = useModal();
  const { register, errors, handleSubmit, reset } = useAddUser();

  const onSubmit = async (data) => {
    const id = Math.random();
    const send_data = {
      ...data,
      id,
    };
    await dispatch.users.addUser(send_data);
    toast.success("User added successfully");
    reset({ name: "", email: "", website: "" });
    closeModal();
  };

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className="text-md text-purple-800 hover:bg-purple-800 hover:text-white border border-purple-800 px-3 py-1 rounded-md transition-all"
      >
        Add User
      </button>

      <Modal open={open} closeModal={closeModal}>
        <>
          <Dialog.Title className="text-center mb-3 text-xl">
            Add User
          </Dialog.Title>
          <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
            <Input
              type="text"
              label="Name"
              placeholder="Enter Name"
              register={register}
              name="name"
              errors={errors.name}
            />
            <Input
              type="email"
              label="email"
              placeholder="Enter Email"
              register={register}
              name="email"
              errors={errors.email}
            />
            <Input
              type="text"
              label="Website"
              placeholder="Enter Website"
              register={register}
              name="website"
              errors={errors.website}
            />
            <button className="bg-purple-800 text-white px-4 py-2 w-full my-3 rounded focus:outline-none">
              Add
            </button>
          </form>
        </>
      </Modal>
    </>
  );
};

export default memo(AddUser);
