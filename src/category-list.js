import React,{Component} from "react";

class CategoryList extends Component{
    render() {
        return(
            <div className="row">
                <div className="col-md-12">
                    <div className="row ">
                        <div className="col-1 p-0 mr-2 ml-4">
                            <p className="font-weight-bold">Sort By</p>
                        </div>
                        <div className="col-2 p-0">
                            <p>Price High to Low </p>

                        </div>
                        <div className="col-2 p-0">
                            <p>Price Low to High </p>

                        </div>
                        <div className="col-3 p-0">
                            <p>Alphabetically Low to High</p>

                        </div>
                        <div className="col-3 p-0">
                            <p>Alphabetically High to Low</p>

                        </div>




                    </div>

                </div>

            </div>


        )
    }
}
export default CategoryList;