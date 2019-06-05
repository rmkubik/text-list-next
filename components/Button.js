const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mb-2"
    >
      {children}
    </button>
  );
};

export default Button;
