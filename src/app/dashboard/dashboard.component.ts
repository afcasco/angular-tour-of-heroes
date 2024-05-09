import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {Hero} from "../model/hero";
import {HeroService} from "../services/hero.service";
import {RouterLink} from "@angular/router";
import {HeroSearchComponent} from "../hero-search/hero-search.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink,
    HeroSearchComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  // Display 5 random heroes instead of the 1-5 positions
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes =>
        this.heroes = heroes.sort(() => Math.random() - Math.random()).slice(0, 4));
  }
}
