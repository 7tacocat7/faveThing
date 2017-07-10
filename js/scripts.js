$(document).ready(function() {
  $("#fave").submit(function(event) {
    event.preventDefault();
      var faveThing1 = $("#fave1").val();
      var faveThing2 = $("#fave2").val();
      var faveThing3 = $("#fave3").val();
      var faveThing4 = $("#fave4").val();
      var faveThings = [faveThing1, faveThing2, faveThing3];
      var selectFave = faveThings.slice(0,2);
      faveThings.pop();
      faveThings.push(faveThing4);
      $("#here").text(faveThings);
      $("#here2").text(selectFave);
      $("#return").show();
})
})
