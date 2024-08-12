import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
//import {Navbar} from "@material-tailwind/react"
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { PhoneIcon } from "@heroicons/react/24/solid";

const navListMenuItems = [
  {
    title: "DEGCHEME 101",
    src: "/degcheme101",
  },
  {
    title: "DEGCHEME 105",
    src: "/degcheme105",
  },
  {
    title: "DEGCHEME 109",
    src: "/degcheme109",
  },
  {
    title: "DEGCHEME 203",
    src: "/degcheme203",
  }, 
  {
    title: "DEGCHEME 60",
    src:"/degcheme60",
  },
  {
    title: "DEGCHEME 70",
    src: "/degcheme70",
  },
  {
    title: "DEGCHEME 80",
    src: "/degcheme80",
  },
  {
    title: "DEGCHEME 90",
    src: "/degcheme90",
  },
  {
    title: "DEGCHEME 907",
    src: "/degcheme907",
  },
 
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const renderItems = navListMenuItems.map(({ title, src }, key) => (
    <div key={key} className="div">
      <MenuItem className="flex  items-center rounded-lg">
        <div>
          <Link to={src}>
            <Typography color="blue-gray" className=" text-sm font-bold">
              {title}
            </Typography>
          </Link>
        </div>
      </MenuItem>
    </div>
  ));

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" className="font-medium">
            <ListItem
              className="flex items-center gap-2 hover:text-deep-purple-500  py-2 pr-4 hover:underline decoration-deep-purple-500  underline-offset-8 font-medium text-gray-900"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
             DEGCHEME 
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl hover:text-deep-purple-500  rounded-xl lg:block font-thin bg-gray-100 text-black/85 ">
          <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0   ">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1 ">
      <Typography as="a" href="#" color="blue-gray" className="font-medium">
        <Link to={"/derusting"}>
          <ListItem className="flex items-center gap-2 py-2 pr-4 hover:text-deep-purple-500  underline decoration-deep-purple-500  underline-offset-8 ">
            DERUSTING
          </ListItem>
        </Link>
      </Typography>
      <hr className="lg:hidden" />
      <NavListMenu />
      <hr className="lg:hidden" />
      <Typography as="a" href="#" color="blue-gray" className="font-medium">
        <Link to={"/phosphating"}>
          <ListItem className="flex items-center hover:text-deep-purple-500  gap-2 py-2 pr-4 hover:underline decoration-deep-purple-500  underline-offset-8 ">
            PHOSPHATING
          </ListItem>
          <hr className="lg:hidden" />
        </Link>
      </Typography>
      {/* <portfolio />  */}
      <Typography as="a" href="#" color="blue-gray" className="font-medium">
        <Link to={'/wastewaterTreatment'}>
          <ListItem className="flex items-center hover:text-deep-purple-500  gap-2 py-2 pr-4 hover:underline decoration-deep-purple-500  underline-offset-8 ">
            OTHERS
          </ListItem>
          <hr className="lg:hidden" />
        </Link>
      </Typography>

      <Typography as="a" href="#" color="blue-gray" className="font-medium">
        <Link to={"/contactUs"}>
          <ListItem className="flex items-center gap-2 hover:text-deep-purple-500  py-2 pr-4 hover:underline decoration-deep-purple-500     underline-offset-8">
            CONTACT US
          </ListItem>
          <hr className="lg:hidden" />
        </Link>
      </Typography  >    
      <Typography as="a" href="#" color="blue-gray" className="font-medium items-center hidden md:block  ">
       <div className="flex">
       <input type="text" placeholder="Enter Product / Service to search" className="py-2 px-2 bg-transparent w-96 rounded-l-md outline-none border-y-2 border-l-2 border-black " />
       <button className="px-3 py-2 bg-[#01579b] border-r-2 rounded-r-md border-y-2 border-black"><FaSearch className="text-2xl text-white " /></button>
       </div>
      </Typography>  
      
    </List>
  );
}

export default function NavbarCompo() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const [color, setColor] = useState(true);

  const changeColor = () => {
    if (window.scrollY <= 0) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor, true);

  return (
    <Navbar
      className={` rounded-none max-w-full container py-2 shadow-md shadow-black/40  top-0 sticky z-20 border-none 
    ${color ? "navbarComp" : "navbarScrolled"}`}
    >
      <div className="flex items-center justify-around gap-24 text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1.5 lg:ml-2"
        >
          <Link to={"/"}>
            <div className="logo flex items-center">
              <img className="h-14 " src="images/LOGO.jpeg" alt="" />
            </div>
          </Link>
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>

        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-8 w-8" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-8 w-8" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      {/* mobile */}
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}