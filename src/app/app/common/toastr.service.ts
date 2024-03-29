import { InjectionToken } from '@angular/core'

//export let TOASTER_TOKEN = new InjectionToken<any>('toastr')
export let TOASTER_TOKEN = new InjectionToken<Toastr>('toastr')
export interface Toastr {
    success(msg:string, title?:string):void;
    Info(msg:string,title?:string):void;
    warining(msg:string, title?:string):void;
    error(msg:string,title?:string):void;
}