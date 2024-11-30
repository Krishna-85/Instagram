
var users = [
  {
      "username": "Shraddhakapoor",
      "userlocation": "Paris, France",
      "userprofile": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202410/shraddha-kapoor-141825285-16x9_0.jpg?VersionId=APQQ9boRsLXjCFHLSUPkaAfN72Bdw5So",
      "userPost": "https://drishtiandzahabia.com/cdn/shop/files/837ecddb-c18f-43e8-8388-c79f094efd5f.jpg?v=1695108186",
      "like": true,
      "likeCount": 1200,
      "commentCount": 45,
      "shareCount": 30,
      "caption": "Red Chilli. #ParisVibes #TravelGoals",
      "timeAgoUploaded": 5 
  },
  {
      "username": "Narendramodi",
      "userlocation": "Mumbai, India",
      "userprofile": "https://yt3.googleusercontent.com/NYTMmmC6waUzkAsWHXpIJGfUG4HOvZqszHsUI0Los1pgSXsd4XKxALEXimATCpaSXDB_A4LoGg=s900-c-k-c0x00ffffff-no-rj",
      "userPost": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202206/Modi_yogi_together_1200x768.jpeg?VersionId=tJvD2_ESMs1KnpDXTL2HAudkNKkQZw2U",
      "like": false,
      "likeCount": 530,
      "commentCount": 20,
      "shareCount": 12,
      "caption": "Double engine Government❤ #modisarkar",
      "timeAgoUploaded": 12
  },
  {
      "username": "Sheryiansh_coding_school",
      "userlocation": "Bhopal, India",
      "userprofile": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR--YX9-g5P0TPHMLLRi375nptFMBXkurT29w&s",
      "userPost": "https://i.ytimg.com/vi/pOGLAlGCKFE/maxresdefault.jpg",
      "like": true,
      "likeCount": 800,
      "commentCount": 60,
      "shareCount": 25,
      "caption": "Boost your skill. #bootcamp #kodr",
      "timeAgoUploaded": 24
  },
  {
      "username": "artsy_corner",
      "userlocation": "London, UK",
      "userprofile": "https://images.unsplash.com/photo-1647205552933-12e3dfdb77b5?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "userPost": "https://plus.unsplash.com/premium_photo-1692650759141-ed71d789ef1b?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "like": true,
      "likeCount": 950,
      "commentCount": 78,
      "shareCount": 40,
      "caption": "New piece in the gallery. Let me know your thoughts! 🎨 #AbstractArt",
      "timeAgoUploaded": 7
  },
  {
      "username": "adventure_seeker",
      "userlocation": "Kyoto, Japan",
      "userprofile": "https://images.unsplash.com/photo-1681562978415-bbf1dfe59353?q=80&w=2624&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "userPost": "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "like": false,
      "likeCount": 600,
      "commentCount": 33,
      "shareCount": 18,
      "caption": "The serenity of Kyoto's bamboo forest. 🌳 #NatureLover",
      "timeAgoUploaded": 18
  }
]
let posts = document.querySelector(".posts")
function insta(){
  let clutter = "";
  
  users.forEach(function(val, index){
    clutter += `    <div class="page">
        <div class="profiles">
        <img src="${val.userprofile}" alt="">
        <div class="prof-name">
        <h5>${val.username}</h5>
        <p> <i class="ri-music-2-fill"></i> Harkirat Sangha, Akhiyan</p>
      </div>
    </div>
    <div class="post1">
      <img id="${index}" src="${val.userPost}" alt="">
      <div class="reaction">
        <div  class="likes">
     ${val.like ? `   <i style="color :red" class="ri-heart-fill"></i>`: `  <i class="ri-heart-line"></i>`}
       <p>${val.likeCount}</p>
        <i class="ri-chat-3-line"></i>
        <p>${val.commentCount}</p>
        <i class="ri-send-plane-line"></i>
          <p>${val.shareCount}</p>
      </div>
        <div class="save">
           
        </div>
         <div class="description">
          <p>${val.caption}</p>
          <p>View all comments</p>
        <p>${val.timeAgoUploaded} days ago</p>
        </div>
      </div>
    </div>

        
       
      </div>`

      posts.innerHTML = clutter
      })
}
insta()

posts.addEventListener("dblclick", function(dets){
// console.log(users[dets.target.id]);
if(!users[dets.target.id].like===true){
users[dets.target.id].like=true
users[dets.target.id].likeCount++

}else{
users[dets.target.id].like=false
users[dets.target.id].likeCount--
}
insta()
// console.log(users[dets.target.id].like)

})
posts.addEventListener("click", function(dets){
  // console.log(users[dets.target.id]);
  if(!users[dets.target.id-10].like===true){
  users[dets.target.id-10].like=true
  users[dets.target.id-10].likeCount++
  
  }else{
  users[dets.target.id-10].like=false
  users[dets.target.id-10].likeCount--
  }
  insta()
  // console.log(users[dets.target.id].like)
  
  })
id=`${index+10}`