$(function () {
  // Range slider

  $(".range-loan-sum").ionRangeSlider({
    onStart: function (data) {
      $(".range-loan-sum").attr("data-from", data.from);
      $(".grid-card__label-num").text(data.from);
    },
    onChange: function (data) {
      $(".range-loan-sum").attr("data-from", data.from);
      $(".grid-card__label-num").text(data.from);
    },
  });

  $(".range-loan-term").ionRangeSlider({
    onStart: function (data) {
      $(".range-loan-term").attr("data-from", data.from);
      $(".grid-card__label-date").text(data.from);
    },
    onChange: function (data) {
      $(".range-loan-term").attr("data-from", data.from);
      $(".grid-card__label-date").text(data.from);
    },
  });
});
