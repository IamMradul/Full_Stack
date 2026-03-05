function Body() {
    return (
        <>
        <div>
            <h2>About Me</h2>
            <p>Focused on building clean, user-friendly web experiences and practical software solutions. I enjoy solving problems, learning new tools, and collaborating on real-world projects.</p>
            <div class="highlights">
                <span class="pill">Web Development</span>
                <span class="pill">Java & DSA</span>
                <span class="pill">Cybersecurity</span>
                <span class="pill">UI/UX Basics</span>
            </div>
        </div>
        <div class="stats">
            <div class="stat">
                <h3>6+</h3>
                <p>Projects Built</p>
            </div>
            <div class="stat">
                <h3>2</h3>
                <p>Major Apps</p>
            </div>
            <div class="stat">
                <h3>2028</h3>
                <p>Graduation Year</p>
            </div>
        </div>
    
        <section>
            <h2>Projects</h2>
            <div class="grid">
            <article class="card project">
                <h3>Ira - The Anti-Distraction Bot <a href="https://github.com/IamMradul/Ira-The-Anti-Distraction-Bot">GitHub</a></h3>
                <p>Discord bot that helps users stay focused by reducing distractions and promoting productivity.</p>
                <div class="tags">
                    <span>Bot</span><span>Automation</span><span>Productivity</span>
                </div>
            </article>
            <article class="card project">
                <h3>News App <a href="https://github.com/IamMradul/News-app">GitHub</a></h3>
                <p>News aggregation app that fetches and displays top headlines with a clean, readable UI.</p>
                <div class="tags">
                    <span>API</span><span>UI</span><span>JavaScript</span>
                </div>
            </article>
            <article class="card project">
                <h3>Student Management Portal <a href="github.com">GitHub</a></h3>
                <p>Portal to manage students, courses, and records for universities.</p>
                <div class="tags">
                    <span>CRUD</span><span>Database</span><span>Admin</span>
                </div>
            </article>
            <article class="card project">
                <h3>Encrypter <a href="github.com">GitHub</a></h3>
                <p>Encrypt and decrypt messages securely using a private key flow.</p>
                <div class="tags">
                    <span>Security</span><span>Cryptography</span><span>CLI</span>
                </div>
            </article>
            </div>
        </section>
        <section>
            <h2>Skills</h2>
            <ul class="chips">
                <li>JAVA</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
            </ul>
        </section>
        <section>
            <h3>Qualification</h3>
            <table border="2">
                <thead>
                    <tr>
                        <th>Degree</th>
                        <th>Specialization</th>
                        <th>Institute</th>
                        <th>Year of passing</th>
                        <th>Grade</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>B.E.</td>
                        <td>CSE</td>
                        <td>CU</td>
                        <td>2028</td>
                        <td>9 CGPA</td>
                    </tr>
                    <tr>
                        <td>Intermediate</td>
                        <td>Maths</td>
                        <td>LPS</td>
                        <td>2024</td>
                        <td>85 %</td>
                    </tr>
                    <tr>
                        <td>High School</td>
                        <td>General Studies</td>
                        <td>LPS</td>
                        <td>2022</td>
                        <td>90 %</td>
                    </tr>
                </tbody>
            </table>
        </section>
        <section>
            <h2>Experience & Activities</h2>
            <div class="timeline">
                <div class="timeline-item">
                    <h4>Personal Projects & Open Source</h4>
                    <p>Built multiple web and automation projects, learning full stack foundations and collaboration workflows.</p>
                </div>
                <div class="timeline-item">
                    <h4>Academic Focus</h4>
                    <p>Strong foundation in core CS subjects, data structures, and problem-solving practice.</p>
                </div>
            </div>
        </section>
        </>
    )
}

export default Body;