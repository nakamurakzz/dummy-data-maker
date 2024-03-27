import Footer from "./_components/footer";
import Header from "./_components/header";
import DummyDataCreate from "./maker/page";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <DummyDataCreate />
        </div>
      </main>
      <Footer />
    </div>
  );
}
