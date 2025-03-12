document.addEventListener("DOMContentLoaded", function () {
    if (document.getElementById("createProfile")) {
        document.getElementById("createProfile").addEventListener("click", function () {
            localStorage.setItem("name", document.getElementById("name").value);
            localStorage.setItem("birthday", document.getElementById("birthday").value);
            localStorage.setItem("bio", document.getElementById("bio").value);
            localStorage.setItem("quote", document.getElementById("quote").value);
            
            const file = document.getElementById("profilePic").files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function (e) {
                    localStorage.setItem("profilePic", e.target.result);
                    window.location.href = "feed.html";
                };
                reader.readAsDataURL(file);
            } else {
                window.location.href = "feed.html";
            }
        });
    }

    if (document.getElementById("nameDisplay")) {
        document.getElementById("nameDisplay").innerText = localStorage.getItem("name");
        document.getElementById("birthdayDisplay").innerText = "Birthday: " + localStorage.getItem("birthday");
        document.getElementById("bioDisplay").innerText = localStorage.getItem("bio");
        document.getElementById("quoteDisplay").innerText = "“" + localStorage.getItem("quote") + "”";
        document.getElementById("profilePicDisplay").src = localStorage.getItem("profilePic");

        document.getElementById("postTweet").addEventListener("click", function () {
            const tweetText = document.getElementById("tweetInput").value;
            if (tweetText) {
                const tweetDiv = document.createElement("div");
                tweetDiv.classList.add("tweet");
                tweetDiv.innerHTML = tweetText + ' <span class="like">❤️</span>';
                
                document.getElementById("tweets").prepend(tweetDiv);
                document.getElementById("tweetInput").value = "";

                tweetDiv.querySelector(".like").addEventListener("click", function () {
                    this.classList.toggle("liked");
                });
            }
        });
    }
});
