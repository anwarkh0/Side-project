import { Model } from "sequelize";
export default (sequelize, DataTypes) => {
  class Meme extends Model {

    static associate(models) {
      Meme.belongsTo(models.UserModel)
    }
  }
  Meme.init({
    image: DataTypes.STRING,
    caption: DataTypes.STRING,
    userId: DataTypes.INTEGER //
  }, {
    sequelize,
    modelName: 'Meme',
  });
  return Meme;
};