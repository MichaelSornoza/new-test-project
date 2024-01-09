export interface ButtonProps {
  label: string
}

const Button = ({ label }: ButtonProps) => {
  return (
    <button className={`w-10 h-10 flex items-center justify-center`}>{label}</button>
  )
}

export default Button