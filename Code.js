/* Calling : 1- Div That Contains All Buttons.
             2- Each Btn.
             3- Content That Contains Information 
*/ 

let buttons = document.querySelector(".buttons");
let btns = document.querySelectorAll(".btn");
let contents = document.querySelectorAll(".content");


// هنضيف حدث هنا ع الديف نفسه علشان لما نضغط كليك على زرار معين يعمل select عليه 
buttons.addEventListener("click", (select)=>{
    let checked = select.target.dataset.mark;

    // لو انا لقيت العنصر ال اسمه * checked يعنى معناها انى ضغطت على زرار معين مضغطتش ف الهوا 
    if (checked){
        btns.forEach((btn)=>{
            // remove class active from all buttons
            btn.classList.remove('active');
            // add class active to the selected button
            select.target.classList.add('active');
        });

        // Looping For all Contents div
        contents.forEach(function(content){
            // remove class active1 from all divs
            content.classList.remove('active1');

            // هنا لازم نعرف ايه الديف ال انا اخترته وهنلاحظ هنا ان * id بتاع الديف هو هو نفس اسم ال data-mark  ال في الزرار فلازم نربط الاتنين ببعض عن طريق اللوب ال فوق
            
            let element = document.getElementById(checked)// هنا حطيت * checked علشان هنا بيتخزن قيمه الزرار ال انا اخترته وانا كده بربطهم ببعض

            // add class active1 to the selected content
            element.classList.add('active1');
        })
    }
})
