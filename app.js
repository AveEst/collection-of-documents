var typed=new Typed (".auto-input", {
    strings:["Ave", "Ave Arak"],
    typeSpeed:100,
    backSpeed:100,
    loop:true
})

var tablinks=document.getElementsByClassName("tab-links");
var tabcontents=document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

window.onscroll = function() {
    showBackToTopButton();
  };
  
  function showBackToTopButton() {
    var backToTopButton = document.getElementById("backToTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      backToTopButton.classList.add("show");
    } else {
      backToTopButton.classList.remove("show");
    }
  }
  
  function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
  }




  document.addEventListener("DOMContentLoaded", function () {
    const buttonContainer = document.querySelector(".button-container");
    const itemList = document.querySelector(".work-list");
    const seeMoreBtn = document.getElementById("see-more-btn");
    const seeLessBtn = document.getElementById("see-less-btn");
    const items = itemList.querySelectorAll(".work");
    const itemsToShow = 4;
    let visibleItems = itemsToShow;
  
    function toggleButtons() {
      const remainingItems = items.length - visibleItems;
      seeMoreBtn.style.display = remainingItems > 0 ? "block" : "none";
      seeLessBtn.style.display = visibleItems > itemsToShow ? "block" : "none";
    }
  
    function showItems() {
      items.forEach((item, index) => {
        if (index < visibleItems) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
  
      toggleButtons();
    }
  
    showItems();
  
    seeMoreBtn.addEventListener("click", function (event) {
      event.preventDefault();
      const remainingItems = items.length - visibleItems;
  
      if (remainingItems > 0) {
        visibleItems += itemsToShow;
        showItems();
      }
    });
  
    seeLessBtn.addEventListener("click", function (event) {
      event.preventDefault();
      const portfolioCol1 = document.getElementById("portfolio-col-1");
      portfolioCol1.scrollIntoView({ behavior: "smooth" });
  
      visibleItems = itemsToShow;
      showItems();
    });
  });




