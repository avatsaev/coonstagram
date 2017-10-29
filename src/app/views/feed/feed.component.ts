import { Component, OnInit } from '@angular/core';
import {FeedService} from '../../services/feed.service';
import {Observable} from 'rxjs/Observable';
import {Post} from '../../models/post';

@Component({
  selector: 'feed',
  template: `
    <div  fxLayout="row" fxLayoutAlign=" stretch" class="container">
      
      <div fxLayout="column" fxLayoutAlign="start center" fxFlex="65" fxFlex.lt-sm="100" fxFlexAlign="stretch" class="timeline">
        
        <post *ngFor="let post of posts$ | async" [post]="post"></post>
        
      </div>
      
      <div [fxShow.lt-sm]="false" fxLayout="column" fxFlexAlign="stretch" fxLayoutAlign="space-between stretch" fxFlex="35" class="sidebar">
        
        <div fxLayout="column" fxLayoutGap="10px" fxLayoutAlign="center center" fxFlex="35"  class="profile">
          
          <div class="profile-picture">
            
          </div>
          <div class="profile-name">
            <span>
              User Name
            </span>
          </div>
          <div class="profile-bio">
            <span> my user bio </span>
          </div>
          
        </div>
        
        <div class="profile-data" class.lt-md="profile-data small-text"  fxLayout="column" fxLayoutAlign="center stretch" fxFlex.lt-sm="33" fxFlex="27" fxLayoutGap="1rem" >
          <div class="followers" >
            <div fxFlex class="posts">
              <span class="count">7</span>
              <span>FOLLOWERS</span>
            </div>
          </div>
          
          <div fxLayout="row" fxLayoutGap.lt-sm="10px" fxLayout.lt-sm="column" fxLayoutAlign="space-around stretch"  class="stats">
            <div fxFlex class.gt-xs="border" class="posts">
              <span class="count">7</span>
              <span>POSTS</span>
            </div>
            <div fxFlex class.gt-xs="border" class="following">
              <span class="count">6</span>
              <span>FOLLOWING</span>
            </div>
            <div fxFlex class="likes">
              <span class="count">2</span>
              <span>LIKES</span>
            </div>
          </div>
          
        </div>
        
        <div fxFlex class="profile-data-details">
          
        </div>
        
      </div>
      
    </div>
  `,
  styles: [`
      
      .profile-picture{
        width: 130px;
        height: 130px;
        border-radius: 65px;
        background: #FFFFFF;
        border: 3px solid #D31DC2;
      }
      .profile-data span {
        color: #AAB1CA;
        font-weight: 300;
        display: block;
        text-align: center;
        
      }
      
      .small-text {
        font-size: 0.7rem;
      }

      

      .profile-data .count{
        color: #C167FB;
        font-size: 2em;
        font-weight: 500;
        margin-bottom: 0.5rem;
      }

      .profile-data .border {
        border-right: 1px #9FA5BD solid
      }
      
      .profile-name{
        font-size: 2rem;
        font-weight: 500;
      }

      .profile-bio{
        font-weight: 100;
      }
      
      
      .container{
        height: 100%;
        background: linear-gradient(#1D1C47, #5B3386, #1D1C47);
      }
      .timeline{
        padding: 15px;
        overflow-y: scroll;
      }
      
      .sidebar{
        background: green;
        box-shadow: 0 0 25px rgba(0, 0, 0, 0.3);
      }

      .profile {
        background: linear-gradient(#5C55BD, #8232A7);
        color: #E2D7EF;
      }

      .profile-data {
        background: linear-gradient(#22264F, #191A35);
      } 
      
      .profile-data-details {
        background: linear-gradient(#494D7A, #242A4D);
        /*background: radial-gradient(circle at top, #494D7A, #494D7A, #242A4D 100%)*/
      }

    
  `]
})
export class FeedComponent implements OnInit {

  posts$: Observable<Post[]>;

  constructor(private feed: FeedService) { }

  ngOnInit() {
    this.posts$ = this.feed.getFeed();
  }

}
