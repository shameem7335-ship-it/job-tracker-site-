

// show only funtion for all, selected and rejected button 

function showOnly(id){
    const forAllBtn = document.getElementById('all-card')
    const forSelectedBtn = document.getElementById('no-card')
    const forRejectedBtn = document.getElementById('no-card2')

    console.log(id ,' button clicked')

    forAllBtn.classList.add('hidden')
    forSelectedBtn.classList.add('hidden')
    forRejectedBtn.classList.add('hidden')


    const show = document.getElementById(id);
    show.classList.remove('hidden');
       


    const jobCount = document.getElementById('counts');
     if(id === 'all-card'){
        jobCount.innerText = allCard.children.length;
        calculateCount();
    }
    else if(id === 'no-card'){
        jobCount.innerText = noCard.children.length;
        calculateCount();
    }
    else if(id === 'no-card2'){
        jobCount.innerText = noCard2.children.length;
        calculateCount();
    }

    
    // if(id === 'all-card'){
    //     jobCount.innerText = allCard.children.length;
    //     calculateCount();
    // }
    // else if(id === 'no-card'){
    //     jobCount.innerText = noCard.children.length;
    //     calculateCount();
    // }
    // else if(id === 'no-card2'){
    //     jobCount.innerText = noCard2.children.length;
    //     calculateCount();
    // }

    // // //----- buttone style-----
    //  const allBtn = document.getElementById('all-btn')
    // const selectedBtn = document.getElementById('selected-btn')
    // const rejectedBtn = document.getElementById('rejected-btn')
    // console.log(allBtn, selectedBtn, rejectedBtn);

    
    // selectedBtn.classList.remove('bg-blue-400', 'text-white')
    // rejectedBtn.classList.remove('bg-blue-400', 'text-white')
    // allBtn.classList.remove('bg-blue-400', 'text-white')
    
    // btn.classList.add('bg-blue-400', 'text-white'
}


// --------count change------

let totalCount = document.getElementById('total-count');
let selectedCount = document.getElementById('selected-count');
let rejectedCount = document.getElementById('rejected-count');


const allCard = document.getElementById('all-card');
const noCard = document.getElementById('no-card');
const noCard2 = document.getElementById('no-card2');

function calculateCount(){
    totalCount.innerText = allCard.children.length;
    selectedCount.innerText = noCard.children.length;
    rejectedCount.innerText = noCard2.children.length;
    
};
calculateCount();


// ----tarnsfer to select and reject button---

const mainContainer = document.getElementById('body');

mainContainer.addEventListener('click', function(event){
    if(event.target.classList.contains('selectedf')){
    const node = event.target;
    console.log(node.innerText);
    const parentNode = event.target.parentNode;
    console.log(parentNode);
    
    
    const  selectedCard = document.getElementById('no-card');
    selectedCard.appendChild(parentNode);

    // const apllied = document.getElementsByClassName('applied');
    // for(const apllie of apllied){
    //     apllie.innerText = 'Selected'
    // }

    const aplliedBtn = event.target.parentNode
       const apllied = aplliedBtn.querySelector('.applied');
       if(apllied){ apllied.innerText = 'Selected';}
        // if(event.target.classList.contains('applied')){
        //     const appli = event.target;
        //     appli.innerText = 'Selected'}


    calculateCount()
    }
    
    else if(event.target.classList.contains('Rejectedf')){
    const node = event.target;
    console.log(node.innerText);
    const parentNode = event.target.parentNode;
    console.log(parentNode);
    
    const  rejectCard = document.getElementById('no-card2');
    rejectCard.appendChild(parentNode)

        const aplliedBtn = event.target.parentNode
       const apllied = aplliedBtn.querySelector('.applied');
       if(apllied){ apllied.innerText = 'Rejected';}
           

    calculateCount()
    
    };
    
});


// ----selected and rejected empty ----
// const selectedPage = document.getElementById('no-card');
// const selectedEmpty = document.getElementById('selected-empty')
// function empty(){
// if(selectedPage.children.length === 0){
//     selectedEmpty.classList.remove('hidden')
//    }
//     else if(selectedPage.children.length !== 0){
//          selectedEmpty.classList.add('hidden') ;}}



// mainContainer.addEventListener('click', function(event){
// if(event.target.classList.contains('selectedf')){

//     const parentN = event.target.closest('.shadow-md');
//     if(!parentN){return};=
//     selectedPage.appendChild(parentN);
//     empty(); 
// }})



// -------delete button------
document.addEventListener('click', function(event){
    const deleteBtn =event.target.closest('.dlt');
    // if(event.target.classList.contains('dlt')){}
    const cardDlt = deleteBtn.closest('.shadow-md');
    cardDlt.remove();


    calculateCount();

})

