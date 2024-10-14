function IconButton({ src = "", alt = "", label = "", className = "" }) {
  return (
    <button
      className={
        "bg-gray-200 p-2 rounded-md flex flex-row justify-center items-center gap-2 " +
        className
      }
    >
      <img src={src} alt={alt} className="h-5" />
      <p>{label}</p>
    </button>
  );
}

export default IconButton;
