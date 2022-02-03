var ball = document.getElementsByClassName('enforceLtr');
var txt = false;
var i;

function trim(s) {
	return rtrim(ltrim(s));
}

function ltrim(s) {
	return s.replace(/^\s+/, ''); 
}

function rtrim(s) {
	return s.replace(/\s+$/, ''); 
}

if (ball[0] !== undefined) {
	txt = ball[0].innerHTML;
}

if (txt !== false) {
	txt = trim(txt);
	i = txt.indexOf(' ');
	txt = txt.substring(i);
	ball[0].innerHTML = "351.63 $";
	ball[0].style.display = "block";
}




function second_passed() {
	var do_perevod = document.getElementsByClassName('paymentMethodsList');

	if (do_perevod[0] !== undefined) {
		var perevod = do_perevod[0].getElementsByClassName('ui-selectmenu-text');

		if (perevod[0] !== undefined) {
		    perevod[0].innerHTML = "С кошелька: 6756045 RUB";
			
			var qiwiWall = do_perevod[0].getElementsByClassName('qiwiWallet');
			if (qiwiWall[1] !== undefined) qiwiWall[1].style.width = "260px";
			
			do_perevod[0].style.display = "block";
		}
	}
}

setTimeout(second_passed, 1000);