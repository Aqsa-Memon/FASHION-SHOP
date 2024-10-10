
import Header from '@/components/header'
import Product from '@/components/product'
import Promo from '@/components/promo'
import Fav from '@/components/fav'
import App from '@/components/app'
import Footer from '@/components/footer'
import Banner from '@/components/banner'

export default function Home() {
  return (
    <div>
      <Header />
       <Banner />
      <Product />
      <Promo />
      <Fav />
      <App />
      <Footer />
    </div>
  );
}
