import {useState} from 'react';
import {Layout, Menu, Breadcrumb} from 'antd';
import menu from '../../../config/menu';

const {Header, Sider, Footer, Content} = Layout;
const MainLayout = ({children}) => {
    const [collapsed, setCollapsed] = useState(false);
    const [openKeys, setOpenKeys] = useState(['1']);

    const onOpenChange = (openKeys) => {
        setOpenKeys(openKeys);
    };

    const onMenuClick = ({item, key, keyPath, domEvent}) => {
        console.log(key, keyPath);
    };

    return (
        <Layout
            style={{
                minHeight: '100vh'
            }}
        >
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div
                    style={{
                        height: 32,
                        margin: 16,
                        background: 'rgba(255, 255, 255, 0.2)'
                    }}
                />
                <Menu
                    theme="dark"
                    defaultOpenKeys={openKeys}
                    defaultSelectedKeys={['1-1']}
                    mode="inline"
                    items={menu}
                    onOpenChange={onOpenChange}
                    onClick={onMenuClick}
                />
            </Sider>
            <Layout style={{height: '100vh'}}>
                <Header
                    style={{
                        padding: 0
                    }}
                />
                <Content style={{padding: 16}}>
                    <Breadcrumb
                        style={{
                            margin: '16px 0'
                        }}
                    >
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                    <div style={{height: '100%', overflow: 'auto'}}>
                        {children}
                    </div>
                </Content>
                <Footer
                    style={{
                        textAlign: 'center'
                    }}
                >
            Ant Design ©2023 Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    );
};

export default MainLayout;
