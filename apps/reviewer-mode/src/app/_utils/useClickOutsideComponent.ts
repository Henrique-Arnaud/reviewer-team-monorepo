import React, { useEffect } from 'react'

/**
 * Hook that alerts clicks outside of the passed ref
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useClickOutsideComponentObserver(ref: React.RefObject<any>, action: () => void) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target)) {
        action()
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref, action])
}
