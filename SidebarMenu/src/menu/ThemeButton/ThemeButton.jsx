import { Button } from "antd";
// import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi'
import { SunOutlined, MoonOutlined} from '@ant-design/icons';

import PropTypes from 'prop-types'

export default function ThemeButton({ darkTheme, toogleTheme }) {

    return (
        <>
        <div className="theme-button">
        <Button onClick={toogleTheme}>
            
            {darkTheme ? <SunOutlined /> : <MoonOutlined />}
        </Button>
        </div>
        </>
    )
}

ThemeButton.propTypes = {
    darkTheme: PropTypes.bool.isRequired,
    toogleTheme: PropTypes.func.isRequired,
}

ThemeButton.propTypes = {
    darkTheme: PropTypes.bool.isRequired,
}


