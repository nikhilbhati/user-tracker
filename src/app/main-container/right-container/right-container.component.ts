import { Component, OnInit, Input, OnChanges, AfterViewInit, SimpleChange, SimpleChanges } from '@angular/core';
import { DataStructure } from '../data-structure';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-right-container',
  templateUrl: './right-container.component.html',
  styleUrls: ['./right-container.component.css']
})
export class RihtContainerComponent implements OnInit, OnChanges {
  previousValue: any;
  currentValue: any;
  firstChange: boolean;
  isFirstChange(): boolean {
    throw new Error("Method not implemented.");
  }


 
  @Input() objectright : Array<DataStructure>;
  observable = Observable.bind(this.objectright);
  constructor() {}
  
   
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  
  
  public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType = 'bubble';
  public barChartLegend = true;
  public barChartData = [
        {
          label: 'John',
          data: [
            {
              x: 3,
              y: 3,
              r: 20
            }
          ],
          backgroundColor:"#ff6384",
          hoverBackgroundColor: "#ff6384"
        },
        {
          label: 'John',
          data: [
            {
              x: 10,
              y: 3,
              r: 16
            }
          ],
          backgroundColor:"#ff6384",
          hoverBackgroundColor: "#ff6384"
        }
        ,
        {
          label: 'John',
          data: [
            {
              x: 4,
              y: 2,
              r: 11
            }
          ],
          backgroundColor:"#ff6384",
          hoverBackgroundColor: "#ff6384"
        }
        ,
        {
          label: 'John',
          data: [
            {
              x: 5,
              y: 2.5,
              r: 17
            }
          ],
          backgroundColor:"#ff6384",
          hoverBackgroundColor: "#ff6384"
        }
  ];

  
 
  ngOnInit() {
    // this.getData().subscribe
    console.log(JSON.stringify(this.objectright));    
  }
  getData(){
    return this.objectright;
  }
  ngAfterViewInit(){
    
  }

 
  
  ngOnChanges( change: SimpleChanges){
    // this.objectright =
    //console.log("");
    //this.objectright.forEach(element => {
     // let p=1;     
      //this.barChartData[0].data.push({
        //  x: 3,
          //y: p,
          //r: this.objectright[0].getRadius       
     // }); p++;
    //});
  }
  



}
