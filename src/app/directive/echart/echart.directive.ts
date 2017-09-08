import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import * as echarts from 'echarts';

@Directive({
  selector: 'echart'
})
export class EchartDirective implements OnInit {
  @Input('chartInfo') chartInfo: any;

  constructor(private el: ElementRef) { }

  public ngOnInit(): void {
    echarts.init(this.el.nativeElement).setOption(this.chartInfo);
  }
}
