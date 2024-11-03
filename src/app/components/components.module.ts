import { NgModule } from "@angular/core";
import { UserDetailsComponent } from './user-details/user-details.component';
import { AngularMaterialModule } from "../angular-material/angular-material.module";
import { FilterComponent } from './filter/filter.component';
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { FixerApiService } from "../services/api/fixer-api.service";
import { HttpClient } from "@angular/common/http";
import { UserListComponent } from './user-list/user-list.component';
import { PipesModule } from "../pipes/pipes.module";

@NgModule({
    declarations: [
      UserDetailsComponent,
      FilterComponent,
      UserListComponent,
    ],
    imports: [
      AngularMaterialModule,
      FormsModule,
      CommonModule,
      PipesModule
    ],
    exports: [
      UserDetailsComponent,
      FilterComponent,
      UserListComponent
    ],
    providers: [HttpClient]
})
export class ComponentsModule {}
