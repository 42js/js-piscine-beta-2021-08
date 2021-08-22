module.exports = (Sequelize, DataTypes) => {
  return Sequelize.define(
    "user",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      username: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(40),
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
    },
    {
      timestamps: false,
      underscored: true,
    }
  );
};
