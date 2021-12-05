const navigationMenu = document.querySelector(".navigation-menu")
const menuBtn = document.querySelector(".navigation-icon")
const menuCross = document.querySelector(".navigation-cross")
let rellax = new Rellax('.rellax');
AOS.init({
    mirror: true
});

menuBtn.addEventListener("click", e => {
    e.preventDefault()
    navigationMenu.style.left = "0"
    menuBtn.style.display = "none"
    menuCross.style.display = "block"
})

menuCross.addEventListener("click", e => {
    e.preventDefault()
    navigationMenu.style.left = "-100%"
    menuBtn.style.display = "block"
    menuCross.style.display = "none"
})


// $('.counter-count').each(function () {
//     $(this).prop('Counter',0).animate({
//         Counter: $(this).text()
//     }, {
      
//       //chnage count up speed here
//         duration: 4000,
//         easing: 'swing',
//         step: function (now) {
//             $(this).text(Math.ceil(now));
//         }
//     });
// });

$(window).scroll(testScroll);
var viewed = false;

function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}


function testScroll() {
    if (isScrolledIntoView($(".counter-count")) && !viewed) {
        viewed = true;
        $('.counter-count').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
      });
    }
  }

