'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { useCookieConsent } from '../hooks/useCookieConsent'
import { CookieConsentModalProps } from '../types/cookieConsent'

export default function CookieConsentModal({ onAccept, onReject }: CookieConsentModalProps) {
  const { consentGiven, giveConsent } = useCookieConsent()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (consentGiven === null) {
      setOpen(true)
    }
  }, [consentGiven])

  const handleAccept = () => {
    giveConsent(true)
    setOpen(false)
    onAccept()
  }

  const handleReject = () => {
    giveConsent(false)
    setOpen(false)
    onReject()
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Cookie Consent</DialogTitle>
          <DialogDescription>
            We use cookies to enhance your browsing experience and analyze our traffic. Please choose your preference below.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline" onClick={handleReject}>Reject All</Button>
          <Button onClick={handleAccept}>Accept All</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

