var Person = function(firstAndLast) {
  // Complete the method below and implement the others similarly
  let firstName = firstAndLast.split(' ')[0];
  let lastName = firstAndLast.split(' ')[1];

  this.getFullName = function() {
    return firstName + ' ' + lastName;
  };
  this.getFirstName = function() {
    return firstName;
  };
  this.getLastName = function() {
    return lastName;
  };
  this.setFullName = function(firstLast) {
    firstName = firstLast.split(' ')[0];
    lastName = firstLast.split(' ' )[1];
  };
  this.setFirstName = function(first) {
    firstName = first;
  };
  this.setLastName = function(last) {
    lastName = last;
  };
  return firstAndLast;
};

var bob = new Person('Bob Ross');
bob.getFullName();