import React from 'react';
import PropTypes from 'prop-types';
import CartItem from './CartItem';

const Cart = ({ items, total, currency, removeFromCart }) => {
    const buyCompelte = () => {
        if( total === 0) {
            alert("Mời quý khách mua hàng")
        }
        else {
            alert("Chúc mừng bạn đã thanh toán thành công ")
        }
    }
    return (
        <div>
            <h3>Giỏ Hàng</h3>

            <div className="cart">
                <div className="panel panel-default">
                    <div className="panel-body">
                        {items.length > 0 && (
                            <div className="cart__body">
                                {items.map(item => (
                                    <CartItem key={item.id} {...item} onClick={() => removeFromCart(item.id)} />
                                ))}
                            </div>
                        )}
                        {items.length === 0 && (
                            <div className="alert alert-info">Hãy thêm hàng vào giỏ</div>
                        )}
                        <div className="cart__total">Total: {total} VND</div>
                        <button className='btn-primary btn' onClick={buyCompelte}>Thanh Toán</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

Cart.propTypes = {
    items: PropTypes.array,
    total: PropTypes.number,
    currency: PropTypes.string,
    removeFromCart: PropTypes.func.isRequired
}

export default Cart;
