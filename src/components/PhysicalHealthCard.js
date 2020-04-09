import React, { Component } from 'react'
import PhysicalHealthCardSingle from './PhysicalHealthCardSingle';

class PhysicalHealthCard extends Component {

    state={
        physicaltips:[
            {title:"Go for a walk",content:"Get away from the house and enjoy the warmth of the sun and the splendor of nature."},
            {title:"Catch up on some reading", content:"Curl up on your bed, sofa or favourite chair & use the free time to get lost in escapist fiction or eye opening history."},
            {title:"Catch up with friends", content:"You may not be able to see your friends physically but a call or even facetime to catch up on the past good times."},
            {title:"Reignite past hobbies", content:"Get back to crocheting, knitting, guitar or piano playing, digitizing all those old photographs, bake a cake, write that novel. Now’s the time."},
            {title:"C-L-E-A-N & Organise", content:"More spare time means having time to do those small tasks you may have been putting off. Organise the junk draw(We allll have one) & why not organise your socks."},
            {title:"Time with Family", content:"You can finally have that quality time with your household. You can have game nights, binge watch tv and films & just having the time to talk to each other."},
            {title:"Routine", content:"Routine is very important for mental health, having structure throughout your day will help you feel a sense of control. You can exercise from home, theres yoga, learn to meditate. These type of activites will help reduce anxiety and depression."},
            {title:"Rest", content:"Practice relaxtion techniques. Take time to go outside and sit and just listen to birds and the rustling of trees"},
            {title:"Gratitude", content:"Take note of the blessings in your life & start a gratitude diary."}
        ]
    }
    render() {
        const eachtip = this.state.physicaltips.map((tip, index) => {
            return <PhysicalHealthCardSingle
                key={index}
                title={tip.title}
                content={tip.content} />

        })

        return (
            <div className="tip-container">
                {eachtip}
            </div>
        )
    }

}

export default PhysicalHealthCard;