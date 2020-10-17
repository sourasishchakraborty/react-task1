import React,{Component} from "react";
class ButtonRed extends Component{
    render() {
        return (
            <button type="button" className="btn btn-danger mt-3">{this.props.title}</button>
        )
    }
}
export default ButtonRed;