import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login.component.html',
  styleUrls: [],
})
export class LoginComponent {
  form!: FormGroup;

  constructor(
    private formBuiler: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.form = this.formBuiler.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  isFieldInvalid(title: string) {
    return this.form.get(title)?.errors && this.form.get(title)?.touched;
  }

  isValidEmail() {
    return (
      this.form.get('email')?.errors?.email && this.form.get('email')?.touched
    );
  }

  get inputValidStyle() {
    return 'bg-gray-50 border border-gray-300 text-gray-900';
  }

  get inputInvalidStyle() {
    return 'bg-red-50 border border-red-500 text-red-900';
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

    this.authService
      .login(this.form.value)
      .pipe(first())
      .subscribe({
        next: () => {
          this.router.navigateByUrl('/');
        },
        error: (err) => {
          console.error('Error with login', err);
        },
      });
  }
}
