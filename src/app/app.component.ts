import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  menuItems = [{
    title: 'Газопроникність',
    image: 'bg-gas',
    id: 1
  }, {
    title: 'Капілярний тиск',
    image: 'bg-press',
    id: 2
  }, {
    title: 'Центрифугування',
    image: 'bg-centrifuge',
    id: 3
  }, {
    title: 'Питомий опір',
    image: 'bg-resistant ',
    id: 4
  }, {
    title: 'Пористість',
    image: 'bg-pores',
    id: 5
  }, {
    title: 'Об\'ємна вага',
    image: 'bg-volume',
    id: 6
  }, {
    title: 'Мінералогічна густина',
    image: 'bg-density',
    id: 7
  }, {
    title: 'Карбонатність',
    image: 'bg-carbon',
    id: 8
  }, {
    title: 'Нафтонасичення',
    image: 'bg-oil',
    id: 9
  }, {
    title: 'С Органічний',
    image: 'bg-c_organic',
    id: 10
  }, {
    title: 'Об.вага в парафіні',
    image: 'bg-wax',
    id: 11
  }];
}
