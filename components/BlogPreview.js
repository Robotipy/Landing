import Image from "next/image";
import config from "@/config";
import ButtonMain from "./ButtonMain";
import BlogCards from "./BlogCards";

// The list of your testimonials. It needs 3 items to fill the row.
const list = [
  {
    // Optional, use for social media like Twitter. Does not link anywhere but cool to display
    username: "DaniloToroL",
    // REQUIRED
    name: "Danilo Toro",
    // REQUIRED
    text: "Really easy to use. The tutorials are really useful and explains how everything works. Hope to ship my next project really fast!",
    // Optional, a statically imported image (usually from your public folder—recommended) or a link to the person's avatar. Shows a fallback letter if not provided
    img: "https://pbs.twimg.com/profile_images/1827403577213480960/OLnmAIhJ_400x400.jpg",
  },
  {
    username: "gabrieltoro",
    name: "Gabriel Toro",
    text: "Setting up everything from the ground up is a really hard, and time consuming process. What you pay for will save your time for sure.",
  },
  {
    username: "wahab",
    name: "Wahab Shaikh",
    text: "Easily saves 15+ hrs for me setting up trivial stuff. Now, I can directly focus on shipping features rather than hours of setting up the same technologies from scratch. Feels like a super power! :D",
  },
];


const BlogPreview = () => {
  return (
    <section className="relative hero overflow-hidden my-5 lg:py-20 lg:px-12 text-white">
      {/* <Image
        src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80"
        alt="Background"
        className="object-cover w-full"
        fill
      /> */}
      {/* <div className="relative hero-overlay"></div> */}
      <div className="relative  py-6">
        <div className="flex flex-col p-8 md:p-0 ">
          <h2 className="text-4xl md:text-6xl tracking-tight mb-4 md:mb-8">
            Visit our blog
          </h2>

          <BlogCards posts={list} />

          <div className="flex justify-center mt-8">
          <ButtonMain text="See all posts" type="tertiary" className="text-white" link="/blog"/>

          </div>

           
          
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
