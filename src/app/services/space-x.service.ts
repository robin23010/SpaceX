import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SpaceXService {

  constructor(private http:HttpClient) { }

  //to fetch all data of spaceX 
  firstPageApi():Observable<any>{
    return this.http.get('https://api.spaceXdata.com/v3/launches?limit=100')
  }

   //to fetch all data on the basis success of launch
  launchSuccessFilterApi(sucessFlag):Observable<any>{
    return this.http.get('https://api.spaceXdata.com/v3/launches?limit=100&launch_success='+sucessFlag)
  }

     //to fetch all data on the basis success of land
  launchLandFilterApi(landFlag):Observable<any>{
    return this.http.get('https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success='+landFlag)
  }

     //to fetch all data on the basis year of launch
  yearFilterApi(year):Observable<any>{
    return this.http.get('https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year='+year)
  }
}
