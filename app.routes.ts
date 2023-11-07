import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { StudentdetailsComponent } from "./studentdetails/studentdetails.component";
import { TeacherdetailsComponent } from "./teacherdetails/teacherdetails.component";
import { ContactusComponent } from "./contactus/contactus.component";
import { ErrorComponent } from "./error/error.component";

export const appRoutes: Routes=[
    { path: 'home', component: HomeComponent },
    { path: 'contactus', component: ContactusComponent },
    { path: 'teacherdetails', component: TeacherdetailsComponent },
    { path: 'studentdetails', component: StudentdetailsComponent},
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', component: ErrorComponent }
   
];