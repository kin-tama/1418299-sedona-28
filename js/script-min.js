var formButton=document.querySelector(".find-hotel-button"),findForm=document.querySelector(".find-hotel-form"),kidsNumber=findForm.querySelector(".kids"),adultsNumber=findForm.querySelector(".adults");findForm.classList.add("hide"),formButton.addEventListener("click",function(e){findForm.classList.toggle("hide")}),findForm.addEventListener("submit",function(){localStorage.setItem("kidsNumber",kidsNumber.value),localStorage.setItem("adultsNumber",adultsNumber.value)});
