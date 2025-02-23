import React from 'react';
import DynamicNavbar from './components/DynamicNavbar';
import ProjectsComponent from './components/ProjectsComponent';
import AboutComponent from './components/AboutComponent';
import ContactComponent from './components/ContactComponent';

export default function Home() {
  return (
    <>
      <DynamicNavbar />
      <main className="min-h-screen bg-white dark:bg-gray-900 pt-16">
        {/* About Section */}
        <br />
        <br />
        <br />
        <section id="about" className="container mx-auto px-4 pb-4">
          <AboutComponent />
        </section>

        {/* Projects Section */}
        <section id="projects" className="container mx-auto px-4 py-4">
          <ProjectsComponent />
        </section>

        {/* Contact Section */}
        <section id="contact" className="container mx-auto px-4 pt-4">
          <ContactComponent />
        </section>
      </main>
    </>
  );
}