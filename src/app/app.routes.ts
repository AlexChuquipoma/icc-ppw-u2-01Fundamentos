import { Routes } from '@angular/router';
import { Homepage } from './features/homepage/homepage';
import { Perfilpage } from './features/perfilpage/perfilpage';
import { ProyectosPage } from './features/proyectospage/proyectospage';
import { ProyectosDosPage } from './features/proyectos-dos-pages/proyectos-dos-pages';
import { Formulariopage } from './features/formulariopage/formulariopage';

export const routes: Routes = [
  { path: '', component: Homepage },

  { path: 'perfil', 
    component: Perfilpage },

  { path: 'proyectos', 
    component: ProyectosPage },
    
  { path: 'proyectos-dos', 
    component: ProyectosDosPage },

  {path: 'formulariopage',
    component: Formulariopage},

];
