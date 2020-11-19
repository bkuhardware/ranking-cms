import React from 'react';
import Router from "./Router";
import Footer from "./components/common/Footer";
import Navigator from "./components/common/Navigator";

const App = () => {
    return (
        <div id="app">
            <Navigator />
            <div className="app-content">
                <Router />
            </div>
            <Footer />
        </div>
    )
};

export default App;