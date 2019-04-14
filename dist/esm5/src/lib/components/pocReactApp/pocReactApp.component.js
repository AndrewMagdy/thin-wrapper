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
function IPocReactAppComponent() { }
if (false) {
    /** @type {?} */
    IPocReactAppComponent.prototype.mode;
    /** @type {?} */
    IPocReactAppComponent.prototype.showToday;
    /** @type {?} */
    IPocReactAppComponent.prototype.angularTestProp;
}
var PocReactAppComponent = /** @class */ (function (_super) {
    tslib_1.__extends(PocReactAppComponent, _super);
    function PocReactAppComponent(elementRef, changeDetectorRef, renderer, ngZone) {
        var _this = _super.call(this, elementRef, changeDetectorRef, renderer, {
            ngZone: ngZone,
            setHostDisplay: true
        }) || this;
        _this.onStateChange = new EventEmitter();
        _this.angularNavigateTo = new EventEmitter();
        _this.onStateChangeHandler = _this.onStateChangeHandler.bind(_this);
        _this.angularNavigateToHandler = _this.angularNavigateToHandler.bind(_this);
        return _this;
    }
    /**
     * @return {?}
     */
    PocReactAppComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @return {?}
     */
    PocReactAppComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @return {?}
     */
    PocReactAppComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} event
     * @return {?}
     */
    PocReactAppComponent.prototype.onStateChangeHandler = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.onStateChange.emit(event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    PocReactAppComponent.prototype.angularNavigateToHandler = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.angularNavigateTo.emit(event);
    };
    PocReactAppComponent.decorators = [
        { type: Component, args: [{
                    selector: "poc-app-react",
                    exportAs: "pocAppReact",
                    template: "\n    <App\n      #reactNode\n      [angularTestProp]=\"angularTestProp\"\n      [stateChange]=\"onStateChangeHandler\"\n      [angularNavigateTo]=\"angularNavigateToHandler\"\n    >\n      <ReactContent><ng-content></ng-content></ReactContent>\n    </App>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["react-renderer"]
                }] }
    ];
    PocReactAppComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 },
        { type: NgZone }
    ]; };
    PocReactAppComponent.propDecorators = {
        reactNodeRef: [{ type: ViewChild, args: ["reactNode",] }],
        angularTestProp: [{ type: Input }],
        onStateChange: [{ type: Output }],
        angularNavigateTo: [{ type: Output }]
    };
    return PocReactAppComponent;
}(ReactWrapperComponent));
export { PocReactAppComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9jUmVhY3RBcHAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vcG9jLXJlYWN0LWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJzcmMvbGliL2NvbXBvbmVudHMvcG9jUmVhY3RBcHAvcG9jUmVhY3RBcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVix1QkFBdUIsRUFDdkIsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBRU4sTUFBTSxFQUNOLFNBQVMsRUFHVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7OztBQUU1RCxvQ0FJQzs7O0lBSEMscUNBQW9EOztJQUNwRCwwQ0FBbUI7O0lBQ25CLGdEQUFxQjs7QUFHdkI7SUFpQlUsZ0RBQTRDO0lBYXBELDhCQUNFLFVBQXNCLEVBQ3RCLGlCQUFvQyxFQUNwQyxRQUFtQixFQUNuQixNQUFjO1FBSmhCLFlBTUUsa0JBQU0sVUFBVSxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRTtZQUM3QyxNQUFNLFFBQUE7WUFDTixjQUFjLEVBQUUsSUFBSTtTQUNyQixDQUFDLFNBR0g7UUFuQlMsbUJBQWEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ25DLHVCQUFpQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFnQi9DLEtBQUksQ0FBQyxvQkFBb0IsR0FBRyxLQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxDQUFDO1FBQ2pFLEtBQUksQ0FBQyx3QkFBd0IsR0FBRyxLQUFJLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxDQUFDOztJQUMzRSxDQUFDOzs7O0lBaEJELHVDQUFROzs7SUFBUixjQUFZLENBQUM7Ozs7SUFDYixpREFBa0I7OztJQUFsQixjQUFzQixDQUFDOzs7O0lBQ3ZCLDBDQUFXOzs7SUFBWCxjQUFlLENBQUM7Ozs7O0lBZ0JoQixtREFBb0I7Ozs7SUFBcEIsVUFBcUIsS0FBSztRQUN4QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDOzs7OztJQUVELHVEQUF3Qjs7OztJQUF4QixVQUF5QixLQUFLO1FBQzVCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDckMsQ0FBQzs7Z0JBbERGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZUFBZTtvQkFDekIsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLFFBQVEsRUFBRSxzUUFTVDtvQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs2QkFDdEMsZ0JBQWdCO2lCQUMxQjs7O2dCQWxDQyxVQUFVO2dCQUZWLGlCQUFpQjtnQkFTakIsU0FBUztnQkFIVCxNQUFNOzs7K0JBa0NMLFNBQVMsU0FBQyxXQUFXO2tDQUVyQixLQUFLO2dDQUVMLE1BQU07b0NBQ04sTUFBTTs7SUEyQlQsMkJBQUM7Q0FBQSxBQW5ERCxDQWlCVSxxQkFBcUIsR0FrQzlCO1NBbkNZLG9CQUFvQjs7Ozs7O0lBRy9CLDRDQUEyRDs7SUFFM0QsK0NBQW9FOztJQUVwRSw2Q0FBNkM7O0lBQzdDLGlEQUFpRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIFZpZXdDaGlsZCxcbiAgRWxlbWVudFJlZixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFJlbmRlcmVyMixcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgT25EZXN0cm95XG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSZWFjdFdyYXBwZXJDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXItcmVhY3QvY29yZVwiO1xuXG5pbnRlcmZhY2UgSVBvY1JlYWN0QXBwQ29tcG9uZW50IHtcbiAgbW9kZTogXCJ0aW1lXCIgfCBcImRhdGVcIiB8IFwibW9udGhcIiB8IFwieWVhclwiIHwgXCJkZWNhZGVcIjtcbiAgc2hvd1RvZGF5OiBib29sZWFuO1xuICBhbmd1bGFyVGVzdFByb3A6IGFueTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcInBvYy1hcHAtcmVhY3RcIixcbiAgZXhwb3J0QXM6IFwicG9jQXBwUmVhY3RcIixcbiAgdGVtcGxhdGU6IGBcbiAgICA8QXBwXG4gICAgICAjcmVhY3ROb2RlXG4gICAgICBbYW5ndWxhclRlc3RQcm9wXT1cImFuZ3VsYXJUZXN0UHJvcFwiXG4gICAgICBbc3RhdGVDaGFuZ2VdPVwib25TdGF0ZUNoYW5nZUhhbmRsZXJcIlxuICAgICAgW2FuZ3VsYXJOYXZpZ2F0ZVRvXT1cImFuZ3VsYXJOYXZpZ2F0ZVRvSGFuZGxlclwiXG4gICAgPlxuICAgICAgPFJlYWN0Q29udGVudD48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9SZWFjdENvbnRlbnQ+XG4gICAgPC9BcHA+XG4gIGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBzdHlsZXM6IFtcInJlYWN0LXJlbmRlcmVyXCJdXG59KVxuZXhwb3J0IGNsYXNzIFBvY1JlYWN0QXBwQ29tcG9uZW50XG4gIGV4dGVuZHMgUmVhY3RXcmFwcGVyQ29tcG9uZW50PElQb2NSZWFjdEFwcENvbXBvbmVudD5cbiAgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSB7XG4gIEBWaWV3Q2hpbGQoXCJyZWFjdE5vZGVcIikgcHJvdGVjdGVkIHJlYWN0Tm9kZVJlZjogRWxlbWVudFJlZjtcblxuICBASW5wdXQoKSBhbmd1bGFyVGVzdFByb3A/OiBJUG9jUmVhY3RBcHBDb21wb25lbnRbXCJhbmd1bGFyVGVzdFByb3BcIl07XG5cbiAgQE91dHB1dCgpIG9uU3RhdGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBhbmd1bGFyTmF2aWdhdGVUbyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBuZ09uSW5pdCgpIHt9XG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHt9XG4gIG5nT25EZXN0cm95KCkge31cblxuICBjb25zdHJ1Y3RvcihcbiAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIG5nWm9uZTogTmdab25lXG4gICkge1xuICAgIHN1cGVyKGVsZW1lbnRSZWYsIGNoYW5nZURldGVjdG9yUmVmLCByZW5kZXJlciwge1xuICAgICAgbmdab25lLFxuICAgICAgc2V0SG9zdERpc3BsYXk6IHRydWVcbiAgICB9KTtcbiAgICB0aGlzLm9uU3RhdGVDaGFuZ2VIYW5kbGVyID0gdGhpcy5vblN0YXRlQ2hhbmdlSGFuZGxlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuYW5ndWxhck5hdmlnYXRlVG9IYW5kbGVyID0gdGhpcy5hbmd1bGFyTmF2aWdhdGVUb0hhbmRsZXIuYmluZCh0aGlzKTtcbiAgfVxuXG4gIG9uU3RhdGVDaGFuZ2VIYW5kbGVyKGV2ZW50KSB7XG4gICAgdGhpcy5vblN0YXRlQ2hhbmdlLmVtaXQoZXZlbnQpO1xuICB9XG5cbiAgYW5ndWxhck5hdmlnYXRlVG9IYW5kbGVyKGV2ZW50KSB7XG4gICAgdGhpcy5hbmd1bGFyTmF2aWdhdGVUby5lbWl0KGV2ZW50KTtcbiAgfVxufVxuIl19