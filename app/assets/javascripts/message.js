$(function(){ 
  function buildHTML(message){
    var messageimage = ( message.image === null) ? `</div></div>`: `</div>
    <img src=${message.image} >
  </div>`; 

    var html = `<div class="message" data-message-id=${message.id}>
                <div class="upper-message">
                  <div class="upper-message__user-name">
                    ${message.user_name}
                  </div>
                  <div class="upper-message__date">
                    ${message.date}
                  </div>
                </div>
                <div class="lower-message">
                  <p class="lower-message__content">
                    ${message.content}
                  </p>
                  ${messageimage}`
  return html;
  }
$('.js-form').on('submit', function(e){
 e.preventDefault();
 var formData = new FormData(this);
 var url = $(this).attr('action')
 $.ajax({
   url: url,
   type: "POST",
   data: formData,
   dataType: 'json',
   processData: false,
   contentType: false
 })
  .done(function(data){
    var html = buildHTML(data);
    $('.contents_messages').append(html);
    $('.contents_messages').animate({scrollTop: $('.contents_messages')[0].scrollHeight}, 'fast');   
    $('form')[0].reset();
  })
   .fail(function(){
     alert('error');
   });
   return false;
   
 });
 
 
});