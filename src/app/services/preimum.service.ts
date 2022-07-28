import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Occupation } from '../models/Occupation';
import { PremiumOutput } from '../models/PremiumOutput';
import { PremiumInput } from '../models/PremiumInput';


const baseUrl = `${environment.apiUrl}`;

@Injectable({ providedIn: 'root' })
export class PreimumService {
    constructor(private http: HttpClient) { }

    getAllOccupation() {
        return this.http.get<Occupation[]>(`${baseUrl}/GetOccupation`);
    }

    postPremiumInfo(preimumInput : PremiumInput) {
        return this.http.post(`${baseUrl}/GetPremiumInfo`,preimumInput);
    }

   

   

   
}