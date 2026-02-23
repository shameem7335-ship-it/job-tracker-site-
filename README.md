1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans- getElementById--  return a single element by verifying the given id and  return live collection.
     getElementsByClassName--  return all elements by verifying the given class.
    querySelector-- return the first elemnt which match by the selector.
    querySelectorAll-- return all elemnt which match by the selector.


2. How do you create and insert a new element into the DOM?
   Ans- create-- by using createElement 
        to create a new element--
        const newText = document.createElement('p')
        inset-- by using appendChild
       step 1-  what to insert
         const newText = document.createElement('p');
       step 2-  whare to insert
        const section = document.geteElementbyID('card');
       step 3-  append
        section.appendChild(newText);
  
3. What is Event Bubbling? And how does it work?
   Ans-  Event Bubbling is when an event start with the specific target event and then propagates up to parent node in dom tree.
   How works-- First it start with the targeted event. And then and prpagates to the targets emidiate parent and goes to main document by propagating every parent node.
 
4. What is Event Delegation in JavaScript? Why is it useful?
   Ans- Event Delegation is thechniue where insted of using an event listner to child element, it add a single event listner to the parent node.
   Why it's useful--It make code cleen and easy. There is no need of a lot event listner for every child event. All children elemnt work with adding event listner to the parent element. 
 
5. What is the difference between preventDefault() and stopPropagation() methods?
   Ans- preventDefault()-- It stop the defult browser behivor of an element. And it does not stop the event from bubling.
        stopPropagation()-- It stop the event bubling up from the DOM tree. And it does not stop the event from bubling.


