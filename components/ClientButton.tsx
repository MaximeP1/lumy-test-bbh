"use client"
import { Button } from "@nextui-org/react"

interface Props {
  children: React.ReactNode
}

export default function ClientButton({ children }: Props) {
  return <Button>{children}</Button>
}