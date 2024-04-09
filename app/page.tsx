 /* eslint-disable @next/next/no-img-element */
// eslint-disable-next-line @next/next/no-img-element
// eslint-disable-next-line @next/next/no-img-element

 import Image from "next/image";
import Nav from "./components/nav";
import About from "./components/about";
import Experience from "./components/experience";
import { SoftSkill } from "./components/softskils";
import Product from "./components/project";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main className=" sm:px-2 grid gap-4 grid-cols-12 min-h-screen flex-col content-center justify-between  2xl:px-24 py-5">
      <Nav />
      <About />
      <Experience />
      <SoftSkill
        Id="product-design"
        styles="2xl:row-start-3  2xl:row-end-4 2xl:col-start-7 2xl:col-end-13 sm:row-start-3 sm:row-end-4 sm:col-start-1 sm:col-end-13"
        text="Product Design"
      />
      <SoftSkill
        Id="user-experience"
        styles="2xl:row-start-4 2xl:row-end-5 2xl:col-start-7 2xl:col-end-10 sm:row-start-4 sm:row-end-5 sm:col-start-1 sm:col-end-7"
        text="User Experience"
      />
      <SoftSkill
        Id="no-code-develop"
        styles="2xl:row-start-4 2xl:row-end-5 2xl:col-start-10 2xl:col-end-13 sm:row-start-4 sm:row-end-5 sm:col-start-7 sm:col-end-13"
        text="NoCode develop"
      />
      <Product
        styles="2xl:row-start-5 2xl:row-end-8 2xl:col-start-7 2xl:col-end-13 sm:row-start-6 sm:row-end-7 sm:col-start-1 sm:col-end-13"
        title="AI Music product"
        text="UX Case study"
      >
        <div className=" scale-95 opacity-75 overflow-hidden rotate-12 border relative bg-slate-50 top-2  2xl:left-20 sm:left-10 rounded-md 2xl:h-52 2xl:w-52 sm:h-44 sm:w-44">
          <img src="/img/500x500.png" alt="img-mokup" />
        </div>
        <div className=" z-10 shadow-xl shadow-gray-700 -rotate-12 bg-black  border rounded-md  overflow-hidden  absolute 2xl:h-52 2xl:w-52 sm:h-44 sm:w-44">
          <img src="/img/500x500.png" alt="img-mokup" />
        </div>
      </Product>
      <Product
        styles="2xl:row-start-6 2xl:row-end-12 2xl:h-full 2xl:col-start-1 2xl:col-end-7 sm:row-start-7 sm:row-end-8 sm:col-start-1 sm:col-end-13"
        title="AI Music product"
        text="UX Case study"
      >
        <div className=" 2xl:h-[600px] xl:w-500px 2xl:w-[500px] overflow-hidden border rounded-md w-1/2">
          <img src="img/500x800.png" alt="img-mokup" />
        </div>
      </Product>
      <Product
        styles="2xl:row-start-8 2xl:row-end-12 2xl:col-start-7 2xl:col-end-13 sm:row-start-8 sm:row-end-9 sm:col-start-1 sm:col-end-13"
        title="AI Music product"
        text="UX Case study"
      >
        <div className=" overflow-hidden border relative opacity-75 bg-slate-50 top-7 left-7 rounded-md h-52 w-52">
          <img src="/img/500x500.png" alt="img-mokup" />
        </div>
        <div className=" z-10 bg-black  border rounded-md   shadow-xl shadow-gray-700 overflow-hidden  absolute h-52 w-52">
          <img src="/img/500x500.png" alt="img-mokup" />
        </div>
      </Product>
      <Footer />
    </main>
  );
}
