import { Routes } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: 'superman',
        loadComponent: () => import('./main/components/superman/superman.component')
            .then(m => m.SupermanComponent)
    },
    {
        path: 'hero/:hero',
        loadComponent: () => import('./core/components/hero/hero.component')
            .then(m => m.HeroComponent)
    }
];
