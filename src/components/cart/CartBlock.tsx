import React from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { useAppSelector } from '../../hooks'

interface ICartBlockProps {
  cartVisible: boolean;
  setCartVisible: React.Dispatch<React.SetStateAction<boolean>>
};

const CartBlock: React.FC<ICartBlockProps> = ({cartVisible, setCartVisible}) => {

  const {count} = useAppSelector(state => state.cart);

  return (
    <div className='cart_block' onClick={() => setCartVisible(!cartVisible)}>
      <AiOutlineShoppingCart size={30} style={{cursor: 'pointer'}} />
      {
        count !== 0 ? <span className='cart_block-count'>{count}</span> : null
      }
    </div>
  )

}

export default CartBlock;