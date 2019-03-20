import { __extends } from 'tslib';
import { ReactWrapperComponent, registerElement } from '@angular-react/core';
import { CommonModule } from '@angular/common';
import { Component, ChangeDetectorRef, ViewChild, ElementRef, ChangeDetectionStrategy, EventEmitter, Input, NgZone, Output, Renderer2, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import App from 'rc-app';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CalendarComponent = /** @class */ (function (_super) {
    __extends(CalendarComponent, _super);
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var components = [CalendarComponent];
var CalendarModule = /** @class */ (function () {
    function CalendarModule() {
        // Add any React elements to the registry (used by the renderer).
        registerElement("App", (/**
         * @return {?}
         */
        function () { return App; }));
    }
    CalendarModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: components,
                    exports: components,
                    schemas: [NO_ERRORS_SCHEMA]
                },] }
    ];
    CalendarModule.ctorParameters = function () { return []; };
    return CalendarModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { CalendarComponent, CalendarModule };

//# sourceMappingURL=react-components.js.map