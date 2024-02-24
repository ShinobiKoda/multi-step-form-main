//===code to toggle between monthly and yearly plans====

const toggle = document.querySelector(".toggle");
const monthly = document.querySelector(".yearly_billing");
const yearly = document.querySelector(".monthly_billing");
const yearText = document.querySelector(".yearly");
const monthText = document.querySelector(".monthly");


// grab the go back button
const prev_btn = document.getElementById("prev");


toggle.addEventListener("click", () => {
  if (yearly.classList.contains("none")) {
    // yearly is hidden, so show yearly and hide monthly
    yearly.classList.remove("none");
    monthly.classList.add("none");
  } else {
    // yearly is visible, so hide yearly and show monthly
    yearly.classList.add("none");
    monthly.classList.remove("none");
  }

  if (monthText.classList.contains("heading-color")) {
    monthText.classList.remove("heading-color");
    monthText.classList.add("sub-color");
    yearText.classList.remove("sub-color");
    yearText.classList.add("heading-color");
  } else {
    monthText.classList.remove("sub-color");
    monthText.classList.add("heading-color");
    yearText.classList.remove("heading-color");
    yearText.classList.add("sub-color");
  }
});

//======== code to change sections ===========//

// get all the buttons and link them to their respective sections
const btn_one = document.getElementById("personal-info");
const btn_two = document.getElementById("select-plans");
const btn_three = document.getElementById("add-ons");
const btn_four = document.getElementById("thanks");

// grab the all the sections
const personal_info = document.getElementById("personal__info");
const add_ons = document.getElementById("add__ons");
const finishing_up = document.getElementById("finishing__up");
const thanks = document.getElementById("thanks__page");

// when i click on button one and it has a display of none meaning it's not displayed i want you to remove the display of none and add it to other pages

btn_one.onclick = () => {
  if (personal_info.classList.contains("none")) {
    personal_info.classList.remove("none");
    add_ons.classList.add("none");
    thanks.classList.add("none");
    finishing_up.classList.add("none");
    btn_one.classList.add("blue-background");
    btn_two.classList.remove("blue-background");
    btn_three.classList.remove("blue-background");
    btn_four.classList.remove("blue-background");
    prev_btn.style.display = 'none';
    // console.log('clicked');
  }
};

// when i click on button two and it has a display of none meaning it's not displayed i want you to remove the display of none and add it to other pages

btn_two.onclick = () => {
  if (add_ons.classList.contains("none")) {
    add_ons.classList.remove("none");
    personal_info.classList.add("none");
    thanks.classList.add("none");
    finishing_up.classList.add("none");
    btn_two.classList.add("blue-background");
    btn_two.classList.add("blue-background");
    btn_one.classList.remove("blue-background");
    btn_three.classList.remove("blue-background");
    btn_four.classList.remove("blue-background");
    prev_btn.style.display = 'flex';
  }
};

// when i click on button three and it has a display of none meaning it's not displayed i want you to remove the display of none and add it to other pages
btn_three.onclick = () => {
  if (finishing_up.classList.contains("none")) {
    finishing_up.classList.remove("none");
    personal_info.classList.add("none");
    add_ons.classList.add("none");
    thanks.classList.add("none");
    btn_three.classList.add("blue-background");
    btn_one.classList.remove("blue-background");
    btn_two.classList.remove("blue-background");
    btn_four.classList.remove("blue-background");
    prev_btn.style.display = 'flex';
  }
};

// when i click on button four and it has a display of none meaning it's not displayed i want you to remove the display of none and add it to other pages
btn_four.onclick = () => {
  if (thanks.classList.contains("none")) {
    thanks.classList.remove("none");
    personal_info.classList.add("none");
    add_ons.classList.add("none");
    finishing_up.classList.add("none");
    btn_four.classList.add("blue-background");
    btn_one.classList.remove("blue-background");
    btn_two.classList.remove("blue-background");
    btn_three.classList.remove("blue-background");
    prev_btn.style.display = 'flex';
  }
};

// === grab next page button =========//
const next_page = document.querySelector(".next");
// when i click on next page i want to know the current page i am on by checking which one has a display of none and moving to the next page based on that
next_page.addEventListener("click", () => {
  if (
    add_ons.classList.contains("none") &&
    finishing_up.classList.contains("none") &&
    thanks.classList.contains("none")
  ) {
    personal_info.classList.add("none");
    add_ons.classList.remove("none");
    btn_one.classList.remove("blue-background");
    btn_two.classList.add("blue-background");
  } else if (
    personal_info.classList.contains("none") &&
    finishing_up.classList.contains("none") &&
    thanks.classList.contains("none")
  ) {
    add_ons.classList.add("none");
    finishing_up.classList.remove("none");
    btn_two.classList.remove("blue-background");
    btn_three.classList.add("blue-background");
  } else{
    finishing_up.classList.add("none");
    thanks.classList.remove("none");
    btn_three.classList.remove("blue-background");
    btn_four.classList.add("blue-background");
  }
});

//=== add borders to the plans when clicked ======//
const plans = document.querySelectorAll(".plan");
plans.forEach((plan) => {
  plan.onclick = () => {
    // Remove 'border' class from all plans
    plans.forEach((p) => p.classList.remove("border"));

    // Add 'border' class to the clicked plan
    plan.classList.add("border");
  };
});

// ==== add borders to input when clicked =========
const inputs = document.querySelectorAll(".input");

inputs.forEach((input) => {
  input.onclick = () => {
    inputs.forEach((i) => i.classList.remove("border"));

    input.classList.add("border");
    console.log("i");
  };
});

// confirm the current page the user is on by checking which has the display of none and moving based on that info

//personal_info
//add_ons
//finishing_up
//thanks
prev_btn.addEventListener("click", () => {
 if (
    personal_info.classList.contains("none") &&
    finishing_up.classList.contains("none") &&
    thanks.classList.contains("none")
  ) {
    personal_info.classList.remove("none");
    add_ons.classList.add("none");
    btn_two.classList.remove("blue-background");
    btn_one.classList.add("blue-background");
  } else if (
    personal_info.classList.contains("none") &&
    add_ons.classList.contains("none") &&
    thanks.classList.contains("none")
  ) {
    add_ons.classList.remove("none");
    finishing_up.classList.add("none");
    btn_three.classList.remove("blue-background");
    btn_two.classList.add("blue-background");
  } else if (
    personal_info.classList.contains("none") &&
    add_ons.classList.contains("none") &&
    finishing_up.classList.contains("none")
  ) {
    finishing_up.classList.remove("none");
    thanks.classList.add("none");
    btn_four.classList.remove("blue-background");
    btn_three.classList.add("blue-background");
  }

  // console.log('gojo')
});

//hide the prev button on page one
next_page.onclick = () => {
  if (
    personal_info.classList.contains("none") &&
    finishing_up.classList.contains("none") &&
    thanks.classList.contains("none")
  ) {
    prev_btn.style.display = 'flex';
    next_page.classList.remove('none');
  } else if (
    personal_info.classList.contains("none") &&
    add_ons.classList.contains("none") &&
    thanks.classList.contains("none")
  ) {
    prev_btn.style.display = 'flex';
    next_page.classList.remove('none');
  } else if (
    personal_info.classList.contains("none") &&
    add_ons.classList.contains("none") &&
    finishing_up.classList.contains("none")
  ) {
    prev_btn.style.display = 'flex';
    next_page.classList.add('none');
  }else{
    prev_btn.style.display = 'none';
  }
}

