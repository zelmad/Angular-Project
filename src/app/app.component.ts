import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      title: 'Mon premier post',
      content: 'Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.',
      loveIts: 1,
      created_at : new Date()
    },
    {
      title: 'Mon deuxième post',
      content: 'Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.',
      loveIts: 2,
      created_at : new Date()
    },
    {
      title: 'Mon dernièr post',
      content: 'Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.',
      loveIts: 3,
      created_at : new Date()
    },
    {
      title: 'Encore nouveau un post',
      content: 'Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.',
      loveIts: 4,
      created_at : new Date()
    },
    {
      title: 'Encore nouveau un post',
      content: 'Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.',
      loveIts: 4,
      created_at : new Date()
    },
    {
      title: 'Encore nouveau un post',
      content: 'Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.',
      loveIts: 4,
      created_at : new Date()
    },
    {
      title: 'Encore nouveau un post',
      content: 'Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.',
      loveIts: 4,
      created_at : new Date()
    },
    {
      title: 'Encore nouveau un post',
      content: 'Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.',
      loveIts: 4,
      created_at : new Date()
    },
    {
      title: 'Encore nouveau un post',
      content: 'Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.',
      loveIts: 4,
      created_at : new Date()
    }
  ];
}
