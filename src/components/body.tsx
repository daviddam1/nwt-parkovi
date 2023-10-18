import React from "react";

import bodyText from "../enum/bodyText";
class Body extends React.Component {
    render() {
        return (
            <div className="Body">
                <h2>Text</h2>
                {bodyText.map((items) => <div className="bodyText">{items.name}</div>)}
            </div>
        )
    }

}

export default Body