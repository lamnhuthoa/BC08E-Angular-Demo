import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bt-4',
  template: `
    <div  class="container">
      <h3 class="display-4  ">Register Form</h3>
      <div class="form-group">
        <p style="fontWeight: 'bold'">Email:</p>
        <input class="form-control w-25" [(ngModel)]="title" />
      </div>
      <div class="form-grouop">
        <p style="fontWeight: 'bold'">FullName:</p>
        <input
          class="form-control w-25"
          placeholder="Enter full name"
          #tagInput
        />
      </div>
      <div class="form-group mt-4">
        <button class="btn btn-success" (click)="showFullName(tagInput.value)">
          Submit
        </button>
      </div>
      <div>
        <strong>Email: </strong><span>{{title}}</span>
        <br />
        <strong>FullName: </strong><span>{{name}}</span>
      </div>
    </div>
  `,
})
export class BT4Component implements OnInit {
  title:string = 'abc@gmail.com';
  name:string = '';

  constructor() {}

  showFullName(fullName: string) {
    this.name = fullName;
  }

  ngOnInit() {}
}
