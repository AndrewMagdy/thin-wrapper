(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular-react/core'), require('@angular/common'), require('@angular/core'), require('poc-react-app')) :
    typeof define === 'function' && define.amd ? define('react-components', ['exports', '@angular-react/core', '@angular/common', '@angular/core', 'poc-react-app'], factory) :
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
    var PocReactAppComponent = /** @class */ (function (_super) {
        __extends(PocReactAppComponent, _super);
        function PocReactAppComponent(elementRef, changeDetectorRef, renderer, ngZone) {
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
            { type: core$1.Component, args: [{
                        selector: "poc-app-react",
                        exportAs: "pocAppReact",
                        template: "\n    <App\n      #reactNode\n      [angularTestProp]=\"angularTestProp\"\n      [stateChange]=\"onStateChangeHandler\"\n    >\n      <ReactContent><ng-content></ng-content></ReactContent>\n    </App>\n  ",
                        changeDetection: core$1.ChangeDetectionStrategy.OnPush,
                        styles: ["react-renderer"]
                    }] }
        ];
        PocReactAppComponent.ctorParameters = function () {
            return [
                { type: core$1.ElementRef },
                { type: core$1.ChangeDetectorRef },
                { type: core$1.Renderer2 },
                { type: core$1.NgZone }
            ];
        };
        PocReactAppComponent.propDecorators = {
            reactNodeRef: [{ type: core$1.ViewChild, args: ["reactNode",] }],
            angularTestProp: [{ type: core$1.Input }],
            onStateChange: [{ type: core$1.Output }]
        };
        return PocReactAppComponent;
    }(core.ReactWrapperComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var components = [PocReactAppComponent];
    var PocReactAppModule = /** @class */ (function () {
        function PocReactAppModule() {
            // Add any React elements to the registry (used by the renderer).
            core.registerElement("App", ( /**
             * @return {?}
             */function () { return App; }));
        }
        PocReactAppModule.decorators = [
            { type: core$1.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: components,
                        exports: components,
                        schemas: [core$1.NO_ERRORS_SCHEMA]
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

    exports.PocReactAppComponent = PocReactAppComponent;
    exports.PocReactAppModule = PocReactAppModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=react-components.umd.js.map