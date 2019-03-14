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
}

@Component({
  selector: "calendar-react",
  exportAs: "calendarReact",
  template: `
    <Calendar #reactNode [mode]="mode" [showToday]="showToday">
      <ReactContent><ng-content></ng-content></ReactContent>
    </Calendar>
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
  }
}
