'use client'

import { useState, useEffect } from 'react'
import CourseDetail from '../../components/CourseDetail'
import { useParams, useRouter } from 'next/navigation'

// Course data - in a real app this would come from an API
const coursesDatabase = {
  'icse-accounts-economics': {
    id: 1,
    title: 'ICSE Accounts & Economics',
    description: 'Complete preparation for ICSE Class 11-12 Accounts and Economics with expert guidance and exam-focused study material.',
    longDescription: 'This comprehensive course covers the complete ICSE curriculum for Accounts and Economics for Classes 11 and 12. Designed by experienced faculty, this program focuses on conceptual clarity, practical application, and exam-oriented preparation to help students achieve excellent results.',
    duration: '12 Months',
    level: 'Class 11-12',
    students: '500+ Students',
    rating: 4.9,
    features: [
      'Financial Accounting Fundamentals',
      'Double Entry System',
      'Trial Balance & Final Accounts',
      'Micro & Macro Economics',
      'Indian Economic Development',
      'Statistics & Econometrics'
    ],
    curriculum: [
      {
        module: 'Financial Accounting Basics',
        topics: ['Introduction to Accounting', 'Accounting Principles', 'Double Entry System', 'Journal Entries'],
        duration: '4 Weeks'
      },
      {
        module: 'Final Accounts',
        topics: ['Trading Account', 'Profit & Loss Account', 'Balance Sheet', 'Adjustment Entries'],
        duration: '6 Weeks'
      },
      {
        module: 'Micro Economics',
        topics: ['Demand & Supply', 'Market Structures', 'Price Determination', 'Consumer Behavior'],
        duration: '8 Weeks'
      },
      {
        module: 'Macro Economics',
        topics: ['National Income', 'Money & Banking', 'Fiscal Policy', 'Monetary Policy'],
        duration: '6 Weeks'
      }
    ],
    instructor: {
      name: 'J. Paul Sir',
      title: 'M.Com, CMA - Commerce Expert',
      experience: '25+ Years Teaching Experience'
    },
    requirements: [
      'Basic understanding of mathematics',
      'Class 10 passed with good grades',
      'Dedication to regular study',
      'Access to smartphone/computer for online classes'
    ],
    outcomes: [
      'Complete mastery of ICSE Accounts & Economics syllabus',
      'Ability to solve complex accounting problems',
      'Understanding of economic concepts and their applications',
      'Improved analytical and problem-solving skills',
      'Confidence to appear for board exams',
      'Better grades and academic performance'
    ],
    schedule: {
      days: 'Mon, Wed, Fri',
      time: '4:00 PM - 6:00 PM',
      mode: 'Online & Offline'
    },
    materials: [
      'Comprehensive Study Notes',
      'Practice Worksheets',
      'Previous Year Papers',
      'Mock Test Papers',
      'Video Lectures',
      'Doubt Clearing Sessions'
    ],
    certification: true,
    placement: false
  },
  'isc-commerce-stream': {
    id: 2,
    title: 'ISC Commerce Stream',
    description: 'Comprehensive coaching for ISC Commerce subjects including Accounts, Economics, and Business Studies.',
    longDescription: 'Our ISC Commerce Stream program provides complete coverage of all commerce subjects for Classes 11 and 12. With experienced faculty and proven teaching methodologies, we ensure students develop strong conceptual understanding and excel in their examinations.',
    duration: '12 Months',
    level: 'Class 11-12',
    students: '450+ Students',
    rating: 4.8,
    features: [
      'Corporate Accounting',
      'Management Accounting',
      'Business Studies',
      'Economic Applications',
      'Project Work Guidance',
      'Mock Tests & Evaluations'
    ],
    curriculum: [
      {
        module: 'Corporate Accounting',
        topics: ['Company Accounts', 'Issue of Shares', 'Redemption of Debentures', 'Financial Statements'],
        duration: '8 Weeks'
      },
      {
        module: 'Management Accounting',
        topics: ['Cost Concepts', 'Budgetary Control', 'Standard Costing', 'Variance Analysis'],
        duration: '6 Weeks'
      },
      {
        module: 'Business Studies',
        topics: ['Management Functions', 'Business Environment', 'Marketing', 'Human Resource Management'],
        duration: '8 Weeks'
      },
      {
        module: 'Economic Applications',
        topics: ['Indian Economy', 'Business Statistics', 'Project Work', 'Case Studies'],
        duration: '6 Weeks'
      }
    ],
    instructor: {
      name: 'J. Paul Sir',
      title: 'M.Com, CMA - Commerce Expert',
      experience: '25+ Years Teaching Experience'
    },
    requirements: [
      'Class 10 passed with Commerce stream preferred',
      'Basic accounting knowledge helpful',
      'Regular attendance and practice',
      'Access to study materials online'
    ],
    outcomes: [
      'Complete understanding of ISC commerce curriculum',
      'Expertise in corporate and management accounting',
      'Knowledge of business management principles',
      'Ability to analyze economic scenarios',
      'Project work completion skills',
      'Board exam excellence'
    ],
    schedule: {
      days: 'Tue, Thu, Sat',
      time: '5:00 PM - 7:00 PM',
      mode: 'Online & Offline'
    },
    materials: [
      'ISC Study Materials',
      'Corporate Accounting Notes',
      'Business Studies Guide',
      'Economics Applications',
      'Project Templates',
      'Sample Papers'
    ],
    certification: true,
    placement: false
  },
  'bcom-complete-program': {
    id: 5,
    title: 'B.Com Complete Program',
    description: 'All-semester B.Com coaching covering Financial Accounting, Costing, Taxation, and Corporate Accounting.',
    longDescription: 'Our B.Com Complete Program offers comprehensive coaching for all six semesters of B.Com. With expert faculty and structured curriculum, we ensure students gain deep understanding of accounting principles, taxation laws, and business management concepts.',
    duration: '3 Years',
    level: 'Undergraduate',
    students: '800+ Students',
    rating: 4.9,
    features: [
      'Financial Accounting (All Semesters)',
      'Cost Accounting & Cost Management',
      'Corporate Accounting',
      'Income Tax & GST',
      'Auditing',
      'University Exam Preparation'
    ],
    curriculum: [
      {
        module: 'Semester 1-2 Foundation',
        topics: ['Financial Accounting', 'Business Mathematics', 'Business Economics', 'Business Organization'],
        duration: '6 Months'
      },
      {
        module: 'Semester 3-4 Core',
        topics: ['Corporate Accounting', 'Cost Accounting', 'Income Tax', 'Business Law'],
        duration: '12 Months'
      },
      {
        module: 'Semester 5-6 Advanced',
        topics: ['Advanced Accounting', 'Auditing', 'Financial Management', 'E-Commerce'],
        duration: '12 Months'
      },
      {
        module: 'Practical Applications',
        topics: ['Tally ERP', 'GST Filing', 'Tax Returns', 'Project Work'],
        duration: '6 Months'
      }
    ],
    instructor: {
      name: 'J. Paul Sir',
      title: 'M.Com, CMA - Commerce Expert',
      experience: '25+ Years Teaching Experience'
    },
    requirements: [
      '12th pass with Commerce stream',
      'Admission in B.Com program',
      'Basic computer knowledge',
      'Commitment to 3-year program'
    ],
    outcomes: [
      'Complete B.Com syllabus mastery',
      'Practical accounting skills',
      'Tax filing knowledge',
      'Audit understanding',
      'Software proficiency (Tally)',
      'University exam success'
    ],
    schedule: {
      days: 'Mon-Fri',
      time: 'Flexible Batches',
      mode: 'Online & Offline'
    },
    materials: [
      'All Semester Notes',
      'Practical Assignments',
      'Tax Software Training',
      'Mock University Papers',
      'Industry Case Studies',
      'Internship Guidance'
    ],
    certification: true,
    placement: true
  },
  'ca-foundation-complete': {
    id: 8,
    title: 'CA Foundation Complete',
    description: 'Comprehensive CA Foundation preparation covering all subjects with expert faculty and mock tests.',
    longDescription: 'Our CA Foundation Complete program is designed to help students clear the CA Foundation exam in their first attempt. With comprehensive coverage of all four papers, regular mock tests, and personalized guidance, we ensure success in this prestigious professional course.',
    duration: '8 Months',
    level: 'Professional',
    students: '400+ Students',
    rating: 4.9,
    features: [
      'Principles & Practices of Accounting',
      'Business Laws & Business Correspondence',
      'Business Mathematics & Logical Reasoning',
      'Business Economics & Business Mathematics',
      'Mock Tests & Papers',
      'ICAI Exam Pattern'
    ],
    curriculum: [
      {
        module: 'Paper 1: Accounting',
        topics: ['Theoretical Framework', 'Accounting Process', 'Bank Reconciliation', 'Inventories', 'Financial Statements'],
        duration: '8 Weeks'
      },
      {
        module: 'Paper 2: Business Laws',
        topics: ['Indian Contract Act', 'Sale of Goods Act', 'Partnership Act', 'Companies Act', 'Business Correspondence'],
        duration: '8 Weeks'
      },
      {
        module: 'Paper 3: Mathematics & LR',
        topics: ['Business Mathematics', 'Logical Reasoning', 'Statistics', 'Probability', 'Permutations'],
        duration: '8 Weeks'
      },
      {
        module: 'Paper 4: Economics',
        topics: ['Micro Economics', 'Macro Economics', 'Business Economics', 'Mathematical Tools', 'Economic Laws'],
        duration: '8 Weeks'
      }
    ],
    instructor: {
      name: 'J. Paul Sir',
      title: 'M.Com, CMA - Commerce Expert',
      experience: '25+ Years Teaching Experience'
    },
    requirements: [
      '12th pass with minimum 50% marks',
      'Registered with ICAI for CA Foundation',
      'Strong analytical skills',
      'Dedication to professional studies'
    ],
    outcomes: [
      'Clear CA Foundation exam',
      'Strong foundation for CA Intermediate',
      'Professional accounting knowledge',
      'Business law understanding',
      'Analytical and reasoning skills',
      'Career in Chartered Accountancy'
    ],
    schedule: {
      days: 'Mon-Sat',
      time: '6:00 AM - 8:00 AM & 6:00 PM - 8:00 PM',
      mode: 'Online & Offline'
    },
    materials: [
      'ICAI Study Materials',
      'Practice Manuals',
      'Mock Test Papers',
      'Previous Year Papers',
      'Revision Notes',
      'Exam Strategy Guide'
    ],
    certification: true,
    placement: true
  },
  'ca-intermediate-group-1': {
    id: 9,
    title: 'CA Intermediate Group 1',
    description: 'Complete CA Intermediate Group 1 coaching with detailed coverage and exam-oriented preparation.',
    longDescription: 'Our CA Intermediate Group 1 program provides comprehensive coverage of advanced accounting, corporate laws, and cost management. Designed for CA Foundation cleared students aiming to excel in their Group 1 papers.',
    duration: '6 Months',
    level: 'Professional',
    students: '250+ Students',
    rating: 4.8,
    features: [
      'Advanced Accounting',
      'Corporate Laws & Compliance',
      'Cost & Management Accounting',
      'Taxation',
      'Practical Training',
      'ICAI Updates'
    ],
    curriculum: [
      {
        module: 'Advanced Accounting',
        topics: ['Advanced Accounting Issues', 'Accounting Standards', 'Financial Statements', 'Corporate Accounting'],
        duration: '10 Weeks'
      },
      {
        module: 'Corporate Laws',
        topics: ['Companies Act 2013', 'SEBI Regulations', 'Compliance Requirements', 'Corporate Governance'],
        duration: '8 Weeks'
      },
      {
        module: 'Cost & Management Accounting',
        topics: ['Cost Concepts', 'Budgetary Control', 'Standard Costing', 'Variance Analysis'],
        duration: '6 Weeks'
      }
    ],
    instructor: {
      name: 'J. Paul Sir',
      title: 'M.Com, CMA - Commerce Expert',
      experience: '25+ Years Teaching Experience'
    },
    requirements: [
      'CA Foundation cleared',
      'Registered with ICAI for Intermediate',
      'Strong accounting fundamentals',
      'Commitment to professional studies'
    ],
    outcomes: [
      'Clear CA Intermediate Group 1',
      'Advanced accounting expertise',
      'Corporate law knowledge',
      'Cost management skills',
      'Ready for Group 2 studies',
      'Professional career advancement'
    ],
    schedule: {
      days: 'Tue, Thu, Sat',
      time: '6:00 PM - 8:00 PM',
      mode: 'Online & Offline'
    },
    materials: [
      'ICAI Study Materials',
      'Advanced Accounting Notes',
      'Corporate Law Guide',
      'Cost Accounting Manual',
      'Mock Test Papers',
      'Practical Assignments'
    ],
    certification: true,
    placement: true
  },
  'ca-intermediate-group-2': {
    id: 10,
    title: 'CA Intermediate Group 2',
    description: 'Complete CA Intermediate Group 2 preparation with focus on advanced topics and practical applications.',
    longDescription: 'CA Intermediate Group 2 program covers advanced financial management, auditing, ethics, and elective subjects. Perfect for students who have cleared Group 1 and aim to complete their Intermediate successfully.',
    duration: '6 Months',
    level: 'Professional',
    students: '200+ Students',
    rating: 4.7,
    features: [
      'Advanced Financial Management',
      'Auditing & Ethics',
      'Elective Subjects',
      'Case Studies',
      'Practical Applications',
      'Exam Strategy'
    ],
    curriculum: [
      {
        module: 'Financial Management',
        topics: ['Capital Budgeting', 'Working Capital Management', 'Dividend Decisions', 'Leverage Analysis'],
        duration: '8 Weeks'
      },
      {
        module: 'Auditing & Ethics',
        topics: ['Audit Planning', 'Internal Controls', 'Audit Reports', 'Professional Ethics'],
        duration: '8 Weeks'
      },
      {
        module: 'Elective Papers',
        topics: ['Risk Management', 'Financial Services', 'International Finance', 'E-Commerce'],
        duration: '8 Weeks'
      }
    ],
    instructor: {
      name: 'J. Paul Sir',
      title: 'M.Com, CMA - Commerce Expert',
      experience: '25+ Years Teaching Experience'
    },
    requirements: [
      'CA Intermediate Group 1 cleared',
      'Registered with ICAI for Group 2',
      'Strong foundation in advanced topics',
      'Professional approach to studies'
    ],
    outcomes: [
      'Clear CA Intermediate Group 2',
      'Complete CA Intermediate qualification',
      'Financial management expertise',
      'Auditing knowledge',
      'Ready for CA Finals',
      'Professional accounting career'
    ],
    schedule: {
      days: 'Mon, Wed, Fri',
      time: '6:00 PM - 8:00 PM',
      mode: 'Online & Offline'
    },
    materials: [
      'Advanced Study Materials',
      'Financial Management Guide',
      'Auditing Manual',
      'Ethics Notes',
      'Case Study Materials',
      'Mock Test Series'
    ],
    certification: true,
    placement: true
  },
  'cma-foundation-program': {
    id: 11,
    title: 'CMA Foundation Program',
    description: 'Complete CMA Foundation preparation with comprehensive coverage of all subjects and regular assessments.',
    longDescription: 'Our CMA Foundation program provides thorough preparation for all foundation papers with expert guidance, regular assessments, and exam-focused study materials.',
    duration: '6 Months',
    level: 'Professional',
    students: '180+ Students',
    rating: 4.6,
    features: [
      'Fundamentals of Economics & Management',
      'Fundamentals of Financial Accounting',
      'Fundamentals of Laws & Ethics',
      'Fundamentals of Business Mathematics',
      'Mock Tests',
      'ICMAI Pattern'
    ],
    curriculum: [
      {
        module: 'Economics & Management',
        topics: ['Business Economics', 'Management Principles', 'Business Organization', 'Entrepreneurship'],
        duration: '8 Weeks'
      },
      {
        module: 'Financial Accounting',
        topics: ['Accounting Fundamentals', 'Financial Statements', 'Accounting Standards', 'Computer Applications'],
        duration: '8 Weeks'
      },
      {
        module: 'Laws & Ethics',
        topics: ['Business Laws', 'Company Law', 'Professional Ethics', 'Commercial Knowledge'],
        duration: '8 Weeks'
      },
      {
        module: 'Business Mathematics',
        topics: ['Mathematics Fundamentals', 'Statistics', 'Logical Reasoning', 'Quantitative Techniques'],
        duration: '8 Weeks'
      }
    ],
    instructor: {
      name: 'J. Paul Sir',
      title: 'M.Com, CMA - Commerce Expert',
      experience: '25+ Years Teaching Experience'
    },
    requirements: [
      '12th pass with minimum 50% marks',
      'Registered with ICMAI for Foundation',
      'Basic mathematics knowledge',
      'Interest in cost accounting career'
    ],
    outcomes: [
      'Clear CMA Foundation exam',
      'Strong foundation for CMA Intermediate',
      'Basic management knowledge',
      'Accounting fundamentals',
      'Business law understanding',
      'Career in cost accounting'
    ],
    schedule: {
      days: 'Mon, Wed, Fri',
      time: '5:00 PM - 7:00 PM',
      mode: 'Online & Offline'
    },
    materials: [
      'ICMAI Study Materials',
      'Foundation Notes',
      'Practice Workbooks',
      'Mock Test Papers',
      'Previous Year Solutions',
      'Exam Guide'
    ],
    certification: true,
    placement: false
  },
  'cma-intermediate': {
    id: 12,
    title: 'CMA Intermediate',
    description: 'Advanced CMA Intermediate coaching covering all subjects with practical applications and case studies.',
    longDescription: 'CMA Intermediate program offers comprehensive coverage of financial accounting, direct and indirect taxation, cost accounting, and operations management with practical applications.',
    duration: '8 Months',
    level: 'Professional',
    students: '150+ Students',
    rating: 4.7,
    features: [
      'Financial Accounting',
      'Direct & Indirect Taxation',
      'Cost Accounting',
      'Operations Management',
      'Strategic Management',
      'Practical Training'
    ],
    curriculum: [
      {
        module: 'Financial Accounting',
        topics: ['Advanced Accounting', 'Accounting Standards', 'Financial Statement Analysis', 'Corporate Accounting'],
        duration: '10 Weeks'
      },
      {
        module: 'Direct & Indirect Taxation',
        topics: ['Income Tax', 'GST', 'Customs Duty', 'Tax Planning'],
        duration: '10 Weeks'
      },
      {
        module: 'Cost Accounting',
        topics: ['Cost Concepts', 'Material Cost', 'Labor Cost', 'Overhead Cost', 'Standard Costing'],
        duration: '8 Weeks'
      },
      {
        module: 'Operations Management',
        topics: ['Operations Strategy', 'Quality Management', 'Productivity Analysis', 'Supply Chain'],
        duration: '6 Weeks'
      }
    ],
    instructor: {
      name: 'J. Paul Sir',
      title: 'M.Com, CMA - Commerce Expert',
      experience: '25+ Years Teaching Experience'
    },
    requirements: [
      'CMA Foundation cleared',
      'Registered with ICMAI for Intermediate',
      'Strong accounting background',
      'Professional approach required'
    ],
    outcomes: [
      'Clear CMA Intermediate exam',
      'Advanced cost accounting skills',
      'Taxation expertise',
      'Operations management knowledge',
      'Ready for CMA Final',
      'Professional career advancement'
    ],
    schedule: {
      days: 'Tue, Thu, Sat',
      time: '6:00 PM - 8:00 PM',
      mode: 'Online & Offline'
    },
    materials: [
      'ICMAI Study Materials',
      'Advanced Accounting Notes',
      'Taxation Guides',
      'Cost Accounting Manual',
      'Case Studies',
      'Mock Test Series'
    ],
    certification: true,
    placement: true
  },
  'cs-foundation-program': {
    id: 13,
    title: 'CS Foundation Program',
    description: 'Complete CS Foundation preparation with focus on company law and secretarial practices.',
    longDescription: 'CS Foundation program provides comprehensive preparation for company law, business environment, and secretarial practices with exam-focused approach.',
    duration: '6 Months',
    level: 'Professional',
    students: '120+ Students',
    rating: 4.5,
    features: [
      'Business Environment & Law',
      'Business Management & Ethics',
      'Entrepreneurship Development',
      'Business Economics',
      'Company Law',
      'Secretarial Practices'
    ],
    curriculum: [
      {
        module: 'Business Environment',
        topics: ['Business Environment', 'Political Environment', 'Legal Environment', 'Social Environment'],
        duration: '6 Weeks'
      },
      {
        module: 'Business Law',
        topics: ['Company Law 2013', 'Contract Act', 'Partnership Act', 'Sale of Goods Act'],
        duration: '8 Weeks'
      },
      {
        module: 'Management & Ethics',
        topics: ['Management Principles', 'Business Ethics', 'Entrepreneurship', 'Communication'],
        duration: '6 Weeks'
      },
      {
        module: 'Economics & Statistics',
        topics: ['Business Economics', 'Business Statistics', 'Economic Laws', 'Quantitative Techniques'],
        duration: '6 Weeks'
      }
    ],
    instructor: {
      name: 'J. Paul Sir',
      title: 'M.Com, CMA - Commerce Expert',
      experience: '25+ Years Teaching Experience'
    },
    requirements: [
      '12th pass with minimum 50% marks',
      'Registered with ICSI for Foundation',
      'Interest in company law',
      'Basic business knowledge'
    ],
    outcomes: [
      'Clear CS Foundation exam',
      'Company law knowledge',
      'Business management understanding',
      'Secretarial practices',
      'Ready for CS Executive',
      'Career in company secretary'
    ],
    schedule: {
      days: 'Mon, Wed, Fri',
      time: '5:00 PM - 7:00 PM',
      mode: 'Online & Offline'
    },
    materials: [
      'ICSI Study Materials',
      'Company Law Notes',
      'Business Management Guide',
      'Foundation Practice Papers',
      'Previous Year Solutions',
      'Exam Strategy'
    ],
    certification: true,
    placement: false
  },
  'cs-executive-program': {
    id: 14,
    title: 'CS Executive Program',
    description: 'Advanced CS Executive coaching with comprehensive coverage of company law and corporate governance.',
    longDescription: 'CS Executive program provides advanced coaching for company law, securities laws, and corporate governance with practical applications and case studies.',
    duration: '8 Months',
    level: 'Professional',
    students: '100+ Students',
    rating: 4.6,
    features: [
      'Company Law',
      'Securities Laws & Compliances',
      'Economic, Business & Commercial Laws',
      'Setting Up of Business Entities',
      'Corporate Governance',
      'Practical Training'
    ],
    curriculum: [
      {
        module: 'Company Law',
        topics: ['Companies Act 2013', 'Board Meetings', 'Share Capital', 'Dividend Policy'],
        duration: '10 Weeks'
      },
      {
        module: 'Securities Laws',
        topics: ['SEBI Regulations', 'Listing Agreements', 'Insider Trading', 'Takeovers'],
        duration: '8 Weeks'
      },
      {
        module: 'Economic & Business Laws',
        topics: ['Competition Act', 'Foreign Exchange Management', 'Banking Regulations', 'Insurance Laws'],
        duration: '8 Weeks'
      },
      {
        module: 'Corporate Governance',
        topics: ['Board Composition', 'Corporate Governance Principles', 'CSR', 'Risk Management'],
        duration: '6 Weeks'
      }
    ],
    instructor: {
      name: 'J. Paul Sir',
      title: 'M.Com, CMA - Commerce Expert',
      experience: '25+ Years Teaching Experience'
    },
    requirements: [
      'CS Foundation cleared',
      'Registered with ICSI for Executive',
      'Company law knowledge',
      'Professional experience preferred'
    ],
    outcomes: [
      'Clear CS Executive exam',
      'Advanced company law expertise',
      'Securities regulations knowledge',
      'Corporate governance understanding',
      'Ready for CS Professional',
      'Career as Company Secretary'
    ],
    schedule: {
      days: 'Sat, Sun',
      time: '9:00 AM - 2:00 PM',
      mode: 'Online & Offline'
    },
    materials: [
      'ICSI Study Materials',
      'Company Law Manual',
      'Securities Law Guide',
      'Governance Notes',
      'Case Studies',
      'Mock Test Papers'
    ],
    certification: true,
    placement: true
  },
  'cbse-commerce-complete': {
    id: 3,
    title: 'CBSE Commerce Complete',
    description: 'Full coverage of CBSE Class 11-12 Commerce curriculum with regular tests and personalized attention.',
    longDescription: 'Our CBSE Commerce Complete program offers comprehensive coaching for Class 11-12 students covering Accountancy, Business Studies, and Economics with CBSE-focused preparation.',
    duration: '12 Months',
    level: 'Class 11-12',
    students: '600+ Students',
    rating: 4.7,
    features: [
      'Accountancy Part 1 & 2',
      'Business Studies',
      'Economics Micro & Macro',
      'Project Work',
      'Case Study Analysis',
      'Board Exam Preparation'
    ],
    curriculum: [
      {
        module: 'Accountancy Part 1',
        topics: ['Introduction to Accounting', 'Theory Base of Accounting', 'Recording Transactions', 'Bank Reconciliation'],
        duration: '8 Weeks'
      },
      {
        module: 'Accountancy Part 2',
        topics: ['Financial Statements', 'Accounts from Incomplete Records', 'Non-Profit Organizations', 'Partnership Accounts'],
        duration: '8 Weeks'
      },
      {
        module: 'Business Studies',
        topics: ['Nature & Purpose of Business', 'Forms of Business Organization', 'Public, Private & Global Enterprises'],
        duration: '10 Weeks'
      },
      {
        module: 'Economics',
        topics: ['Indian Economy', 'Statistics', 'Development Experience', 'Economic Reforms'],
        duration: '10 Weeks'
      }
    ],
    instructor: {
      name: 'J. Paul Sir',
      title: 'M.Com, CMA - Commerce Expert',
      experience: '25+ Years Teaching Experience'
    },
    requirements: [
      'Class 10 passed with good grades',
      'Interest in commerce stream',
      'Regular attendance required',
      'Access to study materials'
    ],
    outcomes: [
      'Complete CBSE commerce mastery',
      'Strong accounting foundation',
      'Business studies understanding',
      'Economics knowledge',
      'Board exam success',
      'Higher studies readiness'
    ],
    schedule: {
      days: 'Mon, Wed, Fri',
      time: '4:00 PM - 6:00 PM',
      mode: 'Online & Offline'
    },
    materials: [
      'CBSE Textbooks Coverage',
      'NCERT Solutions',
      'Practice Worksheets',
      'Sample Papers',
      'Project Work Guidance',
      'Board Exam Materials'
    ],
    certification: true,
    placement: false
  },
  'higher-secondary-commerce': {
    id: 4,
    title: 'Higher Secondary Commerce',
    description: 'Specialized coaching for West Bengal HS Commerce with focus on Accounts, Business Economics, and Statistics.',
    longDescription: 'Higher Secondary Commerce program provides specialized coaching for West Bengal Board students with focus on Accounts, Business Economics, and Statistics for academic excellence.',
    duration: '12 Months',
    level: 'Class 11-12',
    students: '350+ Students',
    rating: 4.6,
    features: [
      'Business Mathematics',
      'Business Organization',
      'Cost Accounting',
      'Business Economics',
      'Statistics',
      'University Exam Pattern'
    ],
    curriculum: [
      {
        module: 'Business Mathematics',
        topics: ['Arithmetic Progression', 'Geometric Progression', 'Permutation Combination', 'Probability'],
        duration: '8 Weeks'
      },
      {
        module: 'Business Organization',
        topics: ['Sole Proprietorship', 'Partnership Firm', 'Joint Stock Company', 'Cooperative Society'],
        duration: '8 Weeks'
      },
      {
        module: 'Cost Accounting',
        topics: ['Material Cost', 'Labor Cost', 'Overhead Cost', 'Cost Sheet Preparation'],
        duration: '10 Weeks'
      },
      {
        module: 'Business Economics',
        topics: ['Demand & Supply', 'Market Structure', 'National Income', 'Money & Banking'],
        duration: '10 Weeks'
      }
    ],
    instructor: {
      name: 'J. Paul Sir',
      title: 'M.Com, CMA - Commerce Expert',
      experience: '25+ Years Teaching Experience'
    },
    requirements: [
      'Class 10 passed from WB Board',
      'Commerce stream admission',
      'Basic mathematics knowledge',
      'Regular study commitment'
    ],
    outcomes: [
      'WBHS exam success',
      'Commerce fundamentals mastery',
      'Mathematical skills development',
      'Business understanding',
      'College admission readiness',
      'Career foundation'
    ],
    schedule: {
      days: 'Tue, Thu, Sat',
      time: '4:30 PM - 6:30 PM',
      mode: 'Online & Offline'
    },
    materials: [
      'WBHS Text Materials',
      'Business Mathematics Guide',
      'Practice Sets',
      'Previous Year Papers',
      'Model Answers',
      'Exam Tips'
    ],
    certification: true,
    placement: false
  },
  'bba-specialized-coaching': {
    id: 6,
    title: 'BBA Specialized Coaching',
    description: 'Complete BBA curriculum coverage with focus on management principles and business applications.',
    longDescription: 'BBA Specialized Coaching program provides comprehensive coverage of BBA curriculum with focus on management principles, business applications, and practical case studies.',
    duration: '3 Years',
    level: 'Undergraduate',
    students: '300+ Students',
    rating: 4.7,
    features: [
      'Principles of Management',
      'Business Mathematics',
      'Financial Management',
      'Marketing Management',
      'Human Resource Management',
      'Business Communication'
    ],
    curriculum: [
      {
        module: 'Management Fundamentals',
        topics: ['Planning, Organizing, Staffing, Directing, Controlling', 'Management Theories', 'Decision Making'],
        duration: '12 Weeks'
      },
      {
        module: 'Business Mathematics',
        topics: ['Calculus', 'Statistics', 'Probability', 'Linear Programming'],
        duration: '8 Weeks'
      },
      {
        module: 'Financial Management',
        topics: ['Capital Budgeting', 'Working Capital', 'Dividend Policy', 'Financial Analysis'],
        duration: '10 Weeks'
      },
      {
        module: 'Marketing Management',
        topics: ['Marketing Mix', 'Consumer Behavior', 'Market Research', 'Brand Management'],
        duration: '8 Weeks'
      }
    ],
    instructor: {
      name: 'J. Paul Sir',
      title: 'M.Com, CMA - Commerce Expert',
      experience: '25+ Years Teaching Experience'
    },
    requirements: [
      '12th pass with commerce',
      'BBA admission',
      'Basic mathematics',
      'Interest in management'
    ],
    outcomes: [
      'BBA degree completion',
      'Management knowledge',
      'Business skills development',
      'Leadership qualities',
      'Career readiness',
      'Higher studies foundation'
    ],
    schedule: {
      days: 'Mon-Fri',
      time: 'Flexible Batches',
      mode: 'Online & Offline'
    },
    materials: [
      'BBA Study Materials',
      'Management Case Studies',
      'Business Mathematics Guide',
      'Project Work Support',
      'Presentation Skills',
      'Industry Updates'
    ],
    certification: true,
    placement: true
  },
  'mba-executive-program': {
    id: 7,
    title: 'MBA Executive Program',
    description: 'Advanced MBA coaching with specialization in Finance, Marketing, and Human Resource Management.',
    longDescription: 'MBA Executive program provides advanced coaching for working professionals with focus on strategic management, finance, marketing, and HR with practical applications.',
    duration: '2 Years',
    level: 'Postgraduate',
    students: '200+ Students',
    rating: 4.8,
    features: [
      'Strategic Management',
      'Financial Management',
      'Marketing Strategy',
      'Operations Management',
      'Business Analytics',
      'Case Study Method'
    ],
    curriculum: [
      {
        module: 'Strategic Management',
        topics: ['Strategic Planning', 'Competitive Analysis', 'Corporate Strategy', 'Implementation'],
        duration: '12 Weeks'
      },
      {
        module: 'Financial Management',
        topics: ['Advanced Finance', 'Investment Analysis', 'Risk Management', 'Portfolio Management'],
        duration: '12 Weeks'
      },
      {
        module: 'Marketing Strategy',
        topics: ['Digital Marketing', 'Brand Strategy', 'Market Research', 'Customer Analytics'],
        duration: '10 Weeks'
      },
      {
        module: 'Business Analytics',
        topics: ['Data Analysis', 'Business Intelligence', 'Predictive Analytics', 'Dashboard Design'],
        duration: '8 Weeks'
      }
    ],
    instructor: {
      name: 'J. Paul Sir',
      title: 'M.Com, CMA - Commerce Expert',
      experience: '25+ Years Teaching Experience'
    },
    requirements: [
      'Graduation degree',
      'Work experience preferred',
      'Basic computer knowledge',
      'Management aptitude'
    ],
    outcomes: [
      'MBA degree completion',
      'Strategic thinking skills',
      'Leadership development',
      'Business analytics knowledge',
      'Career advancement',
      'Executive positions readiness'
    ],
    schedule: {
      days: 'Weekend Batches',
      time: '9:00 AM - 5:00 PM',
      mode: 'Online & Offline'
    },
    materials: [
      'MBA Study Materials',
      'Case Study Collection',
      'Research Papers',
      'Analytics Tools Training',
      'Leadership Workshops',
      'Industry Projects'
    ],
    certification: true,
    placement: true
  }
}

export default function CourseDetailPage() {
  const params = useParams()
  const router = useRouter()
  const [course, setCourse] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const slug = params.slug as string
    
    // Simulate API call
    setTimeout(() => {
      const courseData = coursesDatabase[slug as keyof typeof coursesDatabase]
      if (courseData) {
        setCourse(courseData)
      } else {
        // Course not found, redirect to courses page
        router.push('/courses')
      }
      setLoading(false)
    }, 500)
  }, [params.slug, router])

  const handleEnroll = () => {
    // Navigate to enroll page with course pre-selected
    if (course) {
      window.location.href = `/enroll?course=${encodeURIComponent(course.title)}`
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0b1e6d] mx-auto mb-4"></div>
          <p className="text-gray-600">Loading course details...</p>
        </div>
      </div>
    )
  }

  if (!course) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Course Not Found</h2>
          <p className="text-gray-600 mb-6">The course you're looking for doesn't exist.</p>
          <a
            href="/courses"
            className="bg-[#0b1e6d] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#1a3a8a] transition"
          >
            Browse All Courses
          </a>
        </div>
      </div>
    )
  }

  return <CourseDetail course={course} onEnroll={handleEnroll} />
}
