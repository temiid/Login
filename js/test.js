jQuery(function($) {
  //  At the focus
  $('.field-input').focus(function(){
    $(this).parent().addClass('is-focused has-label');
  });

  // to losing focus
  $('.field-input').blur(function(){
    $parent = $(this).parent();
    if($(this).val() == ''){
      $parent.removeClass('has-label');
    }
    $parent.removeClass('is-focused');
  });

  // if a field is filled it directly adds the class has-label
  $('.field-input').each(function(){
    if($(this).val() != ''){
      $(this).parent().addClass('has-label');
    }
  });

})


  $('button').on('click', function(){
    $('header').addClass('loader');
    // setTimeout(function(){
    //   $('header').removeClass('loader');
    // }, 1500);
  })