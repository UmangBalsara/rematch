import { useEffect } from "react";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const REQUIRED_FIELD = "This field is required";

const useAddUser = () => {
  const schema = Yup.object({
    name: Yup.string().required(REQUIRED_FIELD),
    email: Yup.string().email().required(REQUIRED_FIELD),
    website: Yup.string().required(REQUIRED_FIELD),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors = {} },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      website: "",
    },
  });

  return {
    register,
    errors,
    handleSubmit,
    reset,
  };
};

export default useAddUser;
