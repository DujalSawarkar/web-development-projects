const Level = document.querySelector('.by-level');
const Topic = document.querySelector('.by-topic');
const Start = document.querySelector('.btn');
const levels = document.querySelectorAll('.level-1');
const heading = document.querySelector('.head');
const questionTab = document.querySelector('.display-question');
let opt_1 = document.querySelector('.option-1');
const opt_2 = document.querySelector('.option-2');
const opt_3 = document.querySelector('.option-3');
const opt_4 = document.querySelector('.option-4');

let lev;

const Questions = [
    {
        Question : "The software which provides specific services to its end user is called?",
        option_A : 'Application Software',
        option_B : 'System Software',
        option_C : 'Device Drivers',
        option_D : 'Microsoft Office',
        Answer : 'Application Software',
    },

    {
        Question : "Instructions written by a programer for a computer use is called?",
        option_A : 'Hardware',
        option_B : 'Software',
        option_C : 'Software Instructions',
        option_D : 'Systwm Software',
        Answer : 'Software',
    },

    {
        Question : "Which of the following is an example of Server Operating System",
        option_A : 'Linux',
        option_B : 'Ubuntu',
        option_C : 'Windows',
        option_D : 'Mac OS',
        Answer : 'Linux',
    },


    {
        Question : "A Supervisor is a central component of ",
        option_A : 'Software',
        option_B : 'Operating System',
        option_C : 'Device Drivers',
        option_D : 'Utilities',
        Answer : 'Operating System',
    },


    {
        Question : "What is normally used to configure a windows installation?",
        option_A : 'System Configuration',
        option_B : 'Safe Mode',
        option_C : 'Start Up',
        option_D : 'Live Mode',
        Answer : 'System Configuration',
    },
   
]





Start.addEventListener('click', Initial_Beginning)
Level.addEventListener('click',Start_by_level );
Topic.addEventListener('click', Start_by_level);



function Initial_Beginning (){
    document.querySelector('.btn').style.opacity = 0;
    document.querySelector('.btn').style.zIndex = -1;
    document.querySelector('.by-level').style.opacity = 1;
    document.querySelector('.by-level').style.transform = "translate(200px, 130px)";
    document.querySelector('.by-topic').style.opacity = 1;
    document.querySelector('.by-topic').style.transform = "translate(-250px, 130px)";

}



function Start_by_level(){
    document.querySelector('.by-topic').style.opacity = '0';
    document.querySelector('.by-level').style.opacity = '0';
    document.querySelector('.by-level').style.zIndex = -'1';
    document.querySelector('.by-topic').style.zIndex = -'1';    
    setTimeout(buildblocks, 1500);
}


levels.forEach((element) => {
    element.addEventListener('click', () =>{
        levels.forEach((e) => {
            e.style.opacity = '0';
            e.style.zIndex = '-1';
        });
    });
})


const delay = ms => new Promise( res => setTimeout(res, ms));

const buildblocks = async () => {
    heading.style.transform = 'translate(0px, -100px)';
    for(let i = 0 ; i< 14 ; i++){
        await delay(50);
        let div = document.createElement('div');
        div.className = "level-content";
        if( i < 9){
            div.textContent = `Level 0${i+1}`;
        }else{
            div.textContent = `Level ${i+1}`;
        }

        document.getElementById('class').appendChild(div);    
    }
    lev = document.querySelectorAll('.level-content');

    lev.forEach((ele) =>{
        ele.addEventListener('click', () =>{
            clear(ele);
            Displayque();
            Displayquestion();
            // changeOpt();

        });
    })
}


function Displayque(){
    document.querySelector('img').style.opacity = '1';
    document.querySelector('img').style.zIndex = '1';
    document.querySelectorAll('.line').forEach((e) => {
        e.style.opacity = '1';
        e.style.zIndex = '1';
        e.style.animationName  = 'lineDesign';
    });
    document.querySelector('.ans-container').style.opacity = '1';
    
    heading.style.transform = 'translate(0px, -190px)';
    document.querySelector('.display-question').style.opacity = '1';
    document.querySelector('.display-question').style.zIndex = '1';
    document.querySelector('.display-question').style.animation = 'typing 5s steps(30, end), blink-caret .5s step-end infinite';
    setTimeout( "document.querySelector('.display-question').style.borderRight = 'none'", 5500);

}

function Displayquestion(){
    let i = 0;
    let Opt = Questions[0].option_A;
    console.log(Opt);
    questionTab.textContent = Questions[`${i}`].Question;
    opt_1.innerHTML = Questions[1].option_A;
    
}

function clear(element){
    element.style.opacity = '0';
    element.style.zIndex = '-1';

}

