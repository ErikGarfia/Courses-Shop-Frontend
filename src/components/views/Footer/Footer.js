import React from 'react'
import {QqOutlined} from  '@ant-design/icons';
function Footer() {
    return (
        <div className="foot" style={{
            height: '80px', display: 'flex',
            flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', fontSize:'1rem'
        }}>
           <p> Ingenieria de Software</p>
           <p> Amaya Camargo Alfredo<QqOutlined /> &nbsp;&nbsp;&nbsp;Campos Leaños Juan Manuel<QqOutlined />&nbsp;&nbsp;&nbsp;Garfia Acevedo Erik <QqOutlined /></p>
        </div>
    )
}

export default Footer