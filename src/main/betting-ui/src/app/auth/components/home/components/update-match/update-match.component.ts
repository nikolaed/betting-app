import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Match } from 'app/match';
import { MatchesService } from 'app/matches.service';

@Component({
  selector: 'app-update-match',
  templateUrl: './update-match.component.html',
  styleUrls: ['./update-match.component.scss']
})
export class UpdateMatchComponent implements OnInit {

  id!: number;
  match!: Match;

  constructor(private route: ActivatedRoute, private matchesService: MatchesService, private router: Router) { }

  ngOnInit(): void {

    this.match = new Match();

    this.id = this.route.snapshot.params['id'];
    
    this.matchesService.getMatchById(this.id)
    .subscribe(data => {
      console.log(data);
      this.match = data;
    }, error => console.log(error));

  }

  updateMatch() {
    this.matchesService.updateMatch(this.match)
    .subscribe(data => {
      console.log(data);
      this.match = new Match();
      this.gotoList();
    }, error => console.log(error));
  }

  onSubmit() {
    this.updateMatch();    
  }

  gotoList() {
    this.router.navigate(['/matches']);
  }

}
