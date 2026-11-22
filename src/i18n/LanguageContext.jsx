import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import strings from './strings.jsx'

const LANGS = ['en', 'fr']
const STORAGE_KEY = 'lang'

function getInitialLang() {
  try {
    const fromUrl = new URLSearchParams(window.location.search).get('lang')
    if (LANGS.includes(fromUrl)) return fromUrl
    const stored = localStorage.getItem(STORAGE_KEY)
    if (LANGS.includes(stored)) return stored
  } catch {
    // storage unavailable: fall through
  }
  return navigator.language?.toLowerCase().startsWith('fr') ? 'fr' : 'en'
}

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLang)

  useEffect(() => {
    document.documentElement.lang = lang
    document.title = strings[lang].meta.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', strings[lang].meta.description)
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      // ignore
    }
  }, [lang])

  // Pick the current language from a { en, fr } value; plain values pass through.
  const tr = useCallback(
    (value) => (value && typeof value === 'object' && 'en' in value ? value[lang] ?? value.en : value),
    [lang],
  )

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: strings[lang], tr }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  return useContext(LanguageContext)
}
