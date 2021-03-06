import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import { Button } from '@mui/material';
import Payment from '../../Payment/Payment';
import MyOrders from '../../Orders/MyOrders/MyOrders';
import DashboardHome from '../DashboardHome/DashboardHome';
import './Dashboard.css';
import AddProduct from '../AddProduct/AddProduct';
import ManageAllOrders from '../ManageOrder/ManageAllOrders/ManageAllOrders';
import useAuth from '../../../hooks/useAuth';
import ManageAllProducts from '../ManageProducts/ManageAllProducts/ManageAllProducts';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import AddReview from '../../AddReview/AddReview';
import PrivateRoute from '../../Login/PrivateRoute/PrivateRoute';
import AdminDashboard from '../AdminDashboard/AdminDashboard';

const drawerWidth = 200;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const { logout, admin } = useAuth();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <Link className="link-style" to="/home"><Button color="inherit">Home</Button></Link>

            {
                !admin ?
                    <Box>
                        <Link className="link-style" to={`${url}/myOrders`}><Button color="inherit">My Orders</Button></Link>
                        <Link className="link-style" to={`${url}/payment`}><Button color="inherit">Payment</Button></Link>
                        <Link className="link-style" to={`${url}/addReview`}><Button color="inherit">Review</Button></Link>
                    </Box>
                    :
                    <Box>
                        <Link className="link-style" to={`${url}/manageAllOrders`}><Button color="inherit">Manage all orders</Button></Link>
                        <Link className="link-style" to={`${url}/addProduct`}><Button color="inherit">Add a Product</Button></Link>
                        <Link className="link-style" to={`${url}/manageProducts`}><Button color="inherit">Manage Products</Button></Link>
                        <Link className="link-style" to={`${url}/makeAdmin`}><Button color="inherit">Make Admin</Button></Link>
                    </Box>
            }
            <Link className="link-style" to="/home"><Button color="inherit" onClick={logout}>Logout</Button></Link>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />

                <Switch>
                    <Route exact path={path}>
                        {
                            !admin ?
                                <DashboardHome></DashboardHome>
                                :
                                <AdminDashboard></AdminDashboard>
                        }
                    </Route>
                    <PrivateRoute path={`${path}/myOrders`}>
                        <MyOrders></MyOrders>
                    </PrivateRoute>
                    <PrivateRoute path={`${path}/payment`}>
                        <Payment></Payment>
                    </PrivateRoute>
                    <PrivateRoute path={`${path}/addReview`}>
                        <AddReview></AddReview>
                    </PrivateRoute>
                    <AdminRoute path={`${path}/manageAllOrders`}>
                        <ManageAllOrders></ManageAllOrders>
                    </AdminRoute>
                    <AdminRoute path={`${path}/addProduct`}>
                        <AddProduct></AddProduct>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageProducts`}>
                        <ManageAllProducts></ManageAllProducts>
                    </AdminRoute>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                </Switch>
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    window: PropTypes.func,
};

export default Dashboard;