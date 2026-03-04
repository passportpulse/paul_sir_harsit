import { Metadata } from 'next'
import { enrollMetadata } from './metadata'

export const metadata: Metadata = enrollMetadata

export default function EnrollLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
