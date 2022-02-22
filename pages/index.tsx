import Head from 'next/head'
import React from 'react'
import Image from 'next/image'
import utilStyles from '../styles/utils.module.css'
import { Product } from '../interfaces/products'
import { Sizes } from '../interfaces/products'
import {NextPage, GetStaticProps} from 'next'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  useDisclosure,
  Button,
  Box,
  Text,
  Stack
} from '@chakra-ui/react'


interface ProdProps {
  products: Product[];
  sizes: Sizes[]
}

const Basement: NextPage<ProdProps> = ({products, sizes}) => {
  
  const { isOpen, onOpen, onClose } = useDisclosure()
  
  const [cart, setCart] = React.useState<Product[]>([]);
  const [count, setCount] = React.useState(1)
  let countStockMas = () => {setCount(count + 1 )}
  let countStockMenos = () => {setCount(count > 1 ? count - 1 : count)}

  const totalPrice: number = React.useMemo(
    () => cart.reduce((totalPrice, product) => totalPrice + product.price, 0), [cart],
  )

  return (
    <div className={utilStyles.container}>
      <nav className={utilStyles.nav}>
        <Image className={utilStyles.basementPhone} height={10} width={40} alt='basement' src='/images/Favicon.png' ></Image>
        {/* <Image className={utilStyles.basementLogo} height={10} width={140} alt='basement' src='/images/basement.png'></Image> */}
        <Image className={utilStyles.basementLogo} height={30} width={130} alt='graphics' src='/images/graphics.png'></Image>
        <button className={utilStyles.cart} onClick={onOpen}>Cart ({cart.length})</button>
        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay  />
        <ModalContent>
          {/* Box 1 */}
          <Stack sx={{
            '@media screen and (max-width: 480px)': {width:'100vw', padding: '2vw', height: '100%'}
          }} overflowY='auto' paddingTop='8vh' paddingRight='1vw' paddingLeft='1vw' bg='black' border='1px' borderColor='white' borderStyle='groove' width='100vh' height='70vh' position='fixed' top={2} right={2} overflow='hidden' justifyContent='space-between'> 
              
              <Box sx={{
            '@media screen and (max-width: 480px)': {width:'100vw', padding: '2vw', height: '100vw'}
          }}  display='flex' justifyContent='center' alignItems='center'>
              
              <Image color='white' src='/images/your-cart.png' width={500} height={100} alt='your cart'></Image>
              {/* <Text height='5vw' alignItems='center' justifyContent='center' display='flex' color='white' fontSize='48px' fontFamily='revert'>YOUR CART</Text> */}
              </Box>
            
            <ModalCloseButton color='white' />
            
            <Stack sx={{
            '@media screen and (max-width: 480px)': {width:'100vw', padding: '2vw', height: '100%'}
          }}  height='70%' width='100%' overflowY='auto' display='flex' justifyContent='center' alignItems='center'>
            
            {cart.map((product) => (
            // Box 2
              <Box sx={{
              '@media screen and (max-width: 480px)': {width:'100vw', padding: '2vw', height: '100vw'}
            }}  key={product.id}  height='11vw' width='47vw' display='flex' flexDirection='row' border='1px' borderColor='white' borderStyle='groove'>
              
              {/* Box 3 */}
                <Box bgImg='linear-gradient(to bottom, #000000, #0c0b0b, #141414, #1b1a1a, #212020)' display='flex' justifyContent='center' alignItems='center' width='25%'>
                < Image width={130} height={100} src={product.image} alt='producto'></Image>
                </Box>

              {/* Box 4 */}
              <Box marginLeft='1vw' p='3px' height='100%' width='75%' display='flex' flexDirection='column' justifyContent='space-around' >
                <Text justifyContent='flex-start' alignItems='flex-start' color='white'>{product.name}</Text>
                
                {/* Box 5 */}
                <Box display='flex' flexDirection='row' alignItems='center' >
                  <Text fontWeight='extrabold' display='flex' justifyContent='flex-start' alignItems='flex-end' color='white'>QUANTITY:</Text>
                  
                  {/* Box 6 */}
                  <Box sx={{
            '@media screen and (max-width: 480px)': {width:'14vw', height: '5vw'}
          }}  m='6px' height='2vw' color='white' display='flex' justifyContent='space-evenly' alignItems='center' borderColor='white' border='1px' borderRadius='15px'width='6vw' flexDirection='row'>
                    <button className={utilStyles.boton} onClick={countStockMenos}>-</button>
                    <p className={utilStyles.contador}>{`${count}`}</p>
                    <button className={utilStyles.boton} onClick={countStockMas}>+</button>
                  </Box>
                </Box>
                
                {/* Box 7 */}
                <Box sx={{
            '@media screen and (max-width: 480px)': { height: '5vw'}
          }}  display='flex' flexDirection='row' justifyContent='space-between' alignItems='flex-end'>
                  <Text fontWeight='extrabold' display='flex' color='white'>SIZE: <div className={utilStyles.size}><p className={utilStyles.eachSize}>S</p></div><div className={utilStyles.size} ><p className={utilStyles.eachSize}>M</p></div><div className={utilStyles.size}><p className={utilStyles.eachSize}>L</p></div> </Text>
                  <Text fontWeight='extrabold' padding='4px' display='flex' justifyContent='flex-end' alignItems='flex-end' color='white'>${product.price}</Text>
                </Box>
              </Box>
            </Box>
            ))}

            </Stack>

            <Box sx={{ '@media screen and (max-width: 480px)': { height:'50vh', width:'100vw', justifyContent:'space-between', alignItems:'center', flexDirection:'column'}}} height='7vh' borderTop='1px' borderColor='white' borderStyle='groove' display='flex' flexDirection='row' alignItems='flex-end' justifyContent='space-between'>
              <Text sx={{ '@media screen and (max-width: 480px)': {alignItems:'center',justifyContent:'center'}}} fontWeight='extrabold' alignItems='flex-end' m={3} color='white'>TOTAL: ${totalPrice}</Text>
              <Button alignItems='flex-end' m={3} colorScheme='white' onClick={onClose}>
              <Image color='white' src='/images/checkout.png' width={150} height={20} alt='your cart'></Image>
              </Button>
            </Box>
          </Stack>
        </ModalContent>
      </Modal>
      </nav>
      <header className={utilStyles.header}>
        <div className={utilStyles.divBasementHeader}>
          <Image className={utilStyles.basementHeader} height={480} width={1680} src='/images/header.png' alt='Basement Supply'></Image>
        </div>
        <div className={utilStyles.vector0}>
          <Image className={utilStyles.vector0} src='/images/vectors0.png' height={80} width={80} alt='vector'></Image>
        </div>
        <div className={utilStyles.divSwag}><p className={utilStyles.textSwag}>We bringin' the swag - you takin' it? - We bringin' the swag - you takin' it?</p></div>
        <div className={utilStyles.vector1}>
          <Image className={utilStyles.vector1}  src='/images/vectors1.png' height={80} width={80} alt='vector'></Image>
        </div>
      </header>
      <section className={utilStyles.productsSection}>
        {products.map((product) => (
          <div className={utilStyles.productsDiv} key={product.id}>
            <div onClick={() =>  setCart(cart => cart.concat(product)) } className={utilStyles.imageDiv}>
              <Image className={utilStyles.productImg} width={280} height={360} src={product.image} alt={product.name}></Image>
              <div className={utilStyles.hoverDiv}>
                <Image alt='add to cart' className={utilStyles.iconImg} width={140} height={100} src='/images/hover.png'></Image>
              </div>
            </div>
            <div className={utilStyles.npDiv}>
              <p className={utilStyles.productName}>{product.name}</p>
              <p className={utilStyles.productPrice}>${product.price}</p>
            </div>
          </div>
        ))}
      </section>
      
      <footer className={utilStyles.basementFooter}>
        <Image alt='Wear Everyday' src='/images/footer.png' height={500} width={1680}></Image>
      </footer>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const products: Product[] = await import("../interfaces/details.json").then((res) => res.default);
  return {
    props: {
      products,
    },
  }
}
export default Basement;