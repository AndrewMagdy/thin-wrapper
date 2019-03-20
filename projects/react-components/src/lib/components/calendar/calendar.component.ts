import {
  Component,
  ChangeDetectorRef,
  ViewChild,
  ElementRef,
  ChangeDetectionStrategy,
  EventEmitter,
  Input,
  NgZone,
  OnInit,
  Output,
  Renderer2,
  AfterContentInit,
  OnDestroy
} from "@angular/core";
import { ReactWrapperComponent } from "@angular-react/core";

interface ICalendarProps {
  mode: "time" | "date" | "month" | "year" | "decade";
  showToday: boolean;
  initialState: any;
}

@Component({
  selector: "calendar-react",
  exportAs: "calendarReact",
  template: `
    <App
      #reactNode
      [mode]="mode"
      [showToday]="showToday"
      [initialState]="initialState"
      [stateChange]="onStateChangeHandler"
    >
      <ReactContent><ng-content></ng-content></ReactContent>
    </App>
  `,
  //styleUrls: ["./calendar.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: ["react-renderer"]
})
export class CalendarComponent extends ReactWrapperComponent<ICalendarProps>
  implements OnInit, AfterContentInit, OnDestroy {
  @ViewChild("reactNode") protected reactNodeRef: ElementRef;

  @Input() mode?: ICalendarProps["mode"];
  @Input() showToday?: ICalendarProps["showToday"];
  @Input() initialState?: ICalendarProps["initialState"];

  @Output() onStateChange = new EventEmitter();

  ngOnInit() {}
  ngAfterContentInit() {}
  ngOnDestroy() {}

  constructor(
    elementRef: ElementRef,
    changeDetectorRef: ChangeDetectorRef,
    renderer: Renderer2,
    ngZone: NgZone
  ) {
    super(elementRef, changeDetectorRef, renderer, {
      ngZone,
      setHostDisplay: true
    });
    this.onStateChangeHandler = this.onStateChangeHandler.bind(this);
  }

  onStateChangeHandler(event) {
    this.onStateChange.emit(event);
  }
}
