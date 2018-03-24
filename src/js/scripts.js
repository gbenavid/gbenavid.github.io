$(document).ready(function(){
   $("a.nav-link-header").on("click", function(e){
    e.preventDefault();
    var pageRef = $(this).attr('href');
    callPage(pageRef);
  });

  $(window).resize(function() {
    if ($(window).width() < 600)
      $(".circle-pic-wrapper").addClass("clickable-on-mobile");
    else
      $(".circle-pic-wrapper").removeClass("clickable-on-mobile");
  });

  $(document).on("click", ".clickable-on-mobile", function(e) {
    e.preventDefault();
    let src = $(this)[0].children[0].alt;
    getRefForCircleImg(src);
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

function getRefForCircleImg(alt) {
  if (alt === "trans-american-building")
    return callPage("./src/pages/projects.html");
  if (alt === "diamond-head")
    return callPage("./src/pages/updates.html");
  if (alt === "HI")
    return callPage("./src/pages/notes.html");
}
