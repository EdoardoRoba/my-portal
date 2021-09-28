import axios from "axios";
import React from "react";
import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import './Classes.css';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";
var ScrollArea = require('react-scrollbar');

function Home(props) {

    return (
        // <Switch>
        //     <Route path="/home">
        <div className="HomeBackground">
            <div className="RoundBox">
                <div className="Scritta">
                    <h1 className="Scritta1">Create your own order.</h1>
                    <h1 className="Scritta2">Provided by<img style={{ position: 'absolute', height: '40px', width: '40px', marginLeft: '0.5rem' }} className="LogoContainer" src={"logo_blue_full.png"} /></h1>
                </div>
            </div>
            <Link to="/newOrder">
                <button className="ButtonGo">
                    <div className="Go">
                        Let's start!
                    </div>
                    <div id="icon" className="GoIcon">
                        <ArrowForwardIosIcon fontSize="medium"></ArrowForwardIosIcon>
                    </div>
                </button>
            </Link>
        </div>
        //     </Route>
        //     <Route component={Error} />
        // </Switch>
    );
}

export default Home;
