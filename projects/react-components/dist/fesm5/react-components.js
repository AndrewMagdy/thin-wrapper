import { __extends } from 'tslib';
import { ReactWrapperComponent, registerElement } from '@angular-react/core';
import { CommonModule } from '@angular/common';
import { Component, ChangeDetectorRef, ViewChild, ElementRef, ChangeDetectionStrategy, EventEmitter, Input, NgZone, Output, Renderer2, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import App from 'poc-react-app';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PocReactAppComponent = /** @class */ (function (_super) {
    __extends(PocReactAppComponent, _super);
    function PocReactAppComponent(elementRef, changeDetectorRef, renderer, ngZone) {
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
    PocReactAppComponent.decorators = [
        { type: Component, args: [{
                    selector: "poc-app-react",
                    exportAs: "pocAppReact",
                    template: "\n    <App\n      #reactNode\n      [angularTestProp]=\"angularTestProp\"\n      [stateChange]=\"onStateChangeHandler\"\n    >\n      <ReactContent><ng-content></ng-content></ReactContent>\n    </App>\n  ",
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
        onStateChange: [{ type: Output }]
    };
    return PocReactAppComponent;
}(ReactWrapperComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var components = [PocReactAppComponent];
var PocReactAppModule = /** @class */ (function () {
    function PocReactAppModule() {
        // Add any React elements to the registry (used by the renderer).
        registerElement("App", (/**
         * @return {?}
         */
        function () { return App; }));
    }
    PocReactAppModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: components,
                    exports: components,
                    schemas: [NO_ERRORS_SCHEMA]
                },] }
    ];
    PocReactAppModule.ctorParameters = function () { return []; };
    return PocReactAppModule;
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

export { PocReactAppComponent, PocReactAppModule };

//# sourceMappingURL=react-components.js.map