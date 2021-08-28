module.exports = (sequelize, DataTypes) => {
	return sequelize.define(
		'Question', {
			userId: {
				type: DataTypes.STRING(20),
				unique: true,
				allowNull: false
			},
			content: {
				type: DataTypes.STRING(50),
				unique: true,
				allowNull: false
			}
		}, {
			timestamps: true,
			tableName: 'questions',
		}
	);
}