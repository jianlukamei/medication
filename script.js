$(document).ready(function () {
  $("#slider").owlCarousel({
    loop: true,
    margin: 30,
    items: 4,
    dots:true,
    responsive : {
        0 : {
          
          items:1,
        },
      
        480 : {
            items:2,
        },
        
        768 : {
           items: 2,
        },
        992 : {
            items: 3,
         },
         1024 : {
            items: 4,
         }
    }
  });

  $("#slider1").owlCarousel({
    loop: true,
    margin: 20,
    items: 3,
    dots:true,
    responsive : {
        0 : {
          
          items:1,
        },
      
        480 : {
            items:2,
        },
        
        768 : {
           items: 2,
        },
        992 : {
            items: 3,
         },
         1024 : {
            items: 3,
         }
    }
  });
});
