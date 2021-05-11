/*-----------------------------------------------------------------------------------
/* Styles Switcher
-----------------------------------------------------------------------------------*/

window.console =
  window.console ||
  (function () {
    var c = {};
    c.log = c.warn = c.debug = c.info = c.error = c.time = c.dir = c.profile = c.clear = c.exception = c.trace = c.assert = function () {};
    return c;
  })();

jQuery(document).ready(function ($) {
  $("ul.pattern .color1").click(function () {
    $("#color-opt").attr("href", "assets/css/colors/color1.css");
    return false;
  });

  $("ul.pattern .color2").click(function () {
    $("#color-opt").attr("href", "assets/css/colors/color2.css");
    return false;
  });

  $("ul.pattern .color3").click(function () {
    $("#color-opt").attr("href", "assets/css/colors/color3.css");
    return false;
  });

  $("ul.pattern .color4").click(function () {
    $("#color-opt").attr("href", "assets/css/colors/color4.css");
    return false;
  });
  $("ul.pattern .color5").click(function () {
    $("#color-opt").attr("href", "assets/css/colors/color5.css");
    return false;
  });
  $("ul.pattern .color6").click(function () {
    $("#color-opt").attr("href", "assets/css/colors/color6.css");
    return false;
  });

  $("ul.pattern li a").click(function (e) {
    e.preventDefault();
    $(this).parent().parent().find("a").removeClass("active");
    $(this).addClass("active");
    $("#themecontrol").removeClass("open");
  });
});

$("#themecontrol .bottom .settings").click(function () {
  var themecontrol = $("#themecontrol");
  if (themecontrol.hasClass("open")) {
    themecontrol.removeClass("open");
  } else {
    themecontrol.addClass("open");
  }
});

let text = $(".priority_text").html();
let lesstext = text.substring(0, 300);

console.log(text);
if (text.length > 300) {
  $(".priority_text")
    .html(lesstext)
    .append(
      `... <button class="read_more_link btn btn-success">Читать далее</button>`
    );
  $(".btn_toggle").html("Read More").addClass("read_more");
} else {
  $(".priority_text").html(text);
}
$("body").on("click", ".read_more_link", function (event) {
  event.preventDefault();
  $(this)
    .parent(".priority_text")
    .html(text)
    .append(
      `<button class="read_less_link btn btn-success">Читать меньше</button>`
    );
});
$("body").on("click", ".read_less_link", function (event) {
  event.preventDefault();
  $(this)
    .parent(".priority_text")
    .html(lesstext)
    .append(
      ` <button class="read_more_link btn btn-success">Читать больше</button>`
    );
});
