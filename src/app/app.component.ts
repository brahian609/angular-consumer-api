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
  model: any = {};

  constructor(private _service: AppService) {}

  ngOnInit() {
    this._service.getItems()
      .subscribe(
        items => this.items = items,
        error =>  console.log(error));
  }

  getItemById(id: number) {
    this._service.getItemById(id)
      .subscribe(
        item => this.model = item,
        error =>  console.log(error));
  }

  createItem() {
    this._service.createItem(this.model)
      .subscribe(
        item  => {
          item.code = this.model.code;
          item.name = this.model.name;
          this.items.push(item);
          this.model = {};
          console.log('item');
          console.log(item);
        },
        error =>  console.log(error));
  }

  updateItem() {
    this._service.updateItem(this.model)
      .subscribe(
        item  => {
          this.model = {};
          console.log('item');
          console.log(item);
        },
        error =>  console.log(error));
  }

  deleteItem(item: any) {
    let indexItem = this.items.indexOf(item);
    this._service.deleteItem(item.itemId)
      .subscribe(
        item => {
          console.log('item');
          console.log(item);
          this.items.splice(indexItem, 1);
        },
        error =>  console.log(error));
  }

}
