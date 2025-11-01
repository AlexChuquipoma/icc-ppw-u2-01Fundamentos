import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-perfilpage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './perfilpage.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Perfilpage {
  name = signal('Alexander');
  lastName = signal('Chuquipoma');
  age = signal(22);

  getFullName() {
    return `${this.name()} ${this.lastName()} con edad ${this.age()} años`;
  }

  changeData() {
    this.name.set('Ana');
    this.lastName.set('Gonzales');
    this.age.set(25);
  }

  resetData() {
    this.name.set('Alexander');
    this.lastName.set('Chuquipoma');
    this.age.set(22);
  }

  changeAge() {
    this.age.set(18);
  }
}
