import { effect, Injectable, signal, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {
  private readonly STORAGE_KEY = 'proyectosApp';
  private isBrowser: boolean;

  proyectos = signal<Proyecto[]>([]);

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);


    if (this.isBrowser) {
      const data = this.loadProyectos();
      this.proyectos.set(data);

      effect(() => {
        const proyectosActuales = this.proyectos();
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(proyectosActuales));
      });
    }
  }

  private loadProyectos(): Proyecto[] {
    if (this.isBrowser) {
      const data = localStorage.getItem(this.STORAGE_KEY);
      return data
        ? JSON.parse(data)
        : [{ id: 1, nombre: 'Proyecto A', descripcion: 'Descripción' }];
    } else {
      return [];
    }
  }

  addProyecto(newProyecto: Proyecto) {
    this.proyectos.set([...this.proyectos(), newProyecto]);
  }

  delFirstProyecto() {
  const lista = this.proyectos();
  lista.pop(); 
  this.proyectos.set([...lista]); 
  }
}
