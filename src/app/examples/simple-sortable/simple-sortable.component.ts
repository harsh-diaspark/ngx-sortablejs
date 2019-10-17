import { Component } from '@angular/core';
import { SortablejsOptions } from 'ngx-sortablejs';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-simple-sortable',
  templateUrl: './simple-sortable.component.html',
  styleUrls: ['./simple-sortable.component.css'],
})
export class SimpleSortableComponent {

  image1= '/assets/img1.png';
  image2='/assets/img2.png';
  image3='/assets/pie-chart.png';
  image4='/assets/donut_full.png'
  count1="Count:16";
  count2="Count:32";


  
  cities = [
    {     
      'people': [
        {
          "name": "Douglas  Pace"
        },
        {
          "name": "Robert Downry Jr."
        },
        {
          "name": "Chris  Hemsworth"
        },
        {
          "name": "Mcleod  Mueller"
        }
      ]
    },

  ];
  images = [
    {item: this.image1},
    {item: this.image2}
  ]

countries = [
 
    {
      'people': [
        {
          "name": "Akshita  Panchal"
        },
        {
          "name": "Harsh Khare"
        },
        {
          "name": "Karanjot  Singh"
        },
        {
          "name": "Siddharth  Sharma"
        }
      ]
    }
  ]

private _citiesBS = new BehaviorSubject(this.cities);
public get citiesBS() {
  return this._citiesBS;
}
public set citiesBS(value) {
  this._citiesBS = value;
}


private _countriesBS = new BehaviorSubject(this.countries);

  public get countriesBS() {
    return this._countriesBS;
  }
  public set countriesBS(value) {
    this._countriesBS = value;
  }

  items =[
        { count: this.count1},
        { count: this.count2}
   ]


   clone1Options: SortablejsOptions = {
    group: {
      name: 'clone-group',
      pull: 'clone',
      put: false,
    },
  };
  
  options: SortablejsOptions = {
    group: 'test'
  };

  myCloneImplementation = (city) => {
    return city; // this is what happens if sortablejsCloneFunction is not provided. Add your stuff here
  }
  
}
