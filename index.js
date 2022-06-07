let file="fetch_info.txt";

fetch(file)
.then(x => x.text())
.then(y => console.log(y));