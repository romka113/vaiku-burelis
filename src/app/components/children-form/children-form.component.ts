import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-children-form',
  templateUrl: './children-form.component.html',
  styleUrls: ['./children-form.component.css'],
})
export class ChildrenFormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  public summerCamp(f: NgForm) {
    console.log(f);
  }
}
