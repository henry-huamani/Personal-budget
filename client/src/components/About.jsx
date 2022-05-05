import React from "react";
import Footer from "./Footer";

const About = () => {
    return(
        <React.Fragment>
            <header>
                <h4>Record all your monetary operations to be in control of your finances</h4>
            </header>

            <section>
                <img src="/assets/about.png" alt="About" />
            </section>

            <section>
                <p>This web app allows you to keep track of the expenses and income of money that you or your family is having.</p>
                <p>Record with exact date the expenses or income of money to then visualize the result of all of them or also visualize them filtering them by the type of operation.</p>
                <p>Also edit or delete operations if you made a mistake when registering them or because they are no longer relevant.</p>
            </section>

            <Footer/>
        </React.Fragment>
    )
}

export default About;