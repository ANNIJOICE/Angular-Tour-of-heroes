import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  heroes: Hero[] = [];

  constructor(
    private heroService: HeroService
  ){}

  ngOnInit(): void {
      this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((hero) => {
      this.heroes = hero.slice(1,5);
    })
  }

}
