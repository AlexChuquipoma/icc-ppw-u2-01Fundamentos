import { Routes } from '@angular/router';
import { Perfilpage } from './features/perfilpage/perfilpage';
// import { Homepage } from './features/homepage/homepage';

export const routes: Routes = [
    // {
    //     path: 'home',
    //     component: Homepage
    // },
    {
        path: '',
        component: Perfilpage
    }
];
