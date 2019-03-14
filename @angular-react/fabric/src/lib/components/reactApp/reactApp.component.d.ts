import { ChangeDetectorRef, ElementRef, NgZone, OnInit, Renderer2, AfterContentInit, OnDestroy } from "@angular/core";
import { ReactWrapperComponent } from "@angular-react/core";
interface IReactAppProps {
}
export declare class ReactAppComponent extends ReactWrapperComponent<IReactAppProps> implements OnInit, AfterContentInit, OnDestroy {
    protected reactNodeRef: ElementRef;
    ngOnInit(): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    constructor(elementRef: ElementRef, changeDetectorRef: ChangeDetectorRef, renderer: Renderer2, ngZone: NgZone);
}
export {};
