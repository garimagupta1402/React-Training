import React from 'react'

export default class ReusableBox extends React.Component{
    render(){
        const{heading, buttonTitle ,headclass, btnColor }=this.props;
        return(
            <div className={"itemContainer"}>
                <h3>{this.props.heading}</h3>
                <button>{this.props.buttonTitle}</button>
             </div>
        );
    }
}
