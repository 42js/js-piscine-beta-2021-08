const { sequlize, sequelize } = require("./models");

async function main() {
    await sequelize.sync();
}
main();
