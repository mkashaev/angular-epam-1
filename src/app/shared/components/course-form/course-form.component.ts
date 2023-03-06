import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
})
export class CourseFormComponent {
  form!: FormGroup;

  console = console;

  constructor(public formBuilder: FormBuilder, public library: FaIconLibrary) {
    library.addIconPacks(fas);
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      duration: ['', [Validators.required, Validators.min(0)]],
      author: [''],
      authorList: this.formBuilder.array([]),
    });
  }

  onAddAuthor() {
    console.log('Clicked');
    const control = <FormArray>this.form.get('authorList');
    control.push(this.formBuilder.control(this.form.get('author')?.value));
    this.form.get('author')?.reset();
  }

  get authorList(): FormArray {
    return <FormArray>this.form.get('authorList');
  }

  get title() {
    return this.form.get('title');
  }

  get description() {
    return this.form.get('description');
  }

  get duration() {
    return this.form.get('duration');
  }

  onSubmit() {
    this.form.markAllAsTouched();
    if (this.form?.invalid) {
      return;
    }

    console.log(this.form.value);
  }
}
