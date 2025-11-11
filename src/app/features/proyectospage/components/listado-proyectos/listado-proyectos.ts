import { Component, ChangeDetectionStrategy, input } from '@angular/core';


@Component({
  selector: 'listado-proyectos',    /* 'app-listado-proyectos', */
  imports: [],
  templateUrl: './listado-proyectos.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListadoProyectos { 

    listName = input.required<string>();
    proyectos = input.required<Array<{ nombre: string; descripcion: string }>>();
    /* proyectos = input.required<proyecto[]>();  // Cambiado a 'proyecto[]' */
    
}
