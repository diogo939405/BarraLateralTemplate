/* eslint-disable no-unused-vars */
import React,{useState} from 'react'
import {Button, Layout, theme,Spin, Flex} from 'antd'
import Logo from './logo/Logo';
import { MenuUnfoldOutlined, MenuFoldOutlined} from '@ant-design/icons';
import './Menus.css'
import MenuAluno from './MenuAluno';
import Home from '../pages/Home';
import { Content } from 'antd/es/layout/layout';
import AdminMenu from './AdminMenu';
import HeaderCust from './Header';
import ThemeButton from './ThemeButton/ThemeButton';
export default function MenuAtivo() {
    const { Header, Sider,Content } = Layout;
    const [collapsed, setCollapsed] = useState(false);
    const [selectedPageUser, setSelectedPageUser] = useState(); // Estado para armazenar a página selecionada
    const [selectedPageAdmin, setSelectedPageAdmin] = useState(); // Estado para armazenar a página selecionada
    const [alunoState, setAlunoState] = useState(true);
    const[adminState,setAdminState] = useState(false);
    const [loadingMenu, setLoadingMenu] = useState(false); // Estado de carregamento do menu
    const[darkTheme,setDarkTheme] = useState(true);


    const{
        token:{colorBgContainer},
    }=theme.useToken();
    const renderContent = () => {

      if(alunoState  && !adminState ){
        switch (selectedPageUser) {
          case 'Inicio':
            return <div>Pagina Inicial</div>;
          case 'Disciplinas':
            return <div>Pagina disciplinas</div>;
          case 'Calendario':
            return <div>Pagina calendario</div>;
          default:
            return (
              <> pagina padrão</>
               );
        }
      } else if(adminState === true && alunoState === false){
        switch (selectedPageAdmin) {
          case 'submenu1':
            return <div>Pagina Relatorio Admin</div>;
          case 'submenu2':
            return <div>Pagina Admin</div>;
          case 'submenu3':
            return <div>Pagina Admin</div>;

          default:
            return <div>Conteúdo Padrão Admin</div>;
        }
      }


    };           
     const handleMenuChange = (type) => {setLoadingMenu(true); // Ativa o loading
        setTimeout(() => {
          if (type === 'admin') {
            setAdminState(true);
            setAlunoState(false);
          } else {
            setAlunoState(true);
            setAdminState(false);
          }
          setLoadingMenu(false); // Desativa o loading após 1 segundo
        }, 1000); // Tempo de carregamento simulado
      };

      const toogleTheme = () => {
        setDarkTheme(!darkTheme);
      };
    return (
        <>
        <Layout>
            <Sider theme={darkTheme ? 'dark' : 'light'} collapsed={collapsed} collapsible 
            trigger={null}
            className='sideBar'>
                <Logo className='logo'/>
                <Spin size ='large' spinning={loadingMenu}> 
                  <Flex justify='center' align='center'>
                     <Button className='button-show'
                     color={darkTheme ? 'white' : 'black'}
                      size='large'
                      classNames='toggle'
                      onClick={() => setCollapsed(!collapsed)}
                      type='text'
                      icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />} 
                      />
                        <ThemeButton
                  darkTheme={darkTheme}
                  toogleTheme={toogleTheme}
                  />
                  </Flex>
                 {alunoState ? (
                  <MenuAluno darkTheme={darkTheme} onSelect={(e)=>setSelectedPageUser(e)}  />
                   ) : (
                  <AdminMenu darkTheme={darkTheme} onSelect={(e)=>setSelectedPageAdmin(e)} />
                  )}
              </Spin>

              
              {!collapsed ? (
            <div className="corpo-botoes">
              <div className="botoes">
                <button className="bot-body" onClick={() => handleMenuChange('admin')}>Adddddmin</button>
                <button className="bot-body" onClick={() => handleMenuChange('user')}>Usuário</button>
                
              </div>
            </div>
          ) : null}
                
                
               
            </Sider>
            
            {/* Conteudo */}
            <Layout>
                <Header style={{background:colorBgContainer}}>
                <HeaderCust/>
                              
                </Header>
                <Content style={{ margin: '24px 16px', padding: '24' }}  className='content'>
                  <Flex>
                {renderContent()} 
                </Flex>
          </Content>
            </Layout>
        </Layout>
        </>
    )
}


