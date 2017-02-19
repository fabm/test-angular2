import {Component, OnInit} from '@angular/core';
import {CarService} from './shared/car.service';
import {Car} from "./shared/car.model";
import {TreeNode} from 'primeng/primeng';
import {MenuItem} from 'primeng/primeng';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CarService]
})
export class AppComponent implements OnInit {

  headerDetail: string = null;
  cols: any[] = [
    {
      header: 'vin',
      field: 'vin'
    },
    {
      header: 'year',
      field: 'year'
    },
    {
      header: 'brand',
      field: 'brand'
    },
    {
      header: 'color',
      field: 'color'
    }
  ];
  items: MenuItem[];
  cars: Car[] = [{
    "vin": "bbb",
    "year": "1990",
    "brand": "aaa",
    "color": "black"
  }];

  tree: TreeNode[] = [];

  constructor(private _carService: CarService) {
  }

  ngOnInit() {


    this.items = [
      {label: 'New', icon: 'fa-plus'},
      {label: 'Open', icon: 'fa-download'},
      {label: 'Undo', icon: 'fa-refresh'}
    ];


    let root: TreeNode = {
      label: 'root',
      children: [
        {
          label: 'root1',
          children: [
            {
              label: 'root11'
            },
            {
              label: 'root12'
            }
          ]
        },
        {
          label: 'root2',
          children: [
            {
              label: 'root21'
            },
            {
              label: 'root22'
            }
          ]
        }
      ]
    };
    this.tree.push(root);

  }

  myClick(event) {
    console.log(event);
  }

  load() {
    this._carService.loadCars().subscribe(res => this.cars = res);
    let root: TreeNode = {
      label: 'root',
      children: [
        {
          label: 'root1',
          children: [
            {
              label: 'root11'
            },
            {
              label: 'root12'
            }
          ]
        },
        {
          label: 'root2',
          children: [
            {
              label: 'root21'
            },
            {
              label: 'root22'
            }
          ]
        }
      ]
    };
    this.tree.push(root);


    this.items = [
      {label: 'New', icon: 'fa-plus'},
      {label: 'Open', icon: 'fa-download'},
      {label: 'Undo', icon: 'fa-refresh'}
    ];

  }

  private toggleDetail(field) {
    if (field === this.headerDetail) {
      this.headerDetail = null;
    } else {
      this.headerDetail = field;
    }
  }

  private isInDetail(field): boolean {
    return (field === this.headerDetail);
  }

}
