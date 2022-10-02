//  Layout
import { HeaderOnly } from '../components/Layout';

// Pages
import Home from '../pages/Home';
import Following from '../pages/Following';
import Profiles from '../pages/Profiles';
import Upload from '../pages/Upload';
import Search from '../pages/Search';

// publicRoutes
const publicRoutes = [
    {
        path: '/home',
        component: Home,
    },
    {
        path: '/following',
        component: Following,
    },
    {
        path: '/profiles',
        component: Profiles,
    },
    {
        path: '/upload',
        component: Upload,
        layout: HeaderOnly,
    },
    {
        path: '/search',
        component: Search,
        layout: null,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
