export default function PromoSection() {
    return (
      <section className="py-20 bg-yellow-300">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold">Payday Sale Now</h2>
          <p className="mt-4 text-lg text-gray-700">
            Spend a minimum of $150 and get 25% off! Use code: PAYDAY at checkout.
          </p>
          <button className="mt-6 bg-black text-white py-3 px-6 rounded-lg">Shop Now</button>
        </div>
      </section>
    );
  }
  