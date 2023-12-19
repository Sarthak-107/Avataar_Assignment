

import React, { useState, useEffect,useCallback } from 'react';
import './style.css';
import logo from "../../assets/images/Logo.png"
import searchIcon from "../../assets/images/search.png"

const Navbar = () => {
  const [menuItems,] = useState([
    'HOME',
    'ELECTRONICS',
    'BOOKS',
    'MUSIC',
    'MOVIES',
    'CLOTHING',
    'GAMES',
    'FURNITURE',
    'SHOES',
    'TRAVEL',
    'BOTANICAL',
    'CATEGORY NAME',
  ]);

  const [visibleItems, setVisibleItems] = useState([]);
  const [hiddenItems, setHiddenItems] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  const updateMenu = useCallback(() => {
    const screenWidth = window.innerWidth;
    const itemWidth = 160;

    let visible, hidden;
    if (screenWidth > 480) {
      const maxItems = Math.floor(screenWidth / itemWidth);
      visible = menuItems.slice(0, maxItems - 3);
      hidden = menuItems.slice(maxItems - 3);
      setVisibleItems(visible);
      setHiddenItems(hidden);
    } else {
      setVisibleItems([]);
      setHiddenItems(menuItems);
    }
  }, [menuItems]);


  useEffect(() => {
    updateMenu();
    window.addEventListener('resize', updateMenu);

    return () => {
      window.removeEventListener('resize', updateMenu);
    };
  }, [menuItems, updateMenu]); // Include updateMenu in the dependency array


  const handleMenuItemClick = (menuItem) => {
    // Handle the click event for menu items (if needed)
    console.log(`Clicked on: ${menuItem}`);
  };

  return (
    <div className="navbar">
      <div className = "logo">
            <img src={logo} alt="Logo" className="logo_image" />
        </div>
      <div className="menu">
        {visibleItems.map((item, index) => (
          <div
            className="visible-items"
            key={index}
            onClick={() => handleMenuItemClick(item)}
          >
            {item}
          </div>
        ))}
        {hiddenItems.length > 0 && (
          <div className="more-items" onClick={() => setMenuOpen(!menuOpen)}>
            <div>{visibleItems.length === 0 ? 'Menu' : 'More'}</div>
            {menuOpen && (
              <div className="hidden-items">
                {hiddenItems.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => handleMenuItemClick(item)}
                  >
                    {item}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
      <div className="search-bar">
       <img src={searchIcon} alt = "img" className = "searchImage" />
        <input className="search-box" type="text" placeholder="Search something" />
      </div>
    </div>
  );
};

export default Navbar;