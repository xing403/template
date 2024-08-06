
import { Layout, theme } from 'antd';
import LayoutSideBar from './LSideBar';
import LayoutHeader from './LHeader';
const { Content } = Layout;

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const { token: { colorBgContainer, borderRadiusLG } } = theme.useToken();

  return (
    <Layout>
      <LayoutSideBar collapsed={collapsed} onCollapsed={setCollapsed} />
      <Layout >
        <LayoutHeader collapsed={collapsed} setCollapsed={setCollapsed} />
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 'calc(100vh - 64px - 48px)',
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
