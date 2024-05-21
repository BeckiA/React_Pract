interface Props{
    
    itemLength: number
}

function NavBar({itemLength}: Props) {
  return (
    <div>NavBar {itemLength}</div>
  )
}

export default NavBar