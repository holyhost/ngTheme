import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

/**
 * 控制主题的服务
 */
export class ThemeService {
  curTheme: string = '';//当前的主题
  themes = {
    light: 'light',
    dark: 'dark',
    contrast: 'contrast',
  }
  constructor() {
    this.initTheme();
   }

  //  初始化主题
  initTheme(){
    let theme = localStorage.getItem("theme-style");
    // 如果用户之前设置过主题，就用之前那个主题
    if(theme){
      this.curTheme = theme;
      this.changeTheme(theme)
    }
  }

  //保存主题
  saveTheme(){
    localStorage.setItem("theme-style",this.curTheme);
  }

  //改变主题
  changeTheme(type:string=''){
    if(!type){
      return
    }
    const body = document.getElementsByTagName('body')[0];
    this.curTheme = type
    body.setAttribute('theme-style',this.curTheme)
    this.saveTheme();
  }
}
