const markAllAsRead = document.querySelector('.buttonNotif')
const notifActive = document.getElementsByClassName('notifActive')
const userNotifications = document.getElementsByClassName('circle')
let number = document.querySelector('.number')

let counter = eval(number).textContent;

markAllAsRead.addEventListener('click', () => {
    document.querySelector('.number').textContent = "0";
    for (var e = 0; e < userNotifications.length; e++ ) {
        userNotifications[e].style.display= "none";
    }
    for (var i = 0; i < notifActive.length; i++ ) {
        notifActive[i].style.backgroundColor = 'white';
    }
})

for (let j = 0; j < notifActive.length; j++) {
    notifActive[j].addEventListener('click', () => {
      if (counter > 0) {
        counter--;
        document.querySelector('.number').textContent = counter.toString();
        notifActive[j].style.backgroundColor = 'white';
      if (notifActive[j].querySelector('.circle') !== null ) {
        notifActive[j].querySelector('.circle').style.display = 'none'; 
      }   
      }
    });
  }

/* 
  for (let index = 0; index < notifActive[j].childNodes.length; index++) {
    if (notifActive[j].childNodes[index].className == ('circle')) {
      notifActive[j].childNodes[index].style.display = 'none'
    }
  }
*/
