import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-responsive-toolbar',
  templateUrl: './responsive-toolbar.component.html',
  styleUrls: ['./responsive-toolbar.component.scss']
})
export class ResponsiveToolbarComponent implements OnInit {

  menuItems = [
    {
      label: 'Home',
      icon: 'home',
      route: '/home'
    },
    {
      label: 'List',
      icon: 'list',
      route: '/list'
    },
    {
      label: 'Create',
      icon: 'create_new_folder',
      route: '/create'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}