import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { IconComponent } from '../../components/ui/icon/icon.component';
import { TextInputComponent } from '../../components/ui/form-fields/text-input/text-input.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    RouterLink,
    IconComponent,
    TextInputComponent,

    ReactiveFormsModule,
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  form = new FormGroup({
    search: new FormControl('')
  })

  constructor() {
    this.form.controls.search.valueChanges.subscribe((value) => {
      console.log(value)
    })
  }
}
