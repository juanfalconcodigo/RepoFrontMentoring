import React from 'react';
import { Card, Icon } from 'antd';
const { Meta } = Card;
const CardComponent = (props) => {
    const { user:{name}, description,experience } = props.data;
    console.log(props.data)

    return (

        <>
            <Card
                className='card-style'
                hoverable
                actions={[
                    <Icon type="setting" key="setting" />,
                    <Icon type="edit" key="edit" />,
                   /*  <Icon type="ellipsis" key="ellipsis" />, */
                ]}
                style={{ width: 270, margin: 'auto'/* , boxShadow: '0px 1px 10px rgba(0,1,1,0.15)' */ }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" style={{ height: 250 }} />}
            >
                <Meta title={name} description={description} />
                <Card bordered={false} type="inner" style={{ marginTop: 8 }} title="Detalles :" >
                    {experience}
                </Card>
            </Card>

        </>
    )
}
export {
    CardComponent
}