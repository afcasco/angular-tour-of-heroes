import {Injectable} from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Hero} from '../model/hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      {id: 12, name: 'Dr. Nice', image: 'https://superherotar.framiq.com/assets/examples/superherotar00.png'},
      {id: 13, name: 'Bombasto', image: 'https://superherotar.framiq.com/assets/examples/superherotar01.png'},
      {id: 14, name: 'Celeritas', image: 'https://superherotar.framiq.com/assets/examples/superherotar02.png'},
      {id: 15, name: 'Magneta', image: 'https://superherotar.framiq.com/assets/examples/superherotar03.png'},
      {id: 16, name: 'RubberMan', image: 'https://superherotar.framiq.com/assets/examples/superherotar04.png'},
      {id: 17, name: 'Dynama', image: 'https://superherotar.framiq.com/assets/examples/superherotar05.png'},
      {id: 18, name: 'Dr. IQ', image: 'https://superherotar.framiq.com/assets/examples/superherotar06.png'},
      {id: 19, name: 'Magma', image: 'https://superherotar.framiq.com/assets/examples/superherotar07.png'},
      {
        id: 20,
        name: 'Tornado',
        image: 'https://img.freepik.com/premium-photo/3d-cat-avatar-online-games-web-account-avatar_147351-46.jpg'
      }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
