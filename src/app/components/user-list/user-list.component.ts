import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsersList } from 'src/app/data/users-list';
import { IFilterOptions } from 'src/app/interfaces/filter/filter-options.interface';
import { IUser } from 'src/app/interfaces/user/user.interface';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  @Input({required: true}) userList: IUser[] = [];
  @Output() $userSelected: EventEmitter<IUser> = new EventEmitter<IUser>();

  public displayedColumns: string[] = ['name', 'date', 'status'];
  public clicked: boolean = false;

  public onUserSelected(user: IUser): void{
    this.$userSelected.emit(user);
    this.onClicked()
  }
  public onClicked(){
    this.clicked = true;
  }
}
