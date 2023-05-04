import { Routes } from "@angular/router";


export const routes: Routes = [
    {
        path: 'home',
        title: 'Dog Breed Gallery',
        loadComponent: () =>
            import('./app/app.component').then((c) => c.AppComponent)
    },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
]