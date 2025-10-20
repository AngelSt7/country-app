import { Routes } from '@angular/router';
import { HomePageComponent } from './features/shared/pages/home-page/home-page.component';

export const routes: Routes = [
    {
        path: '',
        component: HomePageComponent
    },
    {
        path: 'country',
        loadChildren: () => import('@/app/features/country/routes/country.routes')
    },
    {
        path: '**',
        redirectTo: ''
    }
];
