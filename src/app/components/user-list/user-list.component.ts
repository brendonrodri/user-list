import { Component, EventEmitter, Output } from '@angular/core';
import { UsersList } from 'src/app/data/users-list';
import { IUser } from 'src/app/interfaces/user/user.interface';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  @Output() $userSelected: EventEmitter<IUser> = new EventEmitter<IUser>();
  public userList: IUser[] = UsersList;
  public displayedColumns: string[] = ['name', 'date', 'status']
  public rowClicked: boolean = false;

  public onUserSelected(user: IUser): void{
    this.$userSelected.emit(user);
    // this.rowClicked = true;
  }
}
