import {
  AddProduct,
  ProductDescription,
  ProductTitle,
  ProductImage
} from './styles'

type Props = {
  title: string
  description: string
  image: string
}

const ProductItem = ({ image, title, description }: Props) => {
  const getDescription = (d: string) => {
    if (d.length > 216) {
      return d.slice(0, 216) + '...'
    } else {
      return d
    }
  }
  return (
    <>
      <ProductImage src={image} />
      <ProductTitle>{title}</ProductTitle>
      <ProductDescription>{getDescription(description)}</ProductDescription>
      <AddProduct>Adicionar ao carrinho</AddProduct>
    </>
  )
}

export default ProductItem
