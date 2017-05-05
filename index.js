$(document).ready(function(){
  var view = new FriendList()

  toggleBirthdays()
  $('.collapsible').collapsible()

  Friend.all().then(function(friends){
    view.renderFriendList(friends)
  })

  $('form#create-birthday').on('submit', function (event) {
    event.preventDefault()
    var $friendName = $('input#name').val()
    var $friendDay = $('input#birthday').val()
    var $friendMonth = $('input[name="group1"]:checked').attr("id")
    var $friendYear = $('input#birthyear').val()

    Friend.create({
      friend: {
        name: $friendName,
        birthday: $friendDay,
        birthyear: $friendYear,
        birthmonth: $friendMonth
      }
    }).then(friend => view.announce_friend(friend))
      .done(function () {
        view.resetView()
        Friend.all().then(friends => view.renderFriendList(friends))
      })
  })

})
function toggleBirthdays() {
  $('#toggle-btn').on('click', function () {
    for (var i = 0; i < 12; i++) {
      $(".collapsible").collapsible('open', i);
    }
  })
}
