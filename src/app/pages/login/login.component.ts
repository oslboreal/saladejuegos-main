import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    username: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private fb: FormBuilder, public auth: AngularFireAuth) { }

  onSubmit() {
    this.loginForm.controls.username.setValue('admin@admin.com');
    this.loginForm.controls.password.setValue('admin123');
    let username = this.loginForm.controls.username.value;
    let password = this.loginForm.controls.password.value;
    // admin@admin.com
    // admin123
    if (username && password) {
      this.auth.signInWithEmailAndPassword(username, password).then(() => {
        this.auth.user.subscribe(x => console.log(x));
      });
    }
  }

  ngOnInit(): void {
  }

}
