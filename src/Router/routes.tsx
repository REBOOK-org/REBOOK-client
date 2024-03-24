import { FC } from 'react';
import Home from "@/views/Home";

interface Route {
    path: string;
    component: FC; 
    layout: FC | null; 
}

const routes: Route[] = [
    {
        path: '/',
        component: Home,
        layout: null,
    }
];

export default routes;
