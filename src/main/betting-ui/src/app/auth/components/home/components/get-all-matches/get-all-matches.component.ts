import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchesService } from 'app/matches.service';

@Component({
  selector: 'app-get-all-matches',
  templateUrl: './get-all-matches.component.html',
  styleUrls: ['./get-all-matches.component.scss']
})
export class GetAllMatchesComponent implements OnInit {

  matches: any[] | undefined;

  constructor(private matchesService: MatchesService, private router: Router) { }

  ngOnInit(): void {
    this.matchesService.getAllMatches().subscribe(result => {
      this.matches = result;
    }, (err: HttpErrorResponse) =>{
      console.log(err);
    });
  }

  reloadData() {
    this.matchesService.getAllMatches().subscribe(result => {
      this.matches = result;
    }, (err: HttpErrorResponse) =>{
      console.log(err);
    });
  }

  deleteMatch(id: number): void{
    console.log(id);
    this.matchesService.deleteMatch(id)
    .subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error));
  }

  updateMatch(id: number) {
    // this.matchesService.getMatchById(id)
    // .subscribe(
    //   data => {
    //     console.log(data);
    //   },
    //   error => console.log(error));
    this.router.navigate(['matches/update', id]);
  }


  

}
