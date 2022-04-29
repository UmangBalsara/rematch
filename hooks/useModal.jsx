import { useState, useCallback } from "react";
import { useScrollLock } from "@mantine/hooks";

const useModal = () => {
  const [open, setOpen] = useState(false);

  const [scrollLocked, setScrollLocked] = useScrollLock();

  const openModal = useCallback(() => {
    // document.body.classList.add("prevent_scroll");
    setScrollLocked(true);
    setOpen(true);
  }, [setOpen, setScrollLocked]);

  const closeModal = useCallback(() => {
    // document.body.classList.remove("prevent_scroll");
    setScrollLocked(false);
    setOpen(false);
  }, [setOpen, setScrollLocked]);

  return {
    open,
    openModal,
    closeModal,
  };
};

export default useModal;
