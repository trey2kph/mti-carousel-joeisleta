import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HeaderComponent } from './component/header/header.component';
import { CarouselComponent } from './component/carousel/carousel.component';

import { HomeComponent } from './component/home/home.component';
import { ShopComponent } from './component/shop/shop.component';
import { ProductComponent } from './component/product/product.component';
import { HelpComponent } from './component/help/help.component';
import { HomeInternetComponent } from './component/home-internet/home-internet.component';
import { MobileInternetComponent } from './component/mobile-internet/mobile-internet.component';
import { GetADeviceComponent } from './component/get-a-device/get-a-device.component';
import { AddAPhonelineComponent } from './component/add-a-phoneline/add-a-phoneline.component';
import { UpgradeComponent } from './component/upgrade/upgrade.component';
import { FooterComponent } from './component/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselComponent,
    HomeComponent,
    ShopComponent,
    ProductComponent,
    HelpComponent,
    HomeInternetComponent,
    MobileInternetComponent,
    GetADeviceComponent,
    AddAPhonelineComponent,
    UpgradeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    RouterModule.forRoot([
      { path: 'shop', component: ShopComponent },
      { path: 'product', component: ProductComponent },
      { path: 'help', component: HelpComponent },
      { path: 'home-internet', component: HomeInternetComponent },
      { path: 'mobile-internet', component: MobileInternetComponent },
      { path: 'get-a-device', component: GetADeviceComponent },
      { path: 'add-a-phone-line', component: AddAPhonelineComponent },
      { path: 'upgrade', component: UpgradeComponent },
      { path: '', component: HomeComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
