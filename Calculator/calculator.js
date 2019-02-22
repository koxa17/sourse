// backspace
// delete.onclick = function () {
// 	if (viev.value.lenght < 5) return
// 	viev.value = viev.value.replace(/.$/, "")
// }

// function backspace() {
//     viev.value = viev.value.substring(0, viev.value.length - 1);
// }

function insert(num) {
	document.form.viev.value = document.form.viev.value + num;
}

function equal() {
	let exp = document.form.viev.value;
	if (exp) {
		document.form.viev.value = eval(exp);
	}
	
}

function c() {
	document.form.viev.value = "";
}

function backspace() {
	var exp = document.form.viev.value;
	document.form.viev.value = exp.substring(0, exp.length - 1);
}

