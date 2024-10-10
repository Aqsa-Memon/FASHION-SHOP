import Image from "next/image";

export default function App() {
    return (
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold">Download App & Get the Voucher</h2>
          <p className="mt-4 text-lg text-gray-700">
            Get a 10% voucher when you download our app and make your first purchase.
          </p>
          <div className="mt-6 flex justify-center space-x-4">
            <Image src="/app store.png"height={100} width={100}alt="App Store" className="h-10" />
            <Image src="/google.png"height={100} width={100} alt="Google Play" className="h-10" />
          </div>
        </div>
      </section>
    );
  }
  