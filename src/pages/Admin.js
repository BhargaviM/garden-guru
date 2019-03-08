import React, { Component } from 'react';
import AddPlantCategory from './admin/AddPlantCategory';
import AddPlant from './admin/AddPlant';
import AddPlantCare from './admin/AddPlantCare';

class Admin extends Component {
    render() {
        return (
            <div>
                <section className="hero is-light is-small">
                    <div className="hero-body">
                        <div className="container">
                            <div className="column is-6 is-offset-2">
                                <h2 className="title">Add Plant Category</h2>
                                <AddPlantCategory />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="hero is-small">
                    <div className="hero-body">
                        <div className="container">
                            <div className="column is-6 is-offset-2">
                                <h2 className="title">Add Plant</h2>
                                <AddPlant />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="hero is-light is-small">
                    <div className="hero-body">
                        <div className="container">
                            <div className="column is-6 is-offset-2">
                                <h2 className="title">Add Plant Care</h2>
                                <AddPlantCare />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Admin;
