import React from 'react';
import Router from "./Router";
import Footer from "./components/common/Footer";
import Navigator from "./components/common/Navigator";
import {Container} from "reactstrap/es";

const App = () => {
    return (
        <div id="app">
            <Navigator />
            <div className="app-content">
                <Container className="main-layout">
                    <Router />
                </Container>
                <Footer />
            </div>
        </div>
    )
};

export default App;