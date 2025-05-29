import NewsLetterForm from '../NewLetter';

const NewsLetter = () => {
  return (
    <section className="py-16 bg-[#376e6b] text-white">
      <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold">Join Our Community</h2>
              <p className="mt-4 text-lg pb-5">
                Subscribe to our newsletter for exclusive offers, design tips, and early access to new collections.
              </p> 
          <div className='w-full lg:w-2/4 mx-auto'>
          <NewsLetterForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
