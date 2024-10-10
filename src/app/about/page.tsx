import Image from 'next/image';
import React from 'react'

    // pages/about.js

const About = () => {
  return (
    <div className="min-h-screen bg-yellow-100">
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              About Us
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Welcome to [Fashion Shop], your number one source for all things fashion. We are dedicated to providing you the very best of fashion with an emphasis on quality style and uniqueness.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col justify-center items-center">
              <Image
                src="/store.png"
                alt="Fashion Store"
                width={100}
                height={200}
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-gray-900">Our Story</h3>
              <p className="mt-4 text-gray-500">
                Founded in [2023] [Fashion Shop] has come a long way from its beginnings in [GARDEN] When we first started out our passion for eco friendly high quality clothing drove us to start our own business. Today we serve customers all over [PAKISTAN] and we are thrilled to be a part of the eco-friendly fair-trade wing of the fashion industry.
              </p>
              <p className="mt-4 text-gray-500">
                We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments please do not hesitate to contact us.
              </p>
              <p className="mt-4 text-gray-500">Sincerely <br /> [AQSA MEMON] Founder</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;