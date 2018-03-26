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
    let classNames = $(this)[0].children[0].attributes[0].nodeValue;
    getRefForCircleImg(src, classNames);
  });
});

function callPage(page, classNames=false){
  $.ajax({
    url: page,
    type: "GET",
    dataType: "html",
    success: function(response){
      if (!classNames)
        $(".content").html(response);
      else {
        if (!classNames.includes("active")){
          console.log("adding class active");
          $(classNames.split(" ").join(".")).addClass("active");
        } else {
          console.log("removing active class");
          $(".circle-pic." + classNames).removeClass("active");
        }
      }
    },
    error: function(error) {
      console.log("the page was not loaded!", error);
    }
  });
};

function getRefForCircleImg(alt, classNames) {
  if (alt === "trans-american-building")
    return callPage("./src/pages/projects.html", classNames);
  if (alt === "diamond-head")
    return callPage("./src/pages/updates.html", classNames);
  if (alt === "HI")
    return callPage("./src/pages/notes.html", classNames);
}
