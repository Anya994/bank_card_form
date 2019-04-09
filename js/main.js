$(document).ready(function() {
    $('#first_form').submit(function(e) {
      e.preventDefault();

      var card_number = $('#card_number').val();
      var card_number2 = $('#card_number2').val();
      var card_number3 = $('#card_number3').val();
      var card_number4 = $('#card_number4').val();
      var card_name = $('#card_name').val();
      var cvv = $('#cvv').val();
  
      // Красная рамка для некорректно заполненных полей 

      $(".error").remove();

      if (card_number.length< 4) {
        $('#card_number').css('border-color', 'red');
      }else {$('#card_number').css('border-color', '');}

  
      if (card_number2.length< 4) {
        $('#card_number2').css('border-color', 'red');
      }else {$('#card_number2').css('border-color', '');}

      
      if (card_number3.length< 4) {
        $('#card_number3').css('border-color', 'red');
      }else {$('#card_number3').css('border-color', '');}


      if (card_number4.length< 4) {
        $('#card_number4').css('border-color', 'red' );
      }else {$('#card_number4').css('border-color', '');}


      if (cvv.length< 3) {
        $('#cvv').css('border-color', 'red' );
      } else {$('#cvv').css('border-color', '');}

      if (card_name.length< 4) {
        $('#card_name').css('border-color', 'red').after('<span class="error">Минимальное количество символов: 4 </span>');
      } else {$('#card_name').css('border-color', '');}

    });

// Адапптивное меню

      $('.mini-menu-button').click(function() {
        $('.mini-menu-mobile').fadeIn(500);
      });
      $('.mini-menu-mobile').click(function() {
          $('.mini-menu-mobile').fadeOut(200);
      });

  });

