import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpPostService} from '../../service/http-post.service';
import {EchartsService} from '../../service/echarts.service';
import { CarrierService} from '../../service/carrier.service';

@Component({
  selector: 'fun-details-main',
  templateUrl: './fun-details-main.component.html',
  styleUrls: ['./fun-details-main.component.scss']
})
export class FunDetailsMainComponent implements OnInit {
  // some Objects
  fundDetails;
  // echarts options
  netValueLine;
  belongings;
  productions;
  raisePercentagesLine;
  // something alone without Object
  fundId;
  netValue;
  raiPer;
  userId:number;
  // remote loading
  log;
  constructor(public router: Router,
              private route: ActivatedRoute,
              public httpPostService: HttpPostService,
              public echartsService: EchartsService,
              public carrierService: CarrierService) {
    this.log = {
      _current: 1,
      _total: 1,
      _dataSet: [],
      _loading: true,
      _pageSize: 4
    }
    this.fundDetails = {};
  }

  ngOnInit() {
    this.userId = -1;
    this.getFundID();
    this.getFundDetails();
    this._refreshData();
    this.getUserId();
  }
  getFundDetails() {
    // 完成 fund 信息的赋值
    const body = JSON.stringify({
      fund_id : this.fundId
    });
    // TODO update here
    // this.httpPostService.getReponseData('get-fund-detail', body)
    this.httpPostService.getReponseTestDataByPost('get-fund-detail', body)
      .subscribe(data => {
        const d = data.json();
        this.fundDetails = d;
        console.log(this.fundDetails);
        this.netValue = this.fundDetails.netvalues[3];
        this.raiPer = this.fundDetails.raise_percentages[3];
        this.setCharts();
        // TODO success
      }, error => {
        // TODO fail
        // alert('http失败');
      } );
  }
  getFundID() {
    // 接收路由传参
    this.route.params.subscribe(params => {
      this.fundId = params['_fundId'];
      console.log(this.fundDetails.id);
    });
  }
  setCharts() {
    this.netValueLine = {
      title : {
        text: '基金净值走势',
        left: '50%',
        textAlign: 'center',
      },
      tooltip : {
        trigger: 'axis'
      },
      calculable : true,
      xAxis : [
        {
          type : 'category',
          boundaryGap : false,
          data : this.fundDetails.dates
        }
      ],
      yAxis : [
        {
          type : 'value',
          axisLabel : {
            formatter: '{value}￥'
          }
        }
      ],
      series : [
        {
          name: '单位净值',
          type: 'line',
          data: this.fundDetails.netvalues,
          itemStyle : {
            normal : {
              lineStyle: {
                width: 4, // 折线宽度
                  color: '#de3633' // 折线颜色
              },
              label : {show: true}
            }
          },
        }
      ]
    };
    this.echartsService.emitEchart('net1', this.netValueLine);
    this.echartsService.emitEchart('net2', this.netValueLine);
    this.belongings = {
      title: {
        text: '资产配置',
        left: '50%',
        textAlign: 'center',
      },
      series: [

        {
          label: {
            normal: {
              show: true,
              position: 'outside',
              formatter: '{b} : {c} ({d}%)'

            }
          },

          type:'pie',
          radius: ['20%', '55%'],

          data: this.fundDetails.asset_allocation
          //   [
          //   {value:335, name:'直达'},
          //   {value:310, name:'邮件营销'},
          //   {value:234, name:'联盟广告'},
          //   {value:135, name:'视频广告'},
          //   {value:1048, name:'百度'},
          //   {value:251, name:'谷歌'},
          //   {value:147, name:'必应'},
          //   {value:102, name:'其他'}
          // ]
        }
      ]
    };
    this.echartsService.emitEchart('belongings', this.belongings);
    this.productions = {
      title: {
        text: '产业配置',
        left: '50%',
        textAlign: 'center',
      },
      series: [

        {
          label: {
            normal: {
              show: true,
              position: 'outside',
              formatter: '{b} : {c} ({d}%)'

            }
          },
          type:'pie',
          radius: ['20%', '55%'],

          data: this.fundDetails.industry_allocation
        }
      ]
    };
    this.echartsService.emitEchart('productions', this.productions);
    this.raisePercentagesLine = {
      title: {
        text:'基金涨跌幅',
        left: '50%',
        textAlign: 'center',
      },
      tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
          type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      yAxis : [
        {
          type : 'value'
        }
      ],
      xAxis : [
        {
          type : 'category',
          axisTick : {show: false},
          data : this.fundDetails.dates
        }
      ],
      series : [
        {
          name: '涨跌幅',
          type: 'bar',
          label: {
            normal: {
              show: true,
              position: 'inside'
            }
          },
          data: this.fundDetails.raise_percentages
        },
      ]
    };
    this.echartsService.emitEchart('raisePercentagesLine', this.raisePercentagesLine);
  }
  toBuy() {
    this.getUserId();
    if (this.userId === -1) {
      console.log('now i want to buy and my userId is ' + this.userId);
      alert('您还未登录！');
    } else {
      this.router.navigate(['/toBuy', {userId: this.userId, fundId: this.fundId, fundName: this.fundDetails.name}]);
    }
  }
  _refreshData = () => {
    this.log._loading = true;
    const body = JSON.stringify({
      fund_id: this.fundId,
      page_no: this.log._current,
      page_size: this.log._pageSize,
    });
    // this.httpPostService.getReponseData(this._current, this._pageSize, 'netvalue-log')
    this.httpPostService.getReponseTestDataByPost('netvalue-log', body)
      .subscribe(data => {
        const d = data.json();
        this.log._dataSet = d.netvalues_log;
        this.log._total = d.log_num;
        this.log._loading = false;
      });
  }
  getUserId() {
    this.userId = this.carrierService.userId;
    console.log('fund-details-main get this.userId:' + this.userId);
  }

  toCollect () {
    const body = JSON.stringify({
      user_id: this.carrierService.userId,
      fund_id: this.fundId
    });
    // TODO update here
    // this.httpPostService.getReponseData('forum-essay-collect', body)
    this.httpPostService.getReponseTestDataByPost('fund-collect', body)
      .subscribe(data => {
        const d = data.json();
        if (d.code.toString() === '1') {
          alert('您成功收藏该基金！');
          // TODO update the code
        } else if (d.code.toString() === 'XXX') {
          alert('你已经收藏过该基金产品！');
        } else {
          alert('您未能收藏成功该基金！');
        }
        return true;
      }, error => {
        // TODO fail
        // alert('http失败');
        return false;
      } );
  }
}
