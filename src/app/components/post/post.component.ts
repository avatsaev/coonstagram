import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../models/post';

@Component({
  selector: 'post',
  template: `
    <div class="post">
      <span class="username">{{post.user.name}}</span>
      
      <div class="post-image-container" *ngIf="post.type == 'image'">
        <img  class="post-content post-image" [src]="post.resUrl"/>
      </div>


      <div class="post-image-container" *ngIf="post.type == 'text'">
        <div fxLayout="column" fxLayoutAlign="center center" class="post-content post-text">
          {{post.text}}
        </div>
      </div>

      <p  class="post-description">
        {{post.description}}

      </p>
      
      
    </div>
  `,
  styles: [`
      .post {
        background: #DBDDF8;
        border-radius: 15px;
        padding: 30px;
        border: 1px solid white;
        margin: 15px;
      }
      .post-content {
        max-width: 30rem;
        width: 30rem;
        border: 30px solid #B4C3E1
      }
      .post-text {
        background: linear-gradient(to right, #a200c8 0%,#f143be 100%);
        height: 20rem;
        color: white;        
        width: 33.6rem;

        font-weight: 400;
        font-size: 22px;
      }
      .username {
        font-size: 19px;
        font-weight: 600;
        margin-bottom: 10px;
        display: block;
      }
  
  `]
})
export class PostComponent implements OnInit {

  @Input() post: Post;

  constructor() { }

  ngOnInit() {
  }

}
