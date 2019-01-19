let text = "";
// check the size of the box
getSquare();
// load Alice as our sample text
alice();

// SAMPLE TEXTS
// If you click one of the links in the sidebar, you get the corresponding sample text.
document.getElementById('alice').addEventListener('click', alice, false);
document.getElementById('pride').addEventListener('click', pride, false);
document.getElementById('heart').addEventListener('click', heart, false);

function alice() {
  text = "The rabbit-hole went straight on like a tunnel for some way, and then dipped suddenly down, so suddenly that Alice had not a moment to think about stopping herself before she found herself falling down a very deep well. Either the well was very deep, or she fell very slowly, for she had plenty of time as she went down to look about her and to wonder what was going to happen next. First, she tried to look down and make out what she was coming to, but it was too dark to see anything; then she looked at the sides of the well, and noticed that they were filled with cupboards and book-shelves; here and there she saw maps and pictures hung upon pegs. She took down a jar from one of the shelves as she passed; it was labelled 'ORANGE MARMALADE', but to her great disappointment it was empty: she did not like to drop the jar for fear of killing somebody, so managed to put it into one of the cupboards as she fell past it. 'Well!' thought Alice to herself, 'after such a fall as this, I shall think nothing of tumbling down stairs! How brave they'll all think me at home! Why, I wouldn't say anything about it, even if I fell off the top of the house!' (Which was very likely true.) Down, down, down. Would the fall never come to an end! 'I wonder how many miles I've fallen by this time?' she said aloud. 'I must be getting somewhere near the centre of the earth. Let me see: that would be four thousand miles down, I think--' (for, you see, Alice had learnt several things of this sort in her lessons in the schoolroom, and though this was not a very good opportunity for showing off her knowledge, as there was no one to listen to her, still it was good practice to say it over) '--yes, that's about the right distance--but then I wonder what Latitude or Longitude I've got to?' (Alice had no idea what Latitude was, or Longitude either, but thought they were nice grand words to say.) Presently she began again. 'I wonder if I shall fall right through the earth! How funny it'll seem to come out among the people that walk with their heads downward! The Antipathies, I think--' (she was rather glad there was no one listening, this time, as it didn't sound at all the right word) '--but I shall have to ask them what the name of the country is, you know. Please, Ma'am, is this New Zealand or Australia?' (and she tried to curtsey as she spoke--fancy curtseying as you're falling through the air! Do you think you could manage it?) 'And what an ignorant little girl she'll think me for asking! No, it'll never do to ask: perhaps I shall see it written up somewhere.' Down, down, down. There was nothing else to do, so Alice soon began talking again. 'Dinah'll miss me very much to-night, I should think!' (Dinah was the cat.) 'I hope they'll remember her saucer of milk at tea-time. Dinah my dear! I wish you were down here with me! There are no mice in the air, I'm afraid, but you might catch a bat, and that's very like a mouse, you know. But do cats eat bats, I wonder?' And here Alice began to get rather sleepy, and went on saying to herself, in a dreamy sort of way, 'Do cats eat bats? Do cats eat bats?' and sometimes, 'Do bats eat cats?' for, you see, as she couldn't answer either question, it didn't much matter which way she put it. She felt that she was dozing off, and had just begun to dream that she was walking hand in hand with Dinah, and saying to her very earnestly, 'Now, Dinah, tell me the truth: did you ever eat a bat?' when suddenly, thump! thump! down she came upon a heap of sticks and dry leaves, and the fall was over.";
  
document.getElementById("text").innerHTML = text;
  sortText();
}

function pride() {
  text = "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife. However little known the feelings or views of such a man may be on his first entering a neighbourhood, this truth is so well fixed in the minds of the surrounding families, that he is considered the rightful property of some one or other of their daughters. 'My dear Mr. Bennet,' said his lady to him one day, 'have you heard that Netherfield Park is let at last?' Mr. Bennet replied that he had not. 'But it is,' returned she; “for Mrs. Long has just been here, and she told me all about it.' Mr. Bennet made no answer. 'Do you not want to know who has taken it?' cried his wife impatiently. 'You want to tell me, and I have no objection to hearing it.' This was invitation enough. 'Why, my dear, you must know, Mrs. Long says that Netherfield is taken by a young man of large fortune from the north of England; that he came down on Monday in a chaise and four to see the place, and was so much delighted with it, that he agreed with Mr. Morris immediately; that he is to take possession before Michaelmas, and some of his servants are to be in the house by the end of next week.'";
  
document.getElementById("text").innerHTML = text;
  sortText();
}

function heart() {
  text = "The Nellie, a cruising yawl, swung to her anchor without a flutter of the sails, and was at rest. The flood had made, the wind was nearly calm, and being bound down the river, the only thing for it was to come to and wait for the turn of the tide. The sea-reach of the Thames stretched before us like the beginning of an interminable waterway. In the offing the sea and the sky were welded together without a joint, and in the luminous space the tanned sails of the barges drifting up with the tide seemed to stand still in red clusters of canvas sharply peaked, with gleams of varnished sprits. A haze rested on the low shores that ran out to sea in vanishing flatness. The air was dark above Gravesend, and farther back still seemed condensed into a mournful gloom, brooding motionless over the biggest, and the greatest, town on earth. The Director of Companies was our captain and our host. We four affectionately watched his back as he stood in the bows looking to seaward. On the whole river there was nothing that looked half so nautical. He resembled a pilot, which to a seaman is trustworthiness personified. It was difficult to realize his work was not out there in the luminous estuary, but behind him, within the brooding gloom. Between us there was, as I have already said somewhere, the bond of the sea. Besides holding our hearts together through long periods of separation, it had the effect of making us tolerant of each other's yarns--and even convictions."
  
document.getElementById("text").innerHTML = text;
  sortText();
}

// ADD TEXT TO BOX
// Whatever is entered in the text box in the sidebar, add it to the main view
function userinput() {
  
  // whatever the user enters into the box
  text = document.getElementById("userInput").value;
  
  // change backticks and double quotes into single quotes
  let textRegex = /[`"]/g;
  text = text.replace(textRegex, "'");
  
  // strip out any characters that might render content as HTML
  let specialRegex = /[<{>}]/g;
  text = text.replace(specialRegex, "");
  
  document.getElementById("text").innerHTML = text;
  sortText();
}


// FORMAT TEXT
function sortText() {
  let textArray = text.split(" ");
  let textPrint = textArray.join("</span> <span class='word'>")

  // PRINT CONTENTS OF TEXT TO PAGE
  document.getElementById("text").innerHTML = "<span class='word'>" + textPrint;

  // HIGHLIGHT A WORD ON CLICK
  // get all elements with the CSS class '.word' and put them in a variable
  let word = document.getElementsByClassName("word");

  // function to toggle the class '.poemWord'
  function selectWord() {
    this.classList.toggle('poemword');
  };

  // When an element with the CSS class '.word' is clicked, run the function to toggle the class
  for (var i=0; i < word.length; i++) {
    word[i].addEventListener('click', selectWord, false);
  }

  // MAKE THE MAGIC HAPPEN AND COMMIT IT TO THE PAGE
  document.getElementById("commit").addEventListener('click', blackout, false);

  // For each word that has been selected, add the class '.committed' to make a note of it, then add the class '.blackout' to all the others.
  function blackout() {
    for (var i=0; i < word.length; i++) {
  
      if (word[i].classList.contains("poemword")) {
        word[i].classList.remove("poemword");
        word[i].classList.add("committed");
      } else {
        word[i].classList.add("blackout");
      }
  }
  
  // add a CSS class to containers to make absolutely sure the background is black
  document.getElementById("text").classList.add("blackground");
  document.getElementById("container").classList.add("blackground");
  
  // remove the button that deselects words
  document.getElementById("reset").removeEventListener('click', clearselection, false);
  // and add one that resets the entire text instead
  document.getElementById("reset").addEventListener('click', clearall, false);

  // Add the buttons to convert to image
  document.getElementById("image").innerHTML = "<p>If you're happy, click the button below to turn your text into an image.</p><button id='renderImage'>Render as image</button><div id='previewImage'></div><div id='downloadImage'></div>";
  
  // Turn the text into a canvas using html2canvas (our only jQuery)
  var getCanvas;
  $("#renderImage").on('click', function () {
    html2canvas($('#container').get(0)).then( function (canvas) {
      getCanvas = canvas;
      
      // generate an image element
      var imageData = document.createElement('img');
      
      // get the data from the canvas and apply it to the image
      imageData.src = getCanvas.toDataURL("image/png");
      
      // now append the image to the previewImage div
      document.getElementById("previewImage").appendChild(imageData);
    });
  });  
}


// CLEAR SELECTIONS
document.getElementById("reset").addEventListener('click', clearselection, false);

// if a word contains the class '.poemword' (which selects it) remove it
function clearselection() {
  for (var i=0; i < word.length; i++) {
    if (word[i].classList.contains('poemword')) {
      word[i].classList.remove("poemword");
    }
  }
}


// RESET BUTTON
function clearall() {
  for (var i=0; i < word.length; i++) {
  
    if (word[i].classList.contains('committed')) {
      word[i].classList.remove('committed');
    } else if (word[i].classList.contains('blackout')) {
      word[i].classList.remove("blackout");
    }
  }
    document.getElementById("text").classList.remove("blackground");
    document.getElementById("container").classList.remove("blackground");
    document.getElementById("image").innerHTML = "<p class='info'>Your image will appear here when you're done.</p>";
    document.getElementById("reset").removeEventListener('click', clearall, false);
    document.getElementById("reset").addEventListener('click', clearselection, false);
  }
}

// COLLAPSIBLE PANELS
var coll = document.getElementsByClassName("collapsible");
var collmob = document.getElementsByClassName("collapsiblemobile");

function collapse(panel) {
  for (var i = 0; i < panel.length; i++) {
    panel[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.maxHeight){
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      } 
    });
  }
}

collapse(coll);
collapse(collmob);


// TEXT APPEARANCE
document.getElementById("special").addEventListener('click', function() {
  fontFamily("Special Elite");
});

document.getElementById("baskerville").addEventListener('click', function() {
  fontFamily("Libre Baskerville");
});

document.getElementById("lato").addEventListener('click', function() {
  fontFamily("Lato");
});

document.getElementById("times").addEventListener('click', function() {
  fontFamily("Times");
});

document.getElementById("monospace").addEventListener('click', function() {
  fontFamily("monospace");
});


function fontFamily(typeface) {
  document.getElementById("text").style.fontFamily = typeface;
}

// FONT SIZE
var words = document.getElementById('text');

document.getElementById("smaller").addEventListener('click', function() {
  var style = window.getComputedStyle(words , null).getPropertyValue('font-size');
  var fontSize = parseFloat(style); 
  words.style.fontSize = (fontSize - 2) + 'px';
});

document.getElementById("bigger").addEventListener('click', function() {
  var style = window.getComputedStyle(words , null).getPropertyValue('font-size');
  var fontSize = parseFloat(style); 
  words.style.fontSize = (fontSize + 2) + 'px';
});

// Make the box always be perfectly square based on percentage
function getSquare() {
  let border = document.getElementById('border').offsetWidth;
  let wrapper = document.getElementById('wrapper').offsetWidth;
  let container = document.getElementById('container').offsetWidth;
  document.getElementById('border').style.height = wrapper + "px";
  document.getElementById('wrapper').style.height = wrapper + "px";
  document.getElementById('container').style.height = container + "px";
}

// run the above function every time the window is resized
window.addEventListener('resize', function(event){
  getSquare();
});

// To do: 
