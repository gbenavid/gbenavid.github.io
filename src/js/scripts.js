$(document).ready(function(){
  $("a").on("click", function(e){
    e.preventDefault();
    var pageRef = $(this).attr('href');
    callPage(pageRef);
  });
});

function callPage(page){
  $.ajax({
    url: page,
    type: "GET",
    dataType: "text",
    success: function(response){
      $(".content").html(response);
    },
    error: function(error) {
      console.log("the page was not loaded!", error);
    }
  });
};
