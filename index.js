$(document).ready(function(){
  console.log("Document Loaded!")
  $.ajax({
    url: "http://localhost:3000/api/v1/friends",
    method: "GET"
  }).then(formatFriends)


  $('form#create-birthday').on('submit', function (event) {
    event.preventDefault()
    const $friendName = $('input#name').val()
    const $friendDay = $('input#birthday').val()
    const $friendMonth = $('input[name="group1"]:checked').attr("id")
    const $friendYear = $('input#birthyear').val()

    $.ajax({
      url: "http://localhost:3000/api/v1/friends",
      method: "POST",
      data: {
        friend: {
          name: $friendName,
          birthday: $friendDay,
          birthyear: $friendYear,
          birthmonth: $friendMonth

        }
      }
    }).then(function(data) {
      console.log(data)
      var friendName = data.name
      var friendDay = data.birthday
      var friendMonth = data.birthmonth
      var html = `<h3>New friend added! ${friendName}, ${friendMonth} ${friendDay} :)</h3>`
      $('#bday-list').prepend(html)
    })




  })

})

function formatFriends(data) {
  data.forEach(function (friend) {
    var html = `<li class="collection-item">${friend.birthday}:  ${friend.name}</li>`
    $(`#${friend.birthmonth.toLowerCase()}1`).append(html)
  })
}
