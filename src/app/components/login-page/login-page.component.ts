import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import axios from 'axios';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ReactiveFormsModule,RouterModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  formData: FormGroup;

  constructor(private formBuilder: FormBuilder ,private router: Router) {
    this.formData = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  submitForm() {
    if (this.formData.valid) {
      const formDataObject = this.formData.value;
      axios.post('http://127.0.0.1:8000/login/', formDataObject, {
        headers: {
          'Content-Type': 'application/json',
        }
      })
        .then((response) => {
          const accessToken = response.data.access;

        // Save the access token to local storage
        localStorage.setItem('access', accessToken);
          this.router.navigate(['/']);

        })
        .catch((error) => {
          console.error('Error:', error);
        });
    } else {
    }
  } 
}