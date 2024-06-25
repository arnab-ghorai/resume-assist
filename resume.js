let projectCount = 1;
let educationCount = 1;

function addProject() {
  projectCount++;
  const projectContainer = document.createElement("div");
  projectContainer.className = "form-group project";
  projectContainer.innerHTML = `
            <div class="cols-2">
              <div>
                <label for="projectTitle">Project Title</label>
                <textarea
                  class="projectTitle"
                  rows="2"
                  required
                  oninput="updatePreview()"
                ></textarea>
              </div>
              <div>
                <label for="projectDescription">Project Description</label>
                <textarea
                  class="projectDescription"
                  rows="2"
                  required
                  oninput="updatePreview()"
                ></textarea>
              </div>
            </div>
            <button class="remove-btn" type="button" onclick="removeProject(this)">
              Remove 
            </button>
      `;
  document.getElementById("projectsContainer").appendChild(projectContainer);
}

function removeProject(button) {
  button.parentElement.remove();
  updatePreview();
}

function addEducation() {
  educationCount++;
  const educationContainer = document.createElement("div");
  educationContainer.className = "form-group education";
  educationContainer.innerHTML = `
        <div class="cols-2">
              <div>
                <label for="course">Course</label>
                <input
                  type="text"
                  class="course"
                  required
                  oninput="updatePreview()"
                />
              </div>
              <div>
                <label for="college">College / School</label>
                <input
                  type="text"
                  class="college"
                  required
                  oninput="updatePreview()"
                />
              </div> 
              <div>
                <label for="marks">Marks</label>
                <input
                  type="text"
                  class="marks"
                  required
                  oninput="updatePreview()"
                />
              </div>
              <div>
                <label for="passingYear">Passing Year</label>
                <input
                  type="date"
                  class="passingYear"
                  required
                  oninput="updatePreview()"
                />
              </div>
            </div>
            <button class="remove-btn" type="button" onclick="removeEducation(this)">
              Remove 
            </button>
      `;
  document.getElementById("educationContainer").appendChild(educationContainer);
}

function removeEducation(button) {
  button.parentElement.remove();
  updatePreview();
}

function updatePreview() {
  document.getElementById("displayName").innerText =
    document.getElementById("name").value;
  document.getElementById("displayEmail").innerText =
    document.getElementById("email").value;
  document.getElementById("displayPhone").innerText =
    document.getElementById("phone").value;
  document.getElementById("displayLinkedIn").innerText =
    document.getElementById("linkedin").value;
  document.getElementById("displayGitHub").innerText =
    document.getElementById("github").value;
  document.getElementById("displayLinkedInLink").href =
    document.getElementById("linkedin-link").value;
  document.getElementById("displayGitHubLink").href =
    document.getElementById("github-link").value;
  document.getElementById("displayProfileSummary").innerText =
    document.getElementById("profileSummary").value;
  document.getElementById("displayHardSkills").innerText =
    document.getElementById("hardSkills").value;
  document.getElementById("displaySoftSkills").innerText =
    document.getElementById("softSkills").value;
  document.getElementById("displayAchievements").innerText =
    document.getElementById("achievements").value;
  document.getElementById("displayLanguages").innerText =
    document.getElementById("languages").value;
  document.getElementById("displayInterests").innerText =
    document.getElementById("interests").value;

  const displayEducationContainer = document.getElementById(
    "displayEducationContainer"
  );
  displayEducationContainer.innerHTML = "";
  const educationSections = document.querySelectorAll(".form-group.education");
  educationSections.forEach((section, index) => {
    const course = section.querySelector(".course").value;
    const college = section.querySelector(".college").value;
    const marks = section.querySelector(".marks").value;
    const passingYear = section.querySelector(".passingYear").value;
    const educationElement = document.createElement("div");
    educationElement.className = "section-content";
    educationElement.innerHTML = `
    
      <p>
       ${course} | ${college}
      </p>
      <p>
        ${marks} | ${passingYear}
      </p>
    
    `;
    displayEducationContainer.appendChild(educationElement);
  });

  const displayProjectsContainer = document.getElementById(
    "displayProjectsContainer"
  );
  displayProjectsContainer.innerHTML = "";
  const projectSections = document.querySelectorAll(".form-group.project");
  projectSections.forEach((section, index) => {
    const title = section.querySelector(".projectTitle").value;
    const description = section.querySelector(".projectDescription").value;
    const projectElement = document.createElement("div");
    projectElement.innerHTML = `<strong>Title:</strong> <span>${title} </span><br>
    <strong>Description:</strong> <span>${description}</span>`;
    displayProjectsContainer.appendChild(projectElement);
  });
}

function generateResume() {
  updatePreview();
}

async function downloadPDF() {
  const element = document.getElementById("resume");

  const opt = {
    margin: [0, 0.5, 0, 0.5], // Margin: [top, left, bottom, right]
    filename: "resume.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
    pagebreak: { mode: ["avoid-all", "css", "legacy"] },
    enableLinks: true, // Enable clickable links
  };

  html2pdf().from(element).set(opt).save();
}
