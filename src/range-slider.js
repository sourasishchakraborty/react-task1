import React,{Component} from "react";
class RangeSlider extends Component{
    render() {
        return(
            <form>
                <div className="form-group mt-4">
                    <label htmlFor="formControlRange"><h5>{this.props.title}</h5></label>
                    <input type="range" className="form-control-range"></input>
                </div>
            </form>
        )
    }
}
export default RangeSlider;