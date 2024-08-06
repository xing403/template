import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Button, Layout, theme } from 'antd';
const { Header } = Layout;

export default function LayoutHeader(props: { collapsed: boolean, setCollapsed: (collapsed: boolean) => void }) {

  const { collapsed, setCollapsed } = props;
  const { token: { colorBgContainer } } = theme.useToken();

  return (
    <Header style={{ padding: 0, background: colorBgContainer }}>
      <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => setCollapsed(!collapsed)}
        style={{
          width: 64,
          height: 64,
        }}
      />
    </Header>
  )
}
