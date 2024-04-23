import { useNuxtApp } from '#app'

export function useSocket (): ReturnType<typeof import('socket.io-client')['io']> {
  const { $socket } = useNuxtApp()
  return $socket
}