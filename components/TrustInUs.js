import Image from "next/image";

const avatars = [
  {
    alt: "Novagric",
    // Ideally, load from a statically generated image for better SEO performance (import userImage from "@/public/userImage.png")
    src: "https://novagric.com/wp-content/uploads/2023/10/logo-novagric-mediano-200x40.png",
    link: "https://novagric.com/",
  },
  {
    alt: "Kabeli",
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAW8AAACFCAMAAACjSol2AAAAWlBMVEX///8yRFlP4Cx/i5dMW27l6OqZoqxmc4LM0dby8/RLXG4/UGSn8JaMlqJl5EdYZ3iyucDY3N976GFyf42R7Hu/xczT98qlrrfI9b2886+d7one+dey8qPp++WjgKz0AAAHCklEQVR4nO2ca2OiOhRF9SoKpVYcxzr3Mf//b14FJPskJwdwKhK717cWA8lKcshLFwtCCCGEEEIIIYQQQgghhBBCCCGEEEIIIV/GeXvj+PBnFd2ztoeHPwyYsox9rJY31g9/VtY9a5k//GHAlGWcU17om76nhr6nhb6nhb6nhb6nhb6nhb6n5Tv7/vWz4+l5eQRz8/3+V8fT8/II6Ju+6fvroW/6pu/n5uUR0Dd90/fXQ9/z8P33j46n5+URzM33M6DvaaHvaaHvaaHvaenLy6Y7m7T742fNzXflzns9PS83tt31P8/T3HxvXH6enpcb++76yrjLodqtrs1ktTll8U+pvq9Jj03SUYcKs2ozNF1CvguXpU3kDsV5Wy6Bt1Ws8Qa+i9PKS3oalut8J9KVx6q4o4wz9J27LOkqcmms9Vapn/V8Fxst6cboIA1qunIVT5eQb3d5qfXa7BiWPG5c+Fat1eZiHakhmm4ZNZ6O78yVrVQun2NFvxoPS4++zaRGVMnfjHTncWWcn2/IUXhUPXNjF5WgnYLvfTyZmlTJkMZRbeLJ+IbmvQwCxMFoaQ3+iD3rS+DYq+KKWPjqUHpVQr6xAfsFORgB4cZWjhpG+FbFFT29ok6nvGZS8Y2d1x99D9Htz5HG+FaED9F9ec+EFZWIbxErvVJkvcGkQVTTKN/LvT+k7g0mDWFFJeG72EW9XS6Gut+u88uw0eOQIea73KtJvfAfvirrdGFO9kPLOCff3rgri6VqCr7L28Z4qPxOD/FU9b29TQ2zyh/viGFh7qc7t3m6TFK9S/57ev6+c6/o3viskrY3oufn0ji0NsW3nKNk0lwJ9/V61DY30vmrYTP1nTUcqp3ft/0eKsq+DeKlnMu4iBL4XgcrLdUar0NDFdGkDCZEmUjnLWXO03ectWdUNG9tWVyU3rVS3/dWWWSS4jI1qZ+fGvG6kfWYmO/SH9Ji89ZngsJa9xHPt77AK0Z93Ucwm6puKVw28MR8+50Xm3ds0wdnpt3Ki/S9jiyhYl11fQOqOKJbzs5EA0/KdxnEWChXzNklhiuFF76VeUkLjkTa4I9VrK/1XiigokTfScn3OpgfozVjIQ9qZaekXEbW8q5AZGgDA0x1jG2mE9QmNoSUfIejD2hr1pYmtNJbQEHf1k55AcGo8QYJre0IqGPslSn5DqfHkMLc/YLCt7dA39GocGXnPQLqztpFxaaAL5akfAfC3fjBPs0BhW/lom9z1wz81t7gZSCqOHvzcJ/DrpeWb1+4u2C2Ndxqbhsb7jfYuXIB5ehlUnzMWADD7ajEfMuVOiij8cq74lrbKkjac3jIvR9rQ7FDMNaCI+R5nr7LquG8C9aZ0Q709Z5DO05aa2l4VbkAXrdTlyG5q2f5hk45T9+Ql0wuY4ioCb57ztm4W7fRA/SYr8vAhOspcjpr+YbMzd73wl9zguEs+O45KRLcGvT0nOuBd+31z3t8Q+dLwbe3cOTK+TW+723fMu6/ku9Fga9S18AP7p89jTS8tUs6OH7XSYM3b8tL+ZYLQNoiX4+08NYuRtlDSXhyHfqPwZ2CvLyC70JbqfPHxmNuPXSq5D8D5ptigezFfIuVui7/ru2V1qFU7dY9pxG159b9CuaXok8VqziJjU8aoGGtlP/ZASW8NQw7zEOZUC91NcM7455T/+n4hjl5N0GGxmfPysNbQ/+3+gaGieZjMDi945sR6fhWFvnEaqnZwJVbK4viZsJbcw7/M4aEfIeLfKLw8U0a/da4yx5tqMpmjrLl8wVlnKFv7fskWPjg0BngvtrWxX64nX6UdSG3Prs84Wx39G+HJ+RbnWrguNwSbj4uJjxTd/+xYwTnBYY/dP6+nVs32hZHy/ST2jHEiFkTLk6Vu614fGkox31sUvIdLKpeEafdIl+OiiCO5ZRBLJaHMmHQeJYXRvWqlHy76+AbxsP1lRFjtEKelZOVVclDgiJHWyPdnWVMxrfX2i7F7w7I9nLyk66apNkpOLYoz3J6V8vV4O/Hpu97oX1VCvZta1P/fNwQP5+zU5Mq//SmoH4d19LdI+uY/tk98uPf/jIm5LvwNoA8at8/u1+H+hC37Pla241gQmR/N60OMJ/uF6k++8uYkG9vO2KU72Hfw1FWbM297Rf3bQs3fQ8Sri6QWy381X0vMsOa7VuP4YLI6ooh/OV9W6Xv890Ti8voaO8U7VXfwPcij5W+17cZjsIzopAuFsS/g2//+zYjfEeT9s6e/O9yfSvfEW1DfF9/P2q87Su51sa/i+/L7H4TeBvm+xIdxG8DlcfzwFlqVh39ak7E966boOk+3XVzN/5wOm+AWtuv9xv/DUhaWb98pVHkFT6yntz/7h75/ru/jGc3Ox33aEIIIYQQQgghhBBCCCGEEEIIIYQQQgghFv8Dsm9QdtnRDoUAAAAASUVORK5CYII=",
    link: "https://kabeli.cl"
  },
  {
    alt: "Marketers Group",
    src: "https://marketersgroup.es/wp-content/uploads/2018/07/logo-marketersgroup.png.webp",
    link: "https://marketersgroup.es/",
  },
  {
    alt: "Rocketbot",
    src: "/images/rocketbot.svg",
    link: "https://rocketbot.com/",
  },
  {
    alt: "(Rabbit)²",
    src: "/images/rabbit2.png",
    link: "#"
  },
];

const TrustInUs = ({ priority = false }) => {
  return (
    <div className="flex flex-col md:flex-row  gap-3 lg:px-16 py-16">
      {/* RATING */}
      <div className="flex flex-col justify-center items-center md:items-start gap-1">

        <div className="text-base text-base-content/80">
          Companies that trust our team
        </div>
      </div>
      {/* AVATARS */}
      <div className={`-space-x-5 avatar-group justy-start`}>
        {avatars.map((image, i) => (
          <div className="w-25 lg:w-44 flex items-center justify-center px-5" key={i}>
            <a href={image.link} target="_blank" rel="noopener noreferrer">
            <Image
              src={image.src}
              alt={image.alt}
              priority={priority}
              width={120}
              height={100}
            />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustInUs;
