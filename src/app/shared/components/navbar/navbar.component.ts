import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public auth: AngularFireAuth) { }

  login() {

  }

  logout() {
    this.auth.signOut();
  }
  
  ngOnInit(): void {
  }

}
