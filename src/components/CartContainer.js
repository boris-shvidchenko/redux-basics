import CartItem from './CartItem';
import { useSelector } from 'react-redux';

export default function CartContainer() {
    const { cartItems, total, amount } = useSelector((store) => store.cart)
    
    if (amount < 1) {
        return (
            <section className='cart'>
                <header>
                    <h2>Your Bag</h2>
                    <h4 className='empty-cart'> is currently empty</h4>
                </header>
            </section>
        )
    }
   
    return (
        <section className='cart'>
            <header>
                <h2>Your Bag</h2>
            </header>
            <div>
                {cartItems.map((item) => {
                    return (
                        <CartItem key={item.id} {...item}/>
                    )
                })}
            </div>
            <footer>
                <hr/>
                <div className='cart-total'>
                    <h4>Total <span>${total}</span></h4>
                </div>
                <button className='btn clear-btn'>Clear Cart</button>
            </footer>
        </section>
    )
}