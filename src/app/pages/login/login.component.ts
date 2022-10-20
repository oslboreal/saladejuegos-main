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

  onTestUserClick() {
    this.loginForm.controls.username.setValue('admin@admin.com');
    this.loginForm.controls.password.setValue('admin123');
  }

  onSubmit() {
    const username = this.loginForm.controls.username.value;
    const password = this.loginForm.controls.password.value;

    if (username && password) {
        this.auth.signInWithEmailAndPassword(username, password).then(() => {

        }).catch((error) => {
        });
    }
  }

  ngOnInit(): void {
  }
}
