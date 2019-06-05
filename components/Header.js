import Link from "next/link";

const NavWrapper = ({ children }) => (
  <div className="flex flex-wrap items-center justify-between max-w-4xl mx-auto p-4 md:p-8">
    {children}
  </div>
);

const Logo = () => <div className="fill-current h-8 mr-2 w-8 text-3xl">💬</div>;

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
