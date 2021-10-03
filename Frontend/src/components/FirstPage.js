import React from "react";
import 'antd/dist/antd.css';
import axios from "axios";
import './Classes.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";
import { Menu } from 'antd';
import { DatabaseOutlined, ShoppingCartOutlined, BarChartOutlined, HomeOutlined } from '@ant-design/icons';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
var ScrollArea = require('react-scrollbar');
const { SubMenu } = Menu;

function getImage(cat) {
    // console.log(cat.imageUrl.includes("http") ? cat.imageUrl : "C:/Users/edoar/Desktop/ITAUROS/MyPortal/frontend/xdce-module-provisioning-v1/target/assets/xdce-module-provisioning-v1/img/" + cat.imageUrl)
    return cat.imageUrl.includes("http") ? cat.imageUrl : "/" + cat.imageUrl
}

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function FirstPage(props) {
    const beUrl = "http://localhost:8080/"
    const [state, setState] = React.useState({ current: 'home' })
    const [items, setItems] = React.useState(null)

    const categoryRequest = (c) => {
        console.log(beUrl + "catalog?category=" + c)
        fetch(beUrl + "catalog?category=" + c)
            .then(results => results.json())
            .then(data => {
                axios.get(beUrl + "catalog?category=" + c).then((response) => {
                    setItems(response.data)
                })
            });
    }

    let handleClick = e => {
        console.log('click ', e);
        setState({ current: e.key });
        if (e.key === "items") {
            categoryRequest("iaas_google")
        } else {
            setItems(null)
        }
    };
    return (
        // <Switch>
        //     <Route path="/home">
        <div style={{ backgroundColor: 'white' }}>
            <div style={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
                <Menu style={{ marginTop: '2rem', width: '27%' }} onClick={handleClick} selectedKeys={[state]} mode="horizontal">
                    <Menu.Item key="home" icon={<HomeOutlined />}>
                        Home
                    </Menu.Item>
                    <Menu.Item key="items" icon={<DatabaseOutlined />}>
                        Items
                    </Menu.Item>
                    <Menu.Item key="statistics" icon={<BarChartOutlined />}>
                        Statistics
                    </Menu.Item>
                    <Menu.Item key="cart" icon={<ShoppingCartOutlined />}>
                        Cart
                    </Menu.Item>
                </Menu>
            </div>
            <div>
                {(state.current !== "home") ? "" : <div style={{ width: '70%', marginLeft: 'auto', marginRight: 'auto', marginTop: '3rem' }}>
                    home
                </div>}
            </div>
            <div>
                {(state.current !== "items" && items === null ? "" : <div style={{ width: '70%', marginLeft: 'auto', marginRight: 'auto', marginTop: '3rem' }}>
                    <Box style={{ margin: '3rem' }} sx={{ flexGrow: 1 }}>
                        <Grid container spacing={1} className="SliderItems">
                            {items !== null && items.map(i => (<Grid className="ScrollPageItem" item xs={3}>
                                <Item>
                                    <h5 className="ContentStyle">
                                        <button className="Button"><img className="ImageContent" src={getImage(i)} /></button>
                                    </h5>
                                    <div className="NameContainer">
                                        <h4>{i.name}</h4>
                                    </div>
                                </Item>
                            </Grid>
                            ))}
                            {/* {categories !== null && categories.map(c => (<Grid className="ScrollPage" item xs={3}><Item><a href="#items" className="Button" onClick={() => { categoryRequest(c) }}><img className="ImageContent" src={getImage(c)} /></a><h4 className="ChangeColor" style={{ color: 'white' }}>{c.label}</h4></Item></Grid>))} */}
                            {/* <Grid item xs={5}>
                        <Item>xs=8</Item>
                    </Grid> */}
                        </Grid>
                    </Box>
                </div>)}
            </div>
            <div>
                {(state.current !== "statistics") ? "" : <div style={{ width: '70%', marginLeft: 'auto', marginRight: 'auto', marginTop: '3rem' }}>
                    statistics
                </div>}
            </div>
            <div>
                {(state.current !== "cart") ? "" : <div style={{ width: '70%', marginLeft: 'auto', marginRight: 'auto', marginTop: '3rem' }}>
                    cart
                </div>}
            </div>
        </div>
        //     </Route>
        //     <Route component={Error} />
        // </Switch>
    );
}

export default FirstPage;
