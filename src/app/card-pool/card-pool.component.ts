import { Component, OnInit } from '@angular/core';
import { ROTATION_LIST } from '../card-pool';

@Component({
  selector: 'app-card-pool',
  templateUrl: './card-pool.component.html',
  styleUrls: ['./card-pool.component.css']
})
export class CardPoolComponent implements OnInit {
  rotationList = ROTATION_LIST;

  constructor() { }

  ngOnInit(): void {
  }

}
