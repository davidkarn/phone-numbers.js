var digits = [['0', 'zero', 'cero', 'sero'],
	      ['1', 'one', 'won', 'wun', 'on', 'un'],
	      ['2', 'two', 'too', 'to', 'tu', 'twoo'],
	      ['3', 'three', 'tree', 'thrie', 'thre', 'tre'],
	      ['4', 'four', 'for'],
	      ['5', 'five', 'fiv'],
	      ['6', 'six', 'zix', 'sicks', 'siks'],
	      ['7', 'seven', 'sevn', 'sven'],
	      ['8', 'eight', 'ate', 'aight'],
	      ['9', 'nine', 'nin']];
	      
function build_regex(match_digit) {
    return new RegExp(
	digits.reduce("\b(" + function(a, b) { return a.concat(b); }).join("|") + 
	    (match_digit ? ")" 
	     : "[^a-zA-Z0-9]*){10,10}\b"), "gim"); }

function parse_number(str) {
    var digs = str.match(build_regex(true)); 
    return dig.map(function(d) {
	for (var ds in digits) {
	    if (digits[ds].indexOf(d.toLowerCase()) >= 0) {
		return ds; }}}).join(""); }

function extract_phone_numbers(str) {
    var phone_numbers = str.match(build_regex());
    return phone_numbers.map(parse_number); }
