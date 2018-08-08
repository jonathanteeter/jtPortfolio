// smooth scroll using jquery

  //a[href^="#"] attribute selector this means your selecting the element with the given attribute.
  // the carat ^ means that you target all the selector 
  $(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();
    console.log(this);

    // scrollTop - returns the position of the given element.
    // animate - perform a custom animation of a set of CSS properties.
    $('html, body').animate({scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);

    console.log($.attr(this, 'href')); //returns attribute

  });