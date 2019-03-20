/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectorRef, ViewChild, ElementRef, ChangeDetectionStrategy, EventEmitter, Input, NgZone, Output, Renderer2 } from "@angular/core";
import { ReactWrapperComponent } from "@angular-react/core";
/**
 * @record
 */
function ICalendarProps() { }
if (false) {
    /** @type {?} */
    ICalendarProps.prototype.mode;
    /** @type {?} */
    ICalendarProps.prototype.showToday;
    /** @type {?} */
    ICalendarProps.prototype.initialState;
}
export class CalendarComponent extends ReactWrapperComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     * @param {?} ngZone
     */
    constructor(elementRef, changeDetectorRef, renderer, ngZone) {
        super(elementRef, changeDetectorRef, renderer, {
            ngZone,
            setHostDisplay: true
        });
        this.onStateChange = new EventEmitter();
        this.onStateChangeHandler = this.onStateChangeHandler.bind(this);
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @return {?}
     */
    ngAfterContentInit() { }
    /**
     * @return {?}
     */
    ngOnDestroy() { }
    /**
     * @param {?} event
     * @return {?}
     */
    onStateChangeHandler(event) {
        this.onStateChange.emit(event);
    }
}
CalendarComponent.decorators = [
    { type: Component, args: [{
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
            }] }
];
CalendarComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: NgZone }
];
CalendarComponent.propDecorators = {
    reactNodeRef: [{ type: ViewChild, args: ["reactNode",] }],
    mode: [{ type: Input }],
    showToday: [{ type: Input }],
    initialState: [{ type: Input }],
    onStateChange: [{ type: Output }]
};
if (false) {
    /**
     * @type {?}
     * @protected
     */
    CalendarComponent.prototype.reactNodeRef;
    /** @type {?} */
    CalendarComponent.prototype.mode;
    /** @type {?} */
    CalendarComponent.prototype.showToday;
    /** @type {?} */
    CalendarComponent.prototype.initialState;
    /** @type {?} */
    CalendarComponent.prototype.onStateChange;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vcmVhY3QtY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbInNyYy9saWIvY29tcG9uZW50cy9jYWxlbmRhci9jYWxlbmRhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsdUJBQXVCLEVBQ3ZCLFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUVOLE1BQU0sRUFDTixTQUFTLEVBR1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0scUJBQXFCLENBQUM7Ozs7QUFFNUQsNkJBSUM7OztJQUhDLDhCQUFvRDs7SUFDcEQsbUNBQW1COztJQUNuQixzQ0FBa0I7O0FBcUJwQixNQUFNLHdCQUF5QixTQUFRLHFCQUFxQzs7Ozs7OztJQWMxRSxZQUNFLFVBQXNCLEVBQ3RCLGlCQUFvQyxFQUNwQyxRQUFtQixFQUNuQixNQUFjO1FBRWQsS0FBSyxDQUFDLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxRQUFRLEVBQUU7WUFDN0MsTUFBTTtZQUNOLGNBQWMsRUFBRSxJQUFJO1NBQ3JCLENBQUMsQ0FBQztRQWZLLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQWdCM0MsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkUsQ0FBQzs7OztJQWZELFFBQVEsS0FBSSxDQUFDOzs7O0lBQ2Isa0JBQWtCLEtBQUksQ0FBQzs7OztJQUN2QixXQUFXLEtBQUksQ0FBQzs7Ozs7SUFlaEIsb0JBQW9CLENBQUMsS0FBSztRQUN4QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDOzs7WUEvQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFFBQVEsRUFBRSxlQUFlO2dCQUN6QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7R0FVVDs7Z0JBRUQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07eUJBQ3RDLGdCQUFnQjthQUMxQjs7O1lBcENDLFVBQVU7WUFGVixpQkFBaUI7WUFTakIsU0FBUztZQUhULE1BQU07OzsyQkFtQ0wsU0FBUyxTQUFDLFdBQVc7bUJBRXJCLEtBQUs7d0JBQ0wsS0FBSzsyQkFDTCxLQUFLOzRCQUVMLE1BQU07Ozs7Ozs7SUFOUCx5Q0FBMkQ7O0lBRTNELGlDQUF1Qzs7SUFDdkMsc0NBQWlEOztJQUNqRCx5Q0FBdUQ7O0lBRXZELDBDQUE2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIFZpZXdDaGlsZCxcbiAgRWxlbWVudFJlZixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFJlbmRlcmVyMixcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgT25EZXN0cm95XG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSZWFjdFdyYXBwZXJDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXItcmVhY3QvY29yZVwiO1xuXG5pbnRlcmZhY2UgSUNhbGVuZGFyUHJvcHMge1xuICBtb2RlOiBcInRpbWVcIiB8IFwiZGF0ZVwiIHwgXCJtb250aFwiIHwgXCJ5ZWFyXCIgfCBcImRlY2FkZVwiO1xuICBzaG93VG9kYXk6IGJvb2xlYW47XG4gIGluaXRpYWxTdGF0ZTogYW55O1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwiY2FsZW5kYXItcmVhY3RcIixcbiAgZXhwb3J0QXM6IFwiY2FsZW5kYXJSZWFjdFwiLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxBcHBcbiAgICAgICNyZWFjdE5vZGVcbiAgICAgIFttb2RlXT1cIm1vZGVcIlxuICAgICAgW3Nob3dUb2RheV09XCJzaG93VG9kYXlcIlxuICAgICAgW2luaXRpYWxTdGF0ZV09XCJpbml0aWFsU3RhdGVcIlxuICAgICAgW3N0YXRlQ2hhbmdlXT1cIm9uU3RhdGVDaGFuZ2VIYW5kbGVyXCJcbiAgICA+XG4gICAgICA8UmVhY3RDb250ZW50PjxuZy1jb250ZW50PjwvbmctY29udGVudD48L1JlYWN0Q29udGVudD5cbiAgICA8L0FwcD5cbiAgYCxcbiAgLy9zdHlsZVVybHM6IFtcIi4vY2FsZW5kYXIuY29tcG9uZW50LmNzc1wiXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHN0eWxlczogW1wicmVhY3QtcmVuZGVyZXJcIl1cbn0pXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJDb21wb25lbnQgZXh0ZW5kcyBSZWFjdFdyYXBwZXJDb21wb25lbnQ8SUNhbGVuZGFyUHJvcHM+XG4gIGltcGxlbWVudHMgT25Jbml0LCBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kge1xuICBAVmlld0NoaWxkKFwicmVhY3ROb2RlXCIpIHByb3RlY3RlZCByZWFjdE5vZGVSZWY6IEVsZW1lbnRSZWY7XG5cbiAgQElucHV0KCkgbW9kZT86IElDYWxlbmRhclByb3BzW1wibW9kZVwiXTtcbiAgQElucHV0KCkgc2hvd1RvZGF5PzogSUNhbGVuZGFyUHJvcHNbXCJzaG93VG9kYXlcIl07XG4gIEBJbnB1dCgpIGluaXRpYWxTdGF0ZT86IElDYWxlbmRhclByb3BzW1wiaW5pdGlhbFN0YXRlXCJdO1xuXG4gIEBPdXRwdXQoKSBvblN0YXRlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIG5nT25Jbml0KCkge31cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge31cbiAgbmdPbkRlc3Ryb3koKSB7fVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgbmdab25lOiBOZ1pvbmVcbiAgKSB7XG4gICAgc3VwZXIoZWxlbWVudFJlZiwgY2hhbmdlRGV0ZWN0b3JSZWYsIHJlbmRlcmVyLCB7XG4gICAgICBuZ1pvbmUsXG4gICAgICBzZXRIb3N0RGlzcGxheTogdHJ1ZVxuICAgIH0pO1xuICAgIHRoaXMub25TdGF0ZUNoYW5nZUhhbmRsZXIgPSB0aGlzLm9uU3RhdGVDaGFuZ2VIYW5kbGVyLmJpbmQodGhpcyk7XG4gIH1cblxuICBvblN0YXRlQ2hhbmdlSGFuZGxlcihldmVudCkge1xuICAgIHRoaXMub25TdGF0ZUNoYW5nZS5lbWl0KGV2ZW50KTtcbiAgfVxufVxuIl19