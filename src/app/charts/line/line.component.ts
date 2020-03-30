import { Component, OnInit, Input } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.scss']
})
export class LineComponent implements OnInit {

    @Input() dates: any;
    @Input() dataSet: any;
    @Input() title: string;
    @Input() subtitle: string;
    @Input() color: string;
    formatDates = [];

    public lineChartData: ChartDataSets[];
    public lineChartLabels: Label[];
    public lineChartOptions = {
        responsive: true,
        legend: {
            display: false
        },
        scales: {
            xAxes: [{
                type: 'time',
                time: {
                    parser: 'DD/MM/YY HH:mm',
                    tooltipFormat: 'll HH:mm',
                    unit: 'day',
                    unitStepSize: 1,
                    displayFormats: {
                        'day': 'DD/MM/YY'
                    }
                }
            }],
        }
    };
    public lineChartColors: Color[];

    public lineChartLegend = true;
    public lineChartType = 'line';
    public lineChartPlugins = [];

    constructor() { }

    ngOnInit() {

    }

    ngOnChanges() {
        // this.dates.forEach(element => {
        //     this.formatDates.push(element.getDay() + '/' + (element.getMonth()) + '/' + element.getFullYear())
        // });
        this.lineChartColors = [
            {
                borderColor: 'grey',
                backgroundColor: this.color,
            },
        ];
        this.lineChartData = [
            { data: this.dataSet },
        ];
        this.lineChartLabels = this.dates;
    }

}
