import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {

  constructor(
    public theme: ThemeService
  ) { }

  ngOnInit() {
  }

  changeTheme(theme:string){
    this.theme.changeTheme(theme)
  }

}
