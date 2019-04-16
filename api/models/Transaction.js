import moment from 'moment';
import uuid from 'uuid';

class Transaction {
  /**
   * class constructor
   * @param {object} data
   */
  constructor() {
    this.Transactions = [];
  }

  /**
   *
   * @returns {object} Transaction object
   */
  create(data) {
    const newTransaction = {
      id: uuid.v4(),
      accountNumber: data.accountNumber || '',
      type: data.type || 'debit',
      cashier: data.cashier || '',
      oldBalance: data.oldBalance || 0,
      newBalance: data.newBalance || 0,
      createdOn: moment.now(),
      updatedOn: moment.now(),
    };
    this.Transactions.push(newTransaction);

    return newTransaction;
  }

  /**
   *
   * @param {uuid} id
   * @returns {object} Transaction object
   */
  findOne(id) {
    return this.Transactions.find(account => account.id === id);
  }

  /**
   *
   * @param {uuid} email
   * @returns {object} Transactionobject
   */
  findByEmail(email) {
    return this.Transactions.find(account => account.email === email);
  }

  /**
   * @returns {object} returns all Transactions
   */
  findAll() {
    return this.Transactions;
  }

  /**
   *
   * @param {uuid} id
   * @param {object} data
   */
  update(id, data) {
    const account = this.findOne(id);
    const index = this.Transactions.indexOf(account);
    this.Transactions[index].cashier = data.cashier || Transaction.cashier;
    this.Transactions[index].amount = data.amount || Transaction.amount;
    this.Transactions[index].oldBalance = data.oldBalance || Transaction.oldBalance;
    this.Transactions[index].newBalance = data.newBalance || Transaction.newBalance;
    this.Transactions[index].dateUpdated = moment.now();

    return this.Transactions[index];
  }

  /**
   *
   * @param {uuid} id
   */
  delete(id) {
    const account = this.findOne(id);
    const index = this.Transactions.indexOf(account);
    this.Transactions.splice(index, 1);
    return {};
  }
}
export default new Transaction();
