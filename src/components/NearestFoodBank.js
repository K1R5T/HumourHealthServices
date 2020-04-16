import React, {Component} from 'react';

class NearestFoodBank extends Component {
    state={
        foodBanks:[]
    }

    handleInputChange = () => {
        this.setState({
          query: this.search.value
        })
      }

     componentDidMount() {
        // let url = "https://www.givefood.org.uk/api/1/foodbanks/";
        // let url ="https://api.chucknorris.io/jokes/random"
        
        // fetch("https://www.givefood.org.uk/api/1/foodbanks/" ,{
        //     mode:'no-cors'
        // })
        // .then(res => res.json())
        // .then(banks => this.setState({banks}, ()=>console.log(banks)))


        const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url = "https://www.givefood.org.uk/api/1/foodbanks/"; // site that doesn’t send Access-Control-*
fetch(proxyurl + url) 
.then((result)=>{
    result.json().then((resp)=>{
        this.setState({data:resp})
    })
}

)
// .then(contents => console.log(contents))
// .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))

    }
    render() {
        const data=this.state.data
        console.log(data)
        return (
            <div className="foodbank-container">
            {
                data?
                <div>

                <p>Constituency: {data[0].parliamentary_constituency} </p>
                <p>Name: {data[0].name}</p>
                </div>
                :<p>Please wait..</p>

            }
            
            
            </div>
        )
    }
}


export default NearestFoodBank;