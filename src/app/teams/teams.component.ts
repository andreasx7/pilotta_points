import { Component, OnInit } from '@angular/core';
import { SettingsComponent } from '../settings/settings.component';
import { Team } from '../team';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent {
  team1:Team = {id:0, points:0};
  team2:Team = {id:1, points:0};
  maxScore: number = 0;


  // ngOnInit(): void {
  //   this.team1.points = 0;
  //   this.team2.points = 0;
  // } 
}
