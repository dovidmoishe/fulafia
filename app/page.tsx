"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  GraduationCap,
  Users,
  BookOpen,
  Award,
  Building,
  Globe,
  ChevronRight,
  Star,
  MapPin,
  Phone,
  Mail,
} from "lucide-react"
import logo from "@/public/uni.jpeg"
import heroImg from "@/public/heroImage.png"
import { useState } from "react"

export default function HomePage() {
  const [navOpen, setNavOpen] = useState(false)
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-[rgb(157,122,38)] rounded-full flex items-center justify-center">
                <Image src={logo} alt="FULAFIA Logo" width={48} height={48} className="rounded-full" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">FULAFIA</h1>
                <p className="text-xs text-gray-600">Federal University of Lafia</p>
              </div>
            </div>

            {/* Hamburger for mobile */}
            <button
              className="md:hidden flex items-center px-2 py-1 border rounded text-[rgb(157,122,38)] border-[rgb(157,122,38)]"
              onClick={() => setNavOpen(!navOpen)}
              aria-label="Toggle navigation"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d={navOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>

            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#" className="text-gray-700 hover:text-[rgb(157,122,38)] font-medium">
                Home
              </Link>
              <Link href="#about" className="text-gray-700 hover:text-[rgb(157,122,38)] font-medium">
                About
              </Link>
              <Link href="#faculties" className="text-gray-700 hover:text-[rgb(157,122,38)] font-medium">
                Faculties
              </Link>
              <Link href="#admissions" className="text-gray-700 hover:text-[rgb(157,122,38)] font-medium">
                Admissions
              </Link>
              <Link href="#research" className="text-gray-700 hover:text-[rgb(157,122,38)] font-medium">
                Research
              </Link>
              <Link href="#contact" className="text-gray-700 hover:text-[rgb(157,122,38)] font-medium">
                Contact
              </Link>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <Button variant="outline" size="sm">
                Student Portal
              </Button>
              <Button className="bg-[rgb(157,122,38)] hover:bg-[rgb(137,102,18)] text-gray-900" size="sm">
                Apply Now
              </Button>
            </div>
          </div>
          {/* Mobile nav */}
          {navOpen && (
            <div className="md:hidden mt-2 bg-white rounded shadow-lg border border-gray-100">
              <nav className="flex flex-col space-y-2 px-4 py-4">
                <Link href="#" className="text-gray-700 hover:text-[rgb(157,122,38)] font-medium" onClick={() => setNavOpen(false)}>
                  Home
                </Link>
                <Link href="#about" className="text-gray-700 hover:text-[rgb(157,122,38)] font-medium" onClick={() => setNavOpen(false)}>
                  About
                </Link>
                <Link href="#faculties" className="text-gray-700 hover:text-[rgb(157,122,38)] font-medium" onClick={() => setNavOpen(false)}>
                  Faculties
                </Link>
                <Link href="#admissions" className="text-gray-700 hover:text-[rgb(157,122,38)] font-medium" onClick={() => setNavOpen(false)}>
                  Admissions
                </Link>
                <Link href="#research" className="text-gray-700 hover:text-[rgb(157,122,38)] font-medium" onClick={() => setNavOpen(false)}>
                  Research
                </Link>
                <Link href="#contact" className="text-gray-700 hover:text-[rgb(157,122,38)] font-medium" onClick={() => setNavOpen(false)}>
                  Contact
                </Link>
                <div className="flex flex-col gap-2 mt-4">
                  <Button variant="outline" size="sm">
                    Student Portal
                  </Button>
                  <Button className="bg-[rgb(157,122,38)] hover:bg-[rgb(137,102,18)] text-gray-900" size="sm">
                    Apply Now
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      {/* Hero Section */}
      {/* Hero Section */}
      {/* Hero Section */}
      <section className="relative h-[700px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
        <Image
          src={heroImg}
          alt="FULAFIA Campus"
          fill
          className="object-cover"
        />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-4xl">
            <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20">
              <Badge className="mb-6 bg-[rgb(157,122,38)] text-gray-900 border-0 font-semibold px-4 py-2">
                Established 2011
              </Badge>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white drop-shadow-lg">
                Federal University of Lafia
              </h1>
             <p className="text-xl md:text-2xl font-semibold mb-6 text-white drop-shadow-md">
                Integrity, Innovation, and Excellence
              </p>
              <p className="text-base md:text-lg mb-8 text-white/95 leading-relaxed drop-shadow-md">
                A world-class institution recognized for excellence in teaching, research, and community service, 
                committed to developing the next generation of leaderzs and innovators.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-[rgb(157,122,38)] hover:bg-[rgb(137,102,18)] text-gray-900 font-semibold shadow-xl">
                  Explore Programs
                  <ChevronRight className="ml-2 w-4 h-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-gray-900 backdrop-blur-sm shadow-xl"
                >
                  Virtual Tour
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[rgb(157,122,38)] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">15,000+</h3>
              <p className="text-gray-600">Students</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[rgb(157,122,38)] rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">9</h3>
              <p className="text-gray-600">Faculties</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[rgb(157,122,38)] rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">100+</h3>
              <p className="text-gray-600">Programs</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[rgb(157,122,38)] rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">13</h3>
              <p className="text-gray-600">Years of Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-[rgb(157,122,38)]/10 text-[rgb(157,122,38)]">About FULAFIA</Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Expanding Access to Quality Higher Education</h2>
              <p className="text-lg text-gray-600 mb-6">
                Federal University of Lafia is one of Nigeria's newer federal universities, established in 2011 to
                expand access to quality higher education. The university has quickly grown in terms of academic
                offerings, infrastructure, and student population.
              </p>
              <p className="text-gray-600 mb-8">
                Located in Lafia, Nasarawa State, Nigeria, FULAFIA emphasizes digital learning and research while
                maintaining a commitment to excellence in teaching and community service.
              </p>
              <Button className="RGB(157,122,38) text-gray-900">
                Learn More About Us
                <ChevronRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/placeholder.svg?height=300&width=250"
                alt="Students studying"
                width={250}
                height={300}
                className="rounded-lg object-cover"
              />
              <Image
                src="/placeholder.svg?height=300&width=250"
                alt="Campus building"
                width={250}
                height={300}
                className="rounded-lg object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-yellow-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Vision & Mission</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-[rgb(157,122,38)]/20">
              <CardHeader>
                <CardTitle className="flex items-center text-[rgb(157,122,38)]">
                  <Globe className="w-6 h-6 mr-2" />
                  Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  To become a world-class institution recognized for excellence in teaching, research, and community
                  service.
                </p>
              </CardContent>
            </Card>
            <Card className="border-[rgb(157,122,38)]/20">
              <CardHeader>
                <CardTitle className="flex items-center text-[rgb(157,122,38)]">
                  <Award className="w-6 h-6 mr-2" />
                  Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  To attract and develop talented students and staff for the purpose of contributing to national
                  development through high-quality education and research.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Faculties Section */}
      <section id="faculties" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-yellow-100 text-yellow-800">Academic Excellence</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Faculties</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              FULAFIA offers undergraduate and postgraduate programs through multiple faculties
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Faculty of Science", programs: "Physics, Chemistry, Biology, Mathematics" },
              { name: "Faculty of Arts", programs: "English, History, Philosophy, Languages" },
              { name: "Faculty of Social Sciences", programs: "Economics, Political Science, Sociology" },
              { name: "Faculty of Basic Medical Sciences", programs: "Anatomy, Physiology, Biochemistry" },
              { name: "Faculty of Education", programs: "Educational Psychology, Curriculum Studies" },
              { name: "Faculty of Management Science", programs: "Accounting, Business Administration" },
              { name: "Faculty of Agriculture", programs: "Crop Production, Animal Science" },
              { name: "Faculty of Computing", programs: "Computer Science, Cybersecurity, IT" },
              { name: "College of Medicine", programs: "Medicine & Surgery (Recently Accredited)" },
            ].map((faculty, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900">{faculty.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4">{faculty.programs}</p>
                  <Button variant="outline" size="sm" className="w-full">
                    View Programs
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Admissions Section */}
      <section id="admissions" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-yellow-100 text-yellow-800">Admissions</Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Join Our Academic Community</h2>
              <p className="text-lg text-gray-600 mb-6">
                Admissions are competitive and follow the guidelines set by Nigeria's Joint Admissions and Matriculation
                Board (JAMB). Applicants are required to write UTME and meet departmental cut-off marks.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  <span className="text-gray-700">JAMB UTME Registration Required</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  <span className="text-gray-700">Meet Departmental Cut-off Marks</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  <span className="text-gray-700">Post-UTME Screening</span>
                </div>
              </div>
              <Button className="RGB(157,122,38) text-gray-900">
                Start Application
                <ChevronRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Students on campus"
                width={500}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-yellow-100 text-yellow-800">Campus Life</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">World-Class Facilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our permanent site features modern infrastructure designed for academic excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Building,
                title: "Modern Lecture Halls",
                description: "State-of-the-art classrooms with multimedia equipment",
              },
              {
                icon: BookOpen,
                title: "Digital Library",
                description: "Extensive collection of books and digital resources",
              },
              {
                icon: Award,
                title: "Research Labs",
                description: "Well-equipped laboratories for scientific research",
              },
              { icon: Users, title: "Student Hostels", description: "Comfortable accommodation for students" },
            ].map((facility, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <facility.icon className="w-8 h-8 text-yellow-600" />
                  </div>
                  <CardTitle className="text-lg">{facility.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{facility.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-yellow-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Students Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Amina Hassan",
                program: "Computer Science",
                quote:
                  "FULAFIA has provided me with excellent education and opportunities. The faculty is supportive and the facilities are modern.",
              },
              {
                name: "David Okafor",
                program: "Medicine",
                quote:
                  "The medical program here is top-notch. I'm proud to be part of the first batch of medical students at FULAFIA.",
              },
              {
                name: "Sarah Ibrahim",
                program: "Business Administration",
                quote:
                  "The practical approach to learning and the emphasis on innovation has prepared me well for my career.",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="border-yellow-200">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.program}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[rgb(157,122,38)] to-[rgb(157,122,38)]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Begin Your Journey?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have chosen FULAFIA for their academic excellence and personal growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[rgb(157,122,38)] hover:bg-gray-100">
              Apply for Admission
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[rgb(157,122,38)]">
              Download Brochure
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold">FULAFIA</h3>
                  <p className="text-sm text-gray-400">Federal University of Lafia</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-4">Integrity, Innovation, and Excellence</p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-yellow-400" />
                  <span className="text-gray-400">Lafia, Nasarawa State, Nigeria</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2 text-yellow-400" />
                  <span className="text-gray-400">+234 XXX XXX XXXX</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2 text-yellow-400" />
                  <span className="text-gray-400">info@fulafia.edu.ng</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Academics</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-yellow-400">
                    Undergraduate
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-yellow-400">
                    Postgraduate
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-yellow-400">
                    Research
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-yellow-400">
                    Academic Calendar
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Student Life</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-yellow-400">
                    Campus Life
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-yellow-400">
                    Student Services
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-yellow-400">
                    Sports & Recreation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-yellow-400">
                    Student Portal
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-yellow-400">
                    News & Events
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-yellow-400">
                    Alumni
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-yellow-400">
                    Library
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-yellow-400">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Federal University of Lafia. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
