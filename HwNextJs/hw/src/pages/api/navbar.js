import Link from "next/link";

const Navbar = () => {
  return (
    <nav style={{ padding: '10px', backgroundColor: '#333', color: '#fff' }}>
      <Link href="/" style={{ margin: '0 15px', color: '#fff' }}>
        Home
      </Link>
      <Link href="/about" style={{ margin: '0 15px', color: '#fff' }}>
        About
      </Link>
      <Link href="/main" style={{ margin: '0 15px', color: '#fff' }}>
        Main
      </Link>
      <Link href="/contact" style={{ margin: '0 15px', color: '#fff' }}>
        Contact
      </Link>
      <Link href="/blog" style={{ margin: '0 15px', color: '#fff' }}>
        Blog
      </Link>
      <Link href="/account" style={{ margin: '0 15px', color: '#fff' }}>
        Account
      </Link>
    </nav>
  );
};

export default Navbar;
