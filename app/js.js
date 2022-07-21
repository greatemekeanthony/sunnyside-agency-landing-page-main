const toggleButton=document.getElementsByClassName('menu-toggle')[0]
const navLink=document.getElementsByClassName('menu')[0]

toggleButton.addEventListener('click',()=>{
    navLink.classList.toggle('active')
})





// const navSlide = () => {
//     const linkcontainer =document.querySelector('.link-container')
//     const menutoggle =document.querySelector('.menu-toggle')
//     const men =document.querySelector('.menu')

//     function pop=(linkcontainer, menutoggle, men) {
//             $(this).parent().next(".menu").toggle(0 , "display");
//          });

    //   MOBILE FOUR
    // var menu = "close";
    // (".link-container .menu-toggle").click(function() {
        
    //     if (menu === "close") {
    //           $(this).parent().next(".menu").css("transform", "translate(0, 0)");
    //           menu = "open";
    //     } else {
    //           $(this).parent().next(".menu").css("transform", "translate(0, -999%)");
    //           menu = "close";
    //     }
    // });


// }
// navSlide()

// $(".link-container .menu-toggle").click(function() {
//     $(this).parent().next(".menu").toggle(0 , "display");
// });


// (document).ready(function() {

//     //MOBILE ONE AND MOBILE THREE
//     var menu = "close";
//     (".mobile-one .menu-toggle, .mobile-three .menu-toggle").click(function() {
        
//         if (menu === "close") {
//               $(this).parent().next(".mobile-nav").css("transform", "translate(0, 0)");
//               menu = "open";
//         } else {
//               $(this).parent().next(".mobile-nav").css("transform", "translate(-100%, 0)");
//               menu = "close";
//         }
//     });
    
//     //MOBILE TWO
//     $(".link-container .menu-toggle").click(function() {
//         $(this).parent().next(".menu").toggle(0 , "display");
//     });
    
//   
    
    
    
    
//     });