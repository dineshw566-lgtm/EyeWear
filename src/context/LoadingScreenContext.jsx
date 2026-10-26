import React, { createContext, useContext, useState, useCallback } from "react"
import { useNavigate, useLocation } from "react-router"
import LoadingScreen from "../components/LoadingScreen/LoadingScreen"

const LoadingScreenContext = createContext({
  isLoading: false,
  triggerHomeLoader: () => {},
})

export function LoadingScreenProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate()
  const location = useLocation()

  const triggerHomeLoader = useCallback(
    (e) => {
      if (e && e.preventDefault) {
        e.preventDefault()
      }

      setIsLoading(true)

      if (location.pathname !== "/") {
        navigate("/")
      } else {
        window.scrollTo({ top: 0, behavior: "instant" })
      }
    },
    [location.pathname, navigate],
  )

  const handleLoadingComplete = useCallback(() => {
    setIsLoading(false)
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [])

  return (
    <LoadingScreenContext.Provider value={{ isLoading, triggerHomeLoader }}>
      {children}
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
    </LoadingScreenContext.Provider>
  )
}

export function useHomeLoader() {
  const context = useContext(LoadingScreenContext)
  if (!context) {
    return { isLoading: false, triggerHomeLoader: () => {} }
  }
  return context
}
