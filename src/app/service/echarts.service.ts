import { Injectable } from '@angular/core';
import * as echarts from 'echarts';

@Injectable()
export class EchartsService {
  constructor() { }

  emitEchart(id: string, options: any) {
    const myChart = echarts. init(document.getElementById(id));
    myChart.setOption(options);
  }
}
