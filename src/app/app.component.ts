import { Component } from '@angular/core';
import { RouterOutlet} from '@angular/router';
import { NgClass } from '@angular/common';

import { GasComponent } from './gas/gas.component';
import { AppComponents } from './components.enum';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgClass, GasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  activeTab = AppComponents.gas;
  appComponents: typeof AppComponents =  AppComponents;

  // Налаштування лівого меню
  menuItems = [{
    title: 'Газопроникність',
    image: 'bg-gas',
    id: AppComponents.gas
  }, {
    title: 'Капілярний тиск',
    image: 'bg-press',
    id: AppComponents.press
  }, {
    title: 'Центрифугування',
    image: 'bg-centrifuge',
    id: AppComponents.centrifuge
  }, {
    title: 'Питомий опір',
    image: 'bg-resistant',
    id: AppComponents.resistant
  }, {
    title: 'Пористість',
    image: 'bg-pores',
    id: AppComponents.pores
  }, {
    title: 'Об\'ємна вага',
    image: 'bg-volume',
    id: AppComponents.volume
  }, {
    title: 'Мінералогічна густина',
    image: 'bg-density',
    id: AppComponents.density
  }, {
    title: 'Карбонатність',
    image: 'bg-carbon',
    id: AppComponents.carbon
  }, {
    title: 'Нафтонасичення',
    image: 'bg-oil',
    id: AppComponents.oil
  }, {
    title: 'С Органічний',
    image: 'bg-c_organic',
    id: AppComponents.organic
  }, {
    title: 'Об.вага в парафіні',
    image: 'bg-wax',
    id: AppComponents.wax
  }];

  setActiveTab(id: AppComponents) {
    this.activeTab = id;
  }
}
