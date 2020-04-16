import React from 'react'

export default function UsefulLinks() {
    return (
        <div className="usefulContainer">
            <div className="usefultitleContainer">
                <h1>Helpfull Links</h1>
            </div>
            <div className="nhsLinksContainer">
                <h3>NHS</h3>
                <p>This is a link to the NHS website, it will take you directly to the latest advice which is updated daily.</p>
                <a className="link" href="https://www.nhs.uk/conditions/coronavirus-covid-19/">NHS Latest advice</a>
            </div>
            <div className="universalcreditContainer">
                <h3>Universal Credit</h3>
                <p>This is a link to the help and guidance for Universal Credit. It contains information about various parts of Universal Credit, how to claim Sick Pay and more</p>
                <a className="link" href="https://www.understandinguniversalcredit.gov.uk/employment-and-benefits-support/">Universal Credit Help</a>
            </div>
            <div className="nhsContainer">
                <h3>NHS 111</h3>
                <p>This link will take you directly to the NHS 111 online help service to get help if you think you may have Coronavirus or any other illness that may need treating. In an EMERGENCY call 999</p>
                <a className="link" href="https://111.nhs.uk/">NHS 111 Online</a>
            </div>
            <div className="mindCOntainer">
                <h3>Mind </h3>
                <p>This is a link to Mind. It covers *Practical advice for staying at home *Taking care of your mental health and wellbeing *Support for work, benefits and housing *Checklist for staying at home. It also has other useful links.</p>
                <a className="link" href="https://www.mind.org.uk/information-support/coronavirus/coronavirus-and-your-wellbeing/">Mind for mental health support</a>
            </div>
        </div>
    )
}
