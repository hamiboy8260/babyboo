import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from "../images/BABYBOO.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faUser, faSearch, faBars } from '@fortawesome/free-solid-svg-icons';

interface NavLinkItem {
  path: string;
  label: string;
}

const navLinks: NavLinkItem[] = [
  { path: "/hjem", label: "Hjem" },
  { path: "/børnesenge", label: "Børnesenge" },
  { path: "/højstol", label: "Højstol" },
  { path: "/opbevaring", label: "Opbevaring" },
  { path: "/pusle", label: "Pusle" },
  { path: "/reservedele", label: "Reservedele" },
  { path: "/serier", label: "Serier" },
  { path: "/tekstiler", label: "Tekstiler" },
  { path: "/tilbehør", label: "Tilbehør" },
  { path: "/vugge", label: "Vugge" },
];

export const NavBar: React.FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

   const [searchIsFocused, setSearchIsFocused] = useState<boolean>(false);

  const handleSearchFocus = () => {
    setSearchIsFocused(true);
  };

  const handleSearchBlur = () => {
    setSearchIsFocused(false);
  };

  return (
    
    <div className='h-[108px] w-full'>
      <div className='h-[31px] bg-[#C4C9C1] flex items-center justify-center'>
        <p className='font-bold uppercase text-xs text-[#362B24]'>babyboo for professionals</p>
      </div>
    <nav className="h-[77px] flex flex-col  md:flex-row items-center justify-between p-4 px-14 shadow-md bg-[#362B24]">
      <div className=' w-2/3  justify-between flex items-center'>
        <NavLink to="/" className="mb-4 md:mb-0 flex items-center">
          <img src={Logo} alt="Babyboo" className="h-10 mt-2 w-auto" />
        </NavLink>

        <div className="md:hidden">
          <FontAwesomeIcon icon={faBars} className="text-white" onClick={toggleMenu} />
        </div>

        <div className={`md:flex ${showMenu ? 'block' : 'hidden'} space-x-4 md:space-x-5  md:items-center`}>
        
          {navLinks.map((link) => (
            <NavLink key={link.path} to={link.path} className="text-white font-medium hover:underline flex flex-row uppercase">
              {link.label}
            </NavLink>
          ))}

        </div>     
      </div>


      <div className="flex items-center space-x-7">

        <div className="flex items-center bg-transparent text-white rounded-full pe-4 h-8 border border-gray-200 w-60">
          <input type="search" placeholder={searchIsFocused ? '' : 'søg...'} className="bg-transparent p-2 focus:outline-none" onFocus={handleSearchFocus} onBlur={handleSearchBlur} />
          <FontAwesomeIcon icon={faSearch} className="text-white" />
        </div>

        <div className="flex items-center space-x-2">
          <FontAwesomeIcon icon={faUser} className="text-white" />
          <span className="text-white">Babybob</span>
        </div>

        <div className="flex items-center space-x-2">
          <FontAwesomeIcon icon={faGlobe} className="text-white cursor-pointer" />
          <span className="text-white">DEN</span>
        </div>
      </div>
      
    </nav>
     </div>
    
  );
};
