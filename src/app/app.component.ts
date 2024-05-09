import {Component} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {HeroesComponent} from "./heroes/heroes.component";
import {MessagesComponent} from "./messages/messages.component";
import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './services/in-memory-data.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    HeroesComponent,
    MessagesComponent,
    RouterLink,
    HttpClientModule,
    HttpClientInMemoryWebApiModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Tour of Heroes';
}
