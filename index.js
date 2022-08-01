   const person = {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
   }

      const ben= {
        name: "Ben",
        username: "sarah123",
        location: "Maidstone, Kent",
        avatar: "images/me.png",
        post: "images/me.png",
        comment: "Hey good lookings",
        likes: 21
      }

        const joseph= {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "Bonjoir i am french!",
        likes: 152
    }

function renderCardContent(data) {
  const { name, location, avatar, post, username, comment} = data;
  document.getElementById("insta__card").innerHTML =
    `<div class="card__top">
                <img class="insta-img" src="images/logo.png">
                <img class="avatar" src="images/me.png">
          </div>
          <div class="card__section">
              <div>
                  <img class="avatar" src="${avatar}">
              </div>
              <div>
                  <p><strong>${name}</strong></p>
                  <p class="location">${location}</p>
              </div>
         </div>

          <div>
              <img class="main__img" src="${post}">
          </div>
          <div>
              <ul class="icon__section">
                  <li id="love_heart" class="fa-solid fa-heart icon"></li>
                  <li><img class="icon" src="images/icon-comment.png"></li>
                  <li><img class="icon" src="images/icon-dm.png"></li>
              </ul>
          </div>

          <div class="lower_icon__section">
              <div>
                  <p id="like_btn"></p>
              </div>
                  <p class="spacing"><strong>${username}</strong> ${comment}</p>
            </div>
            <div class="flick__buttons">
           <button class="change__post__btn">Change post</button>
          </div>`
}
renderCardContent(person);

const loveHeart = document.getElementById("love_heart");
const likeBtn = document.getElementById("like_btn");
const heart = document.querySelector(".fa-heart");
const left = document.getElementById("left");
const changeBtn = document.querySelector(".change__post__btn");
const cardBody = document.getElementById("insta__card");



changeBtn.addEventListener("click", function () {
  renderCardContent(joseph);
  cardBody.classList.remove('card__height');
})

let loveCounter = 0;

loveHeart.addEventListener("click", function (){
  console.log("clicked");
  loveCounter += 1;
  likeBtn.textContent = loveCounter + " " + "likes";
  heart.classList.add('red');
  cardBody.classList.add('card__height');
});

loveHeart.addEventListener("dblclick", function () {
  console.log("double clicked");
  loveCounter = 0;
  heart.classList.remove('red');
  likeBtn.classList.add('hide');
  cardBody.classList.remove('card__height');
});
