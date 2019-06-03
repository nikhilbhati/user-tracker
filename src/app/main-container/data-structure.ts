import {Subscription , fromEvent, timer} from 'rxjs';
// import { Observable } from 'rxjs/add/observable/';
//import 'rxjs/add/observable/fromEvent';

export class DataStructure {

    // element: any;
    // mouseEnter: any;
    // mouseLeave: any;
    // subscriptionEnter : Subscription;
    // subscriptionLeave: Subscription;
    timer: Subscription;
    divNumber : Number;
    radius: number;
    radiusInfo:Array<number>;

    constructor(n:number){
        // this.element=null;
        // this.mouseEnter=null;
        // this.mouseLeave=null;
        // this.subscriptionEnter=null;
        // this.subscriptionLeave=null;
        this.divNumber = n;
        this.radius = 0;
        this.radiusInfo=[];
    }

    createObservable(){
        const element = document.getElementById('division'+this.divNumber);
        const secondsCounter = timer(1000,1000);
        const mouseEnter = fromEvent(element, 'mouseenter');
        const mouseLeave = fromEvent(element, 'mouseleave');
        const subscriptionEnter = mouseEnter.subscribe((evt: MouseEvent) => {
            console.log("In Mouse Enter event of division " + this.divNumber);
            console.log(`Coords: ${evt.clientX} X ${evt.clientY}`);
            this.timer = secondsCounter.subscribe(n=>{
                console.log("It's been ${n} seconds since subscribing!");
                this.increment();

            });
        });
        const subscriptionLeave = mouseLeave.subscribe((evt: MouseEvent) => {
            console.log("In Mouse Leave event of division " + this.divNumber);
            console.log(`Coords: ${evt.clientX} X ${evt.clientY}`);
            this.timer.unsubscribe();
            this.radiusInfo[this.radiusInfo.length] = this.radius - this.radiusInfo[this.radiusInfo.length-1] ;
            console.log("timer stopped!!");
            });
            return this;
        }
      

    //   getObservables(){
    //       const element = ;
    //   }

      getDivNumber(){
          return this.divNumber;
      }

      getRadius(){
          return this.radius;
      }

      increment(){
          this.radius=this.radius+2;
      }

      reset(){
          this.radius=0;
      }

}
