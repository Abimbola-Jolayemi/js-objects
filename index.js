// 1.
function InstagramPost(authorHandle, content, imageLink, views, likes) {
  this.authorHandle = authorHandle;
  this.content = content;
  this.imageLink = imageLink;
  this.views = views;
  this.likes = likes;
}
const myPost = new InstagramPost('handle', 'content', 'imageLink', 'views', 'likes');
console.log(InstagramPost)

// 2.
function InstagramPost(authorHandle, content, imageLink, views, likes) {
  this.authorHandle = authorHandle;
  this.content = content;
  this.imageLink = imageLink;
  this.views = views;
  this.likes = likes;
  }
  const myPost = new InstagramPost('abimbola_jolayemi', 'about my project defense in the school', 'https://Abimbola_jolayemi.com/project.jpg', 1000, 800);
  console.log(InstagramPost)

  function InstagramPost(authorHandle, content, imageLink, views, likes) {
    this.authorHandle = authorHandle;
    this.content = content;
    this.imageLink = imageLink;
    this.views = views;
    this.likes = likes;
    }
    const myPost = new InstagramPost('aderemi_olumide820', 'a day at the shopping mall', 'https://aderemi_olumide820.com/mall.jpg', 2000, 600);
    console.log(InstagramPost)
  
// 3.
// a.
function createPerson(name, age, location) {
    return {
      name: name,
      age: age,
      location: location
    }
  }
  const musa = createPerson('Musa Dawodu', 19, 'Lekki, Lagos State');
  console.log(musa) 
  
//   b.
function createJambScores(eng, govt, lit, crk) {
    return {
      ENG: eng,
      GOVT: govt,
      LIT: lit,
      CRK: crk
    };
  }
  
  const musa = {
    name: 'Musa Dawodu',
    age: 19,
    location: 'Lekki, Lagos State',
    scores: createJambScores(70, 85, 82, 94)
  };
  
  console.log(musa);

//   4.
//a.
Object.assign(): This method creates a new object by copying the 
values of all enumerable properties from one or more
 source objects to a target object. Example:

 const originalObject = { a: 1, b: 2 };
 const clonedObject = Object.assign({}, originalObject);
 console.log(clonedObject);

//  b.
Spread syntax: This method creates a shallow copy of an object by 
spreading its properties into a new object. Example:

const originalObject = { a: 1, b: 2 };
const clonedObject = { ...originalObject };
console.log(clonedObject);

// c.
Iteration: This method creates a shallow copy of an object by iterating over its 
properties and adding them to a new object. Example:

const originalObject = { a: 1, b: 2 };
const clonedObject = {};
for (let key in originalObject) {
  clonedObject[key] = originalObject[key];
}
console.log(clonedObject);

// d.
Object.create(): This method creates a new object with the 
specified prototype and properties. Example:

const originalObject = { a: 1, b: 2 };
const clonedObject = Object.create(Object.getPrototypeOf(originalObject), Object.getOwnPropertyDescriptors(originalObject));
console.log(clonedObject);

// 5.
const presidentialCandidates = {
    AAC: 'Omoyele Sowore',
    ACCORD: 'Christopher Imumolen',
    APC: 'Bola Ahmed Tinubu',
    LP: 'Peter Obi',
    NNPP: 'Rabiu Kwankwanso'
    PDP: 'Atiku Abubakar',
 };
 
 for (let ['AAC', 'Omoyele Sowore'] of presidentialCandidates.AAC(presidentialCandidates)) {
   console.log(`${'Omoyele Sowore'} is the presidential candidate of ${'AAC'}`);
 }
 for (let ['ACCORD', 'Christopher Imumolen'] of presidentialCandidates.ACCORD(presidentialCandidates)) {
    console.log(`${'Christopher Imumolen'} is the presidential candidate of ${'ACCORD'}`);
  }
  for (let ['APC', 'Bola Ahmed Tinubu'] of presidentialCandidates.APC(presidentialCandidates)) {
    console.log(`${'Bola Ahmed Tinubu'} is the presidential candidate of ${'APC'}`);
  }
  for (let ['LP', 'Peter Obi'] of presidentialCandidates.LP(presidentialCandidates)) {
    console.log(`${'Peter Obi'} is the presidential candidate of ${'LP'}`);
  }
  for (let ['NNPP', 'Rabiu Kwankwanso'] of presidentialCandidates.NNPP(presidentialCandidates)) {
    console.log(`${'Rabiu Kwankwanso'} is the presidential candidate of ${'NNPP'}`);
  }
  for (let ['PDP', 'Atiku Abubakar'] of presidentialCandidates.PDP(presidentialCandidates)) {
    console.log(`${'Atiku Abubakar'} is the presidential candidate of ${'PDP'}`);
  }



