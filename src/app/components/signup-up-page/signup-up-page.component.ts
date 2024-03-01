import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import axios from 'axios';

@Component({
  selector: 'app-signup-up-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signup-up-page.component.html',
  styleUrl: './signup-up-page.component.scss'
})
export class SignupUpPageComponent {
  formData: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.formData = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  submitForm() {
    if (this.formData.valid) {
      const formDataObject = this.formData.value;
      axios.post('http://127.0.0.1:8000/signup/', formDataObject, {
        headers: {
          'Content-Type': 'application/json',
        }
      })
        .then((response) => {
          this.router.navigate(['/login']);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    } else {
    }
  }
}
