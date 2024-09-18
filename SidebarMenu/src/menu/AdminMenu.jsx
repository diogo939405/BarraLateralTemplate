/* eslint-disable no-unused-vars */
import React from 'react'
import {Menu} from 'antd'
import {HomeOutlined,CalendarOutlined,ReadOutlined,AuditOutlined,TeamOutlined,LaptopOutlined,MessageOutlined,CommentOutlined} from '@ant-design/icons'
import './Menus.css'
import PropTypes from 'prop-types';
import './Menus.css';


export default function AdminMenu({onSelect, darkTheme}) {

    const changeState = (e) => {
        onSelect(e.key);
    }
    return (
        <>
        <Menu 
          theme={darkTheme ? 'dark' : 'light'}
        //  mode='inline'
          className='menu-bar'
          onClick={changeState}
        //   onClick={(e) => onSelect(e.key)}
          >
            <Menu.Item key="Inicioo"
              icon={<HomeOutlined />}>
            Início 
            </Menu.Item>
            <Menu.Item key="Disciplinass" icon={<LaptopOutlined />}>
            admin disciplinas
            </Menu.Item>
            <Menu.Item key="Calendarioo" icon={<CalendarOutlined />}>
            Calendário
            </Menu.Item>
            <Menu.Item key="home4" icon={<ReadOutlined />}>
            Bibliotecas 
            </Menu.Item>
            <Menu.Item key="home5" icon={<CommentOutlined />}>
            Tutoriais 
            </Menu.Item>
            <Menu.Item key="home6" icon={<MessageOutlined />}>
            Apoio Docente 
            </Menu.Item>
            <Menu.Item key="home7" icon={<AuditOutlined />}>
            Sala de Coordenação
            </Menu.Item>
            <Menu.SubMenu
            key='submenu'
            icon={<TeamOutlined />}
            title='Administração'
            >
                  <Menu.SubMenu key="submenu1" icon={<HomeOutlined />} title='Atendimentos e Relatórios'>
                  <Menu.Item key="submenu5" icon={<HomeOutlined />}>Atendimento ao aluno</Menu.Item>
                  <Menu.Item key="submenu4" icon={<HomeOutlined />}>Relatórios</Menu.Item>

                  </Menu.SubMenu>
                  <Menu.SubMenu key="submenu2" icon={<HomeOutlined />} title='Polos'>
                  <Menu.Item key="submenu6" icon={<HomeOutlined />}>Visão dos polos</Menu.Item>
                  <Menu.Item key="submenu7" icon={<HomeOutlined />}>Geração de atas</Menu.Item>
                  <Menu.Item key="submenu8" icon={<HomeOutlined />}>Geração de relatórios</Menu.Item>

                  </Menu.SubMenu>
                  <Menu.Item key="submenu3" icon={<HomeOutlined />}>Painel de Relatórios</Menu.Item>

            </Menu.SubMenu>
            
        </Menu>

    
        </>
    )
}

AdminMenu.propTypes = {
    onSelect: PropTypes.func.isRequired,
    darkTheme: PropTypes.bool.isRequired,
}

AdminMenu.propTypes = {
    onSelect: PropTypes.func.isRequired,
    adminState: PropTypes.bool.isRequired,
    setAdminState: PropTypes.func.isRequired,
}

AdminMenu.propTypes = {
    onSelect: PropTypes.func.isRequired,
}

 
