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
        document.getElementById("nameDisplay").innerText = localStorage.getItem("name") || "No Name";
        document.getElementById("birthdayDisplay").innerText = "Birthday: " + (localStorage.getItem("birthday") || "Not set");
        document.getElementById("bioDisplay").innerText = localStorage.getItem("bio") || "No bio available";
        document.getElementById("quoteDisplay").innerText = "“" + (localStorage.getItem("quote") || "No quote") + "”";
        
        const profilePic = localStorage.getItem("profilePic");
        if (profilePic) {
            document.getElementById("profilePicDisplay").src = profilePic;
        }

        document.getElementById("postTweet").addEventListener("click", function () {
            const tweetText = document.getElementById("tweetInput").value;
            if (tweetText) {
                const tweetDiv = document.createElement("div");
                tweetDiv.classList.add("tweet");
        
                const textSpan = document.createElement("span");
                textSpan.textContent = tweetText;
        
                const likeSpan = document.createElement("span");
                likeSpan.classList.add("like");
                likeSpan.innerHTML = "♥";
        
                likeSpan.addEventListener("click", function () {
                    this.classList.toggle("liked");
                });
        
                tweetDiv.appendChild(textSpan);
                tweetDiv.appendChild(likeSpan);
        
                document.getElementById("tweets").prepend(tweetDiv);
                document.getElementById("tweetInput").value = "";
            }
        });
        
    }
});