import Container from 'react-bootstrap/Container';
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

import MenuBar from './components/MenuBar'
import routes,{RouteType} from './routes';
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
            </Container>
            <Footer/>
        </>
    )
}

export default MainPage