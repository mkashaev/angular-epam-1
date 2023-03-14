import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  form!: FormGroup;
  submitted = false;

  console = console;

  constructor(private readonly formBuiler: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuiler.group({
      login: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  get login() {
    return this.form.get('login');
  }

  get password() {
    return this.form.get('password');
  }

  onSubmit() {
    this.submitted = true;
    this.form.markAllAsTouched();

    if (this.form?.invalid) {
      return;
    }
  }
}
