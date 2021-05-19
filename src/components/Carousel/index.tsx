import ReactSlidy from "react-slidy";
import CardsBlog from "../CardsBlog";
import styles from "./styles.module.scss";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

function CustomArrow({ children, className, ...props }) {
  return (
    <button {...props} className={className}>
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
  return (
    <div className={styles.container}>
      <h1>Read Our Blog</h1>
      <p>
        far far away, behind the word mountains, far from the countries <br />{" "}
        Vokalia and Consonantia, there live the blind texts.
      </p>

      <ReactSlidy
        ArrowLeft={CustomArrowLeft}
        ArrowRight={CustomArrowRight}
        infiniteLoop
        className={styles.carousel}
        numOfSlides={3.3}
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
          title="Why did eating well made you live longer?"
          avatar='/images/user4.jpg'
          name='Vicky Hladynets'
        />
      </ReactSlidy>
    </div>
  );
}
