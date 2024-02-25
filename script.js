function Book(title,author,pages,read){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
    this.info=()=>{
        return `${title} by ${author}, ${pages}, read status: ${read}`;
    }
}
/* Book.prototype.info=function(){
    console.log(this);
    return `${this.title} by ${this.author}, ${this.pages}, read status: ${this.read}`;
}; */
let theHobbit=new Book('The Hobbit', 'J.R.R. Tolkein',295, false);
let hitch= new Book("The Hitchiker's Guide to the Galaxy", 'Douglas Adams', 216, true);
let rescue= new Book("The Rescue","Nicholas Sparks", 339, true);
console.log(theHobbit.info());
const myLibrary=[];
myLibrary[0]=theHobbit;
myLibrary[1]=hitch;
myLibrary[2]=rescue;
console.log(myLibrary);
function bookAdd(){
    /* let book= prompt("Enter the following: Name of the book \n Name of Writer \n Number of Pages \n Whether you have read this book(True/False)");
    book.split(" ");
    console.log(book); */
}
function bookDisplay(){
    let bookDisplay= document.getElementsByClassName("book-display");
    console.log(bookDisplay);
    for(book of myLibrary){
        let card=document.createElement("div");
        card.className="card";
        
        console.log(book);
        for(key in book){
            if(book[key]!=book.info){
            let p=document.createElement("p");
            p.textContent=book[key];
            card.appendChild(p);
            console.log(key);}
        }
        console.log(card);
        bookDisplay[0].appendChild(card);
    }
    
}
document.getElementById("add-new-button").addEventListener("click",()=>{
    console.log(document.getElementById("book-add-form").style.display);
    if(document.getElementById("book-add-form").style.display==""||document.getElementById("book-add-form").style.display=="none")
        document.getElementById("book-add-form").style.display="block";
    else
        document.getElementById("book-add-form").style.display="none";
});

document.getElementById("add-button").addEventListener("click",(event)=>{
    event.preventDefault();
    let book=new Book();
    let inputs=document.getElementsByTagName("input");
    book.title= inputs[0].value;
    book.author=inputs[1].value;
    book.pages=inputs[2].value;
    book.read=Boolean(inputs[3].value);
    myLibrary.push(book);
})