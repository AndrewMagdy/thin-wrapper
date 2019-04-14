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

interface IPocReactAppComponent {
  mode: "time" | "date" | "month" | "year" | "decade";
  showToday: boolean;
  angularTestProp: any;
}

@Component({
  selector: "poc-app-react",
  exportAs: "pocAppReact",
  template: `
    <App
      #reactNode
      [angularTestProp]="angularTestProp"
      [stateChange]="onStateChangeHandler"
      [angularNavigateTo]="angularNavigateToHandler"
    >
      <ReactContent><ng-content></ng-content></ReactContent>
    </App>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: ["react-renderer"]
})
export class PocReactAppComponent
  extends ReactWrapperComponent<IPocReactAppComponent>
  implements OnInit, AfterContentInit, OnDestroy {
  @ViewChild("reactNode") protected reactNodeRef: ElementRef;

  @Input() angularTestProp?: IPocReactAppComponent["angularTestProp"];

  @Output() onStateChange = new EventEmitter();
  @Output() angularNavigateTo = new EventEmitter();

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
    this.angularNavigateToHandler = this.angularNavigateToHandler.bind(this);
  }

  onStateChangeHandler(event) {
    this.onStateChange.emit(event);
  }

  angularNavigateToHandler(event) {
    this.angularNavigateTo.emit(event);
  }
}
