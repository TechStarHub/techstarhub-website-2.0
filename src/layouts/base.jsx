import Header from '../components/Header';
import Footer from '../components/Footer';

export default function BaseLayout({ children }) {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header />
      <main className="">{children}</main>
      <Footer />
    </div>
  );
}
