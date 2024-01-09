import Button from "../button"
import Header from "./header"

export interface CardProps {
  title: string
  description: string
}


const Card = ({ title, description }: CardProps) => {

  return (
    <article>
      <Header title={title} />
      <section>
        <p>{description}</p>
      </section>
      <footer>
        <Button label="Comprar" />
      </footer>
    </article>
  )
}

export default Card