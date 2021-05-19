import Button from "../Button";
import CardRecipes from "../CardRecipe";
import styles from "./styles.module.scss";

export default function BestecipesCards() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Our Best Recipes</h1>
        <p>
          far far away, behind the word mountains, far from the countries <br/>
          Vokalia and Consonantia, there live the blind texts.
        </p>
        <div>
          <div className={styles.containerCard}>
            <CardRecipes
              image='/images/comida_1.svg'
              alt='Bloccoli salad with Bacon'
              title='Bloccoli salad with Bacon'
            />
            <CardRecipes
              image='/images/comida_2.svg'
              alt='Classic Beef Burgers'
              title='Classic Beef Burgers'
            />
          </div>
          <div className={styles.containerCard}>
            <CardRecipes
              image='/images/comida_3.svg'
              alt='Classic Potato Salad'
              title='Classic Potato Salad'
            />

            <CardRecipes
              image='/images/comida_4.svg'
              alt='Cherry Cobbler on the Grill'
              title='Cherry Cobbler on the Grill'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
