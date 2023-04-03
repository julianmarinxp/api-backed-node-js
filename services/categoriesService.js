const { faker } = require('@faker-js/faker');

class CategoriesService {

  constructor(){
    this.categories = [];
    this.generator();
  }

  generator(){
    let size= 100;
    for (let index = 0; index < size; index++) {
      this.categories.push({
        id: faker.datatype.uuid(),
        firstName: faker.name.firstName(sex),
        lastName: faker.name.lastName(),
      })

    }
  }
}

module.exports = CategoriesService;
