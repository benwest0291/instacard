const loveHeart = document.getElementById("love_heart");
const likeBtn = document.getElementById("like_btn");
const heart = document.querySelector(".fa-heart");
console.log(heart);

let loveCounter = 0;

console.log(loveHeart);
console.log(likeBtn);


loveHeart.addEventListener("click", function(){
  console.log("clicked");
  loveCounter += 1
  likeBtn.textContent = loveCounter + " " + "likes";
  heart.style.color = 'red';
});


   const person = {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
   }
