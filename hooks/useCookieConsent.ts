import { useState, useEffect } from 'react'

export function useCookieConsent() {
  const [consentGiven, setConsentGiven] = useState<boolean | null>(null)

  useEffect(() => {
    const storedConsent = localStorage.getItem('cookieConsent')
    if (storedConsent !== null) {
      setConsentGiven(storedConsent === 'true')
    }
  }, [])

  const giveConsent = (consent: boolean) => {
    localStorage.setItem('cookieConsent', consent.toString())
    setConsentGiven(consent)
  }

  return { consentGiven, giveConsent }
}

