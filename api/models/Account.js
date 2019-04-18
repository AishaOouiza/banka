import moment from 'moment';
import uuid from 'uuid';

class Account {
  /**
<<<<<<< HEAD
   * class constructor for Account
=======
   * class constructor
>>>>>>> dd4af187ea4ea024bde0d9adef72620b01cb0a00
   * @param {object} data
   */
  constructor() {
    this.Accounts = [];
  }

  /**
   * @returns {string} Account Number
   */
  generateAccountNumber() {
    let accountNumber = `"002${Math.random(100000, 400000)}`;
    while (this.Accounts.find(accountNumber)) {
      accountNumber = `"002${Math.random(100000, 400000)}`;
    }
    return accountNumber;
  }

  /**
   *
   * @returns {object} Account object
   */
  create(data) {
    const newAccount = {
      id: uuid.v4(),
      accountNumber: this.generateAccountNumber(),
      ownner: data.owner || '',
      type: data.type || 'savings',
      status: data.status || 'draft',
      balance: data.balance || 0,
      createdOn: moment.now(),
      updatedOn: moment.now(),
    };
    this.Accounts.push(newAccount);

    return newAccount;
  }

  /**
   *
   * @param {uuid} id
   * @returns {object} Account object
   */
  findOne(id) {
    return this.Accounts.find(account => account.id === id);
  }

  /**
   *
   * @param {uuid} email
   * @returns {object} Account object
   */
  findByEmail(email) {
    return this.Accounts.find(account => account.email === email);
  }

  /**
   * @returns {object} returns all Accounts
   */
  findAll() {
    return this.Accounts;
  }

  /**
   *
   * @param {uuid} id
   * @param {object} data
   */
  update(id, data) {
    const account = this.findOne(id);
    const index = this.Accounts.indexOf(account);
    this.Accounts[index].status = data.status || Account.status;
    this.Accounts[index].balance = data.balance || Account.balance;
    this.Accounts[index].dateUpdated = moment.now();

    return this.Accounts[index];
  }

  /**
   *
   * @param {uuid} id
   */
  delete(id) {
    const account = this.findOne(id);
    const index = this.Accounts.indexOf(account);
    this.Accounts.splice(index, 1);
    return {};
  }
}
export default new Account();
