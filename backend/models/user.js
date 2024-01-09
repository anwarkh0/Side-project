import { Model } from "sequelize";
import bcrypt from "bcrypt"
export default (sequelize, DataTypes) => {
  class User extends Model {

    validPassword(password) {
      return bcrypt.compareSync(password, this.password);
    }
    
    static associate(models) {
      User.hasMany(models.MemeModel, {
        foreignKey: 'userId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    hooks: {
      beforeCreate: (user) => {
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null)
      },
    },
  });
  return User;
};