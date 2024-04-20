// setInterval(function () {
  let preavatar = document.querySelector("#avatar");
  let username = document.querySelector("#user-name");
  let lastUpt = document.querySelector("#upt");
  let followers = document.querySelector("#followers");
  let following = document.querySelector("#following");
  let reposCount = document.querySelector("#ReposCount");

  fetch(`https://api.github.com/users/amanprocoder4`)
    .then((rawData) => rawData.json())
    .then((data) => {
      console.log(data);
      let avatar = data.avatar_url;
      let name = data.login;
      let lastupdated = data.updated_at;
      let followerData = data.followers;
      let followingData = data.following;
      let repos = data.public_repos;


      preavatar.src = avatar;
      username.innerHTML = name;
      lastUpt.innerHTML = "last updated : " + lastupdated;
      followers.innerHTML = followerData;
      following.innerHTML = followingData;
      reposCount.innerHTML = repos;
    });
// }, 20000);
