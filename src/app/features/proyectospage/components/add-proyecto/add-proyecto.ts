import { ChangeDetectionStrategy, Component, signal, output } from '@angular/core';

@Component({
  selector: 'add-proyecto',
  imports: [],
  templateUrl: './add-proyecto.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddProyecto { 
  name = signal('');
  description = signal('');  

  // Eventos
  newProyecto = output<Proyecto>();
  delProyecto = output<void>(); // <-- nuevo evento

  addProyecto() {
    const newProyecto: Proyecto = {
      id: Math.floor(Math.random() * 1000),
      nombre: this.name(),
      descripcion: this.description()
    };

    this.newProyecto.emit(newProyecto);
    this.name.set('');
    this.description.set('');
  }

  delFirstProyecto() {
    this.delProyecto.emit(); // <-- emite evento para eliminar
  }

  changeName(value: string) {
    this.name.set(value);
  }

  changeDescription(value: string) {
    this.description.set(value);
  }
}
