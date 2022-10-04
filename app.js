let form = document.querySelector("form");
let output = document.getElementById("output");
let inputValue = document.querySelector("#input");

async function getUser(url) {
  try {
    let userdata = await fetch(url);
    return userdata.json();
    cardProfile(res);
  } catch (error) {
    createErrorcard("There is no profile with this username");
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  getUser("https://api.github.com/users/" + inputValue.value).then(
    (profile) => {
      console.log(profile);

      createCard(profile);
    }
  );
});

function createCard(user) {
  let container = document.querySelector(".cardContainer");
  container.classList.add("cardContainer");
  container.innerHTML = `
  <div id="profileCard">
      <div class="imgDiv">
        <img
          src="${user.avatar_url}"
          alt="imgProfile"
        />
      </div>
      <div class="contentDiv">
        <h3>${user.name}</h3>
        <p class="bio">
        ${user.bio}
        </p>
        <ul>
          <li><span>${user.followers}</span> &nbsp; Followers</li>
          <li><span>${user.following}</span> &nbsp; Following</li>
          <li><span>${user.public_repos}</span> &nbsp; Public Repos</li>
        </ul>
      </div>
    </div>`;
}

function createErrorcard(messsage) {
  let container = document.querySelector(".cardContainer");
  container.classList.add("cardContainer");
  container.innerHTML = `
  <div id="profileCard">
<h1>${messsage}</h1>
  </div>
  `;
}
