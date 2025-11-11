import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ListadoProyectos } from "../proyectospage/components/listado-proyectos/listado-proyectos";
import { ProyectosService } from './services/proyectos-service';
import { AddProyecto } from '../proyectospage/components/add-proyecto/add-proyecto';

@Component({
  selector: 'app-proyectos-dos-page',
  standalone: true,
  imports: [ListadoProyectos, AddProyecto],
  templateUrl: './proyectos-dos-pages.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProyectosDosPage { 

  proyectosService = inject(ProyectosService);

  

}  


