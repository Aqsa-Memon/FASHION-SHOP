import Link from "next/link";

export default function Header() {
    return (
      <nav className="bg-white py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center ">
          <h1 className="text-3xl font-bold hover:text-black ">Fashion Shop</h1>
          <ul className="flex space-x-8 ">
            <li><Link href="/" className="hover:text-grey-400 ">Home</Link></li>
            <li><Link href="/shop" className="hover:text-grey-400">Shop</Link></li>
            <li><Link href="/about" className="hover:text-grey-400">About</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
  