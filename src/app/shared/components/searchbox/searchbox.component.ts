import { Component, createPlatform, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.css']
})
export class SearchboxComponent implements OnInit {
  formGroup = new FormGroup({ searchInput: new FormControl('') });

  constructor(private router: Router, private fb: FormBuilder) {

  }

  ngOnInit(): void {
  }

  onEnter() {
    this.router.navigate(['/results', this.formGroup.controls.searchInput.value])
  }
}
