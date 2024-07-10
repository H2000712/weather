let imgArr = document.querySelectorAll('img');
let tableArr = document.querySelectorAll('table');
let barList = document.querySelectorAll('.bar');
let dayiconList = document.querySelectorAll('.dayicon');
let nighticonList = document.querySelectorAll('.nighticon');
let dayList = document.querySelectorAll('.day');
let header = document.getElementsByClassName('hd');
let title = document.title;

let pageTitle = title.split('7')[0] + header[0].innerText;

header[0].innerText = pageTitle;
document.title = pageTitle;

for (let i = 0; i < imgArr.length; i++) {
	imgArr[i].remove();
}

for (let i = 0; i < dayiconList.length; i++) {
	dayiconList[i].remove();
	nighticonList[i].remove();
}

for (let i = 0; i < tableArr.length; i++) {
	if (i > 0) {
		tableArr[i].remove();
	}
	tableArr[i].childNodes[1].childNodes[3].remove();
}

for (let i = 0; i < barList.length; i++) {
	let bartext1 = barList[i].childNodes[1].innerText;
	let bartext2 = barList[i].childNodes[3].innerText;
	let text = '最高' + bartext1 + '~' + '最低' + bartext2;
	barList[i].innerText = text;
}
