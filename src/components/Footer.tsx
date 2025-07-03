
import React from 'react';
import { Link } from 'react-router-dom';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-serif font-bold mb-4">Velvet Salon</h3>
            <div className="flex justify-center md:justify-start mb-4">
              <img 
                src="/lovable-uploads/9aa49b50-05a6-43bc-a291-06a2a44341c1.png" 
                alt="Decorative divider" 
                className="w-16 h-auto opacity-70"
              />
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Where beauty meets artistry. Experience luxury hair styling with our expert team 
              of professional stylists dedicated to bringing out your natural beauty.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-4 text-gray-300">
              <div>
                <p>1075 Ceremonial Dr, Unit 6</p>
                <p>Mississauga, ON L5R 2Z4</p>
                <p>(905) 507-4965</p>
              </div>
              
              <div className="flex justify-center">
                <Separator className="w-16 h-px bg-gray-600" />
              </div>
              
              <div>
                <p>3050 Artesian Dr, Unit 7</p>
                <p>Mississauga, ON L5M 7P5</p>
                <p>(905) 828-4347</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright and Attribution */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
          <p className="mb-1">Copyright © 2025 Velvet Salon</p>
          <p>
            Powered by{' '}
            <a 
              href="https://digitalizers.ca" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-rose-400 hover:text-rose-300 transition-colors font-medium"
            >
              Digitalizers Inc.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
