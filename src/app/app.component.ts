import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})
export class AppComponent implements OnInit{
  items: Array<any>;

  constructor(private _service: AppService) {}

  ngOnInit() {
    this._service.getItems()
      .subscribe(
        items => this.items = items,
        error =>  console.log(error));
  }

}
