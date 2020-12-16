import React from 'react';
import {BrowserRouter as Router,} from "react-router-dom";
import Main from "./components/Main";


const App = (props) => {
    return <Router>
        <Main {...props}/>
    </Router>

}

export default App;
