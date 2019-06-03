import { Injectable } from '@angular/core';

@Injectable()
export class BubbleChartDataService {
  generateData = (num: number) => {
    const results = [];
    const devices = ['Printer', 'Router', 'Tablet', 'Workstation'];

    for (let i = 0; i < num; i++) {
      const result = {
        id: i,
        type: devices[Math.floor(Math.random() * devices.length)]
      };

      results.push(result);
    }

    return results;
  }
}