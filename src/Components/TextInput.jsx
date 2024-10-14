function TextInput({
  type = "",
  name = "",
  className = "",
  placeholder = "",
  value = "",
  onChange,
}) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      className={
        "w-full active:border-primary focus:border-primary hover:border-primary/80 transition-color duration-75 ease-in-out border-2 px-4 py-3 rounded-md " +
        className
      }
      onChange={onChange}
    />
  );
}

export default TextInput;
