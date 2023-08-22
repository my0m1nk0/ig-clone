import { NgModule } from "@angular/core";
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { ToastModule } from 'primeng/toast';
import { AvatarModule } from 'primeng/avatar';
import { OrderListModule } from 'primeng/orderlist';
import { TagModule } from 'primeng/tag';
const modules: any[] = [
    InputTextModule,
    ButtonModule,
    CalendarModule,
    ToastModule,
    AvatarModule,
    OrderListModule,
    TagModule
]
@NgModule({
    imports: modules,
    exports: modules,
})
export class SharePrimeModule {

}