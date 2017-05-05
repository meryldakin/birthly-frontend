class FriendList {

  renderFriendList(data) {
    data.forEach(function (friend) {
      var html = `<li class="collection-item avatar"><span class="title">${friend.birthday}: ${friend.name}</span><p></p></li>`
      $(`#${friend.birthmonth.toLowerCase()}1`).append(html)
    })
  }

  resetView() {
      $('input#name').val('')
      $('input#birthday').val('')
      $('input[name="group1"]:checked').prop('checked', false)
      $('input#birthyear').val('')
      return $('.calendar').children().empty()
  }

  announce_friend(data) {
    $('#new-friend').empty()
    var friendName = data.name
    var friendDay = data.birthday
    var friendMonth = data.birthmonth
    var html = `New friend added! ${friendName}, ${friendMonth} ${friendDay} :)`
    $('#new-friend').append(html)

  }

}
