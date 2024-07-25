import { useState } from "react";
import { Link } from "react-router-dom";
import { Sidebar } from "./Sidebar/Sidebar";
// import { BsList } from "react-icons/bs";
import { CiShoppingCart } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import TempLogo from "../assets/logo.png";

const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];
const user = {
  name: "Afzal Shaikh",
  email: "tom@example.com",
  imageUrl:
    "https://th.bing.com/th?id=OIP.jixXH_Els1MXBRmKFdMQPAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
};
const Header = () => {
  const [open, setOpen] = useState(false);
  const Logo = () => {
    return (
      <div className="md:w-5/12">
        <Link to="/">
          <img
            src={TempLogo}
            alt="add logo this one is temporary"
            className="w-[40px]"
          />
        </Link>
      </div>
    );
  };

  const MenuBar = () => {
    return (
      <Menu as="div" className="relative ml-3">
        <div>
          <MenuButton className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm">
            <span className="absolute -inset-1.5" />
            <span className="sr-only">Open user menu</span>
            <img alt="" src={user.imageUrl} className="h-8 w-8 rounded-full" />
          </MenuButton>
        </div>
        <MenuItems
          transition
          className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
        >
          {userNavigation.map((item) => (
            <MenuItem key={item.name}>
              <a
                href={item.href}
                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
              >
                {item.name}
              </a>
            </MenuItem>
          ))}
        </MenuItems>
      </Menu>
    );
  };

  const Cart = () => {
    const cartItems = [
      { name: "View Cart", href: "/cart" },
      { name: "Checkout", href: "/checkout" },
    ];

    return (
      <Menu as="div" className="relative ml-3">
        <div>
          <MenuButton className="relative flex items-center text-white">
            <span className="sr-only">Open cart menu</span>
            <CiShoppingCart className="text-2xl" />
            <p className="absolute -top-2 -right-2 font-medium">2</p>
          </MenuButton>
        </div>
        <Menu.Items
          transition
          className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
        >
          {cartItems.map((item) => (
            <MenuItem key={item.name}>
              {({ active: boolean }) => (
                <Link
                  to={item.href}
                  className={`block px-4 py-2 text-sm text-gray-700 ${
                    active ? "bg-gray-100" : ""
                  }`}
                >
                  {item.name}
                </Link>
              )}
            </MenuItem>
          ))}
        </Menu.Items>
      </Menu>
    );
  };

  return (
    <header className="bg-gray-800 sticky top-0 w-full z-10 text-white ">
      <Disclosure as="nav" className="bg-[#228b22]">
        <div className="h-16 flex justify-between items-center relative mx-4 md:mx-14">
          <Logo />
          <nav className="md:w-7/12  flex justify-between">
            <ul className="flex  list-none gap-4 flex-start">
              <li className="hidden md:flex">
                <Link to="/" className="text-white hover:text-purple-700">
                  Home
                </Link>
              </li>
              <li className="hidden md:flex">
                <Link
                  to="/contact"
                  className="text-white hover:text-purple-700"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
            <div className="hidden  md:flex flex-end space-between gap-4">
              <Cart />
              <MenuBar></MenuBar>
              <div>
                <button className="ml-4" onClick={() => setOpen(true)}>
                  <GiHamburgerMenu size={28} />
                </button>
                {open && <Sidebar open={open} setOpen={setOpen} />}
              </div>
            </div>
          </nav>

          <div className="flex md:hidden items-center gap-4">
            <Cart />
            <MenuBar />
            <button onClick={() => setOpen(true)}>
              <GiHamburgerMenu size={28} />
            </button>
            {open && <Sidebar open={open} setOpen={setOpen} />}
          </div>
        </div>
      </Disclosure>

      {/*  */}
    </header>
  );
};

export default Header;
