import { Routes } from "@angular/router";
import { CountryLayoutComponent } from "../layouts";
import { BySlugPageComponent, CapitalPageComponent, CountryPageComponent, RegionPageComponent } from "../pages";

export const countryRoutes: Routes = [
    {
        path: '',
        component: CountryLayoutComponent, 
        children: [
            {
                path: 'by-capital',
                component: CapitalPageComponent
            },
            {
                path: 'by-country',
                component: CountryPageComponent
            },
            {
                path: 'by-region',
                component: RegionPageComponent
            },
            {
                path: 'by/:slug',
                component: BySlugPageComponent
            },
            {
                path: '**',
                redirectTo: 'by-capital'
            }
        ]
    },
    {
        path: '**',
        redirectTo: ''
    }
];

export default countryRoutes
