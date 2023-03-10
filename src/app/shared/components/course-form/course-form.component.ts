import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {
  fas,
  faXmark,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { nameValidator } from './nameValidator';
import { FormatMins } from './formatMins.pipe';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
})
export class CourseFormComponent {
  form!: FormGroup;
  authorIcon!: IconDefinition;

  console = console;

  constructor(public formBuilder: FormBuilder, public library: FaIconLibrary) {
    library.addIconPacks(fas);
  }

  ngOnInit() {
    this.authorIcon = faXmark;

    this.form = this.formBuilder.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      duration: ['', [Validators.required, Validators.min(0)]],
      author: ['', [nameValidator(/^[a-zA-Z0-9\s]*$/)]],
      authorList: this.formBuilder.array([]),
    });
  }

  get durationValue(): number {
    const duration = this.form.get('duration')?.value;
    if (!duration) {
      return 0;
    }

    return duration;
  }

  get author() {
    return this.form.get('author');
  }

  formField(title: string) {
    return this.form.get(title);
  }

  onAddAuthor() {
    if (this.author?.valid && this.author?.value) {
      const control = <FormArray>this.form.get('authorList');
      control.push(this.formBuilder.control(this.author.value));
      this.author.reset();
    }
  }

  isFieldInvalid(title: string) {
    return this.form.get(title)?.errors && this.form.get(title)?.touched;
  }

  get inputInvalidStyle() {
    return 'block mb-0 bg-red-50 border border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500';
  }

  get authorList(): FormArray {
    return <FormArray>this.form.get('authorList');
  }

  isFieldRequired(title: string) {
    return (
      this.form.get(title)?.errors?.required && this.form.get(title)?.touched
    );
  }

  onSubmit() {
    this.form.markAllAsTouched();
    if (this.form?.invalid) {
      return;
    }

    console.log({ form: this.form.value });
  }
}
