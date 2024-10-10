export default function Footer() {
    return (
      <footer className="bg-yellow-400 py-10">
        <div className="container mx-auto text-center">
          <p className="text-lg">Join our shopping community and get monthly promo offers!</p>
          <form className="mt-4">
            <input
              type="email"
              className="px-4 py-2 border border-gray-300 rounded-lg"
              placeholder="Enter your email"
            />
            <button className="ml-4 px-6 py-2 bg-black text-white rounded-lg">Subscribe</button>
          </form>
          <p className="mt-6 text-gray-700">&copy; 2024 Fashion Shop. All rights reserved.</p>
        </div>
      </footer>
    );
  }
  