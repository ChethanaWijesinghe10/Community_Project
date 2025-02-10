"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  const handleClick = () => {
    // Replace with your actual WhatsApp number
    window.open("https://wa.me/1234567890", "_blank")
  }

  return (
    <Button
      onClick={handleClick}
      className="fixed bottom-4 right-4 rounded-full p-4 bg-green-500 hover:bg-green-600 transition-colors duration-200 shadow-lg"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="h-6 w-6 text-white" />
    </Button>
  )
}
