import React, { useEffect, useState } from 'react'
import { Button, Descriptions } from 'antd';

function ProductInfo(props) {

    const [Product, setProduct] = useState({})

    useEffect(() => {

        setProduct(props.detail)

    }, [props.detail])

    const addToCarthandler = () => {
        props.addToCart(props.detail._id)
    }


    return (
        <div>
            <Descriptions title="Información del producto">
                <Descriptions.Item label="Precio"> ${Product.price}</Descriptions.Item>
                <Descriptions.Item label="Ventas">{Product.sold}</Descriptions.Item>
                <Descriptions.Item label="Personas que vieron"> {Product.views}</Descriptions.Item>
                <Descriptions.Item label="Descripcion"> {Product.description}</Descriptions.Item>
            </Descriptions>

            <br />
            <br />
            <br />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button size="large" shape="round" type="danger"
                    onClick={addToCarthandler}
                >
                    Agregar al carrito
                    </Button>
            </div>
        </div>
    )
}

export default ProductInfo