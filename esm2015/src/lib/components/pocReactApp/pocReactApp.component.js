/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectorRef, ViewChild, ElementRef, ChangeDetectionStrategy, EventEmitter, Input, NgZone, Output, Renderer2 } from "@angular/core";
import { ReactWrapperComponent } from "@angular-react/core";
/**
 * @record
 */
function IPocReactAppComponent() { }
if (false) {
    /** @type {?} */
    IPocReactAppComponent.prototype.mode;
    /** @type {?} */
    IPocReactAppComponent.prototype.showToday;
    /** @type {?} */
    IPocReactAppComponent.prototype.angularTestProp;
}
export class PocReactAppComponent extends ReactWrapperComponent {
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
        this.angularNavigateTo = new EventEmitter();
        this.onStateChangeHandler = this.onStateChangeHandler.bind(this);
        this.angularNavigateToHandler = this.angularNavigateToHandler.bind(this);
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
    /**
     * @param {?} event
     * @return {?}
     */
    angularNavigateToHandler(event) {
        this.angularNavigateTo.emit(event);
    }
}
PocReactAppComponent.decorators = [
    { type: Component, args: [{
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
            }] }
];
PocReactAppComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: NgZone }
];
PocReactAppComponent.propDecorators = {
    reactNodeRef: [{ type: ViewChild, args: ["reactNode",] }],
    angularTestProp: [{ type: Input }],
    onStateChange: [{ type: Output }],
    angularNavigateTo: [{ type: Output }]
};
if (false) {
    /**
     * @type {?}
     * @protected
     */
    PocReactAppComponent.prototype.reactNodeRef;
    /** @type {?} */
    PocReactAppComponent.prototype.angularTestProp;
    /** @type {?} */
    PocReactAppComponent.prototype.onStateChange;
    /** @type {?} */
    PocReactAppComponent.prototype.angularNavigateTo;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9jUmVhY3RBcHAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vcG9jLXJlYWN0LWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJzcmMvbGliL2NvbXBvbmVudHMvcG9jUmVhY3RBcHAvcG9jUmVhY3RBcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLHVCQUF1QixFQUN2QixZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFFTixNQUFNLEVBQ04sU0FBUyxFQUdWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7O0FBRTVELG9DQUlDOzs7SUFIQyxxQ0FBb0Q7O0lBQ3BELDBDQUFtQjs7SUFDbkIsZ0RBQXFCOztBQW1CdkIsTUFBTSwyQkFDSixTQUFRLHFCQUE0Qzs7Ozs7OztJQWFwRCxZQUNFLFVBQXNCLEVBQ3RCLGlCQUFvQyxFQUNwQyxRQUFtQixFQUNuQixNQUFjO1FBRWQsS0FBSyxDQUFDLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxRQUFRLEVBQUU7WUFDN0MsTUFBTTtZQUNOLGNBQWMsRUFBRSxJQUFJO1NBQ3JCLENBQUMsQ0FBQztRQWhCSyxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbkMsc0JBQWlCLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQWdCL0MsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLHdCQUF3QixHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0UsQ0FBQzs7OztJQWhCRCxRQUFRLEtBQUksQ0FBQzs7OztJQUNiLGtCQUFrQixLQUFJLENBQUM7Ozs7SUFDdkIsV0FBVyxLQUFJLENBQUM7Ozs7O0lBZ0JoQixvQkFBb0IsQ0FBQyxLQUFLO1FBQ3hCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7Ozs7O0lBRUQsd0JBQXdCLENBQUMsS0FBSztRQUM1QixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3JDLENBQUM7OztZQWxERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLFFBQVEsRUFBRSxhQUFhO2dCQUN2QixRQUFRLEVBQUU7Ozs7Ozs7OztHQVNUO2dCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO3lCQUN0QyxnQkFBZ0I7YUFDMUI7OztZQWxDQyxVQUFVO1lBRlYsaUJBQWlCO1lBU2pCLFNBQVM7WUFIVCxNQUFNOzs7MkJBa0NMLFNBQVMsU0FBQyxXQUFXOzhCQUVyQixLQUFLOzRCQUVMLE1BQU07Z0NBQ04sTUFBTTs7Ozs7OztJQUxQLDRDQUEyRDs7SUFFM0QsK0NBQW9FOztJQUVwRSw2Q0FBNkM7O0lBQzdDLGlEQUFpRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIFZpZXdDaGlsZCxcbiAgRWxlbWVudFJlZixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFJlbmRlcmVyMixcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgT25EZXN0cm95XG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSZWFjdFdyYXBwZXJDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXItcmVhY3QvY29yZVwiO1xuXG5pbnRlcmZhY2UgSVBvY1JlYWN0QXBwQ29tcG9uZW50IHtcbiAgbW9kZTogXCJ0aW1lXCIgfCBcImRhdGVcIiB8IFwibW9udGhcIiB8IFwieWVhclwiIHwgXCJkZWNhZGVcIjtcbiAgc2hvd1RvZGF5OiBib29sZWFuO1xuICBhbmd1bGFyVGVzdFByb3A6IGFueTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcInBvYy1hcHAtcmVhY3RcIixcbiAgZXhwb3J0QXM6IFwicG9jQXBwUmVhY3RcIixcbiAgdGVtcGxhdGU6IGBcbiAgICA8QXBwXG4gICAgICAjcmVhY3ROb2RlXG4gICAgICBbYW5ndWxhclRlc3RQcm9wXT1cImFuZ3VsYXJUZXN0UHJvcFwiXG4gICAgICBbc3RhdGVDaGFuZ2VdPVwib25TdGF0ZUNoYW5nZUhhbmRsZXJcIlxuICAgICAgW2FuZ3VsYXJOYXZpZ2F0ZVRvXT1cImFuZ3VsYXJOYXZpZ2F0ZVRvSGFuZGxlclwiXG4gICAgPlxuICAgICAgPFJlYWN0Q29udGVudD48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9SZWFjdENvbnRlbnQ+XG4gICAgPC9BcHA+XG4gIGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBzdHlsZXM6IFtcInJlYWN0LXJlbmRlcmVyXCJdXG59KVxuZXhwb3J0IGNsYXNzIFBvY1JlYWN0QXBwQ29tcG9uZW50XG4gIGV4dGVuZHMgUmVhY3RXcmFwcGVyQ29tcG9uZW50PElQb2NSZWFjdEFwcENvbXBvbmVudD5cbiAgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSB7XG4gIEBWaWV3Q2hpbGQoXCJyZWFjdE5vZGVcIikgcHJvdGVjdGVkIHJlYWN0Tm9kZVJlZjogRWxlbWVudFJlZjtcblxuICBASW5wdXQoKSBhbmd1bGFyVGVzdFByb3A/OiBJUG9jUmVhY3RBcHBDb21wb25lbnRbXCJhbmd1bGFyVGVzdFByb3BcIl07XG5cbiAgQE91dHB1dCgpIG9uU3RhdGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBhbmd1bGFyTmF2aWdhdGVUbyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBuZ09uSW5pdCgpIHt9XG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHt9XG4gIG5nT25EZXN0cm95KCkge31cblxuICBjb25zdHJ1Y3RvcihcbiAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIG5nWm9uZTogTmdab25lXG4gICkge1xuICAgIHN1cGVyKGVsZW1lbnRSZWYsIGNoYW5nZURldGVjdG9yUmVmLCByZW5kZXJlciwge1xuICAgICAgbmdab25lLFxuICAgICAgc2V0SG9zdERpc3BsYXk6IHRydWVcbiAgICB9KTtcbiAgICB0aGlzLm9uU3RhdGVDaGFuZ2VIYW5kbGVyID0gdGhpcy5vblN0YXRlQ2hhbmdlSGFuZGxlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuYW5ndWxhck5hdmlnYXRlVG9IYW5kbGVyID0gdGhpcy5hbmd1bGFyTmF2aWdhdGVUb0hhbmRsZXIuYmluZCh0aGlzKTtcbiAgfVxuXG4gIG9uU3RhdGVDaGFuZ2VIYW5kbGVyKGV2ZW50KSB7XG4gICAgdGhpcy5vblN0YXRlQ2hhbmdlLmVtaXQoZXZlbnQpO1xuICB9XG5cbiAgYW5ndWxhck5hdmlnYXRlVG9IYW5kbGVyKGV2ZW50KSB7XG4gICAgdGhpcy5hbmd1bGFyTmF2aWdhdGVUby5lbWl0KGV2ZW50KTtcbiAgfVxufVxuIl19