const Input = ({
  type = "text",
  label = "",
  placeholder = "",
  register = () => {},
  name = "",
  errors = {},
}) => {
  return (
    <div className="mb-2">
      <div className="flex flex-col">
        <label>{label}</label>
        <input
          type={type}
          className="block w-full py-2 border border-red-100"
          placeholder={placeholder}
          {...register(name)}
        />
      </div>
      {errors.message && <div className="error">{errors.message}</div>}
    </div>
  );
};

export default Input;
