import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration.component.html',
  styleUrls: [],
})
export class RegistrationComponent {
  form!: FormGroup;

  constructor(private readonly formBuiler: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuiler.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  isFieldInvalid(title: string) {
    return this.form.get(title)?.errors && this.form.get(title)?.touched;
  }

  get inputValidStyle() {
    return 'bg-gray-50 border border-gray-300 text-gray-900';
  }

  get inputInvalidStyle() {
    return 'bg-red-50 border border-red-500 text-red-900';
  }

  isValidEmail() {
    return (
      this.form.get('email')?.errors?.email && this.form.get('email')?.touched
    );
  }

  isFieldRequired(title: string) {
    return (
      this.form.get(title)?.errors?.required && this.form.get(title)?.touched
    );
  }

  get login() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

  onSubmit() {
    this.form.markAllAsTouched();

    if (this.form?.invalid) {
      return;
    }

    console.log(this.form.value);
  }
}
