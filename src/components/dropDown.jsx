import React from "react";

import dropDownMenu from "../enum/dropDownMenu";

class DropDown extends React.Component {
    render() {
        return (
            <div className="dropDown">
                {dropDownMenu.map(items => <div key={items.id} className="dropDown-item">{items.name}</div>)}
            </div>
        )
    }
}


export default DropDown