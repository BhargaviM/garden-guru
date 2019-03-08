import React, { Component } from 'react';

class AboutUs extends Component {
    render() {
        return (
            <section className="hero is-light is-medium">
                <div className="hero-body">
                    <div className="container">
                        <h2 className="title">
                            About Us
                        </h2>
                        <div className="content">I am a new mom and a new home owner. When we moved to our new home, we inherited a garden and having never been a person with a green thumb I was lost. In the next few months I have read anything and everything I have found about the plants we inherited and devised a plan to take care of them.</div>

                        <div className="content">My roses needed to be fertilized every two weeks starting in late spring and the last fertilizer dose should be no later than August so they can go dormant in the New England Winter that comes next. My hydrangea needs to be pruned in midst of our winter anytime between Jan-April. Also, the hydrangea needs a differnt fertilizer than that of the roses. And add to the mix, the rhondodendrons and tulips and the rest of the plants and I ended up creating a long sheet of what needs to happen When for each plant. Then I had to figure out how to set calendar reminders for each of these events and note the information on what tasks need to be addressed.</div>

                        <div className="content">I looked for a custom garden care solution and didn't find one, so I created a version of this application for myself. I hope this helps you to take care of your plants.
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default AboutUs;
