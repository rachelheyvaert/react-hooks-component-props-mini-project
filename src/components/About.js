import React from "react";

function About ({ image, about }) {
    return (
        <React.Fragment>
        <aside>
        <img src={image} alt="blog logo"/>
        <p>{about}</p>
        </aside>
        </React.Fragment>

    )
}


export default About;