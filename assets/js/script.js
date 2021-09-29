document.addEventListener("DOMContentLoaded", function () {
    var elems = document.querySelectorAll(".sidenav");
    var instances = M.Sidenav.init(elems);
  });

    //drop down trigger
    $(".dropdown-trigger").dropdown();

    //parallax
    $(document).ready(function(){
        $('.parallax').parallax();
      });


      