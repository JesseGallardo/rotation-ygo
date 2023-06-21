import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { SetsComponent } from './sets/sets.component';
import { CardPoolComponent } from './card-pool/card-pool.component';
import { HomeComponent } from './home/home.component';
import { CreditsComponent } from './credits/credits.component';
import { DiscordComponent } from './discord/discord.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    SetsComponent,
    CardPoolComponent,
    HomeComponent,
    CreditsComponent,
    DiscordComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: 'sets', component: SetsComponent},
      {path: 'card-pool', component: CardPoolComponent},
      {path: 'credits', component: CreditsComponent},
      {path: 'discord', component: DiscordComponent},
      {path: '', redirectTo: '/home', pathMatch: 'full'},
      {path: '**', component: PageNotFoundComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
