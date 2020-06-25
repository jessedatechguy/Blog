import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.css']
})
export class CreateBlogComponent implements OnInit {
  newPost = '';

  onAddPost() {
    this.newPost = 'The user\s post';
   }

  ngOnInit(): void {
  }

}
