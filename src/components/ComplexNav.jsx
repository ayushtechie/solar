import React from "react";
import { SocialIcon } from "react-social-icons";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Card,
  IconButton,

} from "@material-tailwind/react";
import {

  TableCellsIcon,
  UserCircleIcon,
  CodeBracketSquareIcon,
  Square3Stack3DIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon,
  WrenchScrewdriverIcon,
  Bars2Icon,
  HomeIcon,
  Rss,
  RssIcon,
  UserIcon,
} from "@heroicons/react/24/solid";

import SolarShop from "../images/SOLARSHOP.png";

import { Link } from "react-router-dom";
// profile menu component
const profileMenuItems = [
  {
    label: "My Profile",
    icon: UserCircleIcon,
  },
  {
    label: "Edit Profile",
    icon: Cog6ToothIcon,
  },
  {
    label: "Inbox",
    icon: InboxArrowDownIcon,
  },
  {
    label: "Help",
    icon: LifebuoyIcon,
  },
  {
    label: "Sign Out",
    icon: PowerIcon,
  },
];

function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          <Avatar
            variant="circular"
            size="sm"
            alt="tania andrew"
            className="border border-gray-900 p-0.5"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          />
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        {profileMenuItems.map(({ label, icon }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <MenuItem
              key={label}
              onClick={closeMenu}
              className={`flex items-center gap-2 rounded ${
                isLastItem
                  ? "hover:bg-green-500/10 focus:bg-green-500/10 active:bg-green-500/10"
                  : ""
              }`}
            >
              {React.createElement(icon, {
                className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                strokeWidth: 2,
              })}
              <Typography
                as="span"
                variant="small"
                className="font-normal"
                color={isLastItem ? "red" : "inherit"}
              >
                {label}
              </Typography>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}

// nav list menu
const navListMenuItems = [
  {
    title: "Solar Module",
    description: "A complete set of UI Elements for building ",
    url: "/solar-panel/solar-module",
  },
  {
    title: "Solar Water Heater",
    description: "A complete set of UI Elements for building ",
  },
  {
    title: "Solar Lights",
    description: "A complete set of UI Elements for building ",
  },
  {
    title: "Solar Pumps",
    description: "A complete set of UI Elements for building ",
  },
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // Sub nav size

  const renderItems = navListMenuItems.map(({ title, description, url }) => (
    <Link to={url} key={title}>
      <MenuItem>
      
        <Typography variant="div" color="blue-gray" className="mb-1 text-gray-900 font-medium">
          {title}
        </Typography>
        {/* <Typography variant="small" color="gray" className="font-normal">
          {description}
        </Typography> */}
      </MenuItem>
    </Link>
  ));


//   <Link to={url} className="font-medium text-blue-gray-500">
//   {/* <MenuItem className="flex items-center gap-2 lg:rounded-full"> */}
//   <MenuItem className="flex items-stretch gap-6">
//     {/* {React.createElement(icon, {
//       className: "h-[18px] w-[18px] text-green-600",
//     })}{" "} */}
//     <span className="text-gray-900"> {label}</span>
//   </MenuItem>{" "}
// </Link>

  return (
    <React.Fragment>
      <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
        <MenuHandler>
          <Typography as="a" href="#/solar-panel" variant="small" className="font-normal">
            
          </Typography>
        </MenuHandler>
        <MenuList className="hidden w-[12rem] grid-cols-1 gap-2 overflow-visible lg:grid">
          {/* <Card
            color="orange"
            shadow={false}
            variant="gradient"
            className="col-span-3 grid h-full w-full place-items-center rounded-md"
          >
            <WrenchScrewdriverIcon strokeWidth={1} className="h-28 w-28" />
          </Card> */}
          <ul className="col-span-4 flex w-full flex-col gap-1">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <MenuItem className="flex items-center gap-2 font-medium text-blue-gray-900 lg:hidden">
        <Square3Stack3DIcon className="h-[18px] w-[18px] text-green-600" />{" "}
        Solar Products{" "}
      </MenuItem>
      <ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">
        {renderItems}
      </ul>
    </React.Fragment>
  );
}

// social media
// const socialMedia = [
//   {
//     name: "facebook",
//     icon: HomeIcon,
//     url: "https://www.facebook.com",
//   },
//   {
//     name: "facebook",
//     icon: HomeIcon,
//     url: "https://www.instagram.com/solarshopsolutions/",
//   },
//   {
//     name: "Twitter",
//     icon: HomeIcon,
//     url: "https://www.x.com/solarshopsolu",
//   },
// ];
// nav list component
const navListItems = [

  {
    label: "EPC",
    url: "/epc",
    icon: TableCellsIcon,
  },
  {
    label: "Estimater",
    url: "/estimater",
    icon: CodeBracketSquareIcon,
  },
  {
    label: "Blog",
    url: "/blog",
    icon: RssIcon,
  },
  {
    label: "Contact Us",
    url: "/contact",
    icon: UserIcon,
  },
  {
    label: "About Us",
    url: "/about",
    icon: UserIcon,
  },
  
];

function NavList() {
  return (
    <>
      <ul className="mt-2 mb-4 flex flex-col gap-10 lg:mb-0 lg:mt-0 lg:flex-row lg:items-stretch">
      <NavListMenu />
        {navListItems.map(({ label, icon, url }, key) => (
          <>
            <Link to={url} className="font-medium text-blue-gray-500">
              {/* <MenuItem className="flex items-center gap-2 lg:rounded-full"> */}
              <MenuItem className="flex items-stretch gap-6">
                {/* {React.createElement(icon, {
                  className: "h-[18px] w-[18px] text-green-600",
                })}{" "} */}
                <span className="text-gray-900"> {label}</span>
              </MenuItem>{" "}
            </Link>
            {/* <Typography
          key={label}
          as="a"
          href={url}
          variant="small"
          color="gray"
          className="font-medium text-blue-gray-500"
        >
          <MenuItem className="flex items-center gap-2 lg:rounded-full">
            {React.createElement(icon, { className: "h-[18px] w-[18px]" })}{" "}
            <span className="text-gray-900"> {label}</span>
          </MenuItem>
        </Typography> */}
          </>
        ))}
        </ul>
        
        
        <ul className="mt-2 mb-4 flex gap-2 lg:mb-0 lg:mt-0 lg:mr-2 m-auto lg:items-center">
        <NavListMenu />
        {/* <ul className="mt-2 mb-4 flex gap-2 lg:mb-0 lg:mt-0 lg:mr-2 m-auto lg:items-center">
          {socialMedia.map(({ icon, url }, key) => (
            <SocialIcon url={url} style={{ height: 25, width: 25 }} target="_blank"/>
          ))}
        </ul> */}
      </ul>
    </>
  );
}

{/* <NavListMenu />
        {/* <ul className="mt-2 mb-4 flex gap-2 lg:mb-0 lg:mt-0 lg:mr-2 m-auto lg:items-center">
>>>>>>> Stashed changes
          {socialMedia.map(({ icon, url }, key) => (
            <SocialIcon url={url} style={{ height: 25, width: 25 }} target="_blank"/>
          ))}
        </ul> */}

export function ComplexNav() {
  const [isNavOpen, setIsNavOpen] = React.useState(false);

  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    );
  }, []);

  return (
    <Navbar
      className="mx-auto max-w-screen-4xl p-0 lg:pl-6 sticky top-0 z-50"
      style={{ backgroundColor: "#fff0d3" }}
      // className="mx-auto max-w-screen-4xl p-0 lg:rounded-full lg:pl-6 sticky top-0 z-50"
      // className="mx-auto max-w-screen-4xl p-0 lg:pl-6 sticky top-0 z-50"
      // style={{ backgroundColor: "" }}
    >
      <div className="relative mx-auto flex items-center justify-between text-blue-gray-900">
        
        <Typography
          as="a"
          href="#"
          className="mr-4 ml-2 flex items-center cursor-pointer text-2xl font-bold mont-family"
        >
          <img src={SolarShop} alt="Logo" width={80} height={80} />
          <span className="primary-color"> Solar</span>
          <span className="secondary-color">ShopSolutions</span>
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          size="sm"
          color="blue-gray"
          variant="text"
          onClick={toggleIsNavOpen}
          className="ml-auto mr-2 lg:hidden"
        >
          <Bars2Icon className="h-6 w-6" />
        </IconButton>

        {/* <Button size="sm" variant="text">
          <span>Log In</span>
        </Button>
        <ProfileMenu /> */}
      </div>
      <MobileNav open={isNavOpen} className="overflow-scroll">
        <NavList />
        {/* <DrawerWithForm /> */}
      </MobileNav>
    </Navbar>
  );
}
