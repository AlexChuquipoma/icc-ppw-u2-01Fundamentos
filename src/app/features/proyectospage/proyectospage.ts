import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ListadoProyectos } from './components/listado-proyectos/listado-proyectos';

interface Proyecto {
  id: number;
  nombre: string;
  descripcion: string;
}

@Component({
  selector: 'app-proyectos-page',
  standalone: true,
  imports: [ListadoProyectos],
  templateUrl: './proyectospage.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProyectosPage { 

  name = signal('');
  description = signal('');

  proyectos = signal<Proyecto[]>([
    { id: 1, nombre: 'Proyecto A', descripcion: 'Descripción' },
  ]);

  changeName(value: string) {
    this.name.set(value);
  }
  
  changeDescription(value: string) {
    this.description.set(value);
  }

  addProyecto() {
    const nuevosProyectos = [...this.proyectos()];
    const newProyecto: Proyecto = {
      id: nuevosProyectos.length + 1,
      nombre: this.name(),
      descripcion: this.description()
    };
    nuevosProyectos.push(newProyecto);
    this.proyectos.set(nuevosProyectos);
    this.name.set('');
    this.description.set('');
  }
}
