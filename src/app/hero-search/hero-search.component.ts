import {Component, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {debounceTime, distinctUntilChanged, Observable, Subject, switchMap} from "rxjs";
import {Hero} from "../model/hero";
import {HeroService} from "../services/hero.service";
import {AsyncPipe, NgForOf} from "@angular/common";

@Component({
  selector: 'app-hero-search',
  standalone: true,
  imports: [
    RouterLink,
    AsyncPipe,
    NgForOf
  ],
  templateUrl: './hero-search.component.html',
  styleUrl: './hero-search.component.css'
})

export class HeroSearchComponent implements OnInit {
  heroes$!: Observable<Hero[]>;
  private searchTerms = new Subject<string>();

  constructor(private heroService: HeroService) {
  }

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.heroService.searchHeroes(term)),
    );
  }
}
