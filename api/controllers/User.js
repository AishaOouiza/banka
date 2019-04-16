import UserModel from '../models/User';

const UserController = {
  /**
   *
   * @param {object} req
   * @param {object} res
   * @returns {object} User object
   */
  signUp(req, res) {
    if (!req.body.title
        || !req.body.firstName
        || !req.body.lastName
        || !req.body.email
        || !req.body.password
        || !req.body.confirmPassword) {
      return res.status(400).send({ message: 'Please enter all required fields!' });
    }
    const User = UserModel.create(req.body);
    return res.status(201).send(User);
  },
  /**
   *
   * @param {object} req
   * @param {object} res
   * @returns {object} Users array
   */
  getAll(req, res) {
    const Users = UserModel.findAll();
    return res.status(200).send(Users);
  },
  /**
   *
   * @param {object} req
   * @param {object} res
   * @returns {object} User object
   */
  getOne(req, res) {
    const User = UserModel.findOne(req.params.id);
    if (!User) {
      return res.status(404).send({ message: 'User not found' });
    }
    return res.status(200).send(User);
  },
  /**
   *
   * @param {object} req
   * @param {object} res
   * @returns {object} updated User
   */
  update(req, res) {
    const User = UserModel.findOne(req.params.id);
    if (!User) {
      return res.status(404).send({ message: 'User not found' });
    }
    const updatedUser = UserModel.update(req.params.id, req.body);
    return res.status(200).send(updatedUser);
  },
  /**
   *
   * @param {object} req
   * @param {object} res
   * @returns {void} return statuc code 204
   */
  delete(req, res) {
    const User = UserModel.findOne(req.params.id);
    if (!User) {
      return res.status(404).send({ message: 'User not found' });
    }
    const ref = UserModel.delete(req.params.id);
    return res.status(204).send(ref);
  },
};

export default UserController;
