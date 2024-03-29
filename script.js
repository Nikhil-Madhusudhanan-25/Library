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
const myLibrary=[];
myLibrary[0]=theHobbit;
myLibrary[1]=hitch;
myLibrary[2]=rescue;
function bookAdd(event){
        event.preventDefault();
        let book=new Book();
        let inputs=document.getElementsByTagName("input");
        book.title= inputs[0].value;
        book.author=inputs[1].value;
        book.pages=inputs[2].value;
        if(inputs[3].value=="true"||inputs[3].value=="True")
            book.read=true;
        else
            book.read=false;
        myLibrary.push(book);
        document.getElementById("book-add-form").reset();
          if(bookDisplayDiv.childNodes[1]==emptyLibraryDiv)
            {
                emptyLibraryDiv.style.display="none";
            }  
            if(document.getElementById("book-display-button").style.display="none"){
                hideButton.style.display="none";
                document.getElementById("book-display-button").style.display="block";
                emptyLibraryDiv.style.display="none";
            }
            bookAddedMessageDiv.style.display="block";
            document.getElementsByTagName("form")[0].appendChild(bookAddedMessageDiv);
}
let bookDisplayDiv= document.getElementById("book-display");
let buttonContainerDiv=document.getElementById("button-container");
let emptyLibraryDiv=document.createElement("div");
let hideButton= document.createElement("button");
hideButton.textContent="Hide Books";
let bookAddedMessageDiv=document.createElement("div");
bookAddedMessageDiv.textContent="Book Added to Library!";
function bookDisplay(){
    document.getElementById("book-display-button").style.display="none";
    let bookDisplayDiv= document.getElementById("book-display");
    bookDisplayDiv.textContent="";
    if(document.getElementById("book-display-button").style.display="none"){
        buttonContainerDiv.appendChild(hideButton);
        hideButton.style.display="block";
    }
    for(book of myLibrary){
        let card=document.createElement("span");
        card.className="card";       
        for(key in book){
            if(book[key]!=book.info){
            let p=document.createElement("p");
            switch(key){
                case "title": p.textContent="Title: ";
                    break;
                case "author":p.textContent="Author: ";
                    break;
                case "pages":p.textContent="Pages: ";
                    break;
                case "read":p.textContent="Read: ";
                    break;
            }
            p.textContent+=book[key];
            card.appendChild(p);}
        }
         let readStatusButton= document.createElement("button"); 
        readStatusButton.textContent="Change read status";
        readStatusButton.setAttribute("class","read-status-toggle-button");
        card.appendChild(readStatusButton);
        let bookRemoveButton= document.createElement("button");
        bookRemoveButton.textContent="Remove Book from Library";
        card.appendChild(bookRemoveButton);
        bookRemoveButton.addEventListener("click",()=>{
            for(book of myLibrary){
                if(book.title==card.getElementsByTagName("p")[0].textContent.split(":")[1].trim())  { 
                    myLibrary.splice(myLibrary.indexOf(book),1)
                    card.parentElement.removeChild(card);
                }
                if(myLibrary.length==0){
                    emptyLibraryDiv.textContent="The Library is currently empty."
                    emptyLibraryDiv.style.display="block";
                    bookDisplayDiv.appendChild(emptyLibraryDiv);
                }
            }
        }); 
        bookDisplayDiv.appendChild(card);
    }

    hideButton.addEventListener("click",()=>{
        bookDisplayDiv.textContent="";
        document.getElementById("book-display-button").style.display="block";
        hideButton.style.display="none";
    });
    if(myLibrary.length==0){
        let emptyLibraryDiv=document.createElement("div");
        emptyLibraryDiv.textContent="The Library is currently empty."
        bookDisplayDiv.appendChild(emptyLibraryDiv);
    }
    let readStatusButtonList=document.querySelectorAll(".read-status-toggle-button");
    readStatusButtonList.forEach((button)=>{
        button.addEventListener("click",()=>{
            for(book of myLibrary){
                if(button.parentElement.childNodes[0].textContent.split(":")[1].trim()==book.title){
                    if(button.parentElement.childNodes[3].textContent.split(":")[1].trim()=="true")
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
document.getElementsByTagName("main")[0].style.gridColumn="1/-1"; 
document.getElementById("add-new-button").addEventListener("click",()=>{
        document.getElementById("book-add-form").style.display="block"; 
        document.getElementsByTagName("aside")[0].style.display="block";
        document.getElementById("add-new-button").style.display="none";
        document.getElementsByTagName("main")[0].style.gridColumn="2"; 
});
document.getElementById("form-hide-button").addEventListener("click",()=>{
    document.getElementsByTagName("aside")[0].style.display="none";
    bookAddedMessageDiv.style.display="none";
    document.getElementById("add-new-button").style.display="block";
    document.getElementsByTagName("main")[0].style.gridColumn="1/-1"; 
});
document.getElementsByTagName("form")[0].addEventListener("submit", bookAdd);
document.getElementById("book-display-button").addEventListener("click",bookDisplay);