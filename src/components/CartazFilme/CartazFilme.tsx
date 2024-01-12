interface Props{
    imagem_cartaz:string
}

function CartazFilme({imagem_cartaz}:Props) {
  return (
    <div className="w-80 min-w-80"><img src={imagem_cartaz} width={"100%"} alt="Descrição" /></div>
  )
}

export default CartazFilme