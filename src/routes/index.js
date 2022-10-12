//  Layout
import { HeaderOnly } from '../components/Layout';
import routesConfig from '../config/routes'

// Pages
import Home from '../pages/Home';
import Following from '../pages/Following';
import Profiles from '../pages/Profiles';
import Upload from '../pages/Upload';
import Search from '../pages/Search';

// publicRoutes
const publicRoutes = [
    {
        path: routesConfig.home,
        component: Home,
    },
    {
        path: routesConfig.following,
        component: Following,
    },
    { path: '/@:nickname', component: Profiles },
    {
        path: routesConfig.upload,
        component: Upload,
        layout: HeaderOnly,
    },
    {
        path: routesConfig.search,
        component: Search,
        layout: null,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
