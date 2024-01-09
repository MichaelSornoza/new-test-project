export interface HeaderProps {
  title: string
}

const Header = ({ title }: HeaderProps) => {

  return (
    <header>
      <h2>{title}</h2>
    </header>
  )
}

export default Header