

import React,{Component} from "react";
export class ClasscComponent extends Component {
    render() {
        return (
            <div>
                <div className="container2">
                <h2 className="head1">This is created using Class Component</h2>
                <p className="para1">This is done using external CSS</p>
                <p style={{color:'blue', textAlign:"center"}}>This is done using inline CSS</p>
                </div>  
            </div>
        );
    }
}

// export default ClasscComponent;