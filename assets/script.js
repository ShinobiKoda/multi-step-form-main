//===code to toggle between monthly and yearly plans====

const toggle = document.querySelector(".toggle");
const monthly = document.querySelector(".yearly_billing");
const yearly = document.querySelector(".monthly_billing");
const yearText = document.querySelector('.yearly');
const monthText = document.querySelector('.monthly');

toggle.addEventListener("click", () => {
  if (yearly.classList.contains("none")) {
   // yearly is hidden, so show yearly and hide monthly
   yearly.classList.remove("none");
   monthly.classList.add("none");
  }else{
   // yearly is visible, so hide yearly and show monthly
   yearly.classList.add("none");
   monthly.classList.remove("none");
  }

  if(monthText.classList.contains('heading-color')){
    monthText.classList.remove('heading-color');
    monthText.classList.add('sub-color');
    yearText.classList.remove('sub-color');
    yearText.classList.add('heading-color');
  }else{
    monthText.classList.remove('sub-color');
    monthText.classList.add('heading-color');
    yearText.classList.remove('heading-color');
    yearText.classList.add('sub-color');
  }

});

//======== code to change sections ===========//

// get all the buttons and link them to their respective sections
const btn_one = document.getElementById('personal-info');
const btn_two = document.getElementById('select-plans');
const btn_three = document.getElementById('add-ons');
const btn_four = document.getElementById('thanks');

// grab the all the sections
const personal_info = document.getElementById('personal__info');
const add_ons = document.getElementById('add__ons');
const finishing_up = document.getElementById('finishing__up');
const thanks = document.getElementById('thanks__page');

btn_one.onclick = () => {
  if(personal_info.classList.contains('none')){
    personal_info.classList.remove('none');
    add_ons.classList.add('none');
    thanks.classList.add('none');
    finishing_up.classList.add('none');
    console.log('clicked');
  }
}

btn_two.onclick = () => {
  if(add_ons.classList.contains('none')){
    add_ons.classList.remove('none');
    personal_info.classList.add('none');
    thanks.classList.add('none');
    finishing_up.classList.add("none");
  }
}

btn_three.onclick = () => {
  if(finishing_up.classList.contains('none')){
    finishing_up.classList.remove('none');
    personal_info.classList.add('none');
    add_ons.classList.add('none');
    thanks.classList.add('none');
  }
}

btn_four.onclick = () =>{
  if(thanks.classList.contains('none')){
    thanks.classList.remove('none');
    personal_info.classList.add('none');
    add_ons.classList.add('none');
    finishing_up.classList.add('none');
  }
}

// === grab next page button =========//
const next_page = document.querySelector('.next');
next_page.addEventListener('click', ()=>{
  if(add_ons.classList.contains('none') && finishing_up.classList.contains('none') && thanks.classList.contains('none')){
    personal_info.classList.add('none');
    add_ons.classList.remove('none');
  }else if(personal_info.classList.contains('none') && finishing_up.classList.contains('none') && thanks.classList.contains('none')){
    add_ons.classList.add('none');
    finishing_up.classList.remove('none');
  }else if (personal_info.classList.contains("none") &&
    add_ons.classList.contains("none") &&
    thanks.classList.contains("none")
  ){
    finishing_up.classList.add('none');
    thanks.classList.remove('none');
  }else if(personal_info.classList.contains("none") &&
    add_ons.classList.contains("none") &&
    finishing_up.classList.contains("none")
  ){
    thanks.classList.add('none');
    personal_info.classList.remove('none');
  }
});

//=== add borders to the plans when clicked ======//
const plans = document.querySelectorAll('.plan');
plans.forEach(plan => {
  plan.onclick = () => {
    // Remove 'border' class from all plans
    plans.forEach((p) => p.classList.remove("border"));

    // Add 'border' class to the clicked plan
    plan.classList.add("border");
  };
})