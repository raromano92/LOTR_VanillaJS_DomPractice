console.log("Linked.");

// Dramatis Personae
const hobbits = [
  `Frodo Baggins`,
  `Samwise "Sam" Gamgee`,
  `Meriadoc "Merry" Brandybuck`,
  `Peregrin "Pippin" Took`,
];

const buddies = ["Gandalf the Grey", "Legolas", "Gimli", "Strider", "Boromir"];

const baddies = ["Sauron", "Saruman", "The Uruk-hai", "Orcs"];

const lands = ["The-Shire", "Rivendell", "Mordor"];

// ============
// Chapter 1
// ============
console.log("hello");

function makeMiddleEarth() {
  console.log("1: makeMiddleEarth");

  // 1. create a section tag with an id of middle-earth
  const MiddleEarth = document.createElement("section");
  MiddleEarth.id = "middle-earth";
  // 2. use a for loop to iterate over the lands array that does the following:
  for (i = 0; i < lands.length; i++) {
    //   2a. creates an article tag (there should be one for each land when the loop is done)
    newArt = document.createElement("article");
    //   2b. gives each land article an `id` tag of the corresponding land name
    newArt.setAttribute("id", lands[i]);
    //   2c. includes an h1 with the name of the land inside each land article
    const h1 = document.createElement("h1");
    newArt.appendChild(h1);
    h1.innerText = lands[i];
    //   2d. appends each land to the middle-earth section
    MiddleEarth.appendChild(newArt);
    // 3. append the section to the body of the DOM.
    document.body.append(MiddleEarth);
  }
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".

// ============
// Chapter 2
// ============

function makeHobbits() {
  console.log("2: makeHobbits");

  const uList = document.createElement("ul");
  // display an `unordered list` of hobbits in the shire
  for (i = 0; i < hobbits.length; i++) {
    const items = document.createElement("li");
    console.log("this good?");

    // give each hobbit a class of `hobbit`
    uList.setAttribute("class", "hobbit");
    items.innerText = `${hobbits[i]}`;
    console.log(uList);

    uList.appendChild(items);
  }
  const shire = document.getElementById("The-Shire");
  shire.appendChild(uList);
  // // hint: create a 'ul' outside the loop into which to append the 'li's
}
// hint: get 'The-Shire' by using its id

// COMMIT YOUR WORK
// The commit message should read: "Chapter 2 complete - Made the Hobbits".

// ============
// Chapter 3
// ============

function keepItSecretKeepItSafe() {
  console.log("3: keepItSecretKeepItSafe");

  // create a div with an id of `'the-ring'`
  const ring = document.createElement("div");
  ring.setAttribute("id", "the-ring");
  console.log(ring);

  // give the div a class of `'magic-imbued-jewelry'`
  ring.classList.add("magic-imbued-jewelry");

  // add the ring as a child of `Frodo`
  const hobbitList = document.querySelector("ul");
  let frodo = hobbitList.children[0];
  frodo.appendChild(ring);
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".

// ============
// Chapter 4
// ============

function makeBaddies() {
  console.log("4: makeBaddies");

  // display an unordered list of baddies in Mordor
  const bad = document.createElement("ul");
  //
  for (i = 0; i < baddies.length; i++) {
    const badlist = document.createElement("li");
    console.log("testing baddies");

    // give each of the baddies a class of "baddy"
    bad.setAttribute("class", "baddy");
    badlist.innerText = `${baddies[i]}`;
    console.log(bad);
    bad.appendChild(badlist);

    // remember to append them to Mordor
    const Mord = document.getElementById("Mordor");
    Mord.appendChild(bad);
  }
}
// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..

// ============
// Chapter 5
// ============

function makeBuddies() {
  console.log("5: makeBuddies");

  // create an `aside` tag
  const side = document.createElement("aside");
  const buddyList = document.createElement("ul");
  // put an `unordered list` of the `'buddies'` in the aside
  for (i = 0; i < buddies.length; i++) {
    console.log("budsss");
    let buddy = document.createElement("li");
    buddy.innerText = buddies[i];
    // appending li to ul
    buddyList.appendChild(buddy);
    // console.log()
    // Appending ul to aside
    side.appendChild(buddyList);
  }

  // insert your aside as a child element of `rivendell`
  // Appending aside to Rivendell
  const riven = document.getElementById("Rivendell");
  riven.appendChild(side);
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".

// ============
// Chapter 6
// ============

function leaveTheShire() {
  console.log("6: leaveTheShire");

  // assemble the `hobbits` and move them to `rivendell`

  const shire = document.getElementById("The-Shire");
  console.log(shire);

  //  moving hobbits
  const rivenDE = document.getElementById("Rivendell");
  console.log(rivenDE);

  rivenDE.appendChild(shire);
  console.log(rivenDE);
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============

function beautifulStranger() {
  console.log("7: beautifulStranger");

  // change the `'Strider'` text to `'Aragorn'`
  let rivD = document.querySelector("aside");
  let friends = rivD.firstElementChild;
  let buddies = friends.children;

  for (let i = 0; i < buddies.length; i++) {
    console.log(buddies[i]);
    if (buddies[i].innerText === "strider") {
      buddies[i].innerText = "Aragorn";
    }
  }
}
// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"

// ============
// Chapter 8
// ============

function forgeTheFellowShip() {
  console.log("8: forgeTheFellowShip");
  // create a new div called `'the-fellowship'` within `rivendell`
  //  Creating new div and grabbing Rivendell
  let theFellowship = document.createElement("div");

  // Setting ID for the div and pushing fellowship into Rivendell
  theFellowship.setAttribute("id", "theFellowship");

  // add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
  let hobList = document.getElementsByClassName("hobbit");
  const buddyList = document.createElement("ul");
  Rivendell.appendChild(theFellowship);

  const budHob = Rivendell.querySelectorAll("li");

  for (let i = 0; i < budHob.length; i++) {
    alert(`${budHob[i].innerText} have joined your party`);
    theFellowship.appendChild(budHob[i]);
  }
  // after each character is added make an alert that they // have joined your party

  // NOTE: This won't change what you see in the browser.  Use your Elements tab of your Inspector tools to make sure that it worked.
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 8 complete - The Fellowship is created"

// ============
// Chapter 9
// ============

function theBalrog() {
  console.log("9: theBalrog");
  // change the `'Gandalf'` text to `'Gandalf the White'`
  let gan = document.querySelector("#theFellowship li:nth-child(1)");
  
	gan.innerText = "Gandalf the White"

      console.log("9: theBalrog");
    
	
  // apply the following style to the element, make the // background 'white', add a grey border
		gan.setAttribute("class", "white")
		gan.style.background = "white"
		gan.style.border = "3px solid grey"

}
// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"

// ============
// Chapter 10
// ============

function hornOfGondor() {
  console.log("10: hornOfGondor");
  // pop up an alert that the horn of gondor has been blown
  alert("The horn of Gondor has been blown")

  	// Boromir's been killed by the Uruk-hai!
	// Remove `Boromir` from the Fellowship
	// Grabbing Boromir from list
	let bor = document.querySelector("#theFellowship li:nth-child(5)");
	// Removing him
		bor.remove()

}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"

// ============
// Chapter 11
// ============

function itsDangerousToGoAlone() {
  console.log("11: itsDangerousToGoAlone");
  // take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
  let fro = document.querySelector("#theFellowship li:nth-child(5)");
  Mordor.appendChild(fro)

  let Sam = document.querySelector("#theFellowship li:nth-child(6)");
  Mordor.appendChild(Sam)

  // add a div with an id of `'mount-doom'` to `Mordor`
	const md = document.createElement("div");
	md.setAttribute("id", "mount-doom")
	Mordor.appendChild(md)


}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"

// ============
// Chapter 12
// ============

function weWantsIt() {
  console.log("12: weWantsIt");
  // Create a div with an id of `'gollum'` and add it to Mordor
		let gol = document.createElement('div')
		gol.setAttribute("id", "gollum")
		Mordor.appendChild(gol)


  // Remove `the ring` from `Frodo` and give it to `Gollum`
	let newRing = document.getElementById('the-ring')
	console.log("newRing")

	gol.appendChild(newRing)

	



  // Move Gollum into Mount Doom
	let doom = document.getElementById("mount-doom")
	doom.appendChild(gol);


}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".

// ============
// Chapter 13
// ============

function thereAndBackAgain() {
  console.log("13: thereAndBackAgain");
  // remove `Gollum` and `the Ring` from the document
  let killGol = document.getElementById("gollum")
  killGol.remove();

  



  // Move all the `hobbits` back to `the shire`
	let newShire = document.getElementById("The-Shire")
	console.log(newShire)

	let hob1 = document.getElementsByTagName('li').item(4)
	console.log(hob1)

	let hob2 = document.getElementsByTagName('li').item(9)
	console.log(hob2)

	let hob3 = document.getElementsByTagName('li').item(10)
	console.log(hob3)

	let hob4 = document.getElementsByTagName('li').item(11)
	console.log(hob4)

	newShire.appendChild(hob1)
	newShire.appendChild(hob2)
	newShire.appendChild(hob3)
	newShire.appendChild(hob4)


		

}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 13 complete -Gollum and the ring are gone, the baddies are done, and the hobbits are back in the shire".

// =====================================
// Don't change anything below this line
// =====================================

// =====================================
// This code is loading all of the event listeners for the buttons in your application.
// =====================================

document.getElementById("chapter-1").addEventListener("click", makeMiddleEarth);
document.getElementById("chapter-2").addEventListener("click", makeHobbits);
document
  .getElementById("chapter-3")
  .addEventListener("click", keepItSecretKeepItSafe);
document.getElementById("chapter-4").addEventListener("click", makeBaddies);
document.getElementById("chapter-5").addEventListener("click", makeBuddies);
document.getElementById("chapter-6").addEventListener("click", leaveTheShire);
document
  .getElementById("chapter-7")
  .addEventListener("click", beautifulStranger);
document
  .getElementById("chapter-8")
  .addEventListener("click", forgeTheFellowShip);
document.getElementById("chapter-9").addEventListener("click", theBalrog);
document.getElementById("chapter-10").addEventListener("click", hornOfGondor);
document
  .getElementById("chapter-11")
  .addEventListener("click", itsDangerousToGoAlone);
document.getElementById("chapter-12").addEventListener("click", weWantsIt);
document
  .getElementById("chapter-13")
  .addEventListener("click", thereAndBackAgain);
document.getElementById("all-chapters").addEventListener("click", () => {
  makeMiddleEarth();
  makeHobbits();
  keepItSecretKeepItSafe();
  makeBaddies();
  makeBuddies();
  leaveTheShire();
  beautifulStranger();
  forgeTheFellowShip();
  theBalrog();
  hornOfGondor();
  itsDangerousToGoAlone();
  weWantsIt();
  thereAndBackAgain();
});
