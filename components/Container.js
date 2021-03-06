const Container = ({ children }) => {
  return (
    <div className="flex flex-col flex-1 md:justify-center max-w-4xl mx-auto px-4 py-8 md:p-8 w-full">
      {children}
    </div>
  );
};

export default Container;
