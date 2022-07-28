import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Occupation } from '../models/Occupation';


const baseUrl = `${environment.apiUrl}/users`;

@Injectable({ providedIn: 'root' })
export class PreimumService {
    constructor(private http: HttpClient) { }

    getAllOccupation() {
        return this.http.get<Occupation[]>(baseUrl);
    }

   

    create(params: any) {
        return this.http.post(baseUrl, params);
    }

   
}