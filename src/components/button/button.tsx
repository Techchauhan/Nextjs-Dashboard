import { DownloadOutlined } from '@ant-design/icons';
import { Button  } from 'antd';
import { useRouter } from 'next/router';


const ButtonComponent: React.FC = () => {
  return (
    <>
      <Button type="primary" icon={<DownloadOutlined />}  >
            Download
          </Button>
    </>
  );
};

export default ButtonComponent;