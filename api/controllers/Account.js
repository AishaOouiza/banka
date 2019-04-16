import AccountModel from '../models/Account';

const AccountController = {
  /**
   *
   * @param {object} req
   * @param {object} res
   * @returns {object} Account object
   */
  create(req, res) {
    if (
      !req.body.title
      || !req.body.owner
      || !req.body.type
      || !req.body.status
      || !req.body.balance
    ) {
      return res
        .status(400)
        .send({ message: 'Incomplete data for account creation!' });
    }
    const Account = AccountModel.create(req.body);
    return res.status(201).send(Account);
  },
  /**
   *
   * @param {object} req
   * @param {object} res
   * @returns {object} Accounts array
   */
  getAll(req, res) {
    const Accounts = AccountModel.findAll();
    return res.status(200).send(Accounts);
  },
  /**
   *
   * @param {object} req
   * @param {object} res
   * @returns {object} Account object
   */
  getOne(req, res) {
    const Account = AccountModel.findOne(req.params.id);
    if (!Account) {
      return res.status(404).send({ message: 'Account not found' });
    }
    return res.status(200).send(Account);
  },
  /**
   *
   * @param {object} req
   * @param {object} res
   * @returns {object} updated Account
   */
  update(req, res) {
    const Account = AccountModel.findOne(req.params.id);
    if (!Account) {
      return res.status(404).send({ message: 'Account not found' });
    }
    const updatedAccount = AccountModel.update(req.params.id, req.body);
    return res.status(200).send(updatedAccount);
  },
  /**
   *
   * @param {object} req
   * @param {object} res
   * @returns {void} return statuc code 204
   */
  delete(req, res) {
    const Account = AccountModel.findOne(req.params.id);
    if (!Account) {
      return res.status(404).send({ message: 'Account not found' });
    }
    const ref = AccountModel.delete(req.params.id);
    return res.status(204).send(ref);
  }
};

export default AccountController;
