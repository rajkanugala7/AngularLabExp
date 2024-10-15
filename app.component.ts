import { Component } from '@angular/core';
import { MyServiceService } from './my-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Corrected from styleUrl to styleUrls
})
export class AppComponent {
  title: string = "Todolist"; // Corrected "tittle" to "title"
  data: string[]; // Specify the type of data
  newItem: string = ''; // Initialize newItem

  constructor(private myService: MyServiceService) {
    this.data = myService.getData();
  }

  addItem(item: string) {
    if (item.trim()) { // Ensure the item is not empty
      this.myService.addData(item);
      this.newItem = ''; // Clear input after adding
    }
  }
}
