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
