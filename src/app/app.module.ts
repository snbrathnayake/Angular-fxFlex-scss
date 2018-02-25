import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FlexUiComponent } from './components/flex-ui/flex-ui.component';
import { StyleSassComponent } from './components/style-sass/style-sass.component';
import { WelcomeComponent } from './poc/welcome/welcome.component';
import { NavComponent } from './poc/components/nav/nav.component';
import { FooterComponent } from './poc/components/footer/footer.component';
import { LandingPageComponent } from './poc/components/landing-page/landing-page.component';

export const routes: Routes = [
  { path: '',redirectTo:'flex-ui' ,pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'flex-ui', component: FlexUiComponent },
  { path: 'stylesheet-sass', component: StyleSassComponent },
  { path: 'poc', component: WelcomeComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FlexUiComponent,
    StyleSassComponent,
    WelcomeComponent,
    NavComponent,
    FooterComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    RouterModule.forRoot(
      routes,
      { useHash: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
