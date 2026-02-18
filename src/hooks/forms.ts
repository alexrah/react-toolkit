'use client'

import { useEffect } from 'react'

/**
 * Workaround for Conform + React 19: React resets the form after server actions,
 * which clears Conform state and prevents lastResult from repopulating fields.
 * This hook prevents that reset so lastResult.initialValues flow into the form.
 * @see https://github.com/edmundhung/conform/issues/681
 */
export function usePreventFormReset(formId: string | undefined) {
  useEffect(() => {
    if (!formId) return

    const handleReset = (event: Event) => {
      if (event.target === document.forms.namedItem(formId)) {
        event.preventDefault()
      }
    }

    document.addEventListener('reset', handleReset, true)
    return () => document.removeEventListener('reset', handleReset, true)
  }, [formId])
}
