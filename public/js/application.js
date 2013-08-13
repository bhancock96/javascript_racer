$(document).ready(function() {
  $('#winner').hide();
  $(document).on('keyup', function(event){
    if (event.keyCode === 65){
      var activePosition = $('#Player1 td.active');
      var nextPosition = $('.active').index(activePosition) + 1;
      $(activePosition).removeClass('active').next().addClass('active');
    };

    if (event.keyCode === 76){
      var activePosition = $('#Player2 td.active');
      var nextPosition = $('.active').index(activePosition) + 1;
      $(activePosition).removeClass('active').next().addClass('active');
    }

    if ($(activePosition).siblings(':last').hasClass('active')){
      $(document).unbind('keyup');
      var winner = (($(activePosition)).parent().attr('id'))
      $('#winner').show();
      $('#winner').prepend('<p>' + winner + ' wins!!</p>')
    }
    
    $('#restart').on('click', function(){
      location.reload();
    });
  });
});
