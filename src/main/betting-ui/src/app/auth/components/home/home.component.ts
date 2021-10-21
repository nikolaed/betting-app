import { DatePipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/shared/services/auth.service';
import { InteractionService } from 'app/interaction.service';
import * as $ from "jquery";
import { setDate } from 'ngx-bootstrap/chronos/utils/date-setters';
import { MatchesService } from 'app/matches.service';

declare const todayDate:any;
declare const tomz1:any;
declare const tomz2:any;
declare const tomz3:any;
declare const prev1:any;
declare const prev2:any;
declare const prev3:any;
declare const prev1Date:any;
declare const prev2Date:any;
declare const prev3Date:any;
declare const tomz2Date:any;
declare const tomz1Date:any;
declare const tomz3Date:any;

declare const todayzDate:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  get date():any {
    return this.interactionService.sharedDate;
  }

  // set date(value:any){
  //   this.interactionService.sharedDate = value;
  // }

  today: number = Date.now();

  matches: any[] | undefined;

  //tomz1:any;

  tomzFirst:any;
  tomzSecond:any;
  tomzThird:any;

  prevFirst:any;
  prevSecond:any;
  prevThird:any;

  tomzSecondDate:any;
  tomzFirstDate:any;
  tomzThirdDate:any;

  prevFirstDate:any;
  prevSecondDate:any;
  prevThirdDate:any;

  todayzDate:any;
  
  

  currentDate: Date = new Date();
  
  todayDateForSeach: number = Date.now();

  dateOfMatch:any;

  dateSearch: any;

  loaded:any;

  bsValue: Date = new Date();

  showMatchesForDateSelected(){
    console.log(this.dateOfMatch);
  }

  updateValue(val: any) {
    this.loaded = val;
  }

  setDate(date:any){
    console.log(date);
  }

  reloadDate(date: any){
    var dateTrans = new Date(date);
    //console.log(date);
    //console.log(dateTrans);
    this.dateOfMatch = date;

  }
  
  

  constructor(private authService: AuthService, private router: Router, private interactionService: InteractionService, private matchesService: MatchesService) { }

  ngOnInit(): void {
    let dateQuery = todayDate();
    this.tomzFirst = tomz1();
    this.tomzSecond = tomz2();
    this.tomzThird = tomz3();
    this.prevFirst = prev1();
    this.prevSecond = prev2();
    this.prevThird = prev3();

    console.log(this.prevFirst);

    this.tomzSecondDate = tomz2Date();
    this.tomzFirstDate = tomz1Date();
    this.tomzThirdDate = tomz3Date();
    this.prevFirstDate = prev1Date();
    this.prevSecondDate = prev2Date();
    this.prevThirdDate = prev3Date();

    this.todayzDate = todayzDate();
    //this.loaded = true;
    //console.log(this.today);
    //console.log(this.tomzFirst);
    this.matchesService.getMatchesByDate(dateQuery).subscribe(result => {
      //console.log(result);
      this.matches = result;
    },(err: HttpErrorResponse) => {
      console.log(err);
    });
    //console.log(dateQuery);
    //console.log(this.dateOfMatch);
    //console.log(this.bsValue);
  //   $("datepicker").datepicker().on('changeDate', function (e) {
  //     console.log(e.target);
  // });

  }

  changeDate(event: any) {
    this.currentDate = new Date(event);
    let formattedDate = this.tommddyyyy(this.currentDate);
    //console.log(formattedDate);
    //this.dateSearch = formattedDate;

    this.dateOfMatch = formattedDate;
    //console.log(this.dateOfMatch);
    //let currentUrl = 'datepicker';
    // this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
    //     this.router.navigateByUrl('/home/datepicker');
    // });
    this.router.navigateByUrl('/home/datepicker');

    //this.router.navigateByUrl('/home/datepicker', this.dateSearch);
    // this.router.navigate(['datepicker']);
    //this.interactionService.sharedDate = this.dateSearch;
  }

  tommddyyyy(date:any) {
    var myDate = new Date(date);
    var prettyDate =
    myDate.getFullYear() + '-' + 
    ( '0' + (myDate.getMonth()+1) ).slice( -2 ) + '-' +
    ( '0' + myDate.getDate()).slice(-2);
    
    return prettyDate;
  }



 

}
