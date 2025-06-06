
export default function About() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6 text-center">About Us</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Our Story</h2>
        <p className=" leading-relaxed">
          Founded in 2020, HomeNest is dedicated to creating beautiful, handcrafted furniture that brings comfort and style to your home. Our passion is delivering high-quality pieces made with care and precision.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Why Choose Us?</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Premium quality materials</li>
          <li>Customizable designs to fit your space</li>
          <li>Eco-friendly and sustainable production</li>
          <li>Reliable delivery and assembly service</li>
        </ul>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Meet the Team</h2>
        <p>We are a small but passionate team of designers, craftsmen, and customer service specialists committed to your satisfaction.</p>
      </section>

    </div>
  );
}
