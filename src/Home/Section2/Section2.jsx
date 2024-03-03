import React from "react";
import MyCard from "./Card/Card";
import image1 from "./images/wedding 5.jpg";
import image2 from "./images/wedding 2.jpg";
import image3 from "./images/social 1.jpg";
import image4 from "./images/BM 1.jpg";
import image5 from "./images/BM 2.jpg";
import image6 from "./images/BT 1.jpg";
import image7 from "./images/Wedding 4.jpg";
import { Button } from "@material-tailwind/react";

const Section2 = () => {
  return (
    <section className=" max-w-7xl mx-auto flex flex-col items-center p-12">
      <div className="flex flex-wrap w-full justify-center gap-1">
        <MyCard img={image1} people="Bracha & Albert" day="Wedding day" />
        <MyCard img={image2} people="Rivka & Joseph" day="Wedding day" />
        <MyCard img={image3} people="Social film" day="Trailer" />
        <MyCard img={image4} people="Yidy" day="Bar Mitzvah" />
        <MyCard img={image5} people="Social Film" day="Bar Mitzvah" />
        <MyCard img={image6} people="Levonah" day="Wedding day" />
        <MyCard img={image7} people="Yonatan & Esther" day="Wedding Day" />
      </div>
      <br />
      <Button color={"white"} className="text-2xl normal-case hover:bg-[#411b7e] hover:text-white duration-300">
        Load More
      </Button>
    </section>
  );
};

export default Section2;
