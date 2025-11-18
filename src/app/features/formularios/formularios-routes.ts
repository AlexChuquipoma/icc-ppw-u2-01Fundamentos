import { Routes } from '@angular/router';

import { Formulariopage } from './pages/formulariopage/formulariopage';
import { FormulariosDinamicos } from './pages/formularios-dinamicos/formularios-dinamicos';
import { FormulariosMorePage } from './pages/formulariomorepage/more-forms';

export const formulariosRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'basic',
        title: 'Formularios Básicos',
        component: Formulariopage,
      },
      {
        path: 'dynamic',
        title: 'Formularios Dinámicos',
        component: FormulariosDinamicos,
      },
      {
        path: 'more',
        title: 'More',
        component: FormulariosMorePage,
      },
      {
        path: '**',
        redirectTo: 'basic',
      },
    ],
  },
];
