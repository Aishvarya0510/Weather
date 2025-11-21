import { Component } from '@angular/core';
import { CurrentWeather } from '../current-weather/current-weather'
import { Daily } from '../daily/daily';
import { Hourly } from '../hourly/hourly';
import { Header } from '../header/header';
import { Hero } from '../hero/hero';

@Component({
  selector: 'app-home',
  imports: [CurrentWeather,Daily,Hourly,Header,Hero],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
