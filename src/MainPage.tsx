import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, { ReactNode, useEffect } from 'react';
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

import MenuBar from './components/MenuBar'
import routes,{RouteType} from './routes';
import Home from './pages/Home';
import Footer from './components/Footer';

const MainPage = () => {
    
    const getRoutes = (
        routes: RouteType[]
    ) => {
        return routes.map((prop, key) => 
            <Route
                exact
                path={prop.path}
                component={prop.component}
                key={key}
            />
        );
    };

    return (
        <>
            <MenuBar routes={routes}/>
            <Container  fluid>
                <div className="main-body">

                <Switch>
                    {getRoutes(routes)}
                    <Redirect from="*" to="home" />
                </Switch>
                </div>
                {/* hi! */}
            </Container>
            <Footer/>
        </>
    )
}

export default MainPage