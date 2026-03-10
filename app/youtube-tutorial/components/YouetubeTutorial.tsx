"use client"
import { useState } from 'react'
import {
  Youtube,
  Upload,
  PlayCircle,
  Settings,
  FolderOpen,
  Link2,
  Eye,
  Clock,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  Copy,
  Monitor,
  Smartphone,
  FileVideo,
  Tags,
  BarChart3,
  Phone,
  Mail
} from 'lucide-react'

export default function YouetubeTutorial() {
  const [activeStep, setActiveStep] = useState(1)
  const [copiedCode, setCopiedCode] = useState('')

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopiedCode(text)
    setTimeout(() => setCopiedCode(''), 2000)
  }

  const steps = [
    {
      id: 1,
      title: "Create YouTube Account",
      icon: <Youtube className="h-6 w-6" />,
      description: "Set up your YouTube channel for Paul Sir's Classes"
    },
    {
      id: 2,
      title: "Prepare Video Content",
      icon: <FileVideo className="h-6 w-6" />,
      description: "Record and edit your educational content"
    },
    {
      id: 3,
      title: "Upload to YouTube",
      icon: <Upload className="h-6 w-6" />,
      description: "Upload videos with proper optimization"
    },
    {
      id: 4,
      title: "Configure Settings",
      icon: <Settings className="h-6 w-6" />,
      description: "Set privacy, thumbnails, and metadata"
    },
    {
      id: 5,
      title: "Integrate with Website",
      icon: <Link2 className="h-6 w-6" />,
      description: "Add videos to your course pages"
    },
    {
      id: 6,
      title: "Manage & Analyze",
      icon: <BarChart3 className="h-6 w-6" />,
      description: "Track performance and manage content"
    }
  ]
const videos = [
  { id: "C8O84gHnucA" },
  { id: "rYjHH71s3Os" },
  { id: "ZE8X5hKqhes" },
  { id: "-pLBSZmu1gM" },
  { id: "bB3lZoShOhc" },
  { id: "zIQeKoeCysY" },
  { id: "P02-ffBM9VI" }
];
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}

      <section className="relative h-[40vh] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1523580846011-d3a5bc25702b')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1e6d]/90 to-[#1e3a8a]/85"></div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-[#f5c542] p-4 rounded-full">
                <Youtube className="h-12 w-12 text-[#0b1e6d]" />
              </div>
            </div>
        <h1 className="text-4xl lg:text-5xl font-bold mb-6">
  YouTube Videos
</h1>
<p className="text-xl text-white/80 max-w-3xl mx-auto">
  Watch Paul Sir’s educational videos covering important concepts, tips, and complete explanations for better understanding.
</p>
          </div>
        </div>
      </section>
  <section className="py-20 ">
      


      {/* Video Grid */}
      <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {videos.map((video, index) => (
          <div
            key={index}
            className="bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition duration-300"
          >
            <div className="aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${video.id}`}
                title="YouTube video"
                className="w-full h-full"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        ))}
      </div>

    </section>
      {/* Progress Steps */}
      {/* <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-6">

          <div className="flex items-center justify-between relative">

            {steps.map((step, index) => (
              <div
                key={step.id}
                className="flex-1 flex flex-col items-center relative cursor-pointer"
                onClick={() => setActiveStep(step.id)}
              >


                {index !== steps.length - 1 && (
                  <div className="absolute top-6 left-1/2 w-full h-[2px] bg-gray-200 z-0"></div>
                )}


                <div
                  className={`relative z-10 flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all duration-200
            ${activeStep === step.id
                      ? "bg-[#0b1e6d] border-[#0b1e6d] text-white shadow-md"
                      : "bg-white border-gray-300 text-gray-500 hover:border-[#0b1e6d]"
                    }`}
                >
                  {step.icon}
                </div>


                <p
                  className={`mt-3 text-sm font-medium text-center hidden md:block
            ${activeStep === step.id
                      ? "text-[#0b1e6d]"
                      : "text-gray-500"
                    }`}
                >
                  {step.title}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section> */}


      {/* <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">

            <div className="lg:col-span-2 space-y-8">

              {activeStep === 1 && (
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-[#0b1e6d] p-3 rounded-full">
                      <Youtube className="h-6 w-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-[#0b1e6d]">Step 1: Create YouTube Account</h2>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">1.1 Google Account Setup</h3>
                      <div className="bg-gray-50 rounded-xl p-6">
                        <ul className="space-y-3">
                          <li className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-medium text-gray-800">Create a Google Account</p>
                              <p className="text-gray-600 text-sm">Visit <code className="bg-gray-200 px-2 py-1 rounded">accounts.google.com</code></p>
                            </div>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-medium text-gray-800">Use professional email</p>
                              <p className="text-gray-600 text-sm">Recommended: <code className="bg-gray-200 px-2 py-1 rounded">paulsirsclasses@gmail.com</code></p>
                            </div>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-medium text-gray-800">Enable 2-Factor Authentication</p>
                              <p className="text-gray-600 text-sm">For account security</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">1.2 Create YouTube Channel</h3>
                      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                        <ol className="space-y-2 text-gray-700">
                          <li>1. Go to <code className="bg-blue-100 px-2 py-1 rounded">youtube.com</code></li>
                          <li>2. Click on your profile icon → "Create Channel"</li>
                          <li>3. Choose "Custom Channel Name"</li>
                          <li>4. Enter channel name: <strong>"Paul Sir's Commerce Classes"</strong></li>
                          <li>5. Add channel description and branding</li>
                        </ol>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">1.3 Channel Optimization</h3>
                      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                        <div className="flex items-start gap-3">
                          <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-medium text-gray-800 mb-2">Important Settings:</p>
                            <ul className="text-sm text-gray-700 space-y-1">
                              <li>• Upload channel banner (2560x1440px)</li>
                              <li>• Add profile picture (logo)</li>
                              <li>• Write comprehensive "About" section</li>
                              <li>• Add contact information and links</li>
                              <li>• Set default video upload settings</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeStep === 2 && (
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-[#0b1e6d] p-3 rounded-full">
                      <FileVideo className="h-6 w-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-[#0b1e6d]">Step 2: Prepare Video Content</h2>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">2.1 Video Recording Guidelines</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-gray-50 rounded-xl p-6">
                          <h4 className="font-medium text-gray-800 mb-3 flex items-center gap-2">
                            <Monitor className="h-5 w-5 text-[#0b1e6d]" />
                            Technical Requirements
                          </h4>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li>• Resolution: 1080p (1920x1080)</li>
                            <li>• Frame rate: 30fps</li>
                            <li>• Audio: Clear, no background noise</li>
                            <li>• Format: MP4, MOV, or AVI</li>
                            <li>• Duration: 10-45 minutes optimal</li>
                          </ul>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-6">
                          <h4 className="font-medium text-gray-800 mb-3 flex items-center gap-2">
                            <PlayCircle className="h-5 w-5 text-[#0b1e6d]" />
                            Content Guidelines
                          </h4>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li>• Start with clear introduction</li>
                            <li>• Use whiteboard/screen recording</li>
                            <li>• Include practical examples</li>
                            <li>• Add chapter markers</li>
                            <li>• End with summary & Q&A</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">2.2 Video Editing Best Practices</h3>
                      <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                        <h4 className="font-medium text-gray-800 mb-3">Editing Checklist:</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>Remove mistakes and pauses</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>Add intro/outro branding</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>Include text overlays for key points</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>Normalize audio levels</span>
                            </li>
                          </ul>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>Add background music (subtle)</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>Create custom thumbnail</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>Export in high quality</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>Keep file size reasonable</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">2.3 Content Organization</h3>
                      <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                        <h4 className="font-medium text-gray-800 mb-3">Suggested Video Categories:</h4>
                        <div className="grid md:grid-cols-3 gap-3 text-sm">
                          <div className="bg-white rounded-lg p-3">
                            <p className="font-medium text-purple-700">Demo Classes</p>
                            <p className="text-gray-600">Free preview lessons</p>
                          </div>
                          <div className="bg-white rounded-lg p-3">
                            <p className="font-medium text-purple-700">Full Lectures</p>
                            <p className="text-gray-600">Complete chapter coverage</p>
                          </div>
                          <div className="bg-white rounded-lg p-3">
                            <p className="font-medium text-purple-700">Problem Solving</p>
                            <p className="text-gray-600">Step-by-step solutions</p>
                          </div>
                          <div className="bg-white rounded-lg p-3">
                            <p className="font-medium text-purple-700">Exam Tips</p>
                            <p className="text-gray-600">Strategy and guidance</p>
                          </div>
                          <div className="bg-white rounded-lg p-3">
                            <p className="font-medium text-purple-700">Q&A Sessions</p>
                            <p className="text-gray-600">Student interactions</p>
                          </div>
                          <div className="bg-white rounded-lg p-3">
                            <p className="font-medium text-purple-700">Updates</p>
                            <p className="text-gray-600">New syllabus changes</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeStep === 3 && (
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-[#0b1e6d] p-3 rounded-full">
                      <Upload className="h-6 w-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-[#0b1e6d]">Step 3: Upload to YouTube</h2>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">3.1 Upload Process</h3>
                      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                        <ol className="space-y-3 text-gray-700">
                          <li className="flex items-start gap-3">
                            <span className="bg-blue-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                            <div>
                              <p className="font-medium">Sign in to YouTube Studio</p>
                              <p className="text-sm text-gray-600">Go to <code className="bg-blue-100 px-2 py-1 rounded">studio.youtube.com</code></p>
                            </div>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="bg-blue-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                            <div>
                              <p className="font-medium">Click "Create" → "Upload videos"</p>
                              <p className="text-sm text-gray-600">Select your video file</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="bg-blue-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                            <div>
                              <p className="font-medium">Wait for upload processing</p>
                              <p className="text-sm text-gray-600">Large files may take time</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="bg-blue-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
                            <div>
                              <p className="font-medium">Fill in video details</p>
                              <p className="text-sm text-gray-600">Title, description, tags, thumbnail</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="bg-blue-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">5</span>
                            <div>
                              <p className="font-medium">Set visibility and publish</p>
                              <p className="text-sm text-gray-600">Choose Public, Private, or Unlisted</p>
                            </div>
                          </li>
                        </ol>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">3.2 Video Optimization</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-gray-50 rounded-xl p-6">
                          <h4 className="font-medium text-gray-800 mb-3 flex items-center gap-2">
                            <Tags className="h-5 w-5 text-[#0b1e6d]" />
                            Title & Description
                          </h4>
                          <div className="space-y-3 text-sm">
                            <div>
                              <p className="font-medium text-gray-700">Title Format:</p>
                              <code className="bg-gray-200 px-2 py-1 rounded text-xs block mt-1">
                                [Course Name] - [Topic] | Paul Sir's Classes
                              </code>
                            </div>
                            <div>
                              <p className="font-medium text-gray-700">Description Template:</p>
                              <textarea
                                className="bg-gray-200 px-2 py-1 rounded text-xs w-full mt-1 h-20 resize-none"
                                readOnly
                                value={`📚 Course: [Course Name]
📖 Topic: [Specific Topic]
👨‍🏫 Instructor: Paul Sir
⏰ Duration: [Video Length]

🔥 What you'll learn:
• [Key point 1]
• [Key point 2]
• [Key point 3]

📞 Contact: 9007019442, 9830275787
📧 Email: paulsirsclasses@gmail.com
📍 Kolkata: South Sinthee Road & Hedua

#PaulSirClasses #Commerce #[CourseName]`}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-6">
                          <h4 className="font-medium text-gray-800 mb-3 flex items-center gap-2">
                            <Eye className="h-5 w-5 text-[#0b1e6d]" />
                            Tags & Keywords
                          </h4>
                          <div className="space-y-3 text-sm">
                            <div>
                              <p className="font-medium text-gray-700">Essential Tags:</p>
                              <div className="flex flex-wrap gap-1 mt-2">
                                {['Paul Sir Classes', 'Commerce', 'ICSE', 'ISC', 'CBSE', 'B.Com', 'CA', 'CMA', 'CS', 'Kolkata'].map(tag => (
                                  <span key={tag} className="bg-gray-200 px-2 py-1 rounded text-xs">{tag}</span>
                                ))}
                              </div>
                            </div>
                            <div>
                              <p className="font-medium text-gray-700">Course-Specific Tags:</p>
                              <p className="text-gray-600 text-xs mt-1">Add subject-specific keywords based on content</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">3.3 Thumbnail Creation</h3>
                      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                        <div className="flex items-start gap-3">
                          <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-medium text-gray-800 mb-2">Thumbnail Guidelines:</p>
                            <ul className="text-sm text-gray-700 space-y-1">
                              <li>• Size: 1280x720px (16:9 ratio)</li>
                              <li>• High resolution, clear text</li>
                              <li>• Include course name and topic</li>
                              <li>• Use brand colors (blue #0b1e6d, yellow #f5c542)</li>
                              <li>• Add "Paul Sir's Classes" branding</li>
                              <li>• Make it visually appealing and professional</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeStep === 4 && (
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-[#0b1e6d] p-3 rounded-full">
                      <Settings className="h-6 w-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-[#0b1e6d]">Step 4: Configure Settings</h2>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">4.1 Privacy Settings</h3>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                          <h4 className="font-medium text-green-700 mb-2">Public</h4>
                          <p className="text-sm text-gray-700 mb-3">Anyone can search and view</p>
                          <ul className="text-xs text-gray-600 space-y-1">
                            <li>✓ Best for marketing</li>
                            <li>✓ Appears in search</li>
                            <li>✓ Can be shared</li>
                          </ul>
                        </div>
                        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                          <h4 className="font-medium text-yellow-700 mb-2">Unlisted</h4>
                          <p className="text-sm text-gray-700 mb-3">Only with link access</p>
                          <ul className="text-xs text-gray-600 space-y-1">
                            <li>✓ Not searchable</li>
                            <li>✓ Safe for website</li>
                            <li>✓ Link sharing only</li>
                          </ul>
                        </div>
                        <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                          <h4 className="font-medium text-red-700 mb-2">Private</h4>
                          <p className="text-sm text-gray-700 mb-3">Only you can view</p>
                          <ul className="text-xs text-gray-600 space-y-1">
                            <li>✗ Testing only</li>
                            <li>✗ Not shareable</li>
                            <li>✗ Hidden completely</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">4.2 Advanced Settings</h3>
                      <div className="bg-gray-50 rounded-xl p-6">
                        <h4 className="font-medium text-gray-800 mb-4">Recommended Configuration:</h4>
                        <div className="space-y-4">
                          <div className="flex justify-between items-center py-2 border-b">
                            <span className="text-gray-700">Category</span>
                            <span className="font-medium">Education</span>
                          </div>
                          <div className="flex justify-between items-center py-2 border-b">
                            <span className="text-gray-700">Comments</span>
                            <span className="font-medium text-green-600">Enabled</span>
                          </div>
                          <div className="flex justify-between items-center py-2 border-b">
                            <span className="text-gray-700">Age restriction</span>
                            <span className="font-medium">No</span>
                          </div>
                          <div className="flex justify-between items-center py-2 border-b">
                            <span className="text-gray-700">Embedding</span>
                            <span className="font-medium text-green-600">Allowed</span>
                          </div>
                          <div className="flex justify-between items-center py-2 border-b">
                            <span className="text-gray-700">License</span>
                            <span className="font-medium">Standard YouTube</span>
                          </div>
                          <div className="flex justify-between items-center py-2">
                            <span className="text-gray-700">Language</span>
                            <span className="font-medium">English (India)</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">4.3 Playlist Organization</h3>
                      <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                        <h4 className="font-medium text-gray-800 mb-3">Create Playlists by Course:</h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          {['ICSE Commerce', 'ISC Commerce', 'CBSE Commerce', 'B.Com All Semesters', 'CA Foundation', 'CMA Foundation', 'CS Foundation', 'Demo Classes'].map(playlist => (
                            <div key={playlist} className="bg-white rounded-lg p-3 flex items-center gap-3">
                              <FolderOpen className="h-5 w-5 text-purple-600" />
                              <span className="text-sm font-medium">{playlist}</span>
                            </div>
                          ))}
                        </div>
                        <p className="text-xs text-gray-600 mt-3">Playlists help organize content and improve user experience</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeStep === 5 && (
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-[#0b1e6d] p-3 rounded-full">
                      <Link2 className="h-6 w-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-[#0b1e6d]">Step 5: Integrate with Website</h2>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">5.1 Get Video Embed Code</h3>
                      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                        <ol className="space-y-3 text-gray-700">
                          <li>1. Go to your uploaded video on YouTube</li>
                          <li>2. Click "Share" button below the video</li>
                          <li>3. Click "Embed" option</li>
                          <li>4. Copy the iframe code</li>
                          <li>5. Customize embed options if needed</li>
                        </ol>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">5.2 Embed Code Template</h3>
                      <div className="bg-gray-50 rounded-xl p-6">
                        <p className="text-sm text-gray-600 mb-3">Use this template for embedding videos in your website:</p>
                        <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                          <pre>{`<iframe 
  width="100%" 
  height="315" 
  src="https://www.youtube.com/embed/VIDEO_ID" 
  title="Video Title" 
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
  allowfullscreen>
</iframe>`}</pre>
                        </div>
                        <button
                          onClick={() => handleCopy('iframe template')}
                          className="mt-3 text-[#0b1e6d] hover:text-[#1e3a8a] text-sm font-medium flex items-center gap-2"
                        >
                          <Copy className="h-4 w-4" />
                          {copiedCode === 'iframe template' ? 'Copied!' : 'Copy Template'}
                        </button>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">5.3 Integration Points</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                          <h4 className="font-medium text-green-700 mb-3">Course Pages</h4>
                          <ul className="text-sm text-gray-700 space-y-2">
                            <li>• Add demo videos to CourseDetail component</li>
                            <li>• Replace placeholder thumbnails</li>
                            <li>• Update video URLs in components</li>
                            <li>• Test video playback on all devices</li>
                          </ul>
                        </div>
                        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                          <h4 className="font-medium text-blue-700 mb-3">Website Sections</h4>
                          <ul className="text-sm text-gray-700 space-y-2">
                            <li>• Homepage featured videos</li>
                            <li>• Gallery page video collection</li>
                            <li>• About page introduction</li>
                            <li>• Testimonial video responses</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">5.4 Code Implementation Example</h3>
                      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                        <p className="text-sm text-gray-600 mb-3">Update your CourseDetail.tsx component:</p>
                        <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-xs overflow-x-auto">
                          <pre>{`// Replace placeholder div with actual video
<div className="aspect-video">
  <iframe 
    width="100%" 
    height="100%" 
    src="https://www.youtube.com/embed/YOUR_VIDEO_ID" 
    title="Demo Video"
    frameborder="0" 
    allowfullscreen
    className="rounded-lg">
  </iframe>
</div>`}</pre>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeStep === 6 && (
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-[#0b1e6d] p-3 rounded-full">
                      <BarChart3 className="h-6 w-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-[#0b1e6d]">Step 6: Manage & Analyze</h2>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">6.1 YouTube Studio Dashboard</h3>
                      <div className="bg-gray-50 rounded-xl p-6">
                        <h4 className="font-medium text-gray-800 mb-4">Key Metrics to Track:</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-3">
                            <div className="flex justify-between items-center">
                              <span className="text-gray-700">Views</span>
                              <span className="font-medium text-blue-600">Total video plays</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-gray-700">Watch Time</span>
                              <span className="font-medium text-green-600">Engagement quality</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-gray-700">Subscribers</span>
                              <span className="font-medium text-purple-600">Channel growth</span>
                            </div>
                          </div>
                          <div className="space-y-3">
                            <div className="flex justify-between items-center">
                              <span className="text-gray-700">Click Rate</span>
                              <span className="font-medium text-orange-600">Thumbnail effectiveness</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-gray-700">Retention</span>
                              <span className="font-medium text-red-600">Content quality</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-gray-700">Comments</span>
                              <span className="font-medium text-indigo-600">Student interaction</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">6.2 Content Management</h3>
                      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                        <h4 className="font-medium text-gray-800 mb-3">Regular Tasks:</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <p className="font-medium text-gray-700 mb-2">Weekly:</p>
                            <ul className="text-sm text-gray-700 space-y-1">
                              <li>• Check video performance</li>
                              <li>• Respond to comments</li>
                              <li>• Review analytics</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-medium text-gray-700 mb-2">Monthly:</p>
                            <ul className="text-sm text-gray-700 space-y-1">
                              <li>• Update video descriptions</li>
                              <li>• Optimize older videos</li>
                              <li>• Plan content calendar</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">6.3 Best Practices</h3>
                      <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-medium text-green-700 mb-2">Do's:</h4>
                            <ul className="text-sm text-gray-700 space-y-1">
                              <li className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                <span>Post consistently (2-3 videos/week)</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                <span>Engage with comments promptly</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                <span>Use playlists for organization</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                <span>Promote on social media</span>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-medium text-red-700 mb-2">Don'ts:</h4>
                            <ul className="text-sm text-gray-700 space-y-1">
                              <li className="flex items-start gap-2">
                                <AlertCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                                <span>Ignore analytics data</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <AlertCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                                <span>Use copyrighted music</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <AlertCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                                <span>Neglect video quality</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <AlertCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                                <span>Spam keywords in tags</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">6.4 Troubleshooting</h3>
                      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                        <h4 className="font-medium text-gray-800 mb-3">Common Issues & Solutions:</h4>
                        <div className="space-y-3">
                          <div className="flex items-start gap-3">
                            <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-medium text-gray-800">Video not embedding</p>
                              <p className="text-sm text-gray-600">Check video privacy settings (must be Public or Unlisted)</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-medium text-gray-800">Low view count</p>
                              <p className="text-sm text-gray-600">Improve titles, thumbnails, and SEO optimization</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-medium text-gray-800">Poor retention</p>
                              <p className="text-sm text-gray-600">Make content more engaging, add chapters, improve pacing</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex justify-between items-center bg-white rounded-2xl shadow-lg p-6">
                <button
                  onClick={() => setActiveStep(Math.max(1, activeStep - 1))}
                  disabled={activeStep === 1}
                  className={`px-6 py-3 rounded-xl font-semibold transition flex items-center gap-2 ${activeStep === 1
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                >
                  Previous Step
                </button>

                <div className="text-center">
                  <p className="text-sm text-gray-500">Step {activeStep} of {steps.length}</p>
                </div>

                <button
                  onClick={() => setActiveStep(Math.min(steps.length, activeStep + 1))}
                  disabled={activeStep === steps.length}
                  className={`px-6 py-3 rounded-xl font-semibold transition flex items-center gap-2 ${activeStep === steps.length
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-[#0b1e6d] text-white hover:bg-[#1e3a8a]'
                    }`}
                >
                  Next Step
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="space-y-6">
              <div className="sticky top-20 space-y-6">
                <div className="bg-white rounded-2xl shadow-lg p-6 ">
                  <h3 className="text-xl font-bold text-[#0b1e6d] mb-4">Quick Links</h3>
                  <div className="space-y-3">
                    <a
                      href="https://studio.youtube.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-gray-700 hover:text-[#0b1e6d] transition p-2 rounded-lg hover:bg-gray-50"
                    >
                      <Youtube className="h-5 w-5" />
                      <span className="text-sm">YouTube Studio</span>
                    </a>
                    <a
                      href="https://youtube.com/@paulsirscommerceclasses"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-gray-700 hover:text-[#0b1e6d] transition p-2 rounded-lg hover:bg-gray-50"
                    >
                      <Eye className="h-5 w-5" />
                      <span className="text-sm">View Channel</span>
                    </a>
                    <a
                      href="/courses"
                      className="flex items-center gap-3 text-gray-700 hover:text-[#0b1e6d] transition p-2 rounded-lg hover:bg-gray-50"
                    >
                      <FolderOpen className="h-5 w-5" />
                      <span className="text-sm">Course Pages</span>
                    </a>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-[#0b1e6d] mb-4">Video Specs</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Resolution</span>
                      <span className="font-medium">1080p</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Aspect Ratio</span>
                      <span className="font-medium">16:9</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Frame Rate</span>
                      <span className="font-medium">30fps</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Format</span>
                      <span className="font-medium">MP4</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Max Size</span>
                      <span className="font-medium">128GB</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Duration</span>
                      <span className="font-medium">10-45 min</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[#0b1e6d] to-[#1e3a8a] rounded-2xl p-6 text-white">
                  <h3 className="text-xl font-bold mb-4">Need Help?</h3>
                  <p className="text-white/80 text-sm mb-4">
                    Having trouble with YouTube uploads? Contact our technical support team.
                  </p>
                  <div className="space-y-2 text-sm">
                    <p className="flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      9007019442
                    </p>
                    <p className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      paulsirsclasses@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  )
}
