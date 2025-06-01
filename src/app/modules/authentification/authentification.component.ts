import { Component, ChangeDetectionStrategy } from '@angular/core';
import {TuiFieldErrorPipe, TuiSegmented, TuiSwitch, TuiTooltip} from '@taiga-ui/kit';
import {TuiCardLarge, TuiForm, TuiHeader} from '@taiga-ui/layout';
import {
  TuiAppearance,
  TuiButton,
  TuiError,
  TuiIcon,
  TuiNotification,
  TuiTextfield,
  TuiTitle,
} from '@taiga-ui/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {AsyncPipe, NgIf} from '@angular/common';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrl: './authentification.component.less',
  imports: [
    AsyncPipe,
    NgIf,
    TuiCardLarge,
    TuiFieldErrorPipe,
    TuiForm,
    TuiHeader,
    TuiSegmented,
    TuiSwitch,
    TuiTooltip,
    TuiAppearance,
    TuiButton,
    TuiError,
    TuiIcon,
    TuiNotification,
    TuiTextfield,
    TuiTitle,
    ReactiveFormsModule,
  ],
})
export class AuthentificationComponent {
  protected readonly form = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl(''),
      subscribe: new FormControl(false),
      basic: new FormControl(true),
  });
}
