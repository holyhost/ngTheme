import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'ngTheme';


  //初始化的时候也初始化主题
  ngOnInit(): void {
    
  }
}
