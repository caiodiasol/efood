import {
  AddProduct,
  ProductDescription,
  ProductTitle,
  ProductImage
} from './styles'

type Props = {
  nome: string
  descricao: string
  foto: string
}

const ProductItem = ({ nome, descricao, foto }: Props) => {
  const getDescription = (d: string) => {
    if (d.length > 216) {
      return d.slice(0, 216) + '...'
    } else {
      return d
    }
  }
  return (
    <>
      <ProductImage src={foto} />
      <ProductTitle>{nome}</ProductTitle>
      <ProductDescription>{getDescription(descricao)}</ProductDescription>
      <AddProduct>Adicionar ao carrinho</AddProduct>
    </>
  )
}

export default ProductItem
