import { Component, OnInit } from '@angular/core';
import { SET_LIST } from '../sets';

@Component({
  selector: 'app-sets',
  templateUrl: './sets.component.html',
  styleUrls: ['./sets.component.css']
})
export class SetsComponent implements OnInit {
  setList = SET_LIST;

  constructor() { }

  ngOnInit(): void {
  }

}
