const users = [
    {
      name: "Sheriyansh",
      profile_pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR--YX9-g5P0TPHMLLRi375nptFMBXkurT29w&s",
      post_image: "https://i.ytimg.com/vi/pOGLAlGCKFE/maxresdefault.jpg",
      likes: "View likes",
      description: "Sheriyansh coding school Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      name: "Lakshaya Chaudhary",
      profile_pic: "https://yt3.googleusercontent.com/ERiTjj0Nq78Kc4fi6arZgehKdJYiLyl9lHRe9SIPBAX1jodqt3EwyQTT-b06Wn0NKOGASzpRqD4=s900-c-k-c0x00ffffff-no-rj",
      post_image: "https://yt3.googleusercontent.com/ERiTjj0Nq78Kc4fi6arZgehKdJYiLyl9lHRe9SIPBAX1jodqt3EwyQTT-b06Wn0NKOGASzpRqD4=s900-c-k-c0x00ffffff-no-rj",
      likes: "View likes",
      description: "Lakshaya Chaudhary Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      name: "Yogi Adityanath",
      profile_pic: "https://bsmedia.business-standard.com/_media/bs/img/misc/2023-03/30/full/20230306047L.jpg",
      post_image: "https://bsmedia.business-standard.com/_media/bs/img/misc/2023-03/30/full/20230306047L.jpg",
      likes: "View likes",
      description: "Yogi Adityanath Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      name: "Shraddha Kapoor",
      profile_pic: "https://images.indianexpress.com/2024/10/Shraddha-Kapoor.jpg",
      post_image: " https://drishtiandzahabia.com/cdn/shop/files/837ecddb-c18f-43e8-8388-c79f094efd5f.jpg?v=1695108186",
      likes: "View likes",
      description: "Shraddha Kapoor ❤️ Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      name: "Narendra Modi",
      profile_pic: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEYEI5nU2R_FOfpmEBKHJW7TXrT7PKTdmtAw&shttps://governancenow.com/temp/yogi_adityanath.jpg",
      post_image: "https://th-i.thgim.com/public/incoming/yaijra/article68277857.ece/alternates/FREE_1200/IMG_PM_Modi_takes_charge_2_1_5SCTKQL7.jpg",
      likes: "View likes",
      description: "Narendra Modi Lorem ipsum dolor sit amet consectetur adipisicing elit."
    }
  ];
  
let pageContainer = document.querySelector(".page-container");

users.forEach(function(elem){
    pageContainer.innerHTML += `<div class="users">
        <div class="user1">
            <div class="id">
                <img src="${elem.profile_pic}" alt="">
                <h5>${elem.name}</h5>
                
            </div>
            <img id="post1" src="${elem.post_image}" alt="">
            <div class="post-icons">
                <div class="like">
                   
                    <i class="ri-heart-line"></i>
                    <i class="ri-chat-3-line"></i>
                    <i class="ri-send-plane-line"></i>
                    <h6>${elem.likes}</h6>
                    <p>${elem.description}</p>
                </div>

                <div class="save">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Zm80-122 200-86 200 86v-518H280v518Zm0-518h400-400Z"/></svg>
                </div>
            </div>
        </div>
      </div>`
      
})


 