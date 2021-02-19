import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  public post:{
    id: string;
    titlePost: string;
    contentPost:string;
    imagePost:string;
  }={
    id:'1',
    titlePost:'Post One',
    contentPost:'Primer Post',
    imagePost:'https://i.picsum.photos/id/383/200/300.jpg?hmac=sP8wzjNbIJGIPQg-3A86o43HsTopJPnwV73iSCwH9cw'
  }
  constructor(private route: ActivatedRoute) { }

  ngOnInit(){
    this.post.id = this.route.snapshot.params.id;
    
  }

}
