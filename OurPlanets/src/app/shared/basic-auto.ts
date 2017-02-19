import { Component } from '@angular/core';

@Component({
  selector: 'basic-auto-demo',
  template: `
    <div>
      <h3>Fluid Row Heights</h3>
       <ngx-datatable
        class="material"
        [rows]="rows"
        [loadingIndicator]="loadingIndicator"
        [columns]="columns"
        [columnMode]="'force'"
        [headerHeight]="50"
        [footerHeight]="50"
        [rowHeight]="'auto'"       
        width="300px">
      </ngx-datatable>
    </div>
  `
})
export class BasicAutoComponent {

  rows = [
    { name: 'Austin', gender: 'Male', company: 'Swimlane' },
    { name: 'Dany', gender: 'Male', company: 'KFC' },
    { name: 'Molly', gender: 'Female', company: '<button md-icon-button><md-icon>info</md-icon></button>' },
  ];
  loadingIndicator: boolean = false;

  columns = [
    { prop: 'name' },
    { name: 'Gender' },
    { name: 'Company' }
  ];

  constructor() {
    this.fetch((data) => {
      this.rows = data;
      setTimeout(() => { this.loadingIndicator = false; }, 1500);
    });
  }

  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/company-names.json`);

    req.onload = () => {
      //cb(JSON.parse(req.response));
    };

    req.send();
  }

}
