import { useLang } from '../i18n/LanguageContext.jsx'
import './LanguageToggle.css'

export default function LanguageToggle() {
  const { lang, setLang, t } = useLang()

  return (
    <div className="lang-toggle glass" role="group" aria-label={t.langSwitch.label}>
      {['en', 'fr'].map((code) => (
        <button
          key={code}
          type="button"
          lang={code}
          className={lang === code ? 'active' : ''}
          aria-pressed={lang === code}
          onClick={() => setLang(code)}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  )
}
