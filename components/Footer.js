const Footer = ({ children }) => {
  return (
    <footer className="bg-gray-500">
      <div className="flex justify-between max-w-4xl mx-auto p-4 md:p-8 text-sm">
        <p className="text-white">
          Created by{" "}
          <a
            href="https://ryankubik.com"
            className="font-bold no-underline text-white"
          >
            Ryan Kubik
          </a>
        </p>

        <p>
          <a
            href="https://github.com/rmkubik/text-list"
            className="font-bold no-underline text-white"
          >
            GitHub
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
