import React from "react";

const Button = ({
    title,
    onClick,
    outline = false,
}) => {

    return (

        <button

            onClick={onClick}

            className={
                outline
                    ? "btn-outline"
                    : "btn-primary"
            }

        >

            {title}

        </button>

    );

};

export default Button;