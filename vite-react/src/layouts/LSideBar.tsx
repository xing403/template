import {
  HomeOutlined,
} from '@ant-design/icons';

import { Layout, Menu } from 'antd';

const { Sider } = Layout;

export default function LayoutSideBar(props: { collapsed: boolean, onCollapsed?: (collapsed: boolean) => void }) {

  const [isBreakpoint, setIsBreakpoint] = useState(false);
  const { collapsed, onCollapsed } = props;
  return (
    <Sider trigger={null} collapsible collapsed={collapsed} breakpoint="md"
      collapsedWidth={isBreakpoint ? '0' : `80px`}
      onBreakpoint={(broken) => {
        setIsBreakpoint(broken)
        onCollapsed && onCollapsed(broken)
      }}
      onCollapse={(collapsed) => onCollapsed && onCollapsed(collapsed)}>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['home']}
        items={[{
          key: 'home',
          icon: <HomeOutlined />,
          label: '首页',
        }]}
      />
    </Sider>
  )
}
