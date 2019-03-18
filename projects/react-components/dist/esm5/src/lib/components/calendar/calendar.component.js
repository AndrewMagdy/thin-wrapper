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
}
var CalendarComponent = /** @class */ (function (_super) {
    tslib_1.__extends(CalendarComponent, _super);
    function CalendarComponent(elementRef, changeDetectorRef, renderer, ngZone) {
        var _this = _super.call(this, elementRef, changeDetectorRef, renderer, {
            ngZone: ngZone,
            setHostDisplay: true
        }) || this;
        _this.onChange = new EventEmitter();
        _this.onChangeHandler = _this.onChangeHandler.bind(_this);
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
     * @param {?} date
     * @return {?}
     */
    CalendarComponent.prototype.onChangeHandler = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        this.onChange.emit({
            date: date
        });
    };
    CalendarComponent.decorators = [
        { type: Component, args: [{
                    selector: "calendar-react",
                    exportAs: "calendarReact",
                    template: "\n    <Calendar\n      #reactNode\n      [mode]=\"mode\"\n      [showToday]=\"showToday\"\n      (onChange)=\"onChangeHandler($event)\"\n    >\n      <ReactContent><ng-content></ng-content></ReactContent>\n    </Calendar>\n  ",
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
        onChange: [{ type: Output }]
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
    CalendarComponent.prototype.onChange;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vcmVhY3QtY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbInNyYy9saWIvY29tcG9uZW50cy9jYWxlbmRhci9jYWxlbmRhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLHVCQUF1QixFQUN2QixZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFFTixNQUFNLEVBQ04sU0FBUyxFQUdWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7O0FBRTVELDZCQUdDOzs7SUFGQyw4QkFBb0Q7O0lBQ3BELG1DQUFtQjs7QUFHckI7SUFpQnVDLDZDQUFxQztJQWExRSwyQkFDRSxVQUFzQixFQUN0QixpQkFBb0MsRUFDcEMsUUFBbUIsRUFDbkIsTUFBYztRQUpoQixZQU1FLGtCQUFNLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxRQUFRLEVBQUU7WUFDN0MsTUFBTSxRQUFBO1lBQ04sY0FBYyxFQUFFLElBQUk7U0FDckIsQ0FBQyxTQUVIO1FBakJrQixjQUFRLEdBQUcsSUFBSSxZQUFZLEVBQWtCLENBQUM7UUFnQi9ELEtBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLENBQUM7O0lBQ3pELENBQUM7Ozs7SUFmRCxvQ0FBUTs7O0lBQVIsY0FBWSxDQUFDOzs7O0lBQ2IsOENBQWtCOzs7SUFBbEIsY0FBc0IsQ0FBQzs7OztJQUN2Qix1Q0FBVzs7O0lBQVgsY0FBZSxDQUFDOzs7OztJQWVoQiwyQ0FBZTs7OztJQUFmLFVBQWdCLElBQVU7UUFDeEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDakIsSUFBSSxNQUFBO1NBQ0wsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0JBL0NGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixRQUFRLEVBQUUsZUFBZTtvQkFDekIsUUFBUSxFQUFFLG1PQVNUOztvQkFFRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs2QkFDdEMsZ0JBQWdCO2lCQUMxQjs7O2dCQWxDQyxVQUFVO2dCQUZWLGlCQUFpQjtnQkFTakIsU0FBUztnQkFIVCxNQUFNOzs7K0JBaUNMLFNBQVMsU0FBQyxXQUFXO3VCQUVyQixLQUFLOzRCQUNMLEtBQUs7MkJBRUwsTUFBTTs7SUF3QlQsd0JBQUM7Q0FBQSxBQWhERCxDQWlCdUMscUJBQXFCLEdBK0IzRDtTQS9CWSxpQkFBaUI7Ozs7OztJQUU1Qix5Q0FBMkQ7O0lBRTNELGlDQUF1Qzs7SUFDdkMsc0NBQWlEOztJQUVqRCxxQ0FBaUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBWaWV3Q2hpbGQsXG4gIEVsZW1lbnRSZWYsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBSZW5kZXJlcjIsXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIE9uRGVzdHJveVxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUmVhY3RXcmFwcGVyQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyLXJlYWN0L2NvcmVcIjtcblxuaW50ZXJmYWNlIElDYWxlbmRhclByb3BzIHtcbiAgbW9kZTogXCJ0aW1lXCIgfCBcImRhdGVcIiB8IFwibW9udGhcIiB8IFwieWVhclwiIHwgXCJkZWNhZGVcIjtcbiAgc2hvd1RvZGF5OiBib29sZWFuO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwiY2FsZW5kYXItcmVhY3RcIixcbiAgZXhwb3J0QXM6IFwiY2FsZW5kYXJSZWFjdFwiLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxDYWxlbmRhclxuICAgICAgI3JlYWN0Tm9kZVxuICAgICAgW21vZGVdPVwibW9kZVwiXG4gICAgICBbc2hvd1RvZGF5XT1cInNob3dUb2RheVwiXG4gICAgICAob25DaGFuZ2UpPVwib25DaGFuZ2VIYW5kbGVyKCRldmVudClcIlxuICAgID5cbiAgICAgIDxSZWFjdENvbnRlbnQ+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvUmVhY3RDb250ZW50PlxuICAgIDwvQ2FsZW5kYXI+XG4gIGAsXG4gIC8vc3R5bGVVcmxzOiBbXCIuL2NhbGVuZGFyLmNvbXBvbmVudC5jc3NcIl0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBzdHlsZXM6IFtcInJlYWN0LXJlbmRlcmVyXCJdXG59KVxuZXhwb3J0IGNsYXNzIENhbGVuZGFyQ29tcG9uZW50IGV4dGVuZHMgUmVhY3RXcmFwcGVyQ29tcG9uZW50PElDYWxlbmRhclByb3BzPlxuICBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcbiAgQFZpZXdDaGlsZChcInJlYWN0Tm9kZVwiKSBwcm90ZWN0ZWQgcmVhY3ROb2RlUmVmOiBFbGVtZW50UmVmO1xuXG4gIEBJbnB1dCgpIG1vZGU/OiBJQ2FsZW5kYXJQcm9wc1tcIm1vZGVcIl07XG4gIEBJbnB1dCgpIHNob3dUb2RheT86IElDYWxlbmRhclByb3BzW1wic2hvd1RvZGF5XCJdO1xuXG4gIEBPdXRwdXQoKSByZWFkb25seSBvbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8eyBkYXRlOiBEYXRlIH0+KCk7XG5cbiAgbmdPbkluaXQoKSB7fVxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7fVxuICBuZ09uRGVzdHJveSgpIHt9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBuZ1pvbmU6IE5nWm9uZVxuICApIHtcbiAgICBzdXBlcihlbGVtZW50UmVmLCBjaGFuZ2VEZXRlY3RvclJlZiwgcmVuZGVyZXIsIHtcbiAgICAgIG5nWm9uZSxcbiAgICAgIHNldEhvc3REaXNwbGF5OiB0cnVlXG4gICAgfSk7XG4gICAgdGhpcy5vbkNoYW5nZUhhbmRsZXIgPSB0aGlzLm9uQ2hhbmdlSGFuZGxlci5iaW5kKHRoaXMpO1xuICB9XG5cbiAgb25DaGFuZ2VIYW5kbGVyKGRhdGU6IERhdGUpIHtcbiAgICB0aGlzLm9uQ2hhbmdlLmVtaXQoe1xuICAgICAgZGF0ZVxuICAgIH0pO1xuICB9XG59XG4iXX0=