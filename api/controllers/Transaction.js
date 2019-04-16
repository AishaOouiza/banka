import TransactionModel from '../models/Transaction';

const TransactionController = {
  /**
   *
   * @param {object} req
   * @param {object} res
   * @returns {object} Transaction object
   */
  create(req, res) {
    if (
      !req.body.title
      || !req.body.type
      || !req.body.TransactionNumber
      || !req.body.cashier
      || !req.body.amount
      || !req.body.oldBalance
      || !req.body.newBalance
    ) {
      return res
        .status(400)
        .send({ message: 'Incomplete data for Transaction creation!' });
    }
    const Transaction = TransactionModel.create(req.body);
    return res.status(201).send(Transaction);
  },
  /**
   *
   * @param {object} req
   * @param {object} res
   * @returns {object} Transactions array
   */
  getAll(req, res) {
    const Transactions = TransactionModel.findAll();
    return res.status(200).send(Transactions);
  },
  /**
   * back on
   * @param {object} req
   * @param {object} res
   * @returns {object} Transaction object
   */
  getOne(req, res) {
    const Transaction = TransactionModel.findOne(req.params.id);
    if (!Transaction) {
      return res.status(404).send({ message: 'Transaction not found' });
    }
    return res.status(200).send(Transaction);
  },
  /**
   *
   * @param {object} req
   * @param {object} res
   * @returns {object} updated Transaction
   */
  update(req, res) {
    const Transaction = TransactionModel.findOne(req.params.id);
    if (!Transaction) {
      return res.status(404).send({ message: 'Transaction not found' });
    }
    const updatedTransaction = TransactionModel.update(req.params.id, req.body);
    return res.status(200).send(updatedTransaction);
  },
  /**
   *
   * @param {object} req
   * @param {object} res
   * @returns {void} return statuc code 204
   */
  delete(req, res) {
    const Transaction = TransactionModel.findOne(req.params.id);
    if (!Transaction) {
      return res.status(404).send({ message: 'Transaction not found' });
    }
    const ref = TransactionModel.delete(req.params.id);
    return res.status(204).send(ref);
  },
};

export default TransactionController;
