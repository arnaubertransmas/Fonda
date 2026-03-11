import Link from "next/link"
import React from "react"

type MapsLinkProps = {
  className: string
  text: string
  style?: React.CSSProperties
}

export const MapsLink: React.FC<MapsLinkProps> = ({ className, style, text }) => (
  <Link
    href="https://www.google.com/maps/search/?api=1&query=Fonda+Safaja+Sant+Quirze+Safaja"
    target="_blank"
    rel="noopener noreferrer"
    className={className}
    style={style}
  >
    {text}
  </Link>
)


type TrucarLinkProps = {
    className: string
    text: string
    style?: React.CSSProperties
}

export const TrucarLink: React.FC<TrucarLinkProps> = ({ className, style, text }) => (
  <Link
    href="tel:+34938660252"
    className={className}
    style={style}
  >
    {text}
  </Link>
)