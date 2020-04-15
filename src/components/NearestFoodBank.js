import React, {Component} from 'react';

class NearestFoodBank extends Component {
    state={
        foodBankDetails:[]
    }
    componentDidMount(){
        fetch('')
        then((Response)=>Response.json().
        then((findResponse)=>{
            console.log(findResponse)
        })
        )
    }
    render(){
        return(
            <div>

            </div>
        )
    }
}


export default NearestFoodBank;