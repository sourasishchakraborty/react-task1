import React,{Component} from "react";
import Nav from "./nav";
import ButtonRed from "./button-red";
import Badge from "./badge";
import CategoryList from "./category-list";
import Card from "./card";
import RangeSlider from "./range-slider";
class App extends Component{
    state={};

    render() {
        return(
            <div>
                <Nav/>
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-md-3 col-sm-12">
                            <label>Search</label>
                            <input type="text" className="form-control"/>
                            <ButtonRed title="Search"/><br></br><br></br>
                            <label><h5>Select Tags</h5></label><br></br>
                            <Badge title="Redmi"/>
                            <Badge title="Apple"/>
                            <Badge title="Oppo"/>
                            <Badge title="Samsung"/>
                            <Badge title="Realme"/>
                            <Badge title="Oneplus"/><br></br>
                            <RangeSlider title="Select Range"/>

                        </div>
                        <div className="col-md-9 col-sm-12">
                            <CategoryList/><hr></hr>


                            <div className="row">

                                <div className="col-md-3 col-sm-4 ">
                                    <Card title="Oneplus 7T" description="35000" imglink="https://images-na.ssl-images-amazon.com/images/I/71ncRs6HzyL._SL1500_.jpg" href="https://www.reliancedigital.in/oneplus-7t-128-gb-8-gb-ram-glacier-blue-smartphone/p/491614989?gclid=CjwKCAjw5p_8BRBUEiwAPpJO633zBzdLWB8qeQ3-ZBl62kOse-UvM5g8OUc9FdgTSxrIl0iekjdL0RoC5vkQAvD_BwE"/>

                                </div>
                                <div className="col-md-3 col-sm-4 ">
                                    <Card title="Oneplus 8" description="41000" imglink="https://cdn.vox-cdn.com/thumbor/XBwDGnnuh9kMqhSSUivhZ7UrBOQ=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19895637/vpavic_042007_3966_0025.jpg" href="https://www.oneplus.in/oneplus-8"/>

                                </div>
                                <div className="col-md-3 col-sm-4 ">
                                    <Card title="Oneplus 8 Pro" description="52000" imglink="https://image01.oneplus.net/ebp/202003/30/1-m00-12-6c-rb8lb16blgeaenpaaafedevgnmu797_840_840.png" href="https://www.google.com/aclk?sa=L&ai=DChcSEwiIscbgg7fsAhVPDCsKHVmLDY4YABAGGgJzZg&sig=AOD64_0dflM7Tdcl1lg-HlD8LVgC4I_Y7A&ctype=5&q=&ved=2ahUKEwjzg77gg7fsAhXv4XMBHYJcAMkQ9aACegQIGBBH&adurl="/>

                                </div>
                                <div className="col-md-3 col-sm-4">
                                    <Card title="Redmi Note 9 Pro" description="15000" imglink="https://www.gizmochina.com/wp-content/uploads/2020/03/Xiaomi-Redmi-Note-9-Pro.jpg" href="https://www.google.com/aclk?sa=L&ai=DChcSEwis9Ontg7fsAhXSHCsKHSmyAIsYABAFGgJzZg&sig=AOD64_0XuYG7CCKuN3iCbdkx4-xJToWYzA&ctype=5&q=&ved=2ahUKEwiwguDtg7fsAhVU6XMBHZKTCTEQ9aACegQIFRA9&adurl="/>

                                </div>
                                <div className="col-md-3 col-sm-4">
                                    <Card title="Redmi POCO F3" description="21000" imglink="https://phoneaqua.com/products/Xiaomi_Poco_F3_pro.jpg" href="https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwjA3Nj3g7fsAhUaJSsKHQqTASQYABAFGgJzZg&ohost=www.google.com&cid=CAESQOD241ko39_ff5YLfvwUPNOmYKbvgci75L5r9FgCbKkcjI8o9dKMTteSwqL_BAdXxuACHwhCkknuwDROUwwMfag&sig=AOD64_3O_clgvPrpx9rftQ-YSRLHInN9Rw&ctype=5&q=&ved=2ahUKEwjthND3g7fsAhXhjOYKHd2qAmoQww96BAgQEDo&adurl="/>

                                </div>
                                <div className="col-md-3 col-sm-4 ">
                                    <Card title="Apple IPhone 7" description="27000" imglink="https://images-na.ssl-images-amazon.com/images/I/81jqdc9RLdL._AC_SL1500_.jpg" href="https://www.reliancedigital.in/apple-iphone-7-32-gb-black-smartphone/p/491282715"/>

                                </div>
                                <div className="col-md-3 col-sm-4 ">
                                    <Card title="Samsung Galaxy S20" description="59000" imglink="https://media.wired.com/photos/5e73e00cff08eb0008ee30c3/master/w_2560%2Cc_limit/Gear-Feature-08_galaxys20_cloud_blue_front.jpg" href="https://www.google.com/aclk?sa=L&ai=DChcSEwjx9LCNhLfsAhWUJCsKHcZ0BVkYABAHGgJzZg&sig=AOD64_3Dsg4ZWYMz-B4_GcowcjZ0EcFELg&ctype=5&q=&ved=2ahUKEwjE06eNhLfsAhXh7XMBHdcECs4Qww96BAgVEDo&adurl="/>

                                </div>
                                <div className="col-md-3 col-sm-4 ">
                                    <Card title="Realme 7 Pro" description="17000" imglink="https://static.toiimg.com/thumb/msid-77908242,width-640,resizemode-4/77908242.jpg" href="https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwjXmo-ZhLfsAhXNESsKHbrbDycYABAEGgJzZg&ohost=www.google.com&cid=CAESQOD2DaiwW5rxkzWCjd3wfVV6TnsWgt-bZ3lMDKkf8WAvkwaE5YgrQbAYMMV6y53j6Xb6bccO_mFLouuBpxvlK_M&sig=AOD64_1dRLcb8aCjA_CKA63nNRYwxkBDsQ&ctype=5&q=&ved=2ahUKEwjdx4aZhLfsAhWcIbcAHRR9CrEQww96BAgVEDs&adurl="/>

                                </div>
                                <div className="col-md-3 col-sm-4 ">
                                    <Card title="Realme Note 9 Pro" description="15000" imglink="https://www.gizmochina.com/wp-content/uploads/2020/03/Xiaomi-Redmi-Note-9-Pro.jpg" href="https://www.google.com/aclk?sa=L&ai=DChcSEwjXpMKihLfsAhXEfSsKHfZrCKoYABAFGgJzZg&sig=AOD64_3ezgr1ZtYMch13LMbvfJ2RusJzYA&ctype=5&q=&ved=2ahUKEwi1vrmihLfsAhX96nMBHa0XDfwQww96BAgVED0&adurl="/>

                                </div>
                                <div className="col-md-3 col-sm-4 ">
                                    <Card title="OPPO F9 Pro" description="28000" imglink="https://i.gadgets360cdn.com/products/large/1534834178_635_oppo_f9_pro.jpg" href="http://www.flipkart.com/oppo-f9-pro-twilight-blue-64-gb/p/itmf8fczgnrn5xhy?pid=MOBF8FCZY7DQGZX6&lid=LSTMOBF8FCZY7DQGZX6PGTUD3&marketplace=FLIPKART&cmpid=content_mobile_8965229628_gmc"/>

                                </div>
                            </div>





                        </div>
                    </div>
                </div>

            </div>

        )
    }
}
export default App;