import React, { Component } from 'react';

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null
        };
    }

    componentDidCatch(error) {
        this.setState({error});
    }

    render() {
        return <div className="main-container">
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header pull-right">
                            <a href="#">
                                <img src="/images/logo.png" className="logo"/>
                            </a>
                        </div>
                    </div>
                    <ul className="nav navbar-nav navbar-right">    {/* Navbar - Right */}
                    </ul>
                    <ul className="nav navbar-nav">                 {/* Navbar - Left */}
                    </ul>
                </nav>
                <section className="container">
                    {this.state.error ?
                        <div className="alert alert-danger center-block">
                            <span className="glyphicon glyphicon-info-sign" />&nbsp;
                            An unexpected error has occurred:
                            <br />
                            {this.state.error.toString()}
                        </div>
                        : this.props.children
                    }
                </section>
            </div>
    }
}