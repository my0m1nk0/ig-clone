import { Component, ViewChild } from '@angular/core';
import { HeaderComponent } from 'src/app/molecule/header/header.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  @ViewChild('header') header: HeaderComponent

  clickLog(){
    this.header.testLog()
  }
}
