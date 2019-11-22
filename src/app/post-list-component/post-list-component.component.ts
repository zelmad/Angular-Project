import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.css']
})
export class PostListComponentComponent {

  @Input() postTiltle;
  @Input() postContent;
  @Input() postCreatedAt;

  isAuth = false;
  loveIt = 0; dontLoveIt = 0;

  onLoveIT() {
    this.loveIt += 1;
    console.log(this.loveIt);
  }

  onDontLoveIT() {
    this.loveIt -= 1;
    console.log(this.loveIt);
  }
  dateColor() {
    return '#070dd2';
  }
}
