import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import MenuIcon from '@material-ui/icons/Menu';
import ExpandMore from '@material-ui/icons/ExpandMore'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Collapse from '@material-ui/core/Collapse';
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import ReactTooltip from 'react-tooltip';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import './home.css';
// import IconCarolus from '../assets/brimob.png'
import HomeRoutes from '../../router/homeRoutes';
import myNavigation from '../../router/homeRoutes';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Routes,
    useParams,
    useMatch, 
    useLocation
} from "react-router-dom";
import { Avatar, ListItemText, Menu, MenuItem, TextField } from '@material-ui/core';
import { UseWindowDimensions } from '../../library/Utils';

function getDimention() {
    const { height, width } = UseWindowDimensions();
    return width
}


// import Images from '../assets/Images';

const drawerWidth = 307;
const closeWidth = 63

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        width: `calc(100% - ${closeWidth}px)`,
        backgroundColor: '#fff',
        color: 'black',
        height: 57,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        zIndex: 2
    },
    topleftOpen: {
        width: drawerWidth,
        borderRight: 0,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        backgroundColor: '#273b80'
    },
    topleftClose: {
        borderRight: 0,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(3) + 2,
        height: '78px',
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(7) + 1,
        },
        padding: 20,
        display: 'flex',
        backgroundColor: '#273b80'
    },
    drawerOpen: {
        width: drawerWidth,
        borderRight: 0,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        backgroundColor: '#2a9c6c',
    },
    drawerClose: {
        borderRight: 0,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(3) + 2,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(7) + 7,
        },
        backgroundColor: '#2a9c6c',
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        // justifyContent: 'flex-end',
        padding: theme.spacing(0, 1.5),
        // necessary for content to be below app bar
        
        ...theme.mixins.toolbar,
    },
    toolbarDrawer: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        // ...theme.mixins.toolbar
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    orangeAvatar: {
        margin: 10,
        color: '#fff',
        backgroundColor: 'black',
    },
    underline: {
        "&&&:before": {
            borderBottom: "none"
        },
        "&&:after": {
            borderBottom: "none"
        }
    }
}));

export default function Home(props) {
    let location = useLocation();
    console.log(location);
    const classes = useStyles();
    const theme = useTheme();
    const [selectedSubIndex, setSelectSub] = React.useState([]);
    const [selectedIndex, setSelectedIndex] = React.useState("Dashboard");
    const [open, setOpen] = React.useState(false);
    console.log(open);
    const [data, setData] = React.useState({
        array: [
            {
                img: 'dashboard',
                label: 'Dashboard',
                // path: 'dashboard',
                subItem: null,
                collapse: false,
            },
            {
                img: 'masterdata',
                label: 'Master Data',
                // path: '',
                subItem: [
                    {
                        img: 'profile',
                        label: 'Profile',
                        path: 'masterdata/profile',
                    },
                    {
                        img: 'anggota',
                        label: 'Anggota',
                        path: 'masterdata/anggota',
                    },
                    {
                        img: '',
                        label: 'Sejarah',
                        path: 'masterdata/sejarah',
                    }
                ],
                collapse: false,
            },
            {
                img: 'kegiatan',
                label: 'Kegiatan',
                // path: 'kegiatan',
                subItem: null,
                collapse: false,
            },
        ]
    });
    const options = [
        'Profile',
        'Logout',
    ];
    const [anchorEl, setAnchorEl] = React.useState(null);
    const openMenu = Boolean(anchorEl);

    const handleClickMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    const ITEM_HEIGHT = 48;


    const logout = () => {
        // localStorage.removeItem(Constant.TOKEN)
        window.location.reload();
    }

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    function handleCollapse(item) {
        setOpen(true);
        let arr = data.array
        let index = arr.findIndex((val) => val.label === item.label)
        arr[index].collapse = !arr[index].collapse
        setData({ ...data, data: arr })
    }

    const selectSub = (e) => {
        setOpen(true)
        setSelectSub(e)
        setSelectedIndex("")
    }

    const selectIndex = (e) => {
        setSelectSub("")
        setSelectedIndex(e)
        // alert(e)
        // if (open === false) {
        // setOpen(true)
        // }
    }
    console.log(classes);

    return (
        <div>
            <div className={classes.root}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    className={clsx(classes.appBar, {
                        [classes.appBarShift]: open,
                    })}
                >
                    <div className="appbar-content">
                        <div className="left-menu">
                            {
                                open ? 
                                <CloseIcon 
                                    className="menu-nav" 
                                    style={{
                                        width: 30,
                                        height: 40,
                                        cursor: 'pointer'
                                    }}
                                    onClick={() => setOpen(false)}
                                />
                                :
                                <MenuIcon 
                                    className="menu-nav"
                                    style={{
                                        width: 30,
                                        height: 40,
                                        cursor: 'pointer'
                                    }}
                                    onClick={() => setOpen(true)}
                                />
                            }
                            <Typography id="path">{props.name}</Typography>
                        </div>
                        <div className="right-menu">
                            <Typography>adek</Typography>
                        </div>
                    </div>
                </AppBar>
                <Drawer
                    variant="permanent"
                    className={clsx(classes.drawer, {
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    })}
                    classes={{
                        paper: clsx({
                            [classes.drawerOpen]: open,
                            [classes.drawerClose]: !open,
                        }),
                    }}
                >
                    <div className={classes.toolbar} style={{ border: 0, paddingTop: 10 }}>
                        <div style={{ width: '100%' }}>
                            <div style={{ display: 'flex' }}>
                                <img src={""} style={{ height: 30, width: 30, marginLeft: !open ? 5 : 0 }} />
                                {open ? <Typography style={{ marginLeft: 10, color: 'white', fontWeight: 'bold', alignSelf: 'center' }}>KORPS Brimob</Typography> : null}
                            </div>
                            <div style={{ borderBottom: 1, borderBottomColor: 'lightgray', borderBottomStyle: 'solid', marginTop: 10 }} />

                        </div>
                    </div>
                    {/* <Divider /> */}
                    <List>
                        {data.array.map((item, index) => {
                            return (
                                <div style={{ marginTop: index === 0 ? null : 5 }} >
                                    {item.subItem !== null ?
                                        <a data-tip={item.label} data-for={item.label}>
                                            <div style={{ justifyContent: 'space-between', flexDirection: 'row', display: 'flex', paddingLeft: open ? 20 : 0, paddingRight: 10, cursor: 'pointer' }} onClick={() => { handleCollapse(item) }}>
                                                <ListItem key={item.label}>
                                                    <ListItemIcon style={{ minWidth: open ? 40 : 56 }}>
                                                        <div style={{ backgroundColor: !open ? selectedIndex === item.label ? "#f0f0f0" : "transparent" : 'transparent', padding: 5, borderRadius: 10 }}><MailIcon /></div>
                                                    </ListItemIcon>
                                                    <Typography style={{ fontFamily: 'Nunito Sans, sans-serif', color: '#d5e0dc', fontSize: 14 }}>{item.label}</Typography>
                                                </ListItem>
                                                {item.subItem !== null ? (item.collapse ? <ExpandLess style={{ color: "#d5e0dc", marginLeft: 50, alignSelf: 'center' }} /> : <ExpandMore style={{ color: "#d5e0dc", marginLeft: 50, alignSelf: 'center' }} />) : null}
                                                {!open && (<ReactTooltip border={true} id={item.label} place="bottom" type="light" effect="solid" />)}
                                            </div>
                                        </a>
                                        :
                                        <Link to={``}>
                                            <div style={{ paddingLeft: open ? 20 : 0 }} className={selectedIndex === item.label ? "active" : ""}>
                                                <a data-tip={item.label} data-for={item.label}>
                                                    <ListItem button key={item.label} onClick={() => selectIndex(item.label)} style={{ backgroundColor: open ? selectedIndex === item.label ? "#f0f0f0" : "transparent" : 'transparent', borderTopLeftRadius: 20, borderBottomLeftRadius: 20 }}>
                                                        <ListItemIcon style={{ minWidth: open ? 40 : 56 }}>
                                                            <div style={{ backgroundColor: !open ? selectedIndex === item.label ? "#f0f0f0" : "transparent" : 'transparent', padding: 5, borderRadius: 10 }}><MailIcon /></div>
                                                        </ListItemIcon>
                                                        <Typography style={{ fontFamily: 'Nunito Sans, sans-serif', color: selectedIndex === item.label ? '#2a9c6c' : '#d5e0dc', fontSize: 14 }}>{item.label}</Typography>
                                                    </ListItem>
                                                </a>
                                                {!open && (<ReactTooltip border={true} id={item.label} place="bottom" type="light" effect="solid" />)}
                                            </div>
                                        </Link>
                                    }
                                    {item.subItem !== null &&
                                        <div>
                                            <Collapse in={item.collapse} timeout="auto" unmountOnExit>
                                                <List component="div" disablePadding>
                                                    {item.subItem.map((sub, indexs) => {
                                                        return (
                                                            <Link to={sub.label === "Logout" ? `/` : ``}>
                                                                <a data-tip={sub.label} data-for={sub.label}>
                                                                    <div style={{ paddingLeft: 80, borderTopLeftRadius: 20, borderBottomLeftRadius: 20 }} className={selectedSubIndex === sub.label ? "active" : ""} onClick={() => sub.label === "Logout" ? logout() : selectSub(sub.label)}>
                                                                        <ListItem button style={{ backgroundColor: selectedSubIndex === sub.label ? "#f0f0f0" : "transparent", borderTopLeftRadius: 20, borderBottomLeftRadius: 20 }}>
                                                                            <Typography style={{ fontFamily: 'Nunito Sans, sans-serif', color: selectedSubIndex === sub.label ? '#2a9c6c' : '#d5e0dc', fontSize: 14 }}>{sub.label}</Typography>
                                                                        </ListItem>
                                                                    </div>
                                                                </a>
                                                                {!open && (<ReactTooltip border={true} id={sub.label} place="bottom" type="light" effect="solid" />)}
                                                            </Link>
                                                        )
                                                    })}
                                                </List>
                                            </Collapse>
                                        </div>
                                    }
                                </div>
                            )
                        })}
                    </List>
                </Drawer>
                <div className="container">
                        <div>
                            {myNavigation.map((el) => {
                                if (el.path === location.pathname) {
                                    return (
                                        <div>
                                            <el.element />
                                        </div>
                                    )
                                }
                            })}
                        </div>
                </div>
            </div>
        </div>
    )
};
