import LogoCastelo from '../../assets/images-removebg-preview.png'
import { Flex } from 'antd'
export default function Logo () {
    return (
        <>
        <Flex justify='center' align='center'>
            <div className="logo">
                <div className='logoImg'>
                <img src={LogoCastelo} alt='Universidade Castelo Branco' width='75px' height='70vh'   />
                </div>
            </div>
            </Flex>
        </>
    )
}

    