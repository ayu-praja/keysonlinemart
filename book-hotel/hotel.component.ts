import { Component, OnInit } from '@angular/core';
// import { StarRatingComponent } from 'ng-starrating';
// import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { HotelService } from "../service/hotel.service";
@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss']
})
export class BookHotelComponent implements OnInit {

  hoteldata: any[] = [];
  images:any[]=[]
  facilities:any[]=[]
  city:any
  hotelstar:any[]=[]
  hotelfilter=false
  constructor(private service: HotelService) { }

  ngOnInit() {
  }

  enableHotellist()

  {
    this.hotelfilter=true;
    console.log("hi");
    
    this.service.getHotels(this.city)
    .subscribe(info => {
      this.hoteldata=info
      //console.log(this.hoteldata);
      for(let i=0;i<this.hoteldata.length;i++)
    {
    this.images[i]=this.hoteldata[i].imageUrls.split("|");
    this.hotelstar[i]=this.hoteldata[i].hotelStarRating.split(" ")
    this.facilities[i]=this.hoteldata[i].roomFacilities.split("|")
    this.hoteldata[i]['facilities']=this.facilities[i];
    this.hoteldata[i]['images']=this.images[i]
    this.hoteldata[i]['hotelstar']=this.hotelstar[i]
    }
    
     console.log(this.hoteldata);
     
     
     

    
    
      // console.log(this.flightdata);
    },error=> {
      console.log(error);
      
    });
    
    
  }
}

