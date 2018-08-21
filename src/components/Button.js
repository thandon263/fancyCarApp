import React from "react";

const Button = ({ hidden, onClick }) => {
    return (
        <div className="button" hidden={hidden} onClick={onClick}>
            <div className="button__buy">Buy</div>
        </div>
    )
}

export default Button;