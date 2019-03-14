/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectorRef, ViewChild, ElementRef, ChangeDetectionStrategy, NgZone, Renderer2 } from "@angular/core";
import { ReactWrapperComponent } from "@angular-react/core";
/**
 * @record
 */
function IReactAppProps() { }
export class ReactAppComponent extends ReactWrapperComponent {
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
ReactAppComponent.decorators = [
    { type: Component, args: [{
                selector: "test-app",
                exportAs: "testApp",
                template: `
    <ReactApp #reactNode>
      <ReactContent><ng-content></ng-content></ReactContent>
    </ReactApp>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["react-renderer"]
            }] }
];
ReactAppComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: NgZone }
];
ReactAppComponent.propDecorators = {
    reactNodeRef: [{ type: ViewChild, args: ["reactNode",] }]
};
if (false) {
    /**
     * @type {?}
     * @protected
     */
    ReactAppComponent.prototype.reactNodeRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3RBcHAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbXktbGliLyIsInNvdXJjZXMiOlsic3JjL2xpYi9jb21wb25lbnRzL3JlYWN0QXBwL3JlYWN0QXBwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVix1QkFBdUIsRUFHdkIsTUFBTSxFQUdOLFNBQVMsRUFHVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7OztBQUU1RCw2QkFBMkI7QUFhM0IsTUFBTSx3QkFBeUIsU0FBUSxxQkFBcUM7Ozs7Ozs7SUFPMUUsWUFDRSxVQUFzQixFQUN0QixpQkFBb0MsRUFDcEMsUUFBbUIsRUFDbkIsTUFBYztRQUVkLEtBQUssQ0FBQyxVQUFVLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUFFO1lBQzdDLE1BQU07WUFDTixjQUFjLEVBQUUsSUFBSTtTQUNyQixDQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBZEQsUUFBUSxLQUFJLENBQUM7Ozs7SUFDYixrQkFBa0IsS0FBSSxDQUFDOzs7O0lBQ3ZCLFdBQVcsS0FBSSxDQUFDOzs7WUFoQmpCLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsVUFBVTtnQkFDcEIsUUFBUSxFQUFFLFNBQVM7Z0JBQ25CLFFBQVEsRUFBRTs7OztHQUlUO2dCQUVELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO3lCQUR0QyxnQkFBZ0I7YUFFMUI7OztZQXpCQyxVQUFVO1lBRlYsaUJBQWlCO1lBU2pCLFNBQVM7WUFIVCxNQUFNOzs7MkJBd0JMLFNBQVMsU0FBQyxXQUFXOzs7Ozs7O0lBQXRCLHlDQUEyRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIFZpZXdDaGlsZCxcbiAgRWxlbWVudFJlZixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFJlbmRlcmVyMixcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgT25EZXN0cm95XG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSZWFjdFdyYXBwZXJDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXItcmVhY3QvY29yZVwiO1xuXG5pbnRlcmZhY2UgSVJlYWN0QXBwUHJvcHMge31cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcInRlc3QtYXBwXCIsXG4gIGV4cG9ydEFzOiBcInRlc3RBcHBcIixcbiAgdGVtcGxhdGU6IGBcbiAgICA8UmVhY3RBcHAgI3JlYWN0Tm9kZT5cbiAgICAgIDxSZWFjdENvbnRlbnQ+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvUmVhY3RDb250ZW50PlxuICAgIDwvUmVhY3RBcHA+XG4gIGAsXG4gIHN0eWxlczogW1wicmVhY3QtcmVuZGVyZXJcIl0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFJlYWN0QXBwQ29tcG9uZW50IGV4dGVuZHMgUmVhY3RXcmFwcGVyQ29tcG9uZW50PElSZWFjdEFwcFByb3BzPlxuICBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcbiAgQFZpZXdDaGlsZChcInJlYWN0Tm9kZVwiKSBwcm90ZWN0ZWQgcmVhY3ROb2RlUmVmOiBFbGVtZW50UmVmO1xuICBuZ09uSW5pdCgpIHt9XG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHt9XG4gIG5nT25EZXN0cm95KCkge31cblxuICBjb25zdHJ1Y3RvcihcbiAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIG5nWm9uZTogTmdab25lXG4gICkge1xuICAgIHN1cGVyKGVsZW1lbnRSZWYsIGNoYW5nZURldGVjdG9yUmVmLCByZW5kZXJlciwge1xuICAgICAgbmdab25lLFxuICAgICAgc2V0SG9zdERpc3BsYXk6IHRydWVcbiAgICB9KTtcbiAgfVxufVxuIl19