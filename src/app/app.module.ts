import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FlexUiComponent } from './components/flex-ui/flex-ui.component';
import { StyleSassComponent } from './components/style-sass/style-sass.component';

export const routes: Routes = [
  { path: '',redirectTo:'flex-ui' ,pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'flex-ui', component: FlexUiComponent },
  { path: 'stylesheet-sass', component: StyleSassComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FlexUiComponent,
    StyleSassComponent
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
