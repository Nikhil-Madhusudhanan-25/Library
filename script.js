function Book(title,author,pages,read){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
    this.info=()=>{
        return `${title} by ${author}, ${pages}, read status: ${read}`;
    }
}
let theHobbit=new Book('The Hobbit', 'J.R.R. Tolkein',295, false);
let hitch= new Book("The Hitchiker's Guide to the Galaxy", 'Douglas Adams', 216, true);
let rescue= new Book("The Rescue","Nicholas Sparks", 339, true);
console.log(theHobbit.info());
const myLibrary=[];
myLibrary[0]=theHobbit;
myLibrary[1]=hitch;
myLibrary[2]=rescue;
console.log(myLibrary);
function bookAdd(event){
        event.preventDefault();
        let book=new Book();
        let inputs=document.getElementsByTagName("input");
        book.title= inputs[0].value;
        book.author=inputs[1].value;
        book.pages=inputs[2].value;
        book.read=Boolean(inputs[3].value);
        myLibrary.push(book);
        document.getElementById("book-add-form").reset();
          if(bookDisplayDiv.childNodes[1]==emptyLibraryDiv)
            {
                emptyLibraryDiv.style.display="none";
            }  
            if(document.getElementById("book-display-button").style.display="none"){
                hideButton.style.display="none";
                document.getElementById("book-display-button").style.display="block";
            }
            bookAddedMessageDiv.style.display="block";
            document.getElementsByTagName("form")[0].appendChild(bookAddedMessageDiv);
}
let bookDisplayDiv= document.getElementById("book-display");
let emptyLibraryDiv=document.createElement("div");
let hideButton= document.createElement("button");
hideButton.textContent="Hide Books";
let bookAddedMessageDiv=document.createElement("div");
bookAddedMessageDiv.textContent="Book Added to Library!";
function bookDisplay(){
    document.getElementById("book-display-button").style.display="none";
    let bookDisplayDiv= document.getElementById("book-display");
    console.log(bookDisplayDiv);
    /* let hideButton= document.createElement("button");
    hideButton.textContent="Hide Books"; */
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
         let readStatusButton= document.createElement("button"); 
        readStatusButton.textContent="Change read status";
        readStatusButton.setAttribute("class","read-status-toggle-button");
        card.appendChild(readStatusButton);
        console.log(card);
        let bookRemoveButton= document.createElement("button");
        bookRemoveButton.textContent="Remove Book from Library";
        card.appendChild(bookRemoveButton);
        bookRemoveButton.addEventListener("click",()=>{
            for(book of myLibrary)
                if(book.title==card.getElementsByTagName("p")[0].textContent)   
                    myLibrary.splice(myLibrary.indexOf(book),1)
                card.parentElement.removeChild(card);
                if(bookDisplayDiv.childNodes[0]==hideButton){
/*                     let emptyLibraryDiv=document.createElement("div"); */ 
                    emptyLibraryDiv.textContent="The Library is currently empty."
                    emptyLibraryDiv.style.display="block";
                    bookDisplayDiv.appendChild(emptyLibraryDiv);
                }
        }); 
        bookDisplayDiv.appendChild(card);
    }
    console.log(bookDisplayDiv.childNodes[0]);

    if(document.getElementById("book-display-button").style.display="none"){
            bookDisplayDiv.appendChild(hideButton);
            hideButton.style.display="block";
        }
    hideButton.addEventListener("click",()=>{
        bookDisplayDiv.textContent="";
        document.getElementById("book-display-button").style.display="block";
    });
    if(bookDisplayDiv.childNodes[0]==hideButton){
        let emptyLibraryDiv=document.createElement("div");
        emptyLibraryDiv.textContent="The Library is currently empty."
        bookDisplayDiv.appendChild(emptyLibraryDiv);
    }
    let readStatusButtonList=document.querySelectorAll(".read-status-toggle-button");
    readStatusButtonList.forEach((button)=>{
        button.addEventListener("click",()=>{
            for(book of myLibrary){
                console.log(book.title);
                if(button.parentElement.childNodes[0].textContent==book.title){
                    console.log("if is true");
                    if(button.parentElement.childNodes[3].textContent=="true")
                        book.read=false;
                    else
                        book.read=true;    
                }
            }
            bookDisplayDiv.textContent="";
            bookDisplay(); 
        })
    })
}

document.getElementById("add-new-button").addEventListener("click",()=>{
        document.getElementById("book-add-form").style.display="block";
});
document.getElementById("hide-button").addEventListener("click",()=>{
    document.getElementById("book-add-form").style.display="none";
    bookAddedMessageDiv.style.display="none";
});
/* document.getElementById("add-button").addEventListener("click",bookAdd); */
document.getElementsByTagName("form")[0].addEventListener("submit", bookAdd);
document.getElementById("book-display-button").addEventListener("click",bookDisplay);