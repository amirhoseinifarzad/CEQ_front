import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideNavComponent } from './component/side-nav/side-nav.component';
import { TranslatorComponent } from './component/translator/translator.component';
import { NavHederComponent } from './component/nav-heder/nav-heder.component';
import { TeamComponent } from './component/team/team.component';
import { ProjectsComponent } from './component/projects/projects.component';
import { ServicesComponent } from './component/services/services.component';

import { ProductComponent } from './component/product/product.component';
import { FooterComponent } from './component/footer/footer.component';
import { EthicsComponent } from './component/ethics/ethics.component';



@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    TranslatorComponent,
    NavHederComponent,
    TeamComponent,
    ProjectsComponent,
    ServicesComponent,
   
    ProductComponent,
    FooterComponent,
    EthicsComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
