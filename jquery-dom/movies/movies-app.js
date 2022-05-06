

$('#movie-form').submit(function(evt){
  let title = $("#title").val();
  let rating = $("#rating").val();
  evt.preventDefault();
  const newItem = $('<li>');
  newItem.text(title + '  -  ' + rating);
  const deleteBtn = $('<button>Delete</button>');
  deleteBtn.addClass('deleter');
  deleteBtn.appendTo(newItem);
  newItem.appendTo($('ul'));
});

$('ul').click(function(evt){
  console.log(evt.target);
  evt.target
  .closest('li')
  .remove();
});
