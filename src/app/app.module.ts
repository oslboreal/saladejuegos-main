import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute, RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { SearchboxComponent } from './shared/components/searchbox/searchbox.component';
import { getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { GamesComponent } from './pages/post-detail/games.component';
import { ContentContainerComponent } from './shared/components/content-container/content-container.component';
import { SanitizeUrlPipe } from './shared/pipes/sanitize-url.pipe';
import { PostsService } from './shared/services/posts.service';
import { SearchResolverResolver } from './shared/resolvers/search-resolver.resolver';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { PersonalInformationComponent } from './pages/personal-information/personal-information.component';
import { MatButtonModule } from '@angular/material/button';
import { ErrorDialogComponent } from './shared/errors/error-dialog/error-dialog.component';

const routes: Routes = [
  { path: 'home', component: GamesComponent },
  { path: 'aboutMe', component: PersonalInformationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signUp', component: SignupComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchboxComponent,
    NavbarComponent,
    SanitizeUrlPipe,
    GamesComponent,
    ContentContainerComponent,
    LoginComponent,
    SignupComponent,
    PersonalInformationComponent,
    ErrorDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    /* Styling modules */
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    MatListModule,
    MatButtonModule,
    FlexLayoutModule,
    /* Data access modules */
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAnalytics(() => getAnalytics()),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [
    PostsService,
    ScreenTrackingService,
    UserTrackingService,
    SanitizeUrlPipe,
    SearchResolverResolver,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
