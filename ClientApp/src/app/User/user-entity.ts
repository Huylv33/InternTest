export class UserEntity {
  Id: string = "a803da3e-c318-4077-aa21-1d1178ef7543"
  Display: string = "film.test1";
  Name: string = "film.test1@fpt.com.vn";
  ADGroupEntities: any = null;
  RoleEntities: any = null;
  Token: any = null;
  Version: number = 131656663051226660;
  isDeleted: boolean = false;
  constructor(UserEntity?: UserEntity ){
    if (UserEntity != null) {
      this.Id = UserEntity.Id;
      this.Display = UserEntity.Display;
      this.Name = UserEntity.Name;
      this.ADGroupEntities = UserEntity.ADGroupEntities;
      this.RoleEntities = UserEntity.RoleEntities;
      this.Token = UserEntity.Token;
      this.Version = UserEntity.Version;
      this.isDeleted = UserEntity.isDeleted;
    }
    else {

    }
  } 
}
