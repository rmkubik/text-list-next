import Link from "next/link";

const NavWrapper = ({ children }) => (
  <div className="flex flex-wrap items-center justify-between max-w-4xl mx-auto p-4 md:p-8">
    {children}
  </div>
);

const Logo = () => (
  <div className="fill-current h-8 mr-2 w-8 text-3xl">💬</div>
  //   <svg
  //     className="fill-current h-8 mr-2 w-8"
  //     width="54"
  //     height="54"
  //     viewBox="0 0 54 54"
  //     xmlns="http://www.w3.org/2000/svg"
  //   >
  //     <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
  //   </svg>
);

const NavLink = ({ href, children }) => (
  <Link href={href}>
    <a className="block mt-4 md:inline-block md:mt-0 mr-6 no-underline text-white">
      {children}
    </a>
  </Link>
);

const Header = ({ children }) => {
  return (
    <nav className="bg-red-500">
      <NavWrapper>
        <Link href="/">
          <a className="flex items-center no-underline text-white">
            <Logo />
            <span className="font-bold text-xl tracking-tight">Text List</span>
          </a>
        </Link>
        <div className="text-sm">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/register">Register</NavLink>
        </div>
      </NavWrapper>
    </nav>
  );
};

export default Header;
