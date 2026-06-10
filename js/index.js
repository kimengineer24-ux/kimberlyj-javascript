const footer = document.createElement("footer");

document.body.appendChild(footer);

const today = new Date();

const thisYear = today.getFullYear();

const copyright = document.createElement("p");

copyright.innerHTML = `Kimberly J. Millington © ${thisYear}`;

footer.appendChild(copyright);

const skills = ["JavaScript", "HTML", "CSS", "GitHub", "Digital Marketing"];

const skillsSection = document.getElementById("Skills");

const skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement("li");
  skill.innerText = skills[i];
  skillsList.appendChild(skill);
}

const messageForm = document.getElementsByName("leave_message")[0];
messageForm.addEventListener("submit", (event) => {
  event.preventDefault();

const usersName = event.target.usersName.value;
const usersEmail = event.target.usersEmail.value;
const usersMessage = event.target.usersMessage.value;


console.log(usersName);
console.log(usersEmail);
console.log(usersMessage);
const messageSection = document.getElementById("messages");

const messageList = messageSection.querySelector("ul");

const newMessage = document.createElement("li");

newMessage.innerHTML = `
<a href="mailto:${usersEmail}">${usersName}</a>
<span> wrote: ${usersMessage}</span>
`;
const removeButton = document.createElement("button");

removeButton.innerText = "remove";

removeButton.type = "button";
removeButton.addEventListener("click", () => {
  const entry = removeButton.parentNode;
  entry.remove();
});
newMessage.appendChild(removeButton);
messageList.appendChild(newMessage);

event.target.reset();

});
fetch("https://api.github.com/users/kimengineer24-ux/repos")
  .then((response) => response.json())
  .then((repositories) => {
    const projectSection = document.getElementById("Projects");
const projectList = projectSection.querySelector("ul");
for (let i = 0; i < repositories.length; i++) {
  const project = document.createElement("li");
  project.innerText = repositories[i].name;
  projectList.appendChild(project);
}
    console.log(repositories);
  })
  .catch((error) => {
    console.error(error);
  });