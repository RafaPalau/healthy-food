import ReactSlidy from "react-slidy";
import CardsBlog from "../CardsBlog";
import styles from "./styles.module.scss";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import useuseWindowDimensions from "../../hook/useWindowDimensions";

function CustomArrow({ style, children, className, ...props }) {
  return (
    <button
      {...props}
      className={className}
      style={{
        backgroundColor: "red",
        width: "3rem",
        height: "3rem",
        background: "var(--white)",
        border: 0,
        borderRadius: "50%",
        cursor: "pointer",
        fontSize: "2rem",
        position: "absolute",
        zIndex: 2,
       
        boxShadow: "rgba(63, 64, 65, 0.3) 0px 4px 12px",
        color: "var(--green-500)",
        fontWeight: "bold",
      }}
    >
      <span role='img' aria-label='Arrow'>
        {children}
      </span>
    </button>
  );
}

function CustomArrowLeft(props) {
  return (
    <CustomArrow {...props} className={styles.arrowLeft}>
      <BsArrowLeft />
    </CustomArrow>
  );
}

function CustomArrowRight(props) {
  return (
    <CustomArrow {...props} className={styles.arrowRight}>
      <BsArrowRight />
    </CustomArrow>
  );
}

export default function Carousel() {
  const { width } = useuseWindowDimensions();
  let numberCardsOfSlide;

  if (width <= 314) {
    numberCardsOfSlide = 1;
  } else if (width >= 315 && width <= 420) {
    numberCardsOfSlide = 1.3;
  } else if (width >= 421 && width <= 499) {
    numberCardsOfSlide = 2;
  } else if (width >= 500 && width <= 599) {
    numberCardsOfSlide = 2.5;
  } else if (width >= 600 && width <= 699) {
    numberCardsOfSlide = 2.8;
  } else if (width >= 699 && width <= 799) {
    numberCardsOfSlide = 3;
  } else {
    numberCardsOfSlide = 3.5;
  }

  return (
    <div className={styles.container}>
      <h1>Read Our Blog</h1>
      <p>
        far far away, behind the word mountains, far from the countries <br />{" "}
        Vokalia and Consonantia, there live the blind texts.
      </p>

      <div className={styles.carousel}>
        <ReactSlidy
          ArrowLeft={CustomArrowLeft}
          ArrowRight={CustomArrowRight}
          infiniteLoop
          className={styles.cardscarousel}
          numOfSlides={numberCardsOfSlide}
        >
          <CardsBlog
            image='/images/bloco_image_1.svg'
            alt=''
            title='Quick-start guide to nuts and seeds'
            avatar='/images/user1.jpg'
            name='Michael Dam'
          />
          <CardsBlog
            image='/images/bloco_image_2.svg'
            alt=''
            title='Nutrition: Tips for Improving Your Health'
            avatar='/images/user2.jpg'
            name='Ben Parker'
          />

          <CardsBlog
            image='/images/bloco_image_3.svg'
            alt=''
            title='The top 10 benefits of eating helathy'
            avatar='/images/user3.jpg'
            name='Luisa Villasmil'
          />

          <CardsBlog
            image='/images/bloco_image_4.svg'
            alt='Image'
            title='Why did eating well made you live longer?'
            avatar='/images/user4.jpg'
            name='Vicky Hladynets'
          />
          <CardsBlog
            image='/images/bloco_image_1.svg'
            alt=''
            title='Quick-start guide to nuts and seeds'
            avatar='/images/user1.jpg'
            name='Michael Dam'
          />
          <CardsBlog
            image='/images/bloco_image_2.svg'
            alt=''
            title='Nutrition: Tips for Improving Your Health'
            avatar='/images/user2.jpg'
            name='Ben Parker'
          />

          <CardsBlog
            image='/images/bloco_image_3.svg'
            alt=''
            title='The top 10 benefits of eating helathy'
            avatar='/images/user3.jpg'
            name='Luisa Villasmil'
          />

          <CardsBlog
            image='/images/bloco_image_4.svg'
            alt='Image'
            title='Why did eating well made you live longer?'
            avatar='/images/user4.jpg'
            name='Vicky Hladynets'
          />
        </ReactSlidy>
      </div>
    </div>
  );
}
