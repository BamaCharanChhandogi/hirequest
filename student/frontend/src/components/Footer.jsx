import React from "react";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
  BriefcaseIcon,
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Placements", href: "/placements" },
    { name: "Companies", href: "/companies" },
    { name: "Resources", href: "/resources" },
  ];

  const studentResources = [
    { name: "Resume Builder", href: "/resume-builder" },
    { name: "Interview Prep", href: "/interview-prep" },
    { name: "Placement Guidelines", href: "/guidelines" },
    { name: "Success Stories", href: "/success-stories" },
    { name: "FAQs", href: "/faqs" },
  ];

  const forCompanies = [
    { name: "Why Recruit?", href: "/why-recruit" },
    { name: "Recruitment Process", href: "/process" },
    { name: "Past Recruiters", href: "/past-recruiters" },
    { name: "Schedule Campus Drive", href: "/schedule-drive" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 mt-8 sm:mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 - About */}
          <div>
            <div className="flex items-center mb-4">
              <BriefcaseIcon className="h-8 w-8 text-indigo-500" />
              <span className="ml-2 text-2xl font-bold text-white">
                Hirequest
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Connecting talented students with leading companies. Your gateway
              to successful placements at Chandigarh University.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-indigo-500 transition-colors duration-200"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-indigo-500 transition-colors duration-200"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-indigo-500 transition-colors duration-200"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-indigo-500 transition-colors duration-200"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-indigo-500 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Student Resources */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Student Resources
            </h3>
            <ul className="space-y-2">
              {studentResources.map((resource) => (
                <li key={resource.name}>
                  <a
                    href={resource.href}
                    className="text-sm hover:text-indigo-500 transition-colors duration-200"
                  >
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Contact Us
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-indigo-500 mt-1" />
                <p className="ml-2 text-sm">
                  Chandigarh University,
                  <br />
                  NH-95 Chandigarh-Ludhiana Highway,
                  <br />
                  Punjab, India
                </p>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-indigo-500" />
                <p className="ml-2 text-sm">+91 1234567890</p>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-indigo-500" />
                <a
                  href="mailto:placements@cu.edu.in"
                  className="ml-2 text-sm hover:text-indigo-500 transition-colors duration-200"
                >
                  placements@cu.edu.in
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Hirequest. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="/privacy"
                className="text-sm text-gray-400 hover:text-indigo-500 transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-sm text-gray-400 hover:text-indigo-500 transition-colors duration-200"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
