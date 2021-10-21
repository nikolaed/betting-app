import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit, SimpleChange } from '@angular/core';
import { MatchesService } from 'app/matches.service';
import { AuthService } from 'app/shared/services/auth.service';

declare const todayDate:any;

@Component({
  selector: 'show-by-default',
  templateUrl: './show-by-default.component.html',
  styleUrls: ['./show-by-default.component.scss']
})
export class ShowByDefaultComponent implements OnInit {

  today: number = Date.now();

  @Input() dateTransferred :any;

  matches: any[] | undefined;

  constructor(private authService: AuthService, private matchesService: MatchesService) { }

  ngOnInit(): void {
    let dateQuery = todayDate();
    this.dateTransferred = todayDate();
    this.matchesService.getMatchesByDate(dateQuery).subscribe(result => {
      // console.log(result);
      this.matches = result;
    },(err: HttpErrorResponse) => {
      console.log(err);
    });

  }

  ngOnChanges(changes: SimpleChange){
    // console.log(this.dateTransferred);
    this.matchesService.getMatchesByDate(this.dateTransferred).subscribe(result => {
      //console.log(result);
      this.matches = result;
    },(err: HttpErrorResponse) => {
      console.log(err);
    });
  }



}
