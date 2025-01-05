'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from './ui/dialog'
import { Label } from './ui/labels'
import { Switch } from './ui/switch'
import { Button } from './ui/button'

interface CookiePreferencesModalProps {
  isOpen: boolean
  onClose: (preferences: Record < string, boolean > | null) => void
}

export default function CookiePreferencesModal({ isOpen, onClose }: CookiePreferencesModalProps) {
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
    preferences: false
  })

  const handleToggle = (key: keyof typeof preferences) => {
    setPreferences(prev => ({ ...prev, [key]: !prev[key] }))
  }

  const handleSave = () => {
    onClose(preferences)
  }

  return (
    <Dialog className="bg-[#121212]" open={isOpen} onOpenChange={() => onClose(null)}>
      <DialogContent className="sm:max-w-[385px]">
        <DialogHeader>
          <DialogTitle>Cookie Preferences</DialogTitle>
          <DialogDescription>
            Customize your cookie preferences. Necessary cookies are always enabled.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="necessary" className="flex flex-col">
              <span>Necessary</span>
              <span className="font-normal text-sm text-white">Required for the website to function properly</span>
            </Label>
            <Switch id="necessary" checked disabled />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="analytics" className="flex flex-col">
              <span>Analytics</span>
              <span className="font-normal text-sm text-muted-foreground">Help us improve our website by collecting usage information</span>
            </Label>
            <Switch
              id="analytics"
              checked={preferences.analytics}
              onCheckedChange={() => handleToggle('analytics')}
            />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="marketing" className="flex flex-col">
              <span>Marketing</span>
              <span className="font-normal text-sm text-white">Used to deliver personalized advertisements</span>
            </Label>
            <Switch
              id="marketing"
              checked={preferences.marketing}
              onCheckedChange={() => handleToggle('marketing')}
            />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="preferences" className="flex flex-col">
              <span>Preferences</span>
              <span className="font-normal text-sm text-white">Remember your settings and provide a better experience</span>
            </Label>
            <Switch
              id="preferences"
              checked={preferences.preferences}
              onCheckedChange={() => handleToggle('preferences')}
            />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleSave}>Save preferences</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}