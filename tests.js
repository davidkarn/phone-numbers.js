//TODO: Come up with algorhithim that will catch the two commented out tests

var teststrings = [
    {text: "three six zero six eight eight nine eight five three",
     number: "3606889853"},
//    {text: "looking TWO ZERO SIX for 7..SEVEN..8 now 0..SIX..1..EIGHT - m4w ",
//     number: "2064780618"},
    {text: "four two FIVE seven 7 zero 4 two two three ",
     number: "4257704223"},
    {text: " pics or respond with pics five zero nine seven zero one nine eight zero five",
     number: "5097019805"},
    {text: "please text or call (five zero nine) two two five - zero zero seven six adoption fee applies",
     number: "5092250076"},
    {text: "I can be contacted via text or call at **253**405 ZERO FIVE EIGHT ZERO Thank you so much, if you return it to me. Also, about 6 months ago",
     number: "2534050580"},
    {text: "Three six zero - nine zero eight - three two eight six",
     number: "3609083286"},
    {text: "call or text me at 425 772 0410",
     number: "4257720410"},
    {text: "Or Call Kyle at: 360-861-six zero six seven\n(I have a make due cage for $ 10 if needed.)",
     number: "3608616067"},
    {text: "Three 6 Zero Eight 6 Six 6 nine six seven.",
     number: "3608666967"},
    {text: "It's pretty heavy! Made of all solid plywood. Dog crate Asking $125 obo.\n253-736-4 0 zero six",
     number: "2537364006"},
    {text: "Reward-I Lost my cellphone in west valley hospital,Please return no question ask..$150.00 cash reward to you..,i can get another phone but you have my first pictures of my baby 3 days old..please send txt @ 206 265 nine one zero 1.",
     number: "2062659101"},
    {text: "Male Normal Ball Python about 7 months old. Super sweet, no aggression. No tank included just snake. $65. text for pics & more info. four two five- 697- zero eight five eight",
     number: "4256970858"},
    {text: "We have a black female cat in need of new home. 1.5yr old. FREE. 253-405-23 eight zero.",
     number: "2534052380"},
    {text: "I can be reached at omaritaylor@hotmail.com or at 206.547.2615.",
     number: "2065472615"},
//    {text: "$15 to share cost of gas. Pls TEXT me if you are heading that way. 
// three ten 567 seven zero one nine",
//     number: "3105677019"},
    {text: "Lost Min Pin at pond on highline property, Black and Tan, cropped tail, cute as *uck, ten pounds, Brad, two zero six 446 one seven one three...",
     number: "2064461713"},
    {text: "Don't hesitate to send me an email with any questions, or call/text me at 805- three zero five -one 5 six 5",
     number: "8053051565"},
    {text: "Please submit your name and phone number with any other information about yourself that might be helpful ... or feel free to contact me for more information ...\n425 two one zero 1925\nThanks",
     number: "14252101925"}];

var phone_numbers = require('./phone-numbers');

exports.all_matched_slices = function(test) {
    for (var i in teststrings) {
	var t = teststrings[i];
	test.deepEqual(phone_numbers.extract_phone_numbers(t.text), [t.number]); }
    test.done(); };
