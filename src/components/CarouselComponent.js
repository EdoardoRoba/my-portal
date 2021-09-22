import axios from "axios";
import React from "react";
import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import './Classes.css';

function getImage(cat) {
    // console.log(cat.imageUrl.includes("http") ? cat.imageUrl : "C:/Users/edoar/Desktop/ITAUROS/MyPortal/frontend/xdce-module-provisioning-v1/target/assets/xdce-module-provisioning-v1/img/" + cat.imageUrl)
    return cat.imageUrl.includes("http") ? cat.imageUrl : "/" + cat.imageUrl
}

function onChange(a, b, c) {
    // console.log(a, b, c);
}

const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: 'transparent',
};

function CarouselComponent(props) {
    const beUrl = "http://localhost:8080/"
    const [categories, setCategories] = React.useState(null)
    React.useEffect(() => {
        axios.get(beUrl + props.toGet).then((response) => {
            setCategories(response.data)
            // console.log(response.data)
        })
    }, [])


    // <img className="ImageContent" src={getImage(c)} />
    return (
        <div className="Container">
            <Carousel className="Carousel" afterChange={onChange}>
                {categories !== null && categories.map(c => (<div className="ScrollPage"><h3 style={contentStyle}><img className="ImageContent" src={getImage(c)} /></h3></div>))}
            </Carousel>
        </div>
    );
}

export default CarouselComponent;
