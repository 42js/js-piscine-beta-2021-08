const express = require(`express`);
const app = express();
const port = 4242;

const fs = require(`fs`);
const src = "/seoul_metro_station.json";

app.get(`/station/:name`, (req, res) => {
	// 정적파일 접근
	// app.use(express.static(`station`));
	// 시맨틱 URL
	console.log(req.url);
	// res.send(req.params.name);
	fs.readFile(`./station/seoul_metro_station.json`, `utf8`, (err, value) => {
		if (err) {
			console.log(err);
		}else {
			var temp = JSON.parse(value);
			// console.log(temp);  // 너무 잘동작하고.
			// console.log(temp["DATA"][0]["station_nm"]);  // 잘 동작하는 것을 확인
			// check value in array of object
			var index;
			console.log(index = compare_station_name(temp["DATA"], req.params.name));
			console.log(temp["DATA"][index]);
			// 똑같다.
			res.status(200).set(`Content-Type`, `Application/json`).send(temp["DATA"][index]);
			// res.status(200).set(`Content-Type`, `Application/json`).send(JSON.stringify(temp["DATA"][index]));
		}
	})
})

app.listen(port, () => {
	console.log("fucking express server running at http://localhost:4242/");
})

function compare_station_name(arr, value) {
	for (var index = 0; index < arr.length; ++index) {
		if (arr[index]["station_nm"] === value)
			return index;
	}
	return -1;
}
