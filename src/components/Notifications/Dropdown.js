import React, { useState, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";

export const Dropdown = () => {
    const [activeMenu, setActiveMenu] = useState("main");
    const [menuHeight, setMenuHeight] = useState(null);
    const dropdownRef = useRef(null);

    useEffect(() => {
        setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
    }, []);

    function calcHeight(el) {
        const height = el.offsetHeight;
        setMenuHeight(height);
    }
    function DropdownItem(props) {
        return (
          <div className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
            <span className="icon-button">{props.leftIcon}</span>
            {props.children}
            <span className="icon-right">{props.rightIcon}</span>
          </div>
        );
      }
      return (
        <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
    
          <CSSTransition
            in={activeMenu === 'main'}
            timeout={500}
            classNames="menu-primary"
            unmountOnExit
            onEnter={calcHeight}>
            <div className="menu">
              <DropdownItem>My Profile</DropdownItem>
              <DropdownItem
                goToMenu="settings">
                Settings
              </DropdownItem>
              <DropdownItem
                leftIcon="🦧"
                goToMenu="animals">
                Animals
              </DropdownItem>
    
            </div>
          </CSSTransition>
    
          <CSSTransition
            in={activeMenu === 'settings'}
            timeout={500}
            classNames="menu-secondary"
            unmountOnExit
            onEnter={calcHeight}>
            <div className="menu">
              <DropdownItem goToMenu="main">
                <h2>My Tutorial</h2>
              </DropdownItem>
              <DropdownItem>HTML</DropdownItem>
              <DropdownItem>CSS</DropdownItem>
              <DropdownItem>JavaScript</DropdownItem>
              <DropdownItem>Awesome!</DropdownItem>
            </div>
          </CSSTransition>
    
          <CSSTransition
            in={activeMenu === 'animals'}
            timeout={500}
            classNames="menu-secondary"
            unmountOnExit
            onEnter={calcHeight}>
            <div className="menu">
              <DropdownItem goToMenu="main">
                <h2>Animals</h2>
              </DropdownItem>
              <DropdownItem leftIcon="🦘">Kangaroo</DropdownItem>
              <DropdownItem leftIcon="🐸">Frog</DropdownItem>
              <DropdownItem leftIcon="🦋">Horse?</DropdownItem>
              <DropdownItem leftIcon="🦔">Hedgehog</DropdownItem>
            </div>
          </CSSTransition>
        </div>
      );
};
