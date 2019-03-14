/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
}
CalendarComponent.decorators = [
    { type: Component, args: [{
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
    showToday: [{ type: Input }]
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vcmVhY3QtY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbInNyYy9saWIvY29tcG9uZW50cy9jYWxlbmRhci9jYWxlbmRhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsdUJBQXVCLEVBRXZCLEtBQUssRUFDTCxNQUFNLEVBR04sU0FBUyxFQUdWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7O0FBRTVELDZCQUdDOzs7SUFGQyw4QkFBb0Q7O0lBQ3BELG1DQUFtQjs7QUFlckIsTUFBTSx3QkFBeUIsU0FBUSxxQkFBcUM7Ozs7Ozs7SUFXMUUsWUFDRSxVQUFzQixFQUN0QixpQkFBb0MsRUFDcEMsUUFBbUIsRUFDbkIsTUFBYztRQUVkLEtBQUssQ0FBQyxVQUFVLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUFFO1lBQzdDLE1BQU07WUFDTixjQUFjLEVBQUUsSUFBSTtTQUNyQixDQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBZEQsUUFBUSxLQUFJLENBQUM7Ozs7SUFDYixrQkFBa0IsS0FBSSxDQUFDOzs7O0lBQ3ZCLFdBQVcsS0FBSSxDQUFDOzs7WUFyQmpCLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixRQUFRLEVBQUUsZUFBZTtnQkFDekIsUUFBUSxFQUFFOzs7O0dBSVQ7O2dCQUVELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO3lCQUN0QyxnQkFBZ0I7YUFDMUI7OztZQTdCQyxVQUFVO1lBRlYsaUJBQWlCO1lBU2pCLFNBQVM7WUFIVCxNQUFNOzs7MkJBNEJMLFNBQVMsU0FBQyxXQUFXO21CQUVyQixLQUFLO3dCQUNMLEtBQUs7Ozs7Ozs7SUFITix5Q0FBMkQ7O0lBRTNELGlDQUF1Qzs7SUFDdkMsc0NBQWlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgVmlld0NoaWxkLFxuICBFbGVtZW50UmVmLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgUmVuZGVyZXIyLFxuICBBZnRlckNvbnRlbnRJbml0LFxuICBPbkRlc3Ryb3lcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJlYWN0V3JhcHBlckNvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci1yZWFjdC9jb3JlXCI7XG5cbmludGVyZmFjZSBJQ2FsZW5kYXJQcm9wcyB7XG4gIG1vZGU6IFwidGltZVwiIHwgXCJkYXRlXCIgfCBcIm1vbnRoXCIgfCBcInllYXJcIiB8IFwiZGVjYWRlXCI7XG4gIHNob3dUb2RheTogYm9vbGVhbjtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImNhbGVuZGFyLXJlYWN0XCIsXG4gIGV4cG9ydEFzOiBcImNhbGVuZGFyUmVhY3RcIixcbiAgdGVtcGxhdGU6IGBcbiAgICA8Q2FsZW5kYXIgI3JlYWN0Tm9kZSBbbW9kZV09XCJtb2RlXCIgW3Nob3dUb2RheV09XCJzaG93VG9kYXlcIj5cbiAgICAgIDxSZWFjdENvbnRlbnQ+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvUmVhY3RDb250ZW50PlxuICAgIDwvQ2FsZW5kYXI+XG4gIGAsXG4gIC8vc3R5bGVVcmxzOiBbXCIuL2NhbGVuZGFyLmNvbXBvbmVudC5jc3NcIl0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBzdHlsZXM6IFtcInJlYWN0LXJlbmRlcmVyXCJdXG59KVxuZXhwb3J0IGNsYXNzIENhbGVuZGFyQ29tcG9uZW50IGV4dGVuZHMgUmVhY3RXcmFwcGVyQ29tcG9uZW50PElDYWxlbmRhclByb3BzPlxuICBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcbiAgQFZpZXdDaGlsZChcInJlYWN0Tm9kZVwiKSBwcm90ZWN0ZWQgcmVhY3ROb2RlUmVmOiBFbGVtZW50UmVmO1xuXG4gIEBJbnB1dCgpIG1vZGU/OiBJQ2FsZW5kYXJQcm9wc1tcIm1vZGVcIl07XG4gIEBJbnB1dCgpIHNob3dUb2RheT86IElDYWxlbmRhclByb3BzW1wic2hvd1RvZGF5XCJdO1xuXG4gIG5nT25Jbml0KCkge31cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge31cbiAgbmdPbkRlc3Ryb3koKSB7fVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgbmdab25lOiBOZ1pvbmVcbiAgKSB7XG4gICAgc3VwZXIoZWxlbWVudFJlZiwgY2hhbmdlRGV0ZWN0b3JSZWYsIHJlbmRlcmVyLCB7XG4gICAgICBuZ1pvbmUsXG4gICAgICBzZXRIb3N0RGlzcGxheTogdHJ1ZVxuICAgIH0pO1xuICB9XG59XG4iXX0=