var btn=document.getElementById('t-btn')

var team1=document.querySelector('team11');
var team2=document.querySelector('team2');

function leftClick(){
    btn.style.left='0'
}
function rightClick(){
    btn.style.left='150px'
    team1.display='none';
}

var heart=document.querySelectorAll('i.fa-heart');
// var display=0;

function Change(num){
    
    if(heart[num].style.color==('rgb(223, 223, 223)')){
        heart[num].style.color='rgb(255, 51, 129)';
        heart[num].style.transition='all .5s ease';
        heart[num].style.transform='scale(1.4)';
        // display=1;
        function ShowChange(){
            heart[num].style.transform='scale(1)';
        }
        setTimeout(ShowChange,300)
        }
    else{
        heart[num].style.color='rgb(223, 223, 223)';
        // display=0;
        }
        
}; 

const body=document.querySelector("body"),
      sidebar=body.querySelector(".sidebar"),
      toggle=body.querySelector(".toggle"),
      searchBtn=body.querySelector(".search-box"),
      home=document.getElementById("home"),
      quiz=document.getElementById("quiz"),
      forum=document.getElementById("forum"),
      road=document.getElementById("road"),
      article=document.getElementById("article"),
      tolist=document.getElementById("to-do-list");
      
      var show=0;
      toggle.addEventListener("click",()=>{
        sidebar.classList.toggle("close")
        if (show==0){
            home.style.marginLeft="24%";
            quiz.style.marginLeft="24%";
            article.style.marginLeft="24%";
            road.style.marginLeft="20%";
            forum.style.marginLeft="24%";
            tolist.style.marginLeft="24%";
            show=1;
        }
        else{
            home.style.marginLeft="10%";
            quiz.style.marginLeft="10%";
            article.style.marginLeft="10%";
            road.style.marginLeft="10%";
            forum.style.marginLeft="10%";
            tolist.style.marginLeft="10%";
            show=0;
            
        }
      });

const itemsArray=localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) :
[]

console.log(itemsArray)

document.querySelector("#enter").addEventListener("click",()=>{
    const item =document.querySelector("#item")
    createItem(item)
})

function displayItems(){
    let items=""
    for(let i =0;i<itemsArray.length;i++){
        items +=` <div class="item">  
                       <div class="input-controller">
                            <textarea disabled> ${itemsArray[i]} </textarea>
                            <div class="edit-controller">
                                <i class="fa-solid fa-check deleteBtn"></i>
                                <i class="fa-solid fa-pen-to-square editBtn"></i>
                            </div>
                        </div>
                        <div class="update-controller">
                            <button class="saveBtn">Save</button>
                            <button class="cancelBtn">Cancel</button>
                        </div>
                    </div>`
    }
    document.querySelector(".to-do-list").innerHTML=items
    activateDeleteListener()
    activateEditListener()
    activateCancelListener()
    activateSaveListener()

}

function activateDeleteListener(){
    let deleteBtn=document.querySelectorAll(".deleteBtn")
    deleteBtn.forEach((db,i)=>{
        db.addEventListener("click",()=>{
            deleteItem(i)
        })
    })
}

function activateEditListener(){
    const editBtn=document.querySelectorAll(".editBtn")
    const updateController=document.querySelectorAll(".update-controller")
    const inputs=document.querySelectorAll(".input-controller textarea")
    editBtn.forEach((eb,i)=>{
        eb.addEventListener("click",()=>{
            updateController[i].style.display="block"
            inputs[i].disabled=false
        })
    })
}

function activateSaveListener(){
    const saveBtn=document.querySelectorAll(".saveBtn")
    const inputs=document.querySelectorAll(".input-controller textarea")
    saveBtn.forEach((sb,i)=>{
        sb.addEventListener("click",()=>{
            updateItem(inputs[i].value,i)
        })
    })
}

function activateCancelListener(){
    const cancelBtn=document.querySelectorAll(".cancelBtn")
    const updateController=document.querySelectorAll(".update-controller")
    const inputs=document.querySelectorAll(".input-controller textarea")
    cancelBtn.forEach((cb,i)=>{
        cb.addEventListener("click",()=>{
            updateController[i].style.display="none"
            inputs[i].disabled=true
        })
    })
}

function updateItem(text,i){
    itemsArray[i]=text
    localStorage.setItem("items",JSON.stringify(itemsArray))
    location.reload()
}

function deleteItem(i){
    itemsArray.splice(i,1)
    localStorage.setItem("items",JSON.stringify(itemsArray))
    location.reload()
}

function createItem(item){
    itemsArray.push(item.value)
    localStorage.setItem("items",JSON.stringify(itemsArray))
    location.reload()
}

function displayDate(){
    let date=new Date()
    date=date.toString().split(" ")
    document.querySelector("#date").innerHTML=date[1]+" "+date[2]+" "+date[3]
}

window.onload=function(){
    displayDate()
    displayItems()
}


const questions=[
    {
        question:"Choose the correct HTML tag for the largest heading ",
        answers :[
            {text:"Hello",correct:false},
            {text:"Hello",correct:true},
            {text:"Hello",correct:false},
            {text:"Hello",correct:false},

        ]
    },
    
    {
        question:"Choose the correct HTML tag for the largest heading ",
        answers :[
            {text:"h2",correct:false},
            {text:"h5",correct:false},
            {text:"h1",correct:true},
            {text:"h6",correct:false},

        ]
    },

    {
        question:"Choose the correct HTML tag for the largest heading ",
        answers :[
            {text:"Hello",correct:false},
            {text:"Hello",correct:true},
            {text:"Hello",correct:false},
            {text:"Hello",correct:false},

        ]
    },

    {
        question:"Choose the correct HTML tag for the largest heading ",
        answers :[
            {text:"Hello",correct:false},
            {text:"Hello",correct:true},
            {text:"Hello",correct:false},
            {text:"Hello",correct:false},

        ]
    },

    {
        question:"Choose the correct HTML tag for the largest heading ",
        answers :[
            {text:"Hello",correct:false},
            {text:"Hello",correct:true},
            {text:"Hello",correct:false},
            {text:"Hello",correct:false},

        ]
    }
];

const questionElement=document.getElementById("question");
const answerButton=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");

let currentQuestionIndex=0;
let score=0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}

function showQuestion(){
    resetState();

    let currentQuestion =questions[currentQuestionIndex];
    let questionNo= currentQuestionIndex+1;
    questionElement.innerHTML=questionNo+". "+ currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        const but=document.createElement("button");
        but.innerHTML=answer.text;
        but.classList.add("btn");
        answerButton.appendChild(but);
        if(answer.correct){
            but.dataset.correct=answer.correct;
        }
        but.addEventListener("click",selectAnswer);
    });
}


function resetState(){
    nextButton.style.display="none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn=e.target;
    const isCorrect =selectedBtn.dataset.correct==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score+=5;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(but=>{
        if(but.dataset.correct==='true'){
            but.classList.add("correct");
        }
        but.disabled=true;
    });
    nextButton.style.display="block";
}

function showScore(){
    resetState();
    questionElement.innerHTML=`You scored ${score} out of ${questions.length*5} !`;
    nextButton.innerHTML="Play Again";
    nextButton.style.display="block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz()

var threads=[
    {
        tit:"Thread 1",
        author:"Aradhna",
        date:Date.now(),
        content:"Thread content",
        comments:[
            {
                author:"Koyal",
                date:Date.now(),
                content:"Hey there"
            },
            {
                author:"Koyal",
                date:Date.now(),
                content:"Hey there"
            },{
                author:"Koyal",
                date:Date.now(),
                content:"Hey there"
            },{
                author:"Koyal",
                date:Date.now(),
                content:"Hey there"
            }
            
        ]
    }
]

console.log(threads);
var container=document.querySelector('ol')
for(let thread of threads){
    var html=`            <li class="row">
                <a href="">
                    <h4 class="tit">
                        ${thread.tit}
                    </h4>
                    <div class="bottom-text">
                        <p class="timestamp">
                            ${new Date(thread.date).toLocaleString()}
                        </p>
                        <p class="comment-count">
                            ${thread.comments.length} comments
                        </p>
                    </div>
                </a>
                <div class="text-area">
                    <textarea name="" id=""></textarea>
                    <button id="add-com">add comments</button>    
                </div>
                <div class="comments">
                    <div class="comment">
                        <div class="top-comment">
                            Aradhna
                        </div>
                        <div class="time">
                            18-06-2024
                        </div>
                    </div>
                </div>
            </li>
`
container.insertAdjacentElement('beforeend',html);

var btnAdd=document.querySelector('add-com');
btnAdd.addEventListener("click",()=>{
    var txt =document.querySelector('textarea');
    var comment={
        context:txt.value,
        date:Date.now(),
        author:"Aron"
    }
})
}