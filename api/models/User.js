import moment from 'moment';
import uuid from 'uuid';

class User {
  /**
   * class constructor
   * @param {object} data
   */
  constructor() {
    this.users = [];
  }

  /**
   *
   * @returns {object} user object
   */
  create(data) {
    const newUser = {
      id: uuid.v4(),
      email: data.email || '',
      title: data.title || '',
      firstName: data.firstName || '',
      lastName: data.lastName || '',
      otherNames: data.otherNames || '',
      gender: data.gender || '',
      dob: data.dob || '',
      phone: data.phone || '',
      password: data.password || '',
      address: data.address,
      stateOfResidence: data.stateOfResidence,
      passportPhoto: data.passportPhoto,
      type: data.type || '',
      isAdmin: data.isAdmin || false,
      dateCreated: moment.now(),
      dateUpdated: moment.now(),
    };
    this.users.push(newUser);

    return newUser;
  }

  /**
   *
   * @param {uuid} id
   * @returns {object} user object
   */
  findOne(id) {
    return this.users.find(user => user.id === id);
  }

  /**
   * @returns {object} returns all users
   */
  findAll() {
    return this.users;
  }

  /**
   *
   * @param {uuid} id
   * @param {object} data
   */
  update(id, data) {
    const user = this.findOne(id);
    const index = this.users.indexOf(user);
    this.users[index].title = data.title || user.title;
    this.users[index].gender = data.gender || user.gender;
    this.users[index].phone = data.phone || user.phone;
    this.users[index].email = data.email || user.email;
    this.users[index].address = data.address || user.address;
    this.users[index].stateOfResidence = data.stateOfResidence || user.stateOfResidence;
    this.users[index].passportPhoto = data.passportPhoto || user.passportPhoto;
    this.users[index].type = data.type || user.type;
    this.users[index].isAdmin = data.isAdmin || user.isAdmin;
    this.users[index].dateUpdated = moment.now();

    return this.users[index];
  }

  /**
   *
   * @param {uuid} id
   */
  delete(id) {
    const user = this.findOne(id);
    const index = this.users.indexOf(user);
    this.users.splice(index, 1);
    return {};
  }
}
export default new User();
