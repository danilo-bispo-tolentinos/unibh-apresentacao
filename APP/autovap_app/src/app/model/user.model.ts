

export class User {
  id: number;
  name: String
  dateBirthday: String;
  gender: String;
  cellPhone: String;
  email: String;
  password: String;

  constructor() {
    this.id = 0;
    this.name = '';
    this.dateBirthday = null;
    this.gender = '';
    this.cellPhone = '';
    this.password = '';
  }

}
