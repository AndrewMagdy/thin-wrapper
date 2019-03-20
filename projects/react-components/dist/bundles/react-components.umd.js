(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular-react/core'), require('@angular/common'), require('@angular/core'), require('rc-app')) :
    typeof define === 'function' && define.amd ? define('react-components', ['exports', '@angular-react/core', '@angular/common', '@angular/core', 'rc-app'], factory) :
    (factory((global['react-components'] = {}),global['ɵa'],global.ng.common,global.ng.core,global.App));
}(this, (function (exports,core,common,core$1,App) { 'use strict';

    App = App && App.hasOwnProperty('default') ? App['default'] : App;

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

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
            _this.onStateChange = new core$1.EventEmitter();
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
            { type: core$1.Component, args: [{
                        selector: "calendar-react",
                        exportAs: "calendarReact",
                        template: "\n    <App\n      #reactNode\n      [mode]=\"mode\"\n      [showToday]=\"showToday\"\n      [initialState]=\"initialState\"\n      [stateChange]=\"onStateChangeHandler\"\n    >\n      <ReactContent><ng-content></ng-content></ReactContent>\n    </App>\n  ",
                        //styleUrls: ["./calendar.component.css"],
                        changeDetection: core$1.ChangeDetectionStrategy.OnPush,
                        styles: ["react-renderer"]
                    }] }
        ];
        CalendarComponent.ctorParameters = function () {
            return [
                { type: core$1.ElementRef },
                { type: core$1.ChangeDetectorRef },
                { type: core$1.Renderer2 },
                { type: core$1.NgZone }
            ];
        };
        CalendarComponent.propDecorators = {
            reactNodeRef: [{ type: core$1.ViewChild, args: ["reactNode",] }],
            mode: [{ type: core$1.Input }],
            showToday: [{ type: core$1.Input }],
            initialState: [{ type: core$1.Input }],
            onStateChange: [{ type: core$1.Output }]
        };
        return CalendarComponent;
    }(core.ReactWrapperComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var components = [CalendarComponent];
    var CalendarModule = /** @class */ (function () {
        function CalendarModule() {
            // Add any React elements to the registry (used by the renderer).
            core.registerElement("App", ( /**
             * @return {?}
             */function () { return App; }));
        }
        CalendarModule.decorators = [
            { type: core$1.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: components,
                        exports: components,
                        schemas: [core$1.NO_ERRORS_SCHEMA]
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

    exports.CalendarComponent = CalendarComponent;
    exports.CalendarModule = CalendarModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=react-components.umd.js.map