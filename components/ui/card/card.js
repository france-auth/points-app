import React from "react"

// Card container
export function Card({ children, className = "", ...props }) {
  return (
    <div className={`rounded-lg border shadow-sm ${className}`} {...props}>
      {children}
    </div>
  )
}

// Card header
export function CardHeader({ children, className = "", ...props }) {
  return (
    <div className={`border-b p-4 ${className}`} {...props}>
      {children}
    </div>
  )
}

// Card title
export function CardTitle({ children, className = "", ...props }) {
  return (
    <h2 className={`text-lg font-medium ${className}`} {...props}>
      {children}
    </h2>
  )
}

// Card description
export function CardDescription({ children, className = "", ...props }) {
  return (
    <p className={`text-sm text-gray-500 ${className}`} {...props}>
      {children}
    </p>
  )
}

// Card content
export function CardContent({ children, className = "", ...props }) {
  return (
    <div className={`p-4 ${className}`} {...props}>
      {children}
    </div>
  )
}

// Card footer
export function CardFooter({ children, className = "", ...props }) {
  return (
    <div className={`border-t p-4 ${className}`} {...props}>
      {children}
    </div>
  )
}
