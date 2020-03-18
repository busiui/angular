import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'for-hero';
  @Output() itemAdded:EventEmitter<string> = new EventEmitter<string>();
  addItem(item: string) {
    console.log(`${item} to be added!`);
    this.items.push(item);
     // 向外发送自定义事件
     this.itemAdded.emit(item);
  }

  items: string[] = [];


}
