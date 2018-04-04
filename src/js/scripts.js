$(document).ready(function(){
   $("a.nav-link-header").on("click", function(e){
    e.preventDefault();
    var pageRef = $(this).attr('href');
    callPage(pageRef);
  });
});

function callPage(page){
  $.ajax({
    url: page,
    type: "GET",
    dataType: "html",
    success: function(response){
      $(".content").html(response);
    },
    error: function(error) {
      console.log("the page was not loaded!", error);
    }
  });
};
