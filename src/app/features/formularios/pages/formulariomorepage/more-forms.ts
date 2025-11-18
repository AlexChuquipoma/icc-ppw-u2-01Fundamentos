import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormUtils } from '../../../../utils/FormUtils/FormUtil/FormUtil';

@Component({
  selector: 'app-formularios-more',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './more-forms.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormulariosMorePage {

  private fb = inject(FormBuilder);
  formUtils = FormUtils;

  myForm: FormGroup = this.fb.group({
    genero: ['M', [Validators.required]],
    notificaciones: [true, [Validators.required]],
    condiciones: [false, [Validators.requiredTrue]],
  });

  onSubmit() {
    this.myForm.markAllAsTouched();

    if (this.myForm.invalid) return;

    console.log('Datos enviados:', this.myForm.value);
    alert('Formulario válido. Datos registrados correctamente.');
  }
}


