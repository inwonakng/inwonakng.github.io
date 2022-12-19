import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Publications from "./pages/Publications"

export interface RouteType{
    path: string;
    name: string;
    component: React.ComponentType;   
}

const routes = [
    {
        path: '/home',
        name: 'Home',
        component: Home,
    }, {
        path: '/publications',
        name: 'Publications',
        component: Publications,
    }, {
        path: '/projects',
        name: 'Projects',
        component: Projects,
    }
]
    

// export { Route }

export default routes