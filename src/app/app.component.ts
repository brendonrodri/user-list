import { Component, OnInit } from '@angular/core';
import { IUser } from './interfaces/user/user.interface';
import { UsersList } from './data/users-list';
import { IFilterOptions } from './interfaces/filter/filter-options.interface';
import { isWithinInterval } from 'date-fns';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public usersList: IUser[] = [];
  public userListFiltered: IUser[] = [];
  public userSelected: IUser = {} as IUser;
  public showUserDetails: boolean = false;

  ngOnInit(): void {
    setTimeout(()=>{
      this.usersList = UsersList;
      this.userListFiltered = this.usersList;
    }, 1)
  }

  public onUserSelected(user: IUser){
    this.userSelected = user;
    this.showUserDetails = true;
  }

  onFilter(filterOptions: IFilterOptions) {
    this.userListFiltered = this.filterUserList(filterOptions, this.usersList);
  }

  private filterUserList(filterOptions: IFilterOptions, usersList: IUser[]): IUser[]{
    let filteredList: IUser[] = [];
    // //first list is filtered by name
    filteredList = this.filterUserListByName(filterOptions.name, usersList);
    //before list is filtered by status
    filteredList = this.filterUserListByStatus(filterOptions.status, filteredList);
    //now list is filrted by start and last date
    filteredList = this.filterUserListByDate(filterOptions.startDate, filterOptions.endDate, filteredList);
    return filteredList;

  }
  filterUserListByDate(startDate: Date | undefined, endDate: Date | undefined, usersList: IUser[]): IUser[] {
    const DATE_IS_NOT_SELECTED = startDate === undefined || endDate === undefined;

    if(DATE_IS_NOT_SELECTED){
      return usersList;
    }
    const checkDateInterval = (user: IUser)=> isWithinInterval(new Date(user.dataCadastro), {
      start: startDate as Date,
      end: endDate as Date,
    })
    const filteredList = usersList.filter(checkDateInterval);
    return filteredList;
  }
  filterUserListByStatus(status: boolean | undefined, usersList: IUser[]): IUser[] {
    const STATUS_NOT_SELECTED = status === undefined;
    if(STATUS_NOT_SELECTED){
      return usersList
    }
    const filteredList = usersList.filter((user: IUser)=> user.ativo === status);
    return filteredList;
  }

   filterUserListByName(name: string | undefined, usersList: IUser[]){
    const NAME_NOT_TYPED = name === undefined;
    if(NAME_NOT_TYPED){
      return usersList;
    }
    const filteredList = usersList.filter((user: IUser)=>user.nome.toLowerCase().includes(name.toLowerCase()));
    console.log(filteredList);
    return filteredList;
  }
}
