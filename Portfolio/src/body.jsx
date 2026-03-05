import { useState } from 'react'

function Body({ isMobile, theme }) {
    const [hoveredProject, setHoveredProject] = useState(-1)
    const [hoveredStat, setHoveredStat] = useState(-1)
    const [hoveredSkill, setHoveredSkill] = useState('')
    const projects = [
        {
            title: 'Ira - The Anti-Distraction Bot',
            href: 'https://github.com/IamMradul/Ira-The-Anti-Distraction-Bot',
            desc: 'Discord bot that helps users stay focused by reducing distractions and promoting productivity.',
            tags: ['Bot', 'Automation', 'Productivity'],
        },
        {
            title: 'News App',
            href: 'https://github.com/IamMradul/News-app',
            desc: 'News aggregation app that fetches and displays top headlines with a clear and readable interface.',
            tags: ['API', 'UI', 'JavaScript'],
        },
        {
            title: 'Student Management Portal',
            href: 'https://github.com/IamMradul',
            desc: 'Portal to manage students, courses, and records for universities with clean workflows.',
            tags: ['CRUD', 'Database', 'Admin'],
        },
        {
            title: 'Encrypter',
            href: 'https://github.com/IamMradul',
            desc: 'Tool to encrypt and decrypt messages securely using a key-based approach.',
            tags: ['Security', 'Cryptography', 'CLI'],
        },
    ]

    const stats = [
        { value: '6+', label: 'Projects Built' },
        { value: '2', label: 'Major Applications' },
        { value: '2028', label: 'Graduation Year' },
    ]

    const skills = ['Java', 'HTML', 'CSS', 'JavaScript', 'React', 'Problem Solving', 'Cybersecurity Basics']

    const rows = [
        ['B.E.', 'CSE', 'Chandigarh University', '2028', '9 CGPA'],
        ['Intermediate', 'Mathematics', 'LPS', '2024', '85%'],
        ['High School', 'General Studies', 'LPS', '2022', '90%'],
    ]

    const styles = {
        section: {
            marginTop: isMobile ? '28px' : '34px',
            animation: 'riseUp 0.9s ease both',
        },
        sectionTitle: {
            margin: 0,
            fontSize: isMobile ? '1.35rem' : '1.55rem',
            color: theme.heading,
            fontFamily: 'Playfair Display, Georgia, serif',
            letterSpacing: '0.01em',
        },
        aboutText: {
            color: theme.text,
            lineHeight: 1.75,
            margin: '12px 0 0',
            maxWidth: '74ch',
        },
        highlights: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
            marginTop: '16px',
        },
        highlightPill: {
            fontSize: '0.82rem',
            fontWeight: 700,
            color: theme.chipText,
            background: theme.chipBg,
            border: `1px solid ${theme.chipBorder}`,
            borderRadius: '999px',
            padding: '7px 14px',
        },
        statsGrid: {
            marginTop: '18px',
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
            gap: '12px',
        },
        statCard: {
            background: theme.panelBg,
            border: `1px solid ${theme.panelBorder}`,
            borderRadius: '16px',
            padding: '16px',
            boxShadow: theme.panelShadow,
            transition: 'transform 170ms ease, box-shadow 170ms ease',
        },
        statValue: {
            margin: 0,
            color: theme.heading,
            fontSize: '1.7rem',
            fontWeight: 800,
        },
        statLabel: {
            margin: '6px 0 0',
            color: theme.mutedText,
            fontWeight: 600,
            fontSize: '0.9rem',
        },
        projectsGrid: {
            marginTop: '16px',
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, minmax(0, 1fr))',
            gap: '14px',
        },
        projectCard: {
            background: theme.panelBgStrong,
            border: `1px solid ${theme.panelBorder}`,
            borderRadius: '16px',
            padding: '16px 16px 14px',
            boxShadow: theme.panelShadow,
            transition: 'transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease',
        },
        projectHeader: {
            margin: 0,
            fontSize: '1.03rem',
            color: theme.heading,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '8px',
            flexWrap: 'wrap',
        },
        projectLink: {
            textDecoration: 'none',
            color: theme.eyebrow,
            fontWeight: 800,
            fontSize: '0.85rem',
            letterSpacing: '0.02em',
        },
        projectDesc: {
            margin: '10px 0 0',
            color: theme.text,
            lineHeight: 1.65,
            fontSize: '0.94rem',
        },
        tags: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px',
            marginTop: '12px',
        },
        tag: {
            fontSize: '0.75rem',
            fontWeight: 700,
            color: theme.chipText,
            background: theme.chipBg,
            borderRadius: '999px',
            padding: '6px 10px',
            border: `1px solid ${theme.chipBorder}`,
        },
        skillWrap: {
            marginTop: '14px',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
            padding: 0,
            listStyle: 'none',
        },
        skill: {
            background: theme.skillBg,
            color: theme.skillText,
            fontWeight: 700,
            borderRadius: '11px',
            padding: '8px 12px',
            letterSpacing: '0.01em',
            fontSize: '0.82rem',
            transition: 'transform 170ms ease, box-shadow 170ms ease',
        },
        tableWrap: {
            marginTop: '14px',
            overflowX: 'auto',
            borderRadius: '14px',
            border: `1px solid ${theme.panelBorder}`,
            background: theme.panelBg,
        },
        table: {
            width: '100%',
            borderCollapse: 'collapse',
            minWidth: '620px',
        },
        th: {
            textAlign: 'left',
            padding: '11px 12px',
            background: theme.tableHeadBg,
            color: theme.heading,
            fontSize: '0.82rem',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
        },
        td: {
            padding: '11px 12px',
            color: theme.text,
            borderTop: `1px solid ${theme.panelBorder}`,
            fontSize: '0.92rem',
        },
        timeline: {
            marginTop: '14px',
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
            gap: '12px',
        },
        timelineItem: {
            background: theme.panelBg,
            borderLeft: `4px solid ${theme.timelineBorder}`,
            borderRadius: '12px',
            padding: '14px 14px 12px',
            boxShadow: theme.panelShadow,
            transition: 'transform 170ms ease, box-shadow 170ms ease',
        },
        timelineTitle: {
            margin: 0,
            fontSize: '1rem',
            color: theme.heading,
        },
        timelineText: {
            margin: '8px 0 0',
            color: theme.text,
            lineHeight: 1.65,
            fontSize: '0.93rem',
        },
    }

    return (
        <section>
            <div style={styles.section}>
                <h2 style={styles.sectionTitle}>About Me</h2>
                <p style={styles.aboutText}>
                    Focused on building clean, user-friendly web experiences and practical software solutions. I
                    enjoy solving problems, learning new tools, and collaborating on real-world projects.
                </p>
                <div style={styles.highlights}>
                    {['Web Development', 'Java & DSA', 'Cybersecurity', 'UI/UX Basics'].map((item) => (
                        <span key={item} style={styles.highlightPill}>
                            {item}
                        </span>
                    ))}
                </div>

                <div style={styles.statsGrid}>
                    {stats.map((item, index) => (
                        <div
                            key={item.label}
                            style={{
                                ...styles.statCard,
                                transform: hoveredStat === index ? 'translateY(-4px)' : 'translateY(0)',
                                boxShadow:
                                    hoveredStat === index
                                        ? '0 16px 24px rgba(25, 18, 13, 0.24)'
                                        : styles.statCard.boxShadow,
                            }}
                            onMouseEnter={() => setHoveredStat(index)}
                            onMouseLeave={() => setHoveredStat(-1)}
                        >
                            <h3 style={styles.statValue}>{item.value}</h3>
                            <p style={styles.statLabel}>{item.label}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div style={styles.section}>
                <h2 style={styles.sectionTitle}>Projects</h2>
                <div style={styles.projectsGrid}>
                    {projects.map((project, index) => (
                        <article
                            key={project.title}
                            style={{
                                ...styles.projectCard,
                                transform: hoveredProject === index ? 'translateY(-6px)' : 'translateY(0)',
                                boxShadow:
                                    hoveredProject === index
                                        ? '0 20px 30px rgba(20, 14, 11, 0.28)'
                                        : styles.projectCard.boxShadow,
                            }}
                            onMouseEnter={() => setHoveredProject(index)}
                            onMouseLeave={() => setHoveredProject(-1)}
                        >
                            <h3 style={styles.projectHeader}>
                                {project.title}
                                <a
                                    href={project.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    style={{
                                        ...styles.projectLink,
                                        textDecoration: hoveredProject === index ? 'underline' : 'none',
                                    }}
                                >
                                    GitHub
                                </a>
                            </h3>
                            <p style={styles.projectDesc}>{project.desc}</p>
                            <div style={styles.tags}>
                                {project.tags.map((tag) => (
                                    <span key={tag} style={styles.tag}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </div>

            <div style={styles.section}>
                <h2 style={styles.sectionTitle}>Skills</h2>
                <ul style={styles.skillWrap}>
                    {skills.map((skill) => (
                        <li
                            key={skill}
                            style={{
                                ...styles.skill,
                                transform: hoveredSkill === skill ? 'translateY(-2px)' : 'translateY(0)',
                                boxShadow:
                                    hoveredSkill === skill
                                        ? '0 12px 18px rgba(20, 14, 11, 0.25)'
                                        : '0 6px 10px rgba(20, 14, 11, 0.14)',
                            }}
                            onMouseEnter={() => setHoveredSkill(skill)}
                            onMouseLeave={() => setHoveredSkill('')}
                        >
                            {skill}
                        </li>
                    ))}
                </ul>
            </div>

            <div style={styles.section}>
                <h2 style={styles.sectionTitle}>Qualification</h2>
                <div style={styles.tableWrap}>
                    <table style={styles.table}>
                        <thead>
                            <tr>
                                {['Degree', 'Specialization', 'Institute', 'Year of Passing', 'Grade'].map((heading) => (
                                    <th key={heading} style={styles.th}>
                                        {heading}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((row) => (
                                <tr key={row[0]}>
                                    {row.map((cell) => (
                                        <td key={cell} style={styles.td}>
                                            {cell}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div style={styles.section}>
                <h2 style={styles.sectionTitle}>Experience & Activities</h2>
                <div style={styles.timeline}>
                    <article style={{ ...styles.timelineItem, transform: 'translateY(0)' }}>
                        <h3 style={styles.timelineTitle}>Personal Projects & Open Source</h3>
                        <p style={styles.timelineText}>
                            Built multiple web and automation projects while learning full stack development,
                            deployment basics, and collaborative workflows.
                        </p>
                    </article>
                    <article style={{ ...styles.timelineItem, transform: 'translateY(0)' }}>
                        <h3 style={styles.timelineTitle}>Academic Focus</h3>
                        <p style={styles.timelineText}>
                            Strengthening foundations in core CS subjects, data structures, algorithms, and problem
                            solving through continuous practice.
                        </p>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default Body