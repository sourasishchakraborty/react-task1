import React,{Component} from "react";
import ButtonBlue from "./button-blue";
class Card extends Component{
    render() {
        return(
            <div className="card mb-4" >
                <img className="card-img-top " src={this.props.imglink} alt="Card image cap"></img>
                    <div className="card-body">
                        <h6 className="card-title ">{this.props.title}</h6>
                        <p className="card-text">Rs <span>{this.props.description}</span></p>
                        <a href={this.props.href} target="_blank"><ButtonBlue title="More Details"/></a>
                    </div>
            </div>
        )
    }
}

export default Card;