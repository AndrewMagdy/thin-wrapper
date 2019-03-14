/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ChangeDetectorRef, ViewChild, ElementRef, ChangeDetectionStrategy, NgZone, Renderer2 } from "@angular/core";
import { ReactWrapperComponent } from "@angular-react/core";
/**
 * @record
 */
function IReactAppProps() { }
var ReactAppComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ReactAppComponent, _super);
    function ReactAppComponent(elementRef, changeDetectorRef, renderer, ngZone) {
        return _super.call(this, elementRef, changeDetectorRef, renderer, {
            ngZone: ngZone,
            setHostDisplay: true
        }) || this;
    }
    /**
     * @return {?}
     */
    ReactAppComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @return {?}
     */
    ReactAppComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @return {?}
     */
    ReactAppComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () { };
    ReactAppComponent.decorators = [
        { type: Component, args: [{
                    selector: "test-app",
                    exportAs: "testApp",
                    template: "\n    <ReactApp #reactNode>\n      <ReactContent><ng-content></ng-content></ReactContent>\n    </ReactApp>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["react-renderer"]
                }] }
    ];
    ReactAppComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 },
        { type: NgZone }
    ]; };
    ReactAppComponent.propDecorators = {
        reactNodeRef: [{ type: ViewChild, args: ["reactNode",] }]
    };
    return ReactAppComponent;
}(ReactWrapperComponent));
export { ReactAppComponent };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    ReactAppComponent.prototype.reactNodeRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3RBcHAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbXktbGliLyIsInNvdXJjZXMiOlsic3JjL2xpYi9jb21wb25lbnRzL3JlYWN0QXBwL3JlYWN0QXBwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsdUJBQXVCLEVBR3ZCLE1BQU0sRUFHTixTQUFTLEVBR1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0scUJBQXFCLENBQUM7Ozs7QUFFNUQsNkJBQTJCO0FBRTNCO0lBV3VDLDZDQUFxQztJQU8xRSwyQkFDRSxVQUFzQixFQUN0QixpQkFBb0MsRUFDcEMsUUFBbUIsRUFDbkIsTUFBYztlQUVkLGtCQUFNLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxRQUFRLEVBQUU7WUFDN0MsTUFBTSxRQUFBO1lBQ04sY0FBYyxFQUFFLElBQUk7U0FDckIsQ0FBQztJQUNKLENBQUM7Ozs7SUFkRCxvQ0FBUTs7O0lBQVIsY0FBWSxDQUFDOzs7O0lBQ2IsOENBQWtCOzs7SUFBbEIsY0FBc0IsQ0FBQzs7OztJQUN2Qix1Q0FBVzs7O0lBQVgsY0FBZSxDQUFDOztnQkFoQmpCLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsVUFBVTtvQkFDcEIsUUFBUSxFQUFFLFNBQVM7b0JBQ25CLFFBQVEsRUFBRSxnSEFJVDtvQkFFRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs2QkFEdEMsZ0JBQWdCO2lCQUUxQjs7O2dCQXpCQyxVQUFVO2dCQUZWLGlCQUFpQjtnQkFTakIsU0FBUztnQkFIVCxNQUFNOzs7K0JBd0JMLFNBQVMsU0FBQyxXQUFXOztJQWdCeEIsd0JBQUM7Q0FBQSxBQTdCRCxDQVd1QyxxQkFBcUIsR0FrQjNEO1NBbEJZLGlCQUFpQjs7Ozs7O0lBRTVCLHlDQUEyRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIFZpZXdDaGlsZCxcbiAgRWxlbWVudFJlZixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFJlbmRlcmVyMixcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgT25EZXN0cm95XG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSZWFjdFdyYXBwZXJDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXItcmVhY3QvY29yZVwiO1xuXG5pbnRlcmZhY2UgSVJlYWN0QXBwUHJvcHMge31cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcInRlc3QtYXBwXCIsXG4gIGV4cG9ydEFzOiBcInRlc3RBcHBcIixcbiAgdGVtcGxhdGU6IGBcbiAgICA8UmVhY3RBcHAgI3JlYWN0Tm9kZT5cbiAgICAgIDxSZWFjdENvbnRlbnQ+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvUmVhY3RDb250ZW50PlxuICAgIDwvUmVhY3RBcHA+XG4gIGAsXG4gIHN0eWxlczogW1wicmVhY3QtcmVuZGVyZXJcIl0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFJlYWN0QXBwQ29tcG9uZW50IGV4dGVuZHMgUmVhY3RXcmFwcGVyQ29tcG9uZW50PElSZWFjdEFwcFByb3BzPlxuICBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcbiAgQFZpZXdDaGlsZChcInJlYWN0Tm9kZVwiKSBwcm90ZWN0ZWQgcmVhY3ROb2RlUmVmOiBFbGVtZW50UmVmO1xuICBuZ09uSW5pdCgpIHt9XG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHt9XG4gIG5nT25EZXN0cm95KCkge31cblxuICBjb25zdHJ1Y3RvcihcbiAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIG5nWm9uZTogTmdab25lXG4gICkge1xuICAgIHN1cGVyKGVsZW1lbnRSZWYsIGNoYW5nZURldGVjdG9yUmVmLCByZW5kZXJlciwge1xuICAgICAgbmdab25lLFxuICAgICAgc2V0SG9zdERpc3BsYXk6IHRydWVcbiAgICB9KTtcbiAgfVxufVxuIl19