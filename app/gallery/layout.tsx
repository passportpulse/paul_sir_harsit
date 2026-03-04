import { Metadata } from 'next'
import { galleryMetadata } from './metadata'

export const metadata: Metadata = galleryMetadata

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
