import React, { useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom/client'
import { Menu, X, ArrowUpRight, CalendarDays, MapPin, Mail } from 'lucide-react'
import { conferenceData, type Language } from './data/conference'
import './styles/global.css'

import logoLU from './assets/logos/lebanese-university.png'
import logoFaculty from './assets/logos/faculty-of-sciences.png'
import logoDoctoral from './assets/logos/doctoral-school.png'
import logoIMS from './assets/logos/iraqi-mathematical-society.png'
import logoAnwar from './assets/logos/al-anwar-center.png'
import aiMcs from './assets/branding/ai-mcs.png'
import campus from './assets/images/campus-latest.jpeg'
import qr from './assets/images/contact-qr.png'

const organizations = [
  { src: logoAnwar, alt: 'Al-Anwar Center for Development and Education' },
  { src: logoIMS, alt: 'Iraqi Mathematical Society' },
  { src: logoFaculty, alt: 'Lebanese University Faculty of Sciences' },
  { src: logoLU, alt: 'Lebanese University' },
  { src: logoDoctoral, alt: 'Lebanese University Doctoral School Science & Technology' },
]

function App() {
  const [lang, setLang] = useState<Language>(() => (localStorage.getItem('conference-language') as Language) || 'en')
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const menuRef = useRef<HTMLElement>(null)
  const menuToggleRef = useRef<HTMLButtonElement>(null)
  const t = conferenceData[lang]

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
    localStorage.setItem('conference-language', lang)
  }, [lang])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target as Node
      if (menuRef.current?.contains(target) || menuToggleRef.current?.contains(target)) return
      setMenuOpen(false)
    }

    document.addEventListener('pointerdown', handlePointerDown)
    return () => document.removeEventListener('pointerdown', handlePointerDown)
  }, [menuOpen])

  const switchLanguage = (next: Language) => { setLang(next); setMenuOpen(false) }
  const navItems: Array<[string, string]> = [
    ['home', t.nav.home], ['overview', t.nav.overview],
    ...(t.nav.axes && t.axes ? [['axes', t.nav.axes] as [string, string]] : []),
    ['objectives', t.nav.objectives], ['committee', t.nav.committee], ['venue', t.nav.venue], ['contact', t.nav.contact],
  ]

  return (
    <div className={`site-shell ${lang === 'ar' ? 'arabic' : ''}`}>
      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="container header-inner">
          <a className="brand" href="#home" aria-label="MCS AI Conference home">
            <img src={aiMcs} alt="AI MCS" />
            <span><b>18<sup>th</sup></b><small>International Scientific Conference</small></span>
          </a>
          <button ref={menuToggleRef} className="menu-toggle" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
          <nav ref={menuRef} className={`nav-links ${menuOpen ? 'open' : ''}`} aria-label="Primary navigation">
            {navItems.map(([id, label]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>)}
            <span className="nav-divider" />
            <div className="language-switcher" aria-label="Language switcher">
              <button className={lang === 'ar' ? 'active' : ''} onClick={() => switchLanguage('ar')}>العربية</button>
              <span>|</span>
              <button className={lang === 'en' ? 'active' : ''} onClick={() => switchLanguage('en')}>English</button>
            </div>
          </nav>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-photo-clip">
            <img className="hero-full-image" src={campus} alt={lang === 'ar' ? 'مجمع الحدث في الجامعة اللبنانية' : 'Lebanese University-Hadath Campus'} loading="eager" fetchPriority="high" decoding="async" />
          </div>
          <div className="hero-branding" aria-label="Lebanese University brand statement">
            <p>A UNIVERSITY FOR A BRIGHTER TOMORROW</p>
            <div className="hero-branding-subline"><span />KNOWLEDGE | INNOVATION | IMPACT<span /></div>
            <div className="hero-scroll-indicator" aria-hidden="true">↓</div>
          </div>
        </section>

        <section className="info-strip" aria-label="Conference information">
          <div className="container info-grid">
            <div><CalendarDays /><span><small>{lang === 'ar' ? 'التاريخ' : 'Date'}</small><strong>{t.info.date}</strong></span></div>
            <div><MapPin /><span><small>{lang === 'ar' ? 'المكان' : 'Location'}</small><strong>{t.info.venue}<br />{t.info.location}</strong></span></div>
            <div><Mail /><span><small>{lang === 'ar' ? 'للتواصل' : 'Contact'}</small><strong><a href={`mailto:${t.info.email}`}>{t.info.email}</a></strong></span></div>
          </div>
        </section>

        <section id="overview" className="section overview-section">
          <div className="container narrow">
            <SectionHeading kicker={lang === 'ar' ? 'عن المؤتمر' : 'About the conference'} title={t.overview.title} />
            <div className="overview-card">{t.overview.paragraphs.map((p) => <p key={p}>{p}</p>)}</div>
          </div>
        </section>

        {t.axes && <section id="axes" className="section axes-section">
          <div className="container">
            <SectionHeading kicker={lang === 'ar' ? 'محاور المؤتمر' : 'Research themes'} title={t.axes.title} />
            <div className="axes-grid">
              {t.axes.items.map((axis, index) => <article className="axis-card" key={axis}><span className="axis-number">{index + 1}</span><p>{axis}</p></article>)}
            </div>
          </div>
        </section>}

        <section id="objectives" className="section split-section">
          <div className="container split-grid">
            <div className="panel objective-panel">
              <SectionHeading kicker={lang === 'ar' ? 'رؤية المؤتمر' : 'Conference vision'} title={t.objectives.title} />
              <ol className="numbered-list">{t.objectives.items.map((item, i) => <li key={item}><span>{i + 1}</span><p>{item}</p></li>)}</ol>
            </div>
            <div id="committee" className="panel committee-panel">
              <SectionHeading kicker={lang === 'ar' ? 'الفريق المنظم' : 'Scientific team'} title={t.committee.title} />
              <ol className="committee-list">{t.committee.items.map((item, i) => <li key={item}><span>{i + 1}</span><p>{item}</p></li>)}</ol>
            </div>
          </div>
        </section>

        <section id="organizations" className="section organizations-section">
          <div className="container"><SectionHeading kicker={lang === 'ar' ? 'تعاون علمي' : 'Scientific collaboration'} title={t.organizations.title} /><p className="section-intro">{t.organizations.intro}</p><div className="logo-grid">{organizations.map((org) => <div className="logo-card" key={org.alt}><img src={org.src} alt={org.alt} loading="lazy" /></div>)}</div></div>
        </section>

        <section id="venue" className="section venue-section">
          <div className="container venue-grid">
            <div className="venue-visual"><img src={campus} alt={lang === 'ar' ? 'مجمع الحدث في الجامعة اللبنانية' : 'Lebanese University-Hadath Campus'} /><div className="venue-badge"><MapPin /><span>{t.venue.title}</span></div></div>
            <div className="venue-copy"><SectionHeading kicker={lang === 'ar' ? 'نلتقي في بيروت' : 'Meet us in Beirut'} title={t.venue.title} />{t.venue.lines.map((line, index) => <p className={index === 0 ? 'venue-name' : ''} key={line}>{line}</p>)}<a className="text-link" href="https://maps.google.com/?q=Lebanese+University+Hadath+Campus" target="_blank" rel="noreferrer">{t.venue.mapLabel}<ArrowUpRight /></a></div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container contact-card"><div><SectionHeading kicker={lang === 'ar' ? 'ابقَ على تواصل' : 'Stay connected'} title={t.contact.title} /><p>{t.contact.intro}</p><a className="contact-email" href={`mailto:${t.info.email}`}><Mail />{t.info.email}</a></div><div className="qr-wrap"><img src={qr} alt="QR code for the conference email address" loading="lazy" /><small>{t.contact.emailLabel}</small></div></div>
        </section>
      </main>

      <footer className="site-footer"><div className="container footer-grid"><div className="footer-brand"><img src={aiMcs} alt="AI MCS" /><p>{t.info.email}</p></div><div className="footer-words">{t.footer.words.map((word) => <span key={word}>{word}</span>)}</div><p className="copyright">{t.footer.copyright}</p></div></footer>
    </div>
  )
}

function SectionHeading({ kicker, title }: { kicker: string; title: string }) {
  return <div className="section-heading"><span>{kicker}</span><h2>{title}</h2></div>
}

ReactDOM.createRoot(document.getElementById('root')!).render(<React.StrictMode><App /></React.StrictMode>)
