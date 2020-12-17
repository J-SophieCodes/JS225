'use strict';

let me = {};
me.firstName = 'Sophie';
me.lastName = 'Chan';

let friend = {
  firstName: 'John',
  lastName: 'Smith',
};

let mother = {
  firstName: 'Amber',
  lastName: 'Doe',
};

let father = {
  firstName: 'Shane',
  lastName: 'Doe',
};

let people = {
  collection: [],

  memberIndex: 0,

  fullName: function(person) {
    console.log(person.firstName + ' ' + person.lastName);
  },

  rollcall: function() {
    people.collection.forEach(this.fullName);
  },

  add: function(newPerson) {
    if (this.isInvalidPerson(newPerson)) {
      console.log('Invalid input.');
      return;
    }

    this.collection.push({...newPerson, memberId: this.memberIndex});
    this.memberIndex += 1;
  },

  getIndex: function(person) {
    let index = -1;

    this.collection.forEach(function(comparator, idx) {
      if (comparator.firstName === person.firstName &&
          comparator.lastName === person.lastName) {
        index = idx;
      }
    });

    return index;
  },

  remove: function(person) {
    if (this.isInvalidPerson(person)) {
      console.log('Invalid input.');
      return;
    }

    let index = this.getIndex(person);
    if (index === -1) {
      return;
    }

    this.collection.splice(index, 1);
  },

  isInvalidPerson: function(person) {
    return typeof person.firstName !== 'string' || typeof person.lastName !== 'string';
  },

  get: function(person) {
    if (this.isInvalidPerson(person)) {
      console.log('Invalid input.');
      return;
    }

    return this.collection[this.getIndex(person)];
  },

  update: function(person) {
    if (this.isInvalidPerson(person)) {
      console.log('Invalid input.');
      return;
    }

    let existingPersonId = this.getIndex(person);
    if (existingPersonId === -1) {
      this.add(person);
    } else {
      this.collection[existingPersonId] = person;
    }
  }
};

people.add(friend);
people.add(mother);
people.add(father);
people.add(me);
console.log(people.collection);
