"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes/routes"));
require("dotenv/config");
const app = express_1.default();
const port = process.env.PORT;
app.set('views', __dirname.replace('dist', 'views')); // set the directory where your template files exist
app.set('view engine', 'pug'); // set which template engine to use
app.use(express_1.default.json());
app.use(routes_1.default);
// function renderMain(req: express.Request, res: express.Response) {
//   res.render('temp', { time: Date(), _title: 'PUG' });
// }
function handleInaccessable(req, res) {
    res.render('inaccessable', { time: Date(), _title: 'PUG' });
}
app.use(handleInaccessable);
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
