import React, { memo } from "react";

function Rating(props){
    return (
        <>
        {"Rating : "}
        {props.Rating}

        </>
    )
}
export default memo(Rating);