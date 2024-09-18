
import { Avatar, Flex, Typography } from 'antd'
import { UserOutlined,NotificationOutlined } from '@ant-design/icons'

export default function HeaderCust() {
    return (
        <>
        <Flex gap='50rem'>
            <Typography.Title level={3} type='secondary'>Nome do usuario logado...</Typography.Title>
            <Flex align='center' gap='5rem' >
            <Avatar icon={<UserOutlined/>} style={{ backgroundColor: '#032163',cursor:'pointer' }}></Avatar>
            <NotificationOutlined size='large' style={{fontSize: '25px',color: '#032163'}} />
        </Flex>
        </Flex>
      
        </>
    )
}
 
