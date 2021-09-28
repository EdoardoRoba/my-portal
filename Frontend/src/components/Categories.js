import axios from "axios";
import React from "react";
import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import './Classes.css';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";
import { Rotate90DegreesCcw, Transform } from "@material-ui/icons";
var ScrollArea = require('react-scrollbar');

function getImage(cat) {
    // console.log(cat.imageUrl.includes("http") ? cat.imageUrl : "C:/Users/edoar/Desktop/ITAUROS/MyPortal/frontend/xdce-module-provisioning-v1/target/assets/xdce-module-provisioning-v1/img/" + cat.imageUrl)
    return cat.imageUrl.includes("http") ? cat.imageUrl : "/" + cat.imageUrl
}

function onChange(a, b, c) {
    // console.log(a, b, c);
}

const contentStyle = {
    color: '#fff',
    textAlign: 'center',
    background: 'transparent',
};

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function Categories(props) {
    const beUrl = "http://localhost:8080/"
    const [categories, setCategories] = React.useState(null)
    const [items, setItems] = React.useState(null)
    const [itemsInGrid, setItemsInGrid] = React.useState(null)
    const [hovered, setHovered] = React.useState(null)
    const [showItemName, setShowItemName] = React.useState(null)
    const [itemSelected, setItemSelected] = React.useState(null)
    const [selectedCategory, setSelectedCategory] = React.useState(null)

    const categoryRequest = (c) => {
        fetch(beUrl + "catalog?category=" + c.name)
            .then(results => results.json())
            .then(data => {
                axios.get(beUrl + "catalog?category=" + c.name).then((response) => {
                    setItems(response.data)
                    // console.log("ITEMSSS", response.data)
                    setSelectedCategory(c.label)
                })
            });
    }

    const categoryRequestInGrid = (c) => {
        fetch(beUrl + "catalog?category=" + c.name)
            .then(results => results.json())
            .then(data => {
                axios.get(beUrl + "catalog?category=" + c.name).then((response) => {
                    setItemsInGrid(response.data)
                    // console.log("ITEMSSS", response.data)
                    setSelectedCategory(c.label)
                })
            });
    }
    React.useEffect(() => {
        axios.get(beUrl + "categories").then((response) => {
            setCategories(response.data)
            // console.log(response.data)
        })
    }, [])

    return (
        // <Switch>
        //     <Route path="/newOrder">
        <div className="All">
            {/* <h2 style={{ marginTop: '2rem' }}>Select a category:</h2> */}
            <Box className="ZIndexed" id="categories" style={{ margin: '3rem' }} sx={{ flexGrow: 1 }}>
                <Grid id="categoryGrid" container spacing={4} className="ContainerCategories">
                    {categories !== null && categories.map(c => (<Grid item xs={4}>
                        <Item className="ScrollPage" onMouseEnter={() => { categoryRequestInGrid(c) }} onMouseLeave={() => { setItemsInGrid(null) }}>
                            <div>
                                <div style={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
                                    <div>
                                        <div>
                                            <a href="#items" className="Button" onClick={() => { categoryRequest(c) }}>
                                                <img className="ImageContent" src={getImage(c)} />
                                            </a>
                                        </div>
                                        <div className="MoveLeftTitle">
                                            <h4 className="ChangeColor" style={{ color: 'white' }}>{c.label}</h4>
                                        </div>
                                    </div>
                                    {(itemsInGrid === null || selectedCategory !== c.label) ? "" :
                                        <div>
                                            <div>
                                                Items contained in this category:
                                            </div>
                                            <div>
                                                <div>
                                                    <Grid id="itemsGrid" container spacing={1} className="ContainerItems">
                                                        {itemsInGrid.map(i => (<Grid item xs={3}>
                                                            <Item className="ScrollPageItem" onMouseEnter={() => { setShowItemName(true); setItemSelected(i.name) }} onMouseLeave={() => { setShowItemName(false); setItemSelected(null) }}>
                                                                <h3 className="ContentStyle">
                                                                    <button className="Button"><img className="ImageContentGrid" src={getImage(i)} /></button>
                                                                    {(!showItemName || itemSelected === null || itemSelected !== i.name) ? "" :
                                                                        <p style={{ fontSize: '4px' }}>{i.name}</p>
                                                                    }
                                                                </h3>
                                                            </Item>
                                                        </Grid>
                                                        ))}
                                                    </Grid>
                                                </div>
                                            </div>
                                            <div>
                                                <a href="#items" style={{ color: 'white', fontSize: 'xx-small', bottom: '5px' }}><Button style={{ maxWidth: '200px', maxHeight: '50px', fontSize: 'xx-small' }} variant="contained" onClick={() => { categoryRequest(c) }}>Select category</Button></a>
                                            </div>
                                        </div>
                                    }
                                </div>
                            </div>
                        </Item>
                    </Grid>))}
                    {/* <Grid item xs={5}>
                        <Item>xs=8</Item>
                    </Grid> */}
                </Grid>
            </Box>

            {/* <div id="categories" style={{ display: 'flex' }}>
                <div className="ContainerCategories" style={{ overflow: 'hidden' }}>
                    <h1 style={{ color: 'white' }}>Select a category:</h1>
                    <div style={{ overflowX: 'auto', overflowY: 'hidden', height: '500px' }}>
                        <div style={{ display: 'flex', height: '300px', marginLeft: '2rem', marginRight: '2rem' }}>
                            {categories !== null && categories.map(c => (<div className="ScrollPage"><Card><h3 className="ContentStyle"><a href="#items" className="Button" onClick={() => { categoryRequest(c) }}><img className="ImageContent" src={getImage(c)} /></a></h3><div className="NameContainer"><h4 className="ChangeColor" style={{ color: 'white' }}>{c.label}</h4></div></Card></div>))}
                        </div>
                    </div>
                </div>
            </div> */}

            <div id="items">
                {items === null ? "" : <div>
                    <div>
                        <div style={{ display: 'flex' }}>
                            <h2 style={{ color: 'white', width: '90%' }}>Select an item:</h2>
                            <a style={{ width: '10%' }} href="#categories"><button href="#categories" className="ButtonBack"><ArrowUpwardIcon style={{ color: 'white' }}></ArrowUpwardIcon></button></a>
                        </div>
                        <Box style={{ margin: '3rem' }} sx={{ flexGrow: 1 }}>
                            <Grid container spacing={4} className="SliderItems">
                                {items !== null && items.map(i => (<Grid className="ScrollPageItem" item xs={3}>
                                    <Item>
                                        <h3 className="ContentStyle">
                                            <button className="Button"><img className="ImageContent" src={getImage(i)} /></button>
                                        </h3>
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
                    </div>
                </div>
                }
            </div>

            {/* <div id="items">
                {items === null ? "" : <div>
                    <div>
                        <div style={{ display: 'flex' }}>
                            <h2 style={{ color: 'white', width: '90%' }}>Select an item:</h2>
                            <a style={{ width: '10%' }} href="#categories"><button href="#categories" className="ButtonBack"><ArrowUpwardIcon style={{ color: 'white' }}></ArrowUpwardIcon></button></a>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h3 style={{ color: 'white' }}>{selectedCategory}</h3>
                        </div>
                        <div className="SliderItems">
                            {items === null ? "" : items.map(i => (<div className="ScrollPageItem"><Card><h3 style={contentStyle}><button className="Button"><img className="ImageContent" src={getImage(i)} /></button></h3><div className="NameContainer"><h4>{i.name}</h4></div></Card></div>))}
                        </div>
                    </div>
                </div>
                }
            </div> */}
        </div >
        //     </Route>
        //     <Route component={Error} />
        // </Switch>
    );
}

export default Categories;
