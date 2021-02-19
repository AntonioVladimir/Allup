import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public posts: {
    id: string;
    titlePost: string;
    contentPost: string;
    imagePost?: string;
  }[] = [
    {
      id:'1',
      titlePost: 'Post One',
      contentPost: 'Hola pepe ¿cómo estás?',
      imagePost: 'https://i.picsum.photos/id/383/200/300.jpg?hmac=sP8wzjNbIJGIPQg-3A86o43HsTopJPnwV73iSCwH9cw'
    },{
      id:'2',
      titlePost: 'Post Two',
      contentPost: 'Hola Juan ¿cómo estás?',
      imagePost: 'https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U'
    },{
      id:'3',
      titlePost: 'Post Three',
      contentPost: 'Hola Luis ¿cómo estás?',
      imagePost: 'https://i.picsum.photos/id/227/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U'
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
