const post = document.querySelector("#post");
const name = document.querySelector("#name");
const location1 = document.querySelector("#location");
const experience = document.querySelector("#experience");
const postingContainer = document.querySelector("#New_posting");
const postForm = document.querySelector(".post_job");
const searchInput = document.querySelector("#search_job");

let jobs = [];

postForm.addEventListener("submit", newJob);

if (searchInput) {
    searchInput.addEventListener("input", renderJobs);
}

function newJob(e) {
    e.preventDefault();

    const jobPost = post.value.trim();
    const jobName = name.value.trim();
    const jobLoc = location1.value.trim();
    const jobExperience = experience.value.trim();

    jobs.push({
        id: Date.now(),
        post: jobPost,
        company: jobName,
        location: jobLoc,
        experience: jobExperience
    });

    postForm.reset();
    renderJobs();
}

function renderJobs() {
    const searchTerm = searchInput ? searchInput.value.trim().toLowerCase() : "";

    const filteredJobs = jobs.filter((job) => {
        return (
            job.post.toLowerCase().includes(searchTerm) ||
            job.company.toLowerCase().includes(searchTerm) ||
            job.location.toLowerCase().includes(searchTerm) ||
            job.experience.toLowerCase().includes(searchTerm)
        );
    });

    postingContainer.innerHTML = "";

    if (!filteredJobs.length) {
        postingContainer.innerHTML = "<p>No jobs found.</p>";
        return;
    }

    filteredJobs.forEach((job) => {
        const card = document.createElement("div");
        card.className = "job-card";

        card.innerHTML = `
            <h2>${escapeHTML(job.post)}</h2>
            <p><strong>Company:</strong> ${escapeHTML(job.company)}</p>
            <p><strong>Location:</strong> ${escapeHTML(job.location)}</p>
            <p><strong>Experience:</strong> ${escapeHTML(job.experience)} years</p>
            <div class="job-actions">
                <button type="button" class="update-btn" data-id="${job.id}">Update</button>
                <button type="button" class="delete-btn" data-id="${job.id}">Delete</button>
            </div>
        `;

        postingContainer.appendChild(card);
    });

    attachActionEvents();
}

function attachActionEvents() {
    const updateButtons = document.querySelectorAll(".update-btn");
    const deleteButtons = document.querySelectorAll(".delete-btn");

    updateButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const id = Number(button.dataset.id);
            updateJob(id);
        });
    });

    deleteButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const id = Number(button.dataset.id);
            deleteJob(id);
        });
    });
}

function updateJob(id) {
    const job = jobs.find((item) => item.id === id);
    if (!job) {
        return;
    }

    const updatedPost = prompt("Update job role:", job.post);
    if (updatedPost === null) {
        return;
    }

    const updatedCompany = prompt("Update company name:", job.company);
    if (updatedCompany === null) {
        return;
    }

    const updatedLocation = prompt("Update location:", job.location);
    if (updatedLocation === null) {
        return;
    }

    const updatedExperience = prompt("Update experience in years:", job.experience);
    if (updatedExperience === null) {
        return;
    }

    job.post = updatedPost.trim() || job.post;
    job.company = updatedCompany.trim() || job.company;
    job.location = updatedLocation.trim() || job.location;
    job.experience = updatedExperience.trim() || job.experience;

    renderJobs();
}

function deleteJob(id) {
    jobs = jobs.filter((job) => job.id !== id);
    renderJobs();
}

function escapeHTML(value) {
    return value
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}
