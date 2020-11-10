var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

var colors = [ 'aqua' , 'azure' , 'beige', 'bisque', 'black', 'blue', 'brown', 'chocolate', 'coral', 'crimson', 'cyan', 'fuchsia', 'ghostwhite', 'gold', 'goldenrod', 'gray', 'green', 'indigo', 'ivory', 'khaki', 'lavender', 'lime', 'linen', 'magenta', 'maroon', 'moccasin', 'navy', 'olive', 'orange', 'orchid', 'peru', 'pink', 'plum', 'purple', 'red', 'salmon', 'sienna', 'silver', 'snow', 'tan', 'teal', 'thistle', 'tomato', 'turquoise', 'violet', 'white', 'yellow'];
var grammar = '#JSGF V1.0; grammar colors; public <color> = ' + colors.join(' | ') + ' ;'

var recognition = new SpeechRecognition()
var speechRecognitionList = new SpeechGrammarList()
speechRecognitionList.addFromString(grammar,1)
recognition.grammars = speechRecognitionList
/*  Controls whether continuous results are captured (true), 
or just a single result each time recognition is started (false). */
recognition.continuous = false

/* Sets the language of the recognition. Setting this is good practice, 
and therefore recommended. */
recognition.lang = 'en-US';

/* Defines whether the speech recognition system should return interim results, 
or just final results. Final results are good enough for this simple demo. */
recognition.interimResults = false;

/* Sets the number of alternative potential matches that should be returned per result.
 This can sometimes be useful, say if a result is not completely clear and you want to
  display a list if alternatives for the user to choose the correct one from. */
recognition.maxAlternatives = 1;