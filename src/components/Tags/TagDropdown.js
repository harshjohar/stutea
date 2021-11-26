import React, { useState, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import "../../css/TagsDropdown.css"
import { DropdownItem } from "./DropdownItem";
export const TagDropdown = (props) => {
    const {tags, disabled} = props;
    // eslint-disable-next-line
    const [activeMenu, setActiveMenu] = useState("main");
    // eslint-disable-next-line
    const [menuHeight, setMenuHeight] = useState(null);
    const dropdownRef = useRef(null);
    useEffect(() => {
        setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
    }, []);

    function calcHeight(el) {
        const height = el.offsetHeight;
        setMenuHeight(height);
    }
    return (
        <div
            className="dropdown-tags"
            ref={dropdownRef}
        >
            <CSSTransition
                in={activeMenu === "main"}
                timeout={500}
                classNames="menu-primary"
                unmountOnExit
                onEnter={calcHeight}
            >
                <div className="menu">
                    {/* <DropdownItem>
                        harsh ko maaf kro
                    </DropdownItem> */}
                    {tags.map((tag)=> {
                        return <DropdownItem key={tag} value={tag} disabled={disabled}/>
                    })}
                    {/* <DropdownItem value={tags}/> */}
                </div>
            </CSSTransition>
        </div>
    )
}
