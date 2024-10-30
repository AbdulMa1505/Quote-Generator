// quote generator
let btn =document.querySelector('#new-quote');
let quote =document.querySelector('.quote');
let person =document.querySelector('.person');

const quotes =[
{quote:"Whatever you are, be a good one.",
  person:'Abraham Lincoln'  

},{quote:"I do not think much of a man who is not wiser today than he was yesterday.",
    person:'Abraham Lincoln'  
  
  },{quote:"My concern is not whether God is on our side; my greatest concern is to be on God’s side, for God is always right",
    person:'Abraham Lincoln'  
  
  },{quote:"Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces the entire world.",
    person:'Albert Einstein'  
  
  },{quote:"Life is like riding a bicycle. To keep your balance, you must keep moving.",
    person:'Albert Einstein'  
  
  },{quote:"The important thing is not to stop questioning. Curiosity has its own reason for existing",
    person:'Albert Einstein'  
  
  },{quote:"I would rather have questions that can't be answered than answers that can't be questioned.",
    person:'Richard Feynman'  
  
  },{quote:"The first principle is that you must not fool yourself—and you are the easiest person to fool",
    person:'Richard Feynman'  
  
  },{quote:"Do the best you can until you know better. Then when you know better, do better.",
    person:'Abraham Lincoln'  
  
  },{quote:"Whatever you are, be a good one.",
    person:'Maya Angelou'  
  
  },{quote:"I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
    person:'Maya Angelou'  
  
  },{quote:"Nothing in life is to be feared; it is only to be understood.",
    person:'Marie Curie'  
  
  },{quote:"Intelligence is the ability to adapt to change.",
    person:'Stephen Hawking'  
  
  },{quote:"The greatest enemy of knowledge is not ignorance, it is the illusion of knowledge.",
    person:'Stephen Hawking'  
  
  },

];
btn.addEventListener('click', function(){
    let random =Math.floor(Math.random() *quotes.length);
    quote.innerText=quotes[random].quote;
    person.innerText=quotes[random].person;
})