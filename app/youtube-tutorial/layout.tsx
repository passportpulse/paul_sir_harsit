import { Metadata } from 'next'
import { youtubeTutorialMetadata } from './metadata'

export const metadata: Metadata = youtubeTutorialMetadata

export default function YouTubeTutorialLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
