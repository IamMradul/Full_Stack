import { useEffect, useMemo, useState } from 'react'
import Header from './header'
import Body from './body'
import Footer from './footer'

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 900)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const theme = useMemo(
    () =>
      isDark
        ? {
            pageBackground:
              'radial-gradient(circle at 10% 0%, #2b3440 0%, #202833 35%, #171f29 70%, #10161f 100%)',
            pageText: '#eadfce',
            containerBg: 'rgba(17, 24, 31, 0.82)',
            containerBorder: 'rgba(216, 173, 132, 0.26)',
            containerShadow: '0 24px 90px rgba(5, 8, 11, 0.45)',
            navBg: 'rgba(198, 148, 100, 0.16)',
            navBorder: 'rgba(209, 163, 119, 0.34)',
            navText: '#f2ddc4',
            eyebrow: '#cda475',
            heading: '#f6e7d4',
            text: '#d6c5b2',
            mutedText: '#c7b49e',
            primaryGradient: 'linear-gradient(135deg, #e4b17b, #bd7f49)',
            primaryText: '#2b1a0d',
            secondaryBg: 'rgba(28, 38, 48, 0.82)',
            secondaryBorder: 'rgba(219, 172, 127, 0.44)',
            secondaryText: '#f0dcc6',
            photoPanelBg: 'linear-gradient(145deg, rgba(33, 45, 56, 0.95), rgba(21, 30, 38, 0.9))',
            photoPanelBorder: 'rgba(212, 165, 121, 0.32)',
            photoPanelShadow: '0 24px 34px rgba(5, 8, 12, 0.35)',
            panelBg: 'rgba(30, 40, 51, 0.82)',
            panelBgStrong: 'linear-gradient(165deg, rgba(40, 52, 63, 0.94), rgba(26, 35, 43, 0.94))',
            panelBorder: 'rgba(215, 167, 123, 0.24)',
            panelShadow: '0 14px 24px rgba(6, 10, 16, 0.28)',
            chipBg: 'rgba(209, 161, 117, 0.16)',
            chipBorder: 'rgba(209, 161, 117, 0.3)',
            chipText: '#efd9bf',
            skillBg: 'linear-gradient(135deg, rgba(191, 139, 92, 0.96), rgba(148, 91, 49, 0.96))',
            skillText: '#fff5e7',
            tableHeadBg: 'rgba(196, 146, 102, 0.22)',
            timelineBorder: '#cc945c',
            contactBg: 'linear-gradient(160deg, rgba(39, 51, 64, 0.98), rgba(21, 29, 36, 0.98))',
            contactBorder: 'rgba(214, 167, 122, 0.38)',
            contactText: '#f6e6d0',
            inputBg: 'rgba(250, 230, 205, 0.07)',
            inputBorder: 'rgba(240, 199, 159, 0.35)',
            inputText: '#fff3e4',
          }
        : {
            pageBackground:
              'radial-gradient(circle at 10% 0%, #f8efe6 0%, #f2dfcb 30%, #d8bfa4 65%, #b08e6e 100%)',
            pageText: '#2f2620',
            containerBg: 'rgba(255, 252, 247, 0.72)',
            containerBorder: 'rgba(101, 74, 48, 0.2)',
            containerShadow: '0 24px 80px rgba(60, 42, 26, 0.18)',
            navBg: 'rgba(107, 78, 52, 0.11)',
            navBorder: 'rgba(107, 78, 52, 0.24)',
            navText: '#4f3724',
            eyebrow: '#8a6240',
            heading: '#2f2014',
            text: '#4a392d',
            mutedText: '#5c4635',
            primaryGradient: 'linear-gradient(135deg, #734b30, #b3784b)',
            primaryText: '#fff8f1',
            secondaryBg: 'rgba(255, 249, 241, 0.7)',
            secondaryBorder: 'rgba(116, 82, 50, 0.35)',
            secondaryText: '#553821',
            photoPanelBg: 'linear-gradient(145deg, rgba(255,255,255,0.95), rgba(228, 204, 182, 0.8))',
            photoPanelBorder: 'rgba(135, 99, 68, 0.24)',
            photoPanelShadow: '0 24px 34px rgba(63, 43, 27, 0.18)',
            panelBg: 'rgba(255, 248, 240, 0.85)',
            panelBgStrong: 'linear-gradient(165deg, rgba(255, 251, 245, 0.98), rgba(245, 230, 215, 0.92))',
            panelBorder: 'rgba(120, 87, 58, 0.24)',
            panelShadow: '0 14px 24px rgba(82, 54, 35, 0.14)',
            chipBg: 'rgba(205, 164, 125, 0.22)',
            chipBorder: 'rgba(125, 89, 58, 0.28)',
            chipText: '#5c3b23',
            skillBg: 'linear-gradient(135deg, rgba(116, 80, 49, 0.95), rgba(163, 110, 69, 0.95))',
            skillText: '#fff8ee',
            tableHeadBg: 'rgba(189, 145, 108, 0.24)',
            timelineBorder: '#a96f43',
            contactBg: 'linear-gradient(160deg, rgba(111, 76, 48, 0.97), rgba(60, 41, 25, 0.96))',
            contactBorder: 'rgba(226, 192, 157, 0.38)',
            contactText: '#fff3e5',
            inputBg: 'rgba(255, 245, 233, 0.14)',
            inputBorder: 'rgba(251, 223, 196, 0.36)',
            inputText: '#fff6ed',
          },
    [isDark],
  )

  const styles = useMemo(
    () => ({
      page: {
        minHeight: '100vh',
        background: theme.pageBackground,
        padding: isMobile ? '24px 14px 40px' : '36px 24px 56px',
        fontFamily: 'Manrope, Segoe UI, sans-serif',
        color: theme.pageText,
        transition: 'background 240ms ease, color 240ms ease',
      },
      container: {
        maxWidth: '1120px',
        margin: '0 auto',
        borderRadius: '28px',
        overflow: 'hidden',
        background: theme.containerBg,
        border: `1px solid ${theme.containerBorder}`,
        boxShadow: theme.containerShadow,
        backdropFilter: 'blur(9px)',
        transition: 'background 240ms ease, border-color 240ms ease, box-shadow 240ms ease',
      },
      contentWrap: {
        padding: isMobile ? '22px 16px 26px' : '30px 34px 36px',
      },
    }),
    [isMobile, theme],
  )

  return (
    <div style={styles.page}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700;800&family=Playfair+Display:wght@600;700&display=swap');

        * { box-sizing: border-box; }

        @keyframes riseUp {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes floatIn {
          from { opacity: 0; transform: translateX(-22px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes pulseGlow {
          0% { box-shadow: 0 0 0 0 rgba(166, 117, 71, 0.45); }
          70% { box-shadow: 0 0 0 16px rgba(166, 117, 71, 0); }
          100% { box-shadow: 0 0 0 0 rgba(166, 117, 71, 0); }
        }
      `}</style>

      <main style={styles.container}>
        <div style={styles.contentWrap}>
          <Header isMobile={isMobile} theme={theme} isDark={isDark} onToggleTheme={() => setIsDark((prev) => !prev)} />
          <Body isMobile={isMobile} theme={theme} />
          <Footer isMobile={isMobile} theme={theme} isDark={isDark} />
        </div>
      </main>
    </div>
  )
}

export default App
