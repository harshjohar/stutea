import React, { useState, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { CreditUser } from "../CreditUser";
import { Notifications } from "../Notifications";

export const Dropdown = (props) => {
    // eslint-disable-next-line
    const [activeMenu, setActiveMenu] = useState("main");
    // eslint-disable-next-line
    const [menuHeight, setMenuHeight] = useState(null);
    const dropdownRef = useRef(null);
    const {type}=props;
    useEffect(() => {
        setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
    }, []);

    function calcHeight(el) {
        const height = el.offsetHeight;
        setMenuHeight(height);
    }
    // function DropdownItem(props) {
    //     return (
    //         <div
    //             className="menu-item"
    //             onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
    //         >
    //             <span className="icon-button">{props.leftIcon}</span>
    //             {props.children}
    //             <span className="icon-right">{props.rightIcon}</span>
    //         </div>
    //     );
    // }
    return (
        <div
            className={"dropdown"+ ((type==='notif')?" notif-drop":"") + ((type==='credits')?" credits-drop":"")}
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
                    {type==="credits"&&<CreditUser/>}
                    {type==="notif"&&<Notifications/>}
                </div>
            </CSSTransition>
        </div>
    );
};
