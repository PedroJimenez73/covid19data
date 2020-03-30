import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})

export class CovidDatasourceService {

    urlCovidData = environment.urlCovidData;

    constructor(private http: HttpClient) {
        
    }

    getCurrentData() {
        return this.http.get(this.urlCovidData + 'countries/spain')
            .pipe(map(
                (res: any) => {
                    return res
                }
            ))
    }

    getDataSeries() {
        return this.http.get(this.urlCovidData + 'v2/historical')
                .pipe(map(
                    (res: any) => {
                        return res
                    }
                ))
    }
}
