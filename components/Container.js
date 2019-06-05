const Container = ({ children }) => {
  return (
    <main className="flex flex-col font-sans min-h-screen">
      <div className="flex flex-col flex-1 md:justify-center max-w-4xl mx-auto px-4 py-8 md:p-8 w-full">
        {children}
      </div>
    </main>
  );
};

export default Container;
