import { useState } from 'react'

function Header({ isMobile, theme, isDark, onToggleTheme }) {
    const [hoveredNav, setHoveredNav] = useState('')
    const [hoveredAction, setHoveredAction] = useState('')
    const [hoveredTheme, setHoveredTheme] = useState(false)

    const links = [
        { label: 'GitHub', href: 'https://github.com/IamMradul' },
        { label: 'LeetCode', href: 'https://leetcode.com/Mradul_mg' },
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mradul-gupta26' },
    ]

    const styles = {
        header: {
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1.15fr 0.85fr',
            gap: isMobile ? '24px' : '32px',
            alignItems: 'center',
            animation: 'riseUp 0.8s ease both',
        },
        topBar: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '10px',
            marginBottom: '18px',
            flexWrap: 'wrap',
        },
        nav: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
        },
        navLink: {
            textDecoration: 'none',
            padding: '9px 14px',
            borderRadius: '999px',
            background: theme.navBg,
            border: `1px solid ${theme.navBorder}`,
            color: theme.navText,
            fontSize: '0.86rem',
            fontWeight: 700,
            letterSpacing: '0.02em',
            transition: 'transform 170ms ease, box-shadow 170ms ease, background 170ms ease',
        },
        themeButton: {
            border: `1px solid ${theme.secondaryBorder}`,
            background: theme.secondaryBg,
            color: theme.secondaryText,
            borderRadius: '999px',
            padding: '8px 12px',
            fontSize: '0.82rem',
            fontWeight: 800,
            letterSpacing: '0.02em',
            cursor: 'pointer',
            transition: 'transform 170ms ease, box-shadow 170ms ease',
        },
        eyebrow: {
            margin: 0,
            textTransform: 'uppercase',
            letterSpacing: '0.22em',
            fontSize: '0.74rem',
            fontWeight: 700,
            color: theme.eyebrow,
        },
        name: {
            margin: '10px 0 14px',
            fontFamily: 'Playfair Display, Georgia, serif',
            fontSize: isMobile ? '2rem' : '2.8rem',
            lineHeight: 1.08,
            color: theme.heading,
        },
        summary: {
            margin: '0 0 16px',
            color: theme.text,
            lineHeight: 1.75,
            maxWidth: '58ch',
            fontSize: isMobile ? '0.96rem' : '1.02rem',
        },
        actions: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: '12px',
            marginTop: '16px',
        },
        primaryBtn: {
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '12px 20px',
            borderRadius: '12px',
            background: theme.primaryGradient,
            color: theme.primaryText,
            fontWeight: 800,
            boxShadow: '0 12px 24px rgba(115, 75, 48, 0.25)',
            animation: 'pulseGlow 2.8s infinite',
            transition: 'transform 170ms ease, box-shadow 170ms ease, filter 170ms ease',
        },
        secondaryBtn: {
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '12px 20px',
            borderRadius: '12px',
            border: `1px solid ${theme.secondaryBorder}`,
            color: theme.secondaryText,
            fontWeight: 700,
            background: theme.secondaryBg,
            transition: 'transform 170ms ease, box-shadow 170ms ease, background 170ms ease',
        },
        photoPanel: {
            justifySelf: isMobile ? 'center' : 'end',
            width: isMobile ? '250px' : '320px',
            borderRadius: '24px',
            padding: '10px',
            background: theme.photoPanelBg,
            border: `1px solid ${theme.photoPanelBorder}`,
            boxShadow: theme.photoPanelShadow,
            animation: 'floatIn 0.9s ease both',
            transition: 'transform 180ms ease',
        },
        photo: {
            width: '100%',
            display: 'block',
            borderRadius: '18px',
            objectFit: 'cover',
            minHeight: isMobile ? '295px' : '360px',
        },
    }

    return (
        <header style={styles.header}>
            <section>
                <div style={styles.topBar}>
                    <nav style={styles.nav}>
                        {links.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noreferrer"
                                style={{
                                    ...styles.navLink,
                                    transform: hoveredNav === link.label ? 'translateY(-2px)' : 'translateY(0)',
                                    boxShadow:
                                        hoveredNav === link.label ? '0 10px 16px rgba(19, 13, 9, 0.2)' : 'none',
                                }}
                                onMouseEnter={() => setHoveredNav(link.label)}
                                onMouseLeave={() => setHoveredNav('')}
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    <button
                        type="button"
                        onClick={onToggleTheme}
                        style={{
                            ...styles.themeButton,
                            transform: hoveredTheme ? 'translateY(-2px)' : 'translateY(0)',
                            boxShadow: hoveredTheme ? '0 10px 20px rgba(15, 10, 8, 0.25)' : 'none',
                        }}
                        onMouseEnter={() => setHoveredTheme(true)}
                        onMouseLeave={() => setHoveredTheme(false)}
                    >
                        {isDark ? 'Switch to Light' : 'Switch to Dark'}
                    </button>
                </div>

                <p style={styles.eyebrow}>Portfolio</p>
                <h1 style={styles.name}>Mradul Gupta</h1>
                <p style={styles.summary}>
                    Computer Science undergraduate at Chandigarh University focused on software development,
                    cybersecurity, and practical product engineering.
                </p>
                <p style={styles.summary}>
                    I build reliable web experiences, solve algorithmic problems, and enjoy turning ideas into
                    polished, real-world projects.
                </p>

                <div style={styles.actions}>
                    <a
                        href="#contact"
                        style={{
                            ...styles.primaryBtn,
                            transform: hoveredAction === 'contact' ? 'translateY(-3px)' : 'translateY(0)',
                            filter: hoveredAction === 'contact' ? 'brightness(1.04)' : 'none',
                        }}
                        onMouseEnter={() => setHoveredAction('contact')}
                        onMouseLeave={() => setHoveredAction('')}
                    >
                        Contact Me
                    </a>
                    <a
                        href="https://github.com/IamMradul"
                        target="_blank"
                        rel="noreferrer"
                        style={{
                            ...styles.secondaryBtn,
                            transform: hoveredAction === 'github' ? 'translateY(-3px)' : 'translateY(0)',
                            boxShadow: hoveredAction === 'github' ? '0 12px 18px rgba(19, 13, 9, 0.2)' : 'none',
                        }}
                        onMouseEnter={() => setHoveredAction('github')}
                        onMouseLeave={() => setHoveredAction('')}
                    >
                        View GitHub
                    </a>
                </div>
            </section>

            <aside
                style={{
                    ...styles.photoPanel,
                    transform: hoveredAction === 'photo' ? 'translateY(-4px)' : 'translateY(0)',
                }}
                onMouseEnter={() => setHoveredAction('photo')}
                onMouseLeave={() => setHoveredAction('')}
            >
                <img src="/Mradul_Photo_2.jpg" alt="Mradul Gupta" style={styles.photo} />
            </aside>
        </header>
    )
}

export default Header