import LoginPage from "./pages/Login";
import DashboardPage from "./pages/Dashboard";
import SettingsPage from "./pages/Settings";
import {routeType} from "./types/routeType";

export const PageRoutes = (userType: string) => {
    let routes: routeType[];
    switch (userType) {
        case 'admin':
            routes = [
                {
                    path: '/',
                    element: DashboardPage
                },
                {
                    path: '/settings',
                    element: SettingsPage
                }
            ]
            break;
        default:
            routes = [
                {
                    path: "/",
                    element: LoginPage
                }
            ]
    }
    return routes;
}