import { useState, useCallback } from "react";

const useModal = () => {
  const [open, setOpen] = useState(false);

  const openModal = useCallback(() => {
    document.body.classList.add("prevent_scroll");
    setOpen(true);
  }, [setOpen]);

  const closeModal = useCallback(() => {
    document.body.classList.remove("prevent_scroll");
    setOpen(false);
  }, [setOpen]);

  return {
    open,
    openModal,
    closeModal,
  };
};

export default useModal;
