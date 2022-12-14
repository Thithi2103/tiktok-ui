//  Layout
import { HeaderOnly } from '~/layouts';
import config from '~/config';

// Pages
import Home from '../pages/Home';
import Following from '../pages/Following';
import Profiles from '../pages/Profiles';
import Upload from '../pages/Upload';
import Search from '../pages/Search';
import Live from '../pages/Live';


// publicRoutes
const publicRoutes = [
    {
        path: config.routes.home,
        component: Home,
    },
    {
        path: config.routes.following,
        component: Following,
    },
    { path: '/@:nickname', component: Profiles },
    {
        path: config.routes.upload,
        component: Upload,
        layout: HeaderOnly,
    },
    {
        path: config.routes.search,
        component: Search,
        layout: null,
    },
    {
        path: config.routes.live,
        component: Live,
    },

];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
