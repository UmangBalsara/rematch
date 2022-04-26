import { useState, useCallback } from "react";

const useModal = () => {
  const [open, setOpen] = useState(false);

  const openModal = useCallback(() => {
    setOpen(true);
  }, [setOpen]);

  const closeModal = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  return {
    open,
    openModal,
    closeModal,
  };
};

export default useModal;
