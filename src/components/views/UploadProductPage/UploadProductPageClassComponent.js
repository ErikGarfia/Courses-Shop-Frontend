import React, { Component } from 'react'
import { Typography, Button, Form, Input } from 'antd';
import axios from 'axios';
import FileUpload from '../../utils/FileUpload';

const { Title } = Typography;
const { TextArea } = Input;

const Continents = [
    { key: 1, value: "Desarrollo Web" },
    { key: 2, value: "Algoritmos" },
    { key: 3, value: "Diseño Web" },
    { key: 4, value: "Redes" },
    { key: 5, value: "Base de datos" },
    { key: 6, value: "Administracion" },
    { key: 7, value: "Circuitos" }
]

export class UploadProductPage extends Component {

    state = {
        title: '',
        description: '',
        continents: 1,
        images: [],
        price: 0
    }

    handleChangeTitle = (event) => {
        this.setState({ title: event.currentTarget.value })
    }

    handleChangePrice = (event) => {
        this.setState({ price: parseInt(event.currentTarget.value, 10) })
    }

    handleChangeDecsription = (event) => {
        // console.log(event.currentTarget.value)
        this.setState({ description: event.currentTarget.value })
    }

    handleChangeContinents = (event) => {
        this.setState({ continents: event.currentTarget.value })
    }

    onSubmit = (event) => {
        event.preventDefault();

        if (this.props.user.userData && !this.props.user.userData.isAuth) {
            return alert('Inicia sesión antes de registrar curso')
        }

        if (!this.state.title || !this.state.description ||
            !this.state.continents || !this.state.images
            || !this.state.price) {
            return alert('Llena todos los campos por favor')
        }

        const variables = {
            writer: this.props.user.userData._id,
            title: this.state.title,
            description: this.state.description,
            images: this.state.images,
            continents: this.state.continents,
            price: this.state.price
        }

        axios.post('/api/product/uploadProduct', variables)
            .then(response => {
                if (response.data.success) {
                    alert('Archivo agregado correctamente')
                    setTimeout(() => {
                        this.props.history.push('/')
                    }, 1000);
                } else {
                    alert('Falló la carga del archivo')
                }
            })
    }

    updateFiles = (newImages) => {
        this.setState({ images: newImages })
    }


    render() {
        return (
            <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <Title level={2} > Cargar curso nuevo   </Title>
            </div>

            <Form onSubmit={this.onSubmit}>
               
               <FileUpload refreshFunction={this.updateFiles} />

                <br /><br />
                <label>Titulo</label>
                <Input
                    onChange={this.handleChangeTitle}
                    value={this.state.title}
                />
                <br /><br />
                <label>Descripción</label>
                <TextArea
                    onChange={this.handleChangeDecsription}
                    value={this.state.description}
                />
                <br /><br />
                <label>Precio($)</label>
                <Input
                    type="number"
                    onChange={this.handleChangePrice}
                    value={this.state.price}
                />
                <br /><br />
                <select onChange={this.handleChangeContinents}>
                    {Continents.map(item => (
                        <option key={item.key} value={item.key}>{item.value}</option>
                    ))}
                </select>
                <br /><br />

                <Button type="primary" size="large" onClick={this.onSubmit}>
                    Agregar
                </Button>
            </Form>
        </div>
        )
    }
}

export default UploadProductPage