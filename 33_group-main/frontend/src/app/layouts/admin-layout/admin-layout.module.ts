import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { ProjectComponent } from '../../pages/project/project.component';
import { IconsComponent } from '../../icons/icons.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import { CreateProjectComponent } from 'app/pages/project/create-project.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { TaskComponent } from 'app/pages/task/task.component';
import { CreateTaskComponent } from 'app/pages/task/create-task.component';
import { EmployeeComponent } from 'app/pages/employee/employee.component';
import { CreateEmployeeComponent } from 'app/pages/employee/create-employee.component';
import { EmployeeDetailComponent } from 'app/pages/employee/employee-detail.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatDialogModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatNativeDateModule
  ],
  declarations: [
    ProjectComponent,
    CreateProjectComponent,
    TaskComponent,
    CreateTaskComponent,
    EmployeeComponent,
    CreateEmployeeComponent,
    EmployeeDetailComponent,
    IconsComponent,
  ]
})

export class AdminLayoutModule {}
