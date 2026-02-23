

// show only funtion for all, selected and rejected button 

function showOnly(id){
    const forAllBtn = document.getElementById('all-card')
    const forSelectedBtn = document.getElementById('no-card')
    const forRejectedBtn = document.getElementById('no-card2')

    console.log(id ,' button clicked')

    forAllBtn.classList.add('hidden');
    forSelectedBtn.classList.add('hidden');
    forRejectedBtn.classList.add('hidden');


    const show = document.getElementById(id);
    show.classList.remove('hidden');


    const jobCount = document.getElementById('counts');
    
     if(id === 'all-card'){
         calculateCount();
        jobCount.innerText = allCard.children.length;
    }
    else if(id === 'no-card'){
        calculateCount();
        jobCount.innerText = noCard.children.length;
    }
    else if(id === 'no-card2'){
        calculateCount();
        jobCount.innerText = noCard2.children.length;
    }

    
   
    // // //----- buttone style-----

     const allBtn = document.querySelector('.first-btn')
    const selectedBtn = document.getElementById('selected-btn')
    const rejectedBtn = document.getElementById('rejected-btn')
    console.log(allBtn, selectedBtn, rejectedBtn);

    
    selectedBtn.classList.remove('btn-soft', 'bg-blue-500', 'text-white');
    rejectedBtn.classList.remove('btn-soft', 'bg-blue-500', 'text-white');
    allBtn.classList.remove('btn-soft', 'bg-blue-500', 'text-white');

    if(id === 'all-card'){
        allBtn.classList.add('bg-blue-500', 'text-white')
    }
    else if(id === 'no-card'){
       selectedBtn.classList.add('bg-blue-500', 'text-white')
    }
    else if(id === 'no-card2'){
        rejectedBtn.classList.add('bg-blue-500', 'text-white')
    }
    // --empty page addd---
   const emptyJob = document.getElementById(job-empty);

   if (show.children.length ===0){
      emptyJob.classList.remove('hidden');
   }
   else { emptyJob.classList.add('hidden');}



    //  const emptyJob = document.getElementById('job-empty');

    //  const allCardEmpty = document.getElementById('all-card').children.length;
    //  const noCardEmpty = document.getElementById('no-card').children.length;
    //  const noCard2Empty = document.getElementById('no-card2').children.length;

    //  if(allCardEmpty === 0){
    //     emptyJob.classList.remove('hidden');
    // }
    //  else {emptyJob.classList.add('hidden')}
    //  if(noCardEmpty === 0){
    //     emptyJob.classList.remove('hidden');
    //  }
    //  else {emptyJob.classList.add('hidden')}

    //  if(noCard2Empty === 0){
    //     emptyJob.classList.remove('hidden');
    //  }
    //  else {emptyJob.classList.add('hidden')}
    
  };


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

   

    const aplliedBtn = event.target.parentNode
       const apllied = aplliedBtn.querySelector('.applied');
       if(apllied){ apllied.innerText = 'Selected';}
       

        calculateCount()
        emptypage();
        return;
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
       emptypage();
       return;
    
    };
    
});



// -----empty job section -------
// function emptypage(){
//      const emptyJob = document.getElementById('job-empty');

//      const allCardEmpty = document.getElementById('all-card').children.length;
//      const noCardEmpty = document.getElementById('no-card').children.length;
//      const noCard2Empty = document.getElementById('no-card2').children.length;
    
//     if(allCardEmpty === 0 && noCardEmpty === 0 && noCard2Empty === 0){
//         emptyJob.classList.remove('hidden')
//     }
//     else  {emptyJob.classList.add('hidden')}

// }
// emptypage();
 


// -------delete button------
document.addEventListener('click', function(event){
    const deleteBtn =event.target.closest('.dlt');
    // if(event.target.classList.contains('dlt')){}
    const cardDlt = deleteBtn.closest('.shadow-md');
    cardDlt.remove();

    calculateCount();
    emptypage();
    return;

})

// ----------
// --------
// --------