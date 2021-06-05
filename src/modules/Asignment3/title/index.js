import React from 'react'
import './index.css';

 function Title(props){
var heading, subheading;
return(
    <div class={"heading"}>
        <h1 className={"titleClass"}>{props.heading}</h1>
        <h3 className={"subClass"}>{props.subheading}</h3>
    </div>
)
}
export default Title;