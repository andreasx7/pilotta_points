import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamsComponent } from './teams/teams.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { NewGameComponent } from './new-game/new-game.component';
import { SettingsComponent } from './settings/settings.component';
import { StartScreenComponent } from './start-screen/start-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamsComponent,
    CalculatorComponent,
    NewGameComponent,
    SettingsComponent,
    StartScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
