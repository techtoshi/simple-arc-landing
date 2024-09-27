export const isMobile = () => {
  try {
    document.createEvent('TouchEvent')
    return true
  } catch {
    return false
  }
}