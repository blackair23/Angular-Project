import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { sameValueGroupValidator } from 'src/app/shared/validator';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    passwords: this.fb.group({
      password: ['', [Validators.required, Validators.minLength(5)]],
      rePass: ['', Validators.required],
    }, {
      validators: [ sameValueGroupValidator('password', 'rePass') ]
    })

  })

  constructor(private fb: FormBuilder, private authService: AuthService) { }

  registerHandler(){
    if(this.form.invalid) {return;}
    console.log(this.form.value);
    const {username, email, passwords: {password} = {} } = this.form.value;
    this.authService.register(username!, email!, password!).subscribe(res => console.log(res));
  }


}
