import { Component, OnInit, AfterViewInit } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { DataStructure } from './data-structure';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css']
})
export class MainContainerComponent implements OnInit, AfterViewInit {

  numbers5:number[];
  numbers7:number[];
  object:Array<DataStructure>;

  constructor() {
    this.numbers5 = [0,1,2,3,4];
    this.numbers7 = [0,1,2,3,4,5,6];
    this.object = [];
    this.createObjects();
  }

  ngOnInit() {

  }
  Check(){
    this.object =JSON.parse(JSON.stringify(this.object));
  }

  ngAfterViewInit(){
    for(let i of [0,1,2,3,4,5,6]){
      for(let j of [0,1,2,3,4]){
        this.object[i*5+j].createObservable();
      }
    }
    
      }

  resetAll(){
    for(let i of [0,1,2,3,4,5,6]){
      for(let j of [0,1,2,3,4]){
        this.object[i*5+j].reset();
      }
    }
  }

  createObjects(){
    let temp:number;
    for(let i of [0,1,2,3,4,5,6]){
      for(let j of [0,1,2,3,4]){
        temp = i*5+j;
        this.object.push(new DataStructure(temp));
      }
    }
  }

  getWidth(index: number){
    this.object[index].getRadius();
  }

}
