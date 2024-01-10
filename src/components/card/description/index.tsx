export interface DescriptionProps {
  description: string
}
  
const Description = ({description}: DescriptionProps) => {

  return  (

    <section>
      <p>{description}</p>
    </section>
 )
  
}

export default Description