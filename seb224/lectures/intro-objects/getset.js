const person = {
    firstName: 'John',
    lastName: 'Doe',
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  };
  
  // used like a property, not a function call
  console.log(person.fullName); // 'John Doe'

//   const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     set fullName(value) {
//       [this.firstName, this.lastName] = value.split(' ');
//     }
//   };
  
//   // takes a single argument and is used to assign a value
//   person.fullName = 'Jane Smith';
//   console.log(person.firstName); // 'Jane'
//   console.log(person.lastName); // 'Smith'
  
  