import { createContext } from 'react'

interface Configuration {
  messagesAPIBaseURL: string
}

export const ConfigurationContext = createContext<Configuration>({
  messagesAPIBaseURL: 'https://github'
});