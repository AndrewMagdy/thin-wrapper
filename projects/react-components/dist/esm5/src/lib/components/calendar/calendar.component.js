/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ChangeDetectorRef, ViewChild, ElementRef, ChangeDetectionStrategy, Input, NgZone, Renderer2 } from "@angular/core";
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
        return _super.call(this, elementRef, changeDetectorRef, renderer, {
            ngZone: ngZone,
            setHostDisplay: true
        }) || this;
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
    CalendarComponent.decorators = [
        { type: Component, args: [{
                    selector: "calendar-react",
                    exportAs: "calendarReact",
                    template: "\n    <Calendar #reactNode [mode]=\"mode\" [showToday]=\"showToday\">\n      <ReactContent><ng-content></ng-content></ReactContent>\n    </Calendar>\n  ",
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
        showToday: [{ type: Input }]
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vcmVhY3QtY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbInNyYy9saWIvY29tcG9uZW50cy9jYWxlbmRhci9jYWxlbmRhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLHVCQUF1QixFQUV2QixLQUFLLEVBQ0wsTUFBTSxFQUdOLFNBQVMsRUFHVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7OztBQUU1RCw2QkFHQzs7O0lBRkMsOEJBQW9EOztJQUNwRCxtQ0FBbUI7O0FBR3JCO0lBWXVDLDZDQUFxQztJQVcxRSwyQkFDRSxVQUFzQixFQUN0QixpQkFBb0MsRUFDcEMsUUFBbUIsRUFDbkIsTUFBYztlQUVkLGtCQUFNLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxRQUFRLEVBQUU7WUFDN0MsTUFBTSxRQUFBO1lBQ04sY0FBYyxFQUFFLElBQUk7U0FDckIsQ0FBQztJQUNKLENBQUM7Ozs7SUFkRCxvQ0FBUTs7O0lBQVIsY0FBWSxDQUFDOzs7O0lBQ2IsOENBQWtCOzs7SUFBbEIsY0FBc0IsQ0FBQzs7OztJQUN2Qix1Q0FBVzs7O0lBQVgsY0FBZSxDQUFDOztnQkFyQmpCLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixRQUFRLEVBQUUsZUFBZTtvQkFDekIsUUFBUSxFQUFFLDBKQUlUOztvQkFFRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs2QkFDdEMsZ0JBQWdCO2lCQUMxQjs7O2dCQTdCQyxVQUFVO2dCQUZWLGlCQUFpQjtnQkFTakIsU0FBUztnQkFIVCxNQUFNOzs7K0JBNEJMLFNBQVMsU0FBQyxXQUFXO3VCQUVyQixLQUFLOzRCQUNMLEtBQUs7O0lBaUJSLHdCQUFDO0NBQUEsQUFsQ0QsQ0FZdUMscUJBQXFCLEdBc0IzRDtTQXRCWSxpQkFBaUI7Ozs7OztJQUU1Qix5Q0FBMkQ7O0lBRTNELGlDQUF1Qzs7SUFDdkMsc0NBQWlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgVmlld0NoaWxkLFxuICBFbGVtZW50UmVmLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgUmVuZGVyZXIyLFxuICBBZnRlckNvbnRlbnRJbml0LFxuICBPbkRlc3Ryb3lcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJlYWN0V3JhcHBlckNvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci1yZWFjdC9jb3JlXCI7XG5cbmludGVyZmFjZSBJQ2FsZW5kYXJQcm9wcyB7XG4gIG1vZGU6IFwidGltZVwiIHwgXCJkYXRlXCIgfCBcIm1vbnRoXCIgfCBcInllYXJcIiB8IFwiZGVjYWRlXCI7XG4gIHNob3dUb2RheTogYm9vbGVhbjtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImNhbGVuZGFyLXJlYWN0XCIsXG4gIGV4cG9ydEFzOiBcImNhbGVuZGFyUmVhY3RcIixcbiAgdGVtcGxhdGU6IGBcbiAgICA8Q2FsZW5kYXIgI3JlYWN0Tm9kZSBbbW9kZV09XCJtb2RlXCIgW3Nob3dUb2RheV09XCJzaG93VG9kYXlcIj5cbiAgICAgIDxSZWFjdENvbnRlbnQ+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvUmVhY3RDb250ZW50PlxuICAgIDwvQ2FsZW5kYXI+XG4gIGAsXG4gIC8vc3R5bGVVcmxzOiBbXCIuL2NhbGVuZGFyLmNvbXBvbmVudC5jc3NcIl0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBzdHlsZXM6IFtcInJlYWN0LXJlbmRlcmVyXCJdXG59KVxuZXhwb3J0IGNsYXNzIENhbGVuZGFyQ29tcG9uZW50IGV4dGVuZHMgUmVhY3RXcmFwcGVyQ29tcG9uZW50PElDYWxlbmRhclByb3BzPlxuICBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcbiAgQFZpZXdDaGlsZChcInJlYWN0Tm9kZVwiKSBwcm90ZWN0ZWQgcmVhY3ROb2RlUmVmOiBFbGVtZW50UmVmO1xuXG4gIEBJbnB1dCgpIG1vZGU/OiBJQ2FsZW5kYXJQcm9wc1tcIm1vZGVcIl07XG4gIEBJbnB1dCgpIHNob3dUb2RheT86IElDYWxlbmRhclByb3BzW1wic2hvd1RvZGF5XCJdO1xuXG4gIG5nT25Jbml0KCkge31cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge31cbiAgbmdPbkRlc3Ryb3koKSB7fVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgbmdab25lOiBOZ1pvbmVcbiAgKSB7XG4gICAgc3VwZXIoZWxlbWVudFJlZiwgY2hhbmdlRGV0ZWN0b3JSZWYsIHJlbmRlcmVyLCB7XG4gICAgICBuZ1pvbmUsXG4gICAgICBzZXRIb3N0RGlzcGxheTogdHJ1ZVxuICAgIH0pO1xuICB9XG59XG4iXX0=