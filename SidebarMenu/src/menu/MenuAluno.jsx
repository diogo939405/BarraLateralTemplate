import {Menu} from 'antd'
import {HomeOutlined,CalendarOutlined,ReadOutlined,LaptopOutlined,MessageOutlined,CommentOutlined} from '@ant-design/icons'
import './Menus.css'
import './Menus.css';

import PropTypes from 'prop-types';

export default function MenuAluno({ onSelect, darkTheme }) {

  const stateChange = (e) => {
      onSelect(e.key);
  };

  return (
      <>
          <Menu
              theme={darkTheme ? 'dark' : 'light'}
              //   mode='inline'
              className='menu-bar'
              onClick={stateChange}
              //   onClick={(e) => onSelect(e.key)}
          >
              <Menu.Item key="Inicio"
                  icon={<HomeOutlined />}>
                  Início
              </Menu.Item>
              <Menu.Item key="Disciplinas" icon={<LaptopOutlined />}>
                  Disciplinas
              </Menu.Item>
              <Menu.Item key="Calendario" icon={<CalendarOutlined />}>
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
              {/* <Menu.Item key="home7" icon={<AuditOutlined />}>
                  Sala de Coordenação
              </Menu.Item> */}
              {/* <Menu.SubMenu
                  key='submenu'
                  icon={<TeamOutlined />}
                  title='Administração'
              >
                  <Menu.Item key="submenu1" icon={<HomeOutlined />}>Atendimentos e Relatórios</Menu.Item>
                  <Menu.Item key="submenu2" icon={<HomeOutlined />}>Polos de Apoio Presencial</Menu.Item>
                  <Menu.Item key="submenu3" icon={<HomeOutlined />}>Painel de Relatórios</Menu.Item>
              </Menu.SubMenu> */}
          </Menu>
      </>
  );
}

MenuAluno.propTypes = {
  onSelect: PropTypes.func.isRequired,
  darkTheme: PropTypes.bool.isRequired,
};

MenuAluno.propTypes = {
    onSelect: PropTypes.func.isRequired,
    alunoState: PropTypes.bool.isRequired,
    setAlunoState: PropTypes.func.isRequired,
  };
  
  