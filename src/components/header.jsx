import React from "react";
import headerItems from "../enum/headerItems";
import DropDown from "./dropDown";

class Header extends React.Component {
    state = {
        showDropDown: false,
        activeItem: false,
    }

    toggleDropDownMenu = () => {
        this.setState((prevState) => ({
            showDropDown: !prevState.showDropDown,
            activeItem: !prevState.activeItem,
        }));
    }


    render() {
        return (
            <div className="header">
                <div className="header-items">
                    {headerItems.map((items) =>
                        <div
                            key={items.id}
                            onClick={items.id === 2 ? this.toggleDropDownMenu : undefined}
                            className={items.id === 2 ? `navBar ${this.state.activeItem ? "active" : ""}` : undefined}>
                            {items.name}
                        </div>
                    )}

                </div>
                <div className={`dropDownMenu ${this.state.showDropDown ? "show" : ""}`}>
                    <DropDown />
                </div>
            </div>
        )
    }
}

export default Header;
