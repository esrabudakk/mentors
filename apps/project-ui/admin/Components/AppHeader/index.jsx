import { BellFilled, MailOutlined } from "@ant-design/icons";
import { Badge, Drawer, Image, List, Space, Typography } from "antd";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getComments, getOrders } from "../../API";


function AppHeader() {
  const [comments, setComments] = useState([]);
  const [orders, setOrders] = useState([]);
  const [commentsOpen, setCommentsOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  useEffect(() => {
    getComments().then((res) => {
      setComments(res.comments);
    });
    getOrders().then((res) => {
      setOrders(res.products);
    });
  }, []);

  return (
    <div className="AppHeader">
      <Image
        width={40}
        src="/D.png"
      >
      </Image>

      <Typography.Title level={10} // Başlık seviyesini belirtin (isteğe bağlı)
        style={{ background: '#78bbff', padding: '10px', borderRadius: '20px', margin: '10px' }} // Arka plan rengi ve dolgu ekleyin
      >
        DMG KONTROL PANELİ</Typography.Title>
      <Typography.Title level={5} // Başlık seviyesini belirtin (isteğe bağlı)
        style={{ background: '#78bbff', padding: '10px', borderRadius: '20px', margin: '10px' }} // Arka plan rengi ve dolgu ekleyin
      >
        <Link
          onClick={() => {
            hideNav();
            scrollToTop();
          }}
          to="/"
          className="hover:text-red-500 transition-all"
        >
          Anasayfa
        </Link></Typography.Title>

      {/**
       <Drawer
        title="Comments"
        open={commentsOpen}
        onClose={() => {
          setCommentsOpen(false);
        }}
        maskClosable
      >
        <List
          dataSource={comments}
          renderItem={(item) => {
            return <List.Item>{item.body}</List.Item>;
          }}
        ></List>
      </Drawer>
       <Drawer
        title="Notifications"
        open={notificationsOpen}
        onClose={() => {
          setNotificationsOpen(false);
        }}
        maskClosable
      >
        <List
          dataSource={orders}
          renderItem={(item) => {
            return (
              <List.Item>
                <Typography.Text strong>{item.title}</Typography.Text> has been
                ordered!
              </List.Item>
            );
          }}
        ></List>
      </Drawer> */}

    </div>
  );
}
export default AppHeader;
