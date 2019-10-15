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
          "name": "Mcleod  Mueller"
        },{
          "name": "Douglas  Pace"
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
          "name": "Akshita"
        },
        {
          "name": "Harsh"
        },
        {
          "name": "Karanjot"
        },
        {
          "name": "Siddharth"
        }
      ]
    }
  ]

  list3 =[
    'Block 11',
    'Block 12',
    'Block 13',
    'Block 14',
    'Block 15'
  ]
  
  options: SortablejsOptions = {
    group: 'test'
  };

  myCloneImplementation = (city) => {
    return city; // this is what happens if sortablejsCloneFunction is not provided. Add your stuff here
  }

  

}
