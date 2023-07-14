import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  OnInit,
  OnDestroy,
  AfterViewInit,
  ViewEncapsulation,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-first',
  // selector: '[app-first]',  // select by attribute
  // selector: '.app-first', // select by class
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent implements OnInit, OnDestroy, OnChanges {
  //  @Input => receive the value from parent component
  @Input('childVariableAlias') childVariable = 'child-variable'; // childVariableAlias => is optional
  //  @Output => send the value to parent component
  @Output() newItemEvent = new EventEmitter<string>();
  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
  //& ViewChild makes it possible to access native DOM elements that have a template reference variable => from (component.ts)
  @ViewChild('newItem') newItem!: ElementRef;

  constructor() {}
  //* lifecycle hooks
  // on 1st component render
  ngOnInit() {
    console.log('Component Initialized');
  }
  // when any to-a-parent-bound property (childVariable) changes
  ngOnChanges(changes: SimpleChanges) {
    console.log('====current=====>', changes['childVariable'].currentValue);
    console.log('====previous=====>', changes['childVariable'].previousValue);
    console.log('on 1st render');
    console.log('when childVariable changes');
  }
  // called after Angular has fully initialized a component's view.
  ngAfterViewInit() {
    this.newItem.nativeElement.value = 'testing @ViewChild';
  }
  ngOnDestroy() {
    console.log('Component Destroyed');
  }
}
