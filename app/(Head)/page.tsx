import Card from "../../components/Card";
import house from "../../public/images/house1.jpg";
import house2 from "../../public/images/house2.jpg";
import house3 from "../../public/images/house3.jpg";
import house5 from "../../public/images/house5.png";
import house6 from "../../public/images/house6.png";
import house4 from "../../public/images/house4.png";

export default function Home() {
  return (
    <div className="relative mx-10 lg:mx-20 my-8 flex-1 overflow-visible">
      {/* List of houses */}
      <div className=" relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg2:grid-cols-4 3xl:grid-cols-5 4xl:grid-cols-6 gap-3 scroll-smooth max-w-[2350px] mx-auto overflow-visible ">
        <Card key={house5.src} source={house5} />
        <Card key={house6.src} source={house6} />
        <Card key={house2.src} source={house2} />
        <Card key={house5.src} source={house} />
        <Card key={house3.src} source={house3} />
        <Card key={house4.src} source={house4} />
        <Card key={house5.src} source={house} />
        <Card key={house3.src} source={house3} />
        <Card key={house4.src} source={house4} />
      </div>
    </div>
  );
}
