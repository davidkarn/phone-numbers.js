var digits = [['0', 'zero', 'cero', 'sero'],
	      ['1', 'one', 'won', 'wun', 'on', 'un'],
	      ['2', 'two', 'too', 'to', 'tu', 'twoo'],
	      ['3', 'three', 'tree', 'thrie', 'thre', 'tre'],
	      ['4', 'four', 'for'],
	      ['5', 'five', 'fiv'],
	      ['6', 'six', 'zix', 'sicks', 'siks'],
	      ['7', 'seven', 'sevn', 'sven'],
	      ['8', 'eight', 'ate', 'aight'],
	      ['9', 'nine', 'nin'],
	      ['ten']];
	      
function build_regex(match_digit) {
    return new RegExp("(?:(" +
		      digits.reduce( function(a, b) { return a.concat(b); }).join("|") + 
		      (match_digit ? "))" 
		       : ")[^a-zA-Z0-9]*){8,11}"), "gim"); }

function parse_number(str) {
    var digs = str.match(build_regex(true)); 
    return digs.map(function(d) {
	for (var ds in digits) {
	    if (digits[ds].indexOf(d.toLowerCase()) >= 0) {
		return ds; }}}).join(""); }

function only_phone_numbers(list) {
    return list.filter(function(p) {
	return p.match(/^1?[0-9]{10,10}$/); }); }

function extract_phone_numbers(str) {
    var phone_numbers = str.match(build_regex());
    console.log(build_regex());
    console.log(phone_numbers);
    
    return only_phone_numbers(phone_numbers.map(parse_number)); }

exports.extract_phone_numbers = extract_phone_numbers;
