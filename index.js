document.addEventListener("DOMContentLoaded", function () {
    var skillsSection = document.getElementById("skills-section");
    var toggleSkillsButton = document.getElementById("toggle-skills");
    toggleSkillsButton.addEventListener("click", function () {
        if (skillsSection.style.display === "none") {
            skillsSection.style.display = "block";
            toggleSkillsButton.textContent = "Hide Skills Section";
        }
        else {
            skillsSection.style.display = "none";
            toggleSkillsButton.textContent = "Show Skills Section";
        }
    });
    // Initially set button text to "Hide Skills Section" if skills section is visible
    toggleSkillsButton.textContent = "Hide Skills Section";
});
