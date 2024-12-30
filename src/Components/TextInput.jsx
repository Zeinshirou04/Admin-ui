function TextInput({
    type = "",
    name = "",
    className = "",
    placeholder = "",
    id = "",
    register
}) {
    return (
        <input
            id={id}
            type={type}
            name={name}
            placeholder={placeholder}
            className={
                "w-full active:border-primary focus:border-primary hover:border-primary/80 transition-color duration-75 ease-in-out border-2 px-4 py-3 rounded-md " +
                className
            }
            {...register}
        />
    );
}

export default TextInput;
