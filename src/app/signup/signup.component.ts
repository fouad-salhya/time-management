import { HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule, NgClass],
  providers: [AuthService],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  private authService = inject(AuthService)

  signupForm = new FormGroup({
    username: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, [Validators.required, Validators.minLength(6)])
  })

  signupUser() {

      this.authService.signup(this.signupForm.value)
                      .subscribe({ 
                        next: res => console.log(res),
                        error: err => console.log(err) 
                      })
                      
                    
  }

}
