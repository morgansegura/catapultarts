import 'regenerator-runtime/runtime'

export const MoltinGateway = require(`@moltin/sdk`).gateway

export const Moltin = MoltinGateway({
    client_id:
        process.env.MOLTIN_CLIENT_ID ||
        'j6hSilXRQfxKohTndUuVrErLcSJWP15P347L6Im0M4',
})

export const getProducts = () => Moltin.Products.With('main_image').All()

export const getProductById = id => Moltin.Products.With('main_image').Get(id)

export const addToCart = (cartId, productId, quantity) =>
    Moltin.Cart(cartId).AddProduct(productId, quantity)

export const getCartItems = id => Moltin.Cart(id).Items()

export const removeFromCart = (productId, cartId) =>
    Moltin.Cart(cartId).RemoveItem(productId)

export const checkoutCart = (cartId, customer, billing) =>
    Moltin.Cart(cartId).Checkout(customer, billing)

export const payForOrder = (orderId, token, email) =>
    Moltin.Orders.Payment(orderId, {
        gateway: 'stripe',
        method: 'purchase',
        payment: token,
        options: {
            receipt_email: email,
        },
    })

export const login = ({ email, password }) =>
    Moltin.Customers.Token(email, password).then(data => {
        const {
            data: { customer_id: id, token },
        } = data
        return {
            id,
            token,
        }
    })

export const register = ({ email, password, ...rest }) =>
    Moltin.Customers.Create({
        email,
        password,
        type: 'customer',
        ...rest,
    }).then(data => {
        const {
            data: { name, id },
        } = data
        return login({ email, password }).then(data => {
            const { token } = data
            return {
                id,
                name,
                email,
                token,
            }
        })
    })

export const getOrders = token => Moltin.Orders.With('items').All(token)

// export default {
//     getProducts,
//     getProductById,
//     addToCart,
//     getCartItems,
//     removeFromCart,
//     checkoutCart,
//     payForOrder,
//     register,
//     login,
//     getOrders
// }