import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Occupation } from '../models/Occupation';
import { PremiumOutput } from '../models/PremiumOutput';


const baseUrl = `${environment.apiUrl}`;

@Injectable({ providedIn: 'root' })
export class PreimumService {
    constructor(private http: HttpClient) { }

    getAllOccupation() {
        return this.http.get<Occupation[]>(`${baseUrl}/GetOccupation`);
    }

    postPremiumInfo(PremiumOutput : PremiumOutput) {
        return this.http.post(`${baseUrl}/GetPremiumInfo`,PremiumOutput);
    }

   

   

   
}