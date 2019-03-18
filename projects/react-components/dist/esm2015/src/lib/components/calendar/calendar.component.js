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
        this.onChange = new EventEmitter();
        this.onChangeHandler = this.onChangeHandler.bind(this);
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
     * @param {?} date
     * @return {?}
     */
    onChangeHandler(date) {
        this.onChange.emit({
            date
        });
    }
}
CalendarComponent.decorators = [
    { type: Component, args: [{
                selector: "calendar-react",
                exportAs: "calendarReact",
                template: `
    <Calendar
      #reactNode
      [mode]="mode"
      [showToday]="showToday"
      (onChange)="onChangeHandler($event)"
    >
      <ReactContent><ng-content></ng-content></ReactContent>
    </Calendar>
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
    onChange: [{ type: Output }]
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
    CalendarComponent.prototype.onChange;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vcmVhY3QtY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbInNyYy9saWIvY29tcG9uZW50cy9jYWxlbmRhci9jYWxlbmRhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsdUJBQXVCLEVBQ3ZCLFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUVOLE1BQU0sRUFDTixTQUFTLEVBR1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0scUJBQXFCLENBQUM7Ozs7QUFFNUQsNkJBR0M7OztJQUZDLDhCQUFvRDs7SUFDcEQsbUNBQW1COztBQW9CckIsTUFBTSx3QkFBeUIsU0FBUSxxQkFBcUM7Ozs7Ozs7SUFhMUUsWUFDRSxVQUFzQixFQUN0QixpQkFBb0MsRUFDcEMsUUFBbUIsRUFDbkIsTUFBYztRQUVkLEtBQUssQ0FBQyxVQUFVLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUFFO1lBQzdDLE1BQU07WUFDTixjQUFjLEVBQUUsSUFBSTtTQUNyQixDQUFDLENBQUM7UUFmYyxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQWtCLENBQUM7UUFnQi9ELElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekQsQ0FBQzs7OztJQWZELFFBQVEsS0FBSSxDQUFDOzs7O0lBQ2Isa0JBQWtCLEtBQUksQ0FBQzs7OztJQUN2QixXQUFXLEtBQUksQ0FBQzs7Ozs7SUFlaEIsZUFBZSxDQUFDLElBQVU7UUFDeEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDakIsSUFBSTtTQUNMLENBQUMsQ0FBQztJQUNMLENBQUM7OztZQS9DRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLFFBQVEsRUFBRTs7Ozs7Ozs7O0dBU1Q7O2dCQUVELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO3lCQUN0QyxnQkFBZ0I7YUFDMUI7OztZQWxDQyxVQUFVO1lBRlYsaUJBQWlCO1lBU2pCLFNBQVM7WUFIVCxNQUFNOzs7MkJBaUNMLFNBQVMsU0FBQyxXQUFXO21CQUVyQixLQUFLO3dCQUNMLEtBQUs7dUJBRUwsTUFBTTs7Ozs7OztJQUxQLHlDQUEyRDs7SUFFM0QsaUNBQXVDOztJQUN2QyxzQ0FBaUQ7O0lBRWpELHFDQUFpRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIFZpZXdDaGlsZCxcbiAgRWxlbWVudFJlZixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFJlbmRlcmVyMixcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgT25EZXN0cm95XG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSZWFjdFdyYXBwZXJDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXItcmVhY3QvY29yZVwiO1xuXG5pbnRlcmZhY2UgSUNhbGVuZGFyUHJvcHMge1xuICBtb2RlOiBcInRpbWVcIiB8IFwiZGF0ZVwiIHwgXCJtb250aFwiIHwgXCJ5ZWFyXCIgfCBcImRlY2FkZVwiO1xuICBzaG93VG9kYXk6IGJvb2xlYW47XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJjYWxlbmRhci1yZWFjdFwiLFxuICBleHBvcnRBczogXCJjYWxlbmRhclJlYWN0XCIsXG4gIHRlbXBsYXRlOiBgXG4gICAgPENhbGVuZGFyXG4gICAgICAjcmVhY3ROb2RlXG4gICAgICBbbW9kZV09XCJtb2RlXCJcbiAgICAgIFtzaG93VG9kYXldPVwic2hvd1RvZGF5XCJcbiAgICAgIChvbkNoYW5nZSk9XCJvbkNoYW5nZUhhbmRsZXIoJGV2ZW50KVwiXG4gICAgPlxuICAgICAgPFJlYWN0Q29udGVudD48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9SZWFjdENvbnRlbnQ+XG4gICAgPC9DYWxlbmRhcj5cbiAgYCxcbiAgLy9zdHlsZVVybHM6IFtcIi4vY2FsZW5kYXIuY29tcG9uZW50LmNzc1wiXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHN0eWxlczogW1wicmVhY3QtcmVuZGVyZXJcIl1cbn0pXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJDb21wb25lbnQgZXh0ZW5kcyBSZWFjdFdyYXBwZXJDb21wb25lbnQ8SUNhbGVuZGFyUHJvcHM+XG4gIGltcGxlbWVudHMgT25Jbml0LCBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kge1xuICBAVmlld0NoaWxkKFwicmVhY3ROb2RlXCIpIHByb3RlY3RlZCByZWFjdE5vZGVSZWY6IEVsZW1lbnRSZWY7XG5cbiAgQElucHV0KCkgbW9kZT86IElDYWxlbmRhclByb3BzW1wibW9kZVwiXTtcbiAgQElucHV0KCkgc2hvd1RvZGF5PzogSUNhbGVuZGFyUHJvcHNbXCJzaG93VG9kYXlcIl07XG5cbiAgQE91dHB1dCgpIHJlYWRvbmx5IG9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjx7IGRhdGU6IERhdGUgfT4oKTtcblxuICBuZ09uSW5pdCgpIHt9XG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHt9XG4gIG5nT25EZXN0cm95KCkge31cblxuICBjb25zdHJ1Y3RvcihcbiAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIG5nWm9uZTogTmdab25lXG4gICkge1xuICAgIHN1cGVyKGVsZW1lbnRSZWYsIGNoYW5nZURldGVjdG9yUmVmLCByZW5kZXJlciwge1xuICAgICAgbmdab25lLFxuICAgICAgc2V0SG9zdERpc3BsYXk6IHRydWVcbiAgICB9KTtcbiAgICB0aGlzLm9uQ2hhbmdlSGFuZGxlciA9IHRoaXMub25DaGFuZ2VIYW5kbGVyLmJpbmQodGhpcyk7XG4gIH1cblxuICBvbkNoYW5nZUhhbmRsZXIoZGF0ZTogRGF0ZSkge1xuICAgIHRoaXMub25DaGFuZ2UuZW1pdCh7XG4gICAgICBkYXRlXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==