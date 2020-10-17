import React,{Component} from "react";
class ButtonBlue extends Component{
    render() {
        return (
            <button type="button" className="btn btn-primary">{this.props.title}</button>
        )
    }
}
export default ButtonBlue;