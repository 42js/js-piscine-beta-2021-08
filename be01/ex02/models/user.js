module.exports = (sequelize, DataTypes) => {
	return sequelize.define(
		'User', {
			username: {
				type: DataTypes.STRING(20),
				unique: true,
				allowNull: false
			},
			email: {
				type: DataTypes.STRING(50),
				unique: true,
				allowNull: false
			},
			isCadet: {
				type: DataTypes.BOOLEAN
			},
			careerYears: {
				type: DataTypes.INTEGER
			}
		}, {
			timestamps: true,
			tableName: 'users',
		}
	);
}