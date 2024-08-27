import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgClass} from "@angular/common";
import {GasComponent} from "./gas/gas.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgClass, GasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  activeTab = 0;
  menuItems = [{
    title: 'Газопроникність',
    image: 'bg-gas'
  }, {
    title: 'Капілярний тиск',
    image: 'bg-press'
  }, {
    title: 'Центрифугування',
    image: 'bg-centrifuge'
  }, {
    title: 'Питомий опір',
    image: 'bg-resistant '
  }, {
    title: 'Пористість',
    image: 'bg-pores'
  }, {
    title: 'Об\'ємна вага',
    image: 'bg-volume'
  }, {
    title: 'Мінералогічна густина',
    image: 'bg-density'
  }, {
    title: 'Карбонатність',
    image: 'bg-carbon'
  }, {
    title: 'Нафтонасичення',
    image: 'bg-oil'
  }, {
    title: 'С Органічний',
    image: 'bg-c_organic'
  }, {
    title: 'Об.вага в парафіні',
    image: 'bg-wax'
  }];

  setActiveTab(index: number) {
    this.activeTab = index;
  }
}
