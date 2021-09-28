import axios from "axios";
import React from "react";

function Cube(props) {
    return (
        <div className="Scene">
            <div className="Cube">
                <div className="Faces Face-up"></div>
                <div className="Faces Face-down"></div>
                <div className="Faces Face-left"></div>
                <div className="Faces Face-right"></div>
                <div className="Faces Face-front"></div>
                <div className="Faces Face-back"></div>
            </div>
        </div>
    );
}

export default Cube;
