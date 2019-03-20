/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var CalendarComponent = /** @class */ (function (_super) {
    tslib_1.__extends(CalendarComponent, _super);
    function CalendarComponent(elementRef, changeDetectorRef, renderer, ngZone) {
        var _this = _super.call(this, elementRef, changeDetectorRef, renderer, {
            ngZone: ngZone,
            setHostDisplay: true
        }) || this;
        _this.onStateChange = new EventEmitter();
        _this.onStateChangeHandler = _this.onStateChangeHandler.bind(_this);
        return _this;
    }
    /**
     * @return {?}
     */
    CalendarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @return {?}
     */
    CalendarComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @return {?}
     */
    CalendarComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} event
     * @return {?}
     */
    CalendarComponent.prototype.onStateChangeHandler = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.onStateChange.emit(event);
    };
    CalendarComponent.decorators = [
        { type: Component, args: [{
                    selector: "calendar-react",
                    exportAs: "calendarReact",
                    template: "\n    <App\n      #reactNode\n      [mode]=\"mode\"\n      [showToday]=\"showToday\"\n      [initialState]=\"initialState\"\n      [stateChange]=\"onStateChangeHandler\"\n    >\n      <ReactContent><ng-content></ng-content></ReactContent>\n    </App>\n  ",
                    //styleUrls: ["./calendar.component.css"],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["react-renderer"]
                }] }
    ];
    CalendarComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 },
        { type: NgZone }
    ]; };
    CalendarComponent.propDecorators = {
        reactNodeRef: [{ type: ViewChild, args: ["reactNode",] }],
        mode: [{ type: Input }],
        showToday: [{ type: Input }],
        initialState: [{ type: Input }],
        onStateChange: [{ type: Output }]
    };
    return CalendarComponent;
}(ReactWrapperComponent));
export { CalendarComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vcmVhY3QtY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbInNyYy9saWIvY29tcG9uZW50cy9jYWxlbmRhci9jYWxlbmRhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLHVCQUF1QixFQUN2QixZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFFTixNQUFNLEVBQ04sU0FBUyxFQUdWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7O0FBRTVELDZCQUlDOzs7SUFIQyw4QkFBb0Q7O0lBQ3BELG1DQUFtQjs7SUFDbkIsc0NBQWtCOztBQUdwQjtJQWtCdUMsNkNBQXFDO0lBYzFFLDJCQUNFLFVBQXNCLEVBQ3RCLGlCQUFvQyxFQUNwQyxRQUFtQixFQUNuQixNQUFjO1FBSmhCLFlBTUUsa0JBQU0sVUFBVSxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRTtZQUM3QyxNQUFNLFFBQUE7WUFDTixjQUFjLEVBQUUsSUFBSTtTQUNyQixDQUFDLFNBRUg7UUFqQlMsbUJBQWEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBZ0IzQyxLQUFJLENBQUMsb0JBQW9CLEdBQUcsS0FBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsQ0FBQzs7SUFDbkUsQ0FBQzs7OztJQWZELG9DQUFROzs7SUFBUixjQUFZLENBQUM7Ozs7SUFDYiw4Q0FBa0I7OztJQUFsQixjQUFzQixDQUFDOzs7O0lBQ3ZCLHVDQUFXOzs7SUFBWCxjQUFlLENBQUM7Ozs7O0lBZWhCLGdEQUFvQjs7OztJQUFwQixVQUFxQixLQUFLO1FBQ3hCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7O2dCQS9DRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLFFBQVEsRUFBRSxnUUFVVDs7b0JBRUQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07NkJBQ3RDLGdCQUFnQjtpQkFDMUI7OztnQkFwQ0MsVUFBVTtnQkFGVixpQkFBaUI7Z0JBU2pCLFNBQVM7Z0JBSFQsTUFBTTs7OytCQW1DTCxTQUFTLFNBQUMsV0FBVzt1QkFFckIsS0FBSzs0QkFDTCxLQUFLOytCQUNMLEtBQUs7Z0NBRUwsTUFBTTs7SUFzQlQsd0JBQUM7Q0FBQSxBQWhERCxDQWtCdUMscUJBQXFCLEdBOEIzRDtTQTlCWSxpQkFBaUI7Ozs7OztJQUU1Qix5Q0FBMkQ7O0lBRTNELGlDQUF1Qzs7SUFDdkMsc0NBQWlEOztJQUNqRCx5Q0FBdUQ7O0lBRXZELDBDQUE2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIFZpZXdDaGlsZCxcbiAgRWxlbWVudFJlZixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFJlbmRlcmVyMixcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgT25EZXN0cm95XG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSZWFjdFdyYXBwZXJDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXItcmVhY3QvY29yZVwiO1xuXG5pbnRlcmZhY2UgSUNhbGVuZGFyUHJvcHMge1xuICBtb2RlOiBcInRpbWVcIiB8IFwiZGF0ZVwiIHwgXCJtb250aFwiIHwgXCJ5ZWFyXCIgfCBcImRlY2FkZVwiO1xuICBzaG93VG9kYXk6IGJvb2xlYW47XG4gIGluaXRpYWxTdGF0ZTogYW55O1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwiY2FsZW5kYXItcmVhY3RcIixcbiAgZXhwb3J0QXM6IFwiY2FsZW5kYXJSZWFjdFwiLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxBcHBcbiAgICAgICNyZWFjdE5vZGVcbiAgICAgIFttb2RlXT1cIm1vZGVcIlxuICAgICAgW3Nob3dUb2RheV09XCJzaG93VG9kYXlcIlxuICAgICAgW2luaXRpYWxTdGF0ZV09XCJpbml0aWFsU3RhdGVcIlxuICAgICAgW3N0YXRlQ2hhbmdlXT1cIm9uU3RhdGVDaGFuZ2VIYW5kbGVyXCJcbiAgICA+XG4gICAgICA8UmVhY3RDb250ZW50PjxuZy1jb250ZW50PjwvbmctY29udGVudD48L1JlYWN0Q29udGVudD5cbiAgICA8L0FwcD5cbiAgYCxcbiAgLy9zdHlsZVVybHM6IFtcIi4vY2FsZW5kYXIuY29tcG9uZW50LmNzc1wiXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHN0eWxlczogW1wicmVhY3QtcmVuZGVyZXJcIl1cbn0pXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJDb21wb25lbnQgZXh0ZW5kcyBSZWFjdFdyYXBwZXJDb21wb25lbnQ8SUNhbGVuZGFyUHJvcHM+XG4gIGltcGxlbWVudHMgT25Jbml0LCBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kge1xuICBAVmlld0NoaWxkKFwicmVhY3ROb2RlXCIpIHByb3RlY3RlZCByZWFjdE5vZGVSZWY6IEVsZW1lbnRSZWY7XG5cbiAgQElucHV0KCkgbW9kZT86IElDYWxlbmRhclByb3BzW1wibW9kZVwiXTtcbiAgQElucHV0KCkgc2hvd1RvZGF5PzogSUNhbGVuZGFyUHJvcHNbXCJzaG93VG9kYXlcIl07XG4gIEBJbnB1dCgpIGluaXRpYWxTdGF0ZT86IElDYWxlbmRhclByb3BzW1wiaW5pdGlhbFN0YXRlXCJdO1xuXG4gIEBPdXRwdXQoKSBvblN0YXRlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIG5nT25Jbml0KCkge31cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge31cbiAgbmdPbkRlc3Ryb3koKSB7fVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgbmdab25lOiBOZ1pvbmVcbiAgKSB7XG4gICAgc3VwZXIoZWxlbWVudFJlZiwgY2hhbmdlRGV0ZWN0b3JSZWYsIHJlbmRlcmVyLCB7XG4gICAgICBuZ1pvbmUsXG4gICAgICBzZXRIb3N0RGlzcGxheTogdHJ1ZVxuICAgIH0pO1xuICAgIHRoaXMub25TdGF0ZUNoYW5nZUhhbmRsZXIgPSB0aGlzLm9uU3RhdGVDaGFuZ2VIYW5kbGVyLmJpbmQodGhpcyk7XG4gIH1cblxuICBvblN0YXRlQ2hhbmdlSGFuZGxlcihldmVudCkge1xuICAgIHRoaXMub25TdGF0ZUNoYW5nZS5lbWl0KGV2ZW50KTtcbiAgfVxufVxuIl19