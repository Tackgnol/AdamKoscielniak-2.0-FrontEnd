import { map, catchError, tap } from 'rxjs/operators';
import { BaseService } from '../utils/baseService';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import SummaryItem from 'src/models/SummaryItem';


@Injectable({
    providedIn: 'root'
})
export class SummaryService extends BaseService {
    constructor(http: HttpClient) {
        super('/summary/counts', http);
    }

    getCounts(query: { from?: string; to?: string; skills?: Array<string> }) {
        return this.getMany<SummaryItem>(query).pipe(
            map(r => {
                return r;
            })
        );
    }
}
