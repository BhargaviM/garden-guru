import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';
import PlantSelectionForm from './pages/PlantSelectionForm';
import AboutUs from './pages/AboutUs';
import Help from './pages/Help';
import Footer from './Footer';

class App extends Component {
    state = {
        homeNavStatus: '',
        aboutUsNavStatus: '',
        helpNavStatus: ''
    }

    // Highlight the selected menu item with 'is-active' class
    handleHomeClick = event => {
        this.setState({
            homeNavStatus: 'is-active',
            aboutUsNavStatus: '',
            helpNavStatus: ''
        });
    }

    handleAboutUsClick = event => {
        this.setState({
            homeNavStatus: '',
            aboutUsNavStatus: 'is-active',
            helpNavStatus: ''
        });
    }

    handleHelpClick = event => {
        this.setState({
            homeNavStatus: '',
            aboutUsNavStatus: '',
            helpNavStatus: 'is-active'
        });
    }

    render() {
        return (
            <div>
                <div>
                    <section className="hero is-small">
                        <NavBar
                            homeNavStatus={this.state.homeNavStatus}
                            handleHomeClick={this.handleHomeClick}
                            aboutUsNavStatus={this.state.aboutUsNavStatus}
                            handleAboutUsClick={this.handleAboutUsClick}
                            helpNavStatus={this.state.helpNavStatus}
                            handleHelpClick={this.handleHelpClick}/>
                    </section>
                    <Switch>
                        <Route exact path='/' component={PlantSelectionForm} handleAboutUsClick={this.handleAboutUsClick}/>
                        <Route path='/about-us' component={AboutUs} onClick={this.setAboutUsState}/>
                        <Route path='/help' component={Help}/>
                    </Switch>
                </div>
                <div><Footer /></div>
            </div>
        );
    }
}

export default App;
