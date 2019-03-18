import { __extends } from 'tslib';
import { ReactWrapperComponent, registerElement } from '@angular-react/core';
import { CommonModule } from '@angular/common';
import { Component, ChangeDetectorRef, ViewChild, ElementRef, ChangeDetectionStrategy, EventEmitter, Input, NgZone, Output, Renderer2, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import Calendar from 'rc-calendar';

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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var components = [CalendarComponent];
var CalendarModule = /** @class */ (function () {
    function CalendarModule() {
        // Add any React elements to the registry (used by the renderer).
        registerElement("Calendar", (/**
         * @return {?}
         */
        function () { return Calendar; }));
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