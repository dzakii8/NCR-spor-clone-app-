import About from "@/components/aboutUs";
import CardHome from "@/components/cardHome";
import Carousel from "@/components/carousel";
import CategoryList from "@/components/categoryList";
import Footer from "@/components/footer";
import SeeAll from "@/components/seeAll";

export default function Home() {
  // console.log(loop);

  return (
    <>
      <Carousel />
      <CategoryList />
      <SeeAll/>
      <CardHome/>
      <About/>
      <Footer/>
    </>
  )
}
