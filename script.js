document.addEventListener("DOMContentLoaded", function () {
    const createProfileBtn = document.getElementById("createProfile");
    const postTweetBtn = document.getElementById("postTweet");

    if (createProfileBtn) {
        createProfileBtn.addEventListener("click", function () {
            const name = document.getElementById("name").value;
            const birthday = document.getElementById("birthday").value;
            const bio = document.getElementById("bio").value;
            const quote = document.getElementById("quote").value;
            const profilePic = document.getElementById("profilePic").files[0];

            if (name && birthday && bio && quote && profilePic) {
                const reader = new FileReader();
                reader.onload = function (event) {
                    localStorage.setItem("profilePic", event.target.result);
                    localStorage.setItem("name", name);
                    localStorage.setItem("birthday", birthday);
                    localStorage.setItem("bio", bio);
                    localStorage.setItem("quote", quote);

                    window.location.href = "feed.html";
                };
                reader.readAsDataURL(profilePic);
            } else {
                alert("Please fill all fields and upload a picture.");
            }
        });
    }

    if (postTweetBtn) {
        document.getElementById("displayName").innerText = localStorage.getItem("name");
        document.getElementById("displayBirthday").innerText = "Birthday: " + localStorage.getItem("birthday");
        document.getElementById("displayBio").innerText = localStorage.getItem("bio");
        document.getElementById("displayQuote").innerText = localStorage.getItem("quote");
        document.getElementById("displayPic").src = localStorage.getItem("profilePic");

        postTweetBtn.addEventListener("click", function () {
            const tweetText = document.getElementById("tweetInput").value;
            if (tweetText) {
                const tweetContainer = document.getElementById("tweetsList");
                const tweetDiv = document.createElement("div");
                tweetDiv.classList.add("tweet");
                tweetDiv.innerHTML = `${tweetText} <span class="like-btn">❤️</span>`;

                tweetContainer.prepend(tweetDiv);
                document.getElementById("tweetInput").value = "";

                tweetDiv.querySelector(".like-btn").addEventListener("click", function () {
                    this.classList.toggle("liked");
                });
            }
        });
    }
});
