import { Component, OnInit } from '@angular/core';
import { CovidDatasourceService } from '../services/covid-datasource.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

    currentData: any;
    totalData: any;
    dates = [];
    confirmed = [];
    confirmedDaily = [];
    deaths = [];
    deathsDaily = [];


    constructor(private covidDataService: CovidDatasourceService) { }

    ngOnInit() {
        this.covidDataService.getCurrentData()
                                .subscribe((data: any) => {
                                    this.currentData = data;
                                })
        this.covidDataService.getDataSeries()
                                .subscribe((data: any) => {
                                        this.totalData = data.filter(elem => {
                                            return elem.country === 'Spain'
                                        });
                                        let stringDates = Object.keys(this.totalData[0].timeline.cases);
                                        stringDates.forEach(elem => {
                                            this.dates.push(new Date(elem));
                                        })
                                        this.dates = this.dates.slice(-10);
                                        let cases = Object.entries(this.totalData[0].timeline.cases);
                                        let casesDeaths = Object.entries(this.totalData[0].timeline.deaths);
                                        cases.forEach(elem => {
                                            this.confirmed.push(Number(elem[1]));
                                        });
                                        this.confirmed.forEach((elem, i) => {
                                            if (i !== 0) {
                                                this.confirmedDaily.push(elem - this.confirmed[i - 1]);
                                            }
                                        });
                                        casesDeaths.forEach(elem => {
                                            this.deaths.push(Number(elem[1]));
                                        });
                                        this.deaths.forEach((elem, i) => {
                                            if (i !== 0) {
                                                this.deathsDaily.push(elem - this.deaths[i - 1]);
                                            }
                                        });
                                        this.confirmed = this.confirmed.slice(-10);
                                        this.confirmedDaily = this.confirmedDaily.slice(-10);
                                        this.deaths = this.deaths.slice(-10);
                                        this.deathsDaily = this.deathsDaily.slice(-10);
                                    },
                                    (error:any) => {console.log(error);
                                });

    }
}
