const { faker } = require('@faker-js/faker');

class UserService {
  constructor(){
    this.users = [];
    this.generator();
  }

  generator(){
    let size= 100;
    for (let index = 0; index < size; index++) {
      this.users.push({
        id: faker.datatype.uuid(),
        firstName: faker.name.firstName(sex),
        lastName: faker.name.lastName(),
      })

    }
  }


  find(){
    return this.users;
  }

  findone(id){
    return this.users.find(item => item.id ===id )
  }


  update(){

  }

  delete(){

  }
}

module.exports = UserService;
