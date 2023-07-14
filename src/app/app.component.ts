import {
  Component,
  OnChanges,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // https://www.youtube.com/watch?v=X-1TBjBx6pc
  // encapsulation: ViewEncapsulation.Emulated, // default: limited to the component, not go for children
  encapsulation: ViewEncapsulation.None, // no capsulation - global ( same as styles.css)
  // encapsulation: ViewEncapsulation.ShadowDom, // exclude from styles.css
})
// export class AppComponent implements OnChanges {
export class AppComponent {
  //* send data to child component
  parentVariable = 'parent-variable';
  //* receive data from child component
  items = ['item1', 'item2', 'item3', 'item4'];
  addItem(newItem: string) {
    this.items.push(newItem);
  }
  // ----------------------------------------------------------------
  show = false;
  disabled: boolean = false;
  name: string = 'Mohamed'; // initial value
  // color: string = this.show ? 'green' : 'red'; // initial value // will never change
  color: string = 'red';
  myArray: any = ['item1', 'item2', 'item3', 'item4'];
  constructor() {
    // run once on instantiation
    setTimeout(() => (this.disabled = true), 2000);
    // this.color = this.show ? 'green' : 'red'; // same as above
  }
  getName(): string {
    return this.name;
  }
  onButtonClick() {
    this.name = this.name == 'Mohamed' ? 'Ali' : 'Mohamed';
    this.show = this.show == false ? true : false;
    this.color = this.show ? 'green' : 'red'; // optimal solution 1
  }
  onInputText(event: any) {
    this.name = event.target.value; // implicit
    this.name = (<HTMLInputElement>event.target).value; // explicit
    // target is of type InputElement
  }
  getColor() {
    return this.show ? 'green' : 'red'; // optimal solution 2
  }
  // ngOnChanges(changes: SimpleChanges) {
  //   console.log(changes);
  //   console.log('Parent ===> on 1st render');
  //   console.log('Parent ===> on each re-render'); // when any bound property changes
  // }
  // ngOnInit() {
  //   console.log('Parent ===> Component Initialized');
  // }
}
