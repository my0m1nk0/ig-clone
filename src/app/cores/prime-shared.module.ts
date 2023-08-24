import { NgModule } from "@angular/core";
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { ToastModule } from 'primeng/toast';
import { AvatarModule } from 'primeng/avatar';
import { OrderListModule } from 'primeng/orderlist';
import { TagModule } from 'primeng/tag';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { SeeMoreDirective } from './directives/see-more.directive';
import { VirtualScrollerModule } from 'primeng/virtualscroller';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ImageModule } from 'primeng/image';
const modules: any[] = [
  InputTextModule,
  ButtonModule,
  CalendarModule,
  ToastModule,
  AvatarModule,
  OrderListModule,
  TagModule,
  CardModule,
  CarouselModule,
  VirtualScrollerModule,
  InputTextareaModule,
  ImageModule
]
@NgModule({
  imports: modules,
  exports: [...modules, SeeMoreDirective],
  declarations: [
    SeeMoreDirective
  ],
})
export class SharePrimeModule {

}