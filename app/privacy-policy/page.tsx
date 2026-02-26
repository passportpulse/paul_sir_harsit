import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - Paul Sir\'s Classes',
  description: 'Privacy Policy for Paul Sir\'s Classes - Commerce Excellence Since 25 Years',
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-[#0b1e6d] mb-6">Privacy Policy</h1>
          
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-4">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
            </p>

            <h2 className="text-xl font-semibold text-[#0b1e6d] mt-6 mb-3">Introduction</h2>
            <p className="text-gray-600 mb-4">
              At Paul Sir's Classes, we are committed to protecting your privacy and ensuring the security of your personal information. 
              This Privacy Policy outlines how we collect, use, and protect your information when you use our educational services.
            </p>

            <h2 className="text-xl font-semibold text-[#0b1e6d] mt-6 mb-3">Information We Collect</h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Personal identification information (name, email, phone number)</li>
              <li>Educational background and course preferences</li>
              <li>Payment information for course enrollment</li>
              <li>Academic performance and progress data</li>
              <li>Communication records</li>
            </ul>

            <h2 className="text-xl font-semibold text-[#0b1e6d] mt-6 mb-3">How We Use Your Information</h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>To provide educational services and course materials</li>
              <li>To communicate important updates and announcements</li>
              <li>To process payments and manage enrollments</li>
              <li>To improve our educational programs and services</li>
              <li>To comply with legal and regulatory requirements</li>
            </ul>

            <h2 className="text-xl font-semibold text-[#0b1e6d] mt-6 mb-3">Data Protection</h2>
            <p className="text-gray-600 mb-4">
              We implement appropriate security measures to protect your personal information against unauthorized access, 
              alteration, disclosure, or destruction.
            </p>

            <h2 className="text-xl font-semibold text-[#0b1e6d] mt-6 mb-3">Contact Information</h2>
            <p className="text-gray-600">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <div className="mt-2 text-gray-600">
              <p>Email: paulsirsclasses@gmail.com</p>
              <p>Phone: 9007019442, 9830275787</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
