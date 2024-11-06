import { Component, OnInit } from '@angular/core';
import { IUser } from './interfaces/user/user.interface';
import { UsersList } from './data/users-list';
import { IFilterOptions } from './interfaces/filter/filter-options.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public userList: IUser[] = [];
  public userSelected: IUser = {} as IUser;
  public showUserDetails: boolean = false;
  protected filterOptions: IFilterOptions = {} as IFilterOptions;

  ngOnInit(): void {
    setTimeout(()=>{
      this.userList = UsersList;
    }, 1)
  }

  public onUserSelected(user: IUser){
    this.userSelected = user;
    this.showUserDetails = true;
  }

  onFilterOptionsSelected(event: IFilterOptions) {
    this.filterOptions = event;
    this.filterUser(event);

  }
  parseDate(user: IUser) {
    let newDate;
    const date = this.userList.forEach((user: IUser)=>{
        newDate =`${user.dataCadastro.substring(8,10)}/${user.dataCadastro.substring(5,7)}/${user.dataCadastro.substring(0,4)}`;
    });
    console.log(newDate);
  }
  filterUser(filterKey: IFilterOptions){

     this.userList.filter((user: IUser)=>{
      this.parseDate(user);
      const EXISTS_NAME_USER = user.nome === filterKey.name;
      const USER_ACTIVE = user.ativo === filterKey.active;
      if(EXISTS_NAME_USER){
        this.userList = [user];
      }
      if(USER_ACTIVE){
        this.userList = [user];
      }
      else{
        return;
      }
    })
  }
}
