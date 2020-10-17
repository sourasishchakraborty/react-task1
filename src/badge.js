import React,{Component} from "react";

class Badge extends Component{
    render() {
        return(
            <span className="badge badge-primary mr-2">{this.props.title}</span>
        )
    }
}
export default Badge;