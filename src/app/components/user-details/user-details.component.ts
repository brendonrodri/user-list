import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { IUser } from 'src/app/interfaces/user/user.interface';
import { FixerApiService } from 'src/app/services/api/fixer-api.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent {
  @Input({required: true}) user: IUser = {} as IUser;

  // async getApi() {
  //   fetch('http://localhost:3000/api/dados')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data)
  //       this.response = data;
  //     })
  //     .catch((error) => {
  //       console.error('Erro:', error);
  //     });
  // }
}
