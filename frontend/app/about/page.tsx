import Image from 'next/image';

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-5 md:px-20">
      <div className="relative w-full h-64">
        <Image src="/pharmacy-1.jpg" alt="Pharmacy Background" layout="fill" objectFit="cover" className="opacity-80" />
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl md:text-5xl font-bold text-green-700">About Us</h1>
      </div>

      <div className="mt-10 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-2xl font-bold">Who we are</h2>
          <p className="mt-4 text-gray-700">
            MEDIXMART Pharmacy, located in Galagama, Belihuloya provides comprehensive healthcare solutions, focusing on fast and reliable access to medications and healthcare products. With a commitment to serving both the local community and visitors, we strive to meet all your healthcare needs in a timely and convenient manner.
          </p>
        </div>
        <div className="w-full h-64 relative">
          <Image src="/pharmacy-2.jpg" alt="Pharmacist" layout="fill" objectFit="cover" className="rounded-lg" />
        </div>
      </div>

      <div className="mt-10 grid md:grid-cols-2 gap-10 items-start">
        <div className="w-full h-64 relative">
          <Image src="/medixmart-background.jpg" alt="Medicine" layout="fill" objectFit="cover" className="rounded-lg" />
        </div>
        <div>
          <h2 className="text-2xl font-bold">What We Offer</h2>
          <ul className="mt-4 text-gray-700 list-disc list-inside">
            <li>Online medication requests.</li>
            <li>WhatsApp communication for orders and inquiries.</li>
            <li>Drug availability updates.</li>
            <li>Special offers for students and tourists.</li>
            <li>First-aid kits and healthcare information.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
