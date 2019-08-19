import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavbarComponent } from './Components/top-navbar/top-navbar.component';
import { PostComponent } from './Components/post/post.component';
import { FooterComponent } from './Components/footer/footer.component';
import { SearchWidgetComponent } from './Components/search-widget/search-widget.component';
import { CategoriesWidgetComponent } from './Components/categories-widget/categories-widget.component';
import { SideWidgetComponent } from './Components/side-widget/side-widget.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavbarComponent,
    PostComponent,
    FooterComponent,
    SearchWidgetComponent,
    CategoriesWidgetComponent,
    SideWidgetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
