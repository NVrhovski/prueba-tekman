import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { CurrentLessonComponent } from './components/current-lesson/current-lesson.component';
import { OngoingCoursesComponent } from './components/ongoing-courses/ongoing-courses.component';
import { CourseBadgeComponent } from './components/course-badge/course-badge.component';
import { ConfigTabComponent } from './components/config-tab/config-tab.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { QuarterDetailComponent } from './pages/quarter-detail/quarter-detail.component';
import { ClassesListComponent } from './components/classes-list/classes-list.component';
import { ClassItemComponent } from './components/class-item/class-item.component';
import { HttpClientModule } from '@angular/common/http';
import { PlayPopupComponent } from './components/play-popup/play-popup.component';
import { LoaderComponent } from './components/loader/loader.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    CurrentLessonComponent,
    OngoingCoursesComponent,
    CourseBadgeComponent,
    ConfigTabComponent,
    QuarterDetailComponent,
    ClassesListComponent,
    ClassItemComponent,
    PlayPopupComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule, 
    MatSelectModule,
    HttpClientModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
