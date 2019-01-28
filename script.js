let obj = {
	aa: "aaa",
	bb: "bbb",
	cc: "ccc"
}

Object.keys(obj).forEach((key, index) => {
	document.write(key + " " + obj[key] + "<br>");
})

Object.entries(obj).forEach(value => {
	document.write(value + "<br>");
})

Object.values(obj).forEach(value => {
	document.write(value + "<br>");
})