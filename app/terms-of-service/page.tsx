import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service - Paul Sir\'s Classes',
  description: 'Terms of Service for Paul Sir\'s Classes - Commerce Excellence Since 25 Years',
}

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-[#0b1e6d] mb-6">Terms of Service</h1>
          
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-4">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
            </p>

            <h2 className="text-xl font-semibold text-[#0b1e6d] mt-6 mb-3">Acceptance of Terms</h2>
            <p className="text-gray-600 mb-4">
              By enrolling in courses at Paul Sir's Classes, you agree to comply with and be bound by these Terms of Service.
            </p>

            <h2 className="text-xl font-semibold text-[#0b1e6d] mt-6 mb-3">Course Enrollment</h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Enrollment is subject to availability and payment of required fees</li>
              <li>Students must provide accurate and complete information</li>
              <li>Course schedules are subject to change with prior notice</li>
              <li>Fees once paid are non-refundable except as specified</li>
            </ul>

            <h2 className="text-xl font-semibold text-[#0b1e6d] mt-6 mb-3">Student Responsibilities</h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Attend classes regularly and punctually</li>
              <li>Complete assignments and projects on time</li>
              <li>Maintain respectful behavior towards faculty and fellow students</li>
              <li>Follow all institute rules and regulations</li>
            </ul>

            <h2 className="text-xl font-semibold text-[#0b1e6d] mt-6 mb-3">Payment Terms</h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Course fees must be paid as per the payment schedule</li>
              <li>Late payments may incur additional charges</li>
              <li>Payment methods include cash, cheque, and online transfers</li>
            </ul>

            <h2 className="text-xl font-semibold text-[#0b1e6d] mt-6 mb-3">Intellectual Property</h2>
            <p className="text-gray-600 mb-4">
              All course materials, study notes, and educational content provided by Paul Sir's Classes are 
              protected by copyright and may not be reproduced or distributed without permission.
            </p>

            <h2 className="text-xl font-semibold text-[#0b1e6d] mt-6 mb-3">Contact Information</h2>
            <p className="text-gray-600">
              For any questions regarding these Terms of Service, please contact us:
            </p>
            <div className="mt-2 text-gray-600">
              <p>Email: paulsirsclasses@gmail.com</p>
              <p>Phone: 9007019442, 9830275787</p>
              <p>Address: 35B, South Sinthee Road, Kolkata – 700050</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
