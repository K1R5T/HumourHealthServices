import React, { Component } from 'react'
import PhysicalHealthCardSingle from './PhysicalHealthCardSingle';


class PhysicalHealthCard extends Component {

    state = {
        physicaltips: [
            {
                title: "What are the symptoms?",
                content: "The two main symptoms are a fever and a cough, this can lead to breathing problems. You need to look for a continuous cough, this can be coughing a lot more and it may be worse than usual. Having a fever is classed as your body temperature being over 37.8C. Headache, sore throat & diarrohea has been reported as sypmtoms",
            },
            {
                title: "When to go to hospital?",
                content: "A large amount of people will recover after rest and medication such as paracetomol. The reason people need to go to the hsopital is for difficulty breathing.",
            },
            {
                title:"Mild symptoms what to do",
                content:"People are currently being advised ONLY to call NHS 111 when you are worried that your symptoms are becoming worse. You are also being advised not to go to their GP."
            }
        ]
    }
    render() {
        const eachtipphys = this.state.physicaltips.map((tip, index) => {
            return <PhysicalHealthCardSingle
                key={index}
                title={tip.title}
                content={tip.content}/>

        })

        return (
            <div className="tip-container">
                {eachtipphys}
            </div>
        )
    }
}

export default PhysicalHealthCard;