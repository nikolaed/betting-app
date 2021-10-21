import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Match } from 'app/match';
import { MatchesService } from 'app/matches.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-create-match',
  templateUrl: './create-match.component.html',
  styleUrls: ['./create-match.component.scss']
})
export class CreateMatchComponent implements OnInit {

  match: Match = new Match();
  submitted = false;

  constructor(private matchesService: MatchesService, private router: Router) { }

  ngOnInit(): void {
  }

  save() {
    console.log(this.match);
    this.matchesService
    .createMatch(this.match).subscribe(data => {
      console.log(data);
      this.match = new Match();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  newMatch(): void {
    this.submitted = false;
    this.match = new Match();
  }

  gotoList() {
    this.router.navigate(['/matches']);
  }


}
