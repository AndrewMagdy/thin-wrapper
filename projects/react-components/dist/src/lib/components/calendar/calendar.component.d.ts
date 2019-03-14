import { ChangeDetectorRef, ElementRef, NgZone, OnInit, Renderer2, AfterContentInit, OnDestroy } from "@angular/core";
import { ReactWrapperComponent } from "@angular-react/core";
interface ICalendarProps {
    mode: "time" | "date" | "month" | "year" | "decade";
    showToday: boolean;
}
export declare class CalendarComponent extends ReactWrapperComponent<ICalendarProps> implements OnInit, AfterContentInit, OnDestroy {
    protected reactNodeRef: ElementRef;
    mode?: ICalendarProps["mode"];
    showToday?: ICalendarProps["showToday"];
    ngOnInit(): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    constructor(elementRef: ElementRef, changeDetectorRef: ChangeDetectorRef, renderer: Renderer2, ngZone: NgZone);
}
export {};