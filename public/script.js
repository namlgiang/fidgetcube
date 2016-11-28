$(document).ready(function() {
  $(".color li").click(function() {
    $(".color li").removeClass("active");
    $(this).addClass("active");
    var id=$(this).index(".color li");
    $(".product").css("background-image", "url(product/"+id+".jpg)");
    $(".form").removeClass("active");
    $(".form-" + id).addClass("active");
    $(".purchase>h2").text($(".form-" + id).attr("pname"));
  });

  $(".buy").click(function() {
    $('html, body').animate({
      scrollTop: $(".product").offset().top - 200
    }, 1000);
  });

  $(".tab>div").click(function() {
    $(".tab>div").removeClass("active");

    $(".tab-content>div").removeClass("active");
    $(".tab-content ." + $(this).attr("class")).addClass("active");

    $(this).addClass("active");
  });
});
