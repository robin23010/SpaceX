import { Component, OnInit } from '@angular/core';
import { SpaceXService } from '../services/space-x.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  launchYearArray : Array<number> =[]; 
  cardData:any;
  developerName:string="Robin Jain";


  //constructor having instance of spaceXService
  constructor(private spaceXService:SpaceXService) { }

  //angular life cycle called on component load
  ngOnInit(): void {
    this.launchYearArray=[2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019];
    this.spaceXService.firstPageApi().subscribe(data=>{
      this.cardData=data;
    })
  }


  // to filter data on the basis of selected year
  //year:string
  filterAsPerYear(year){
    this.spaceXService.yearFilterApi(year).subscribe(filterdData=>{
      this.cardData=filterdData;
    })
  };

   // to filter data on the basis of success of Launch
   //filterFlag :  boolean
  sucessFulLaunchFilter(filterFlag){
    this.spaceXService.launchSuccessFilterApi(filterFlag).subscribe(filterdData=>{
      this.cardData=filterdData;
    })
  };


     // to filter data on the basis of success of land
     //filterFlag :  boolean
  sucessLandingFilter(filterFlag){
    this.spaceXService.launchSuccessFilterApi(filterFlag).subscribe(filterdData=>{
      this.cardData=filterdData;
    })
  };

}
