import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormUtils } from '../../../../utils/FormUtils/FormUtil/FormUtil';

@Component({
  selector: 'app-formularios-dinamicos',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './formularios-dinamicos.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormulariosDinamicos {

  private fb = inject(FormBuilder);
  formUtils = FormUtils;

  myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],

    lenguajes: this.fb.array([
      this.fb.control('Python', [Validators.required, Validators.minLength(3)]),
      this.fb.control('Java', [Validators.required, Validators.minLength(3)]),
    ], Validators.minLength(3))
  });

  newLenguaje: FormControl = this.fb.control('', [Validators.required, Validators.minLength(3)]);

  onAddToLenguajes() {
    if (this.newLenguaje.invalid) return;

    this.lenguajes.push(
      this.fb.control(this.newLenguaje.value, Validators.required)
    );

    this.newLenguaje.reset();
  }

  get lenguajes(): FormArray {
    return this.myForm.get('lenguajes') as FormArray;
  }

  onSubmit() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    console.log('Datos:', this.myForm.value);
    alert('Formulario válido. Datos enviados correctamente.');
    this.myForm.reset();
  }

  onDeleteLenguaje(index: number) {
    this.lenguajes.removeAt(index);
  }
  
}
