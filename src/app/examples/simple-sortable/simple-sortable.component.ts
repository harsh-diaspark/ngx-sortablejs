import { Component } from '@angular/core';
import { SortablejsOptions } from 'ngx-sortablejs';

@Component({
  selector: 'app-simple-sortable',
  templateUrl: './simple-sortable.component.html',
  styleUrls: ['./simple-sortable.component.css'],
})
export class SimpleSortableComponent {

  image1= '/assets/img1.png';
  image2='/assets/img2.png'

  
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
    }
  ];
  images = [
    this.image1,
    this.image2
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

  items =[
      {
        'count':'Count1'
      },
      {
        'pic':this.image1
      }
   ]
  
  options: SortablejsOptions = {
    group: 'test'
  };

  myCloneImplementation = (city) => {
    return city; // this is what happens if sortablejsCloneFunction is not provided. Add your stuff here
  }

  

}
