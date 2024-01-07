import { UploadOutlined } from "@ant-design/icons";
import { Button, message, Upload } from "antd";
import axios from "axios";

const TestUpload = ({ setFileUrl }) => {
    const props = {
        name: "file",
        action: `${import.meta.env.VITE_BASE_URL}/upload-file`,
        headers: {

        },
        onChange(info) {
            if (info.file.status !== "uploading") {
                console.log(info.file, info.fileList);
            }
            if (info.file.status === "done") {
                message.success(`${info.file.name} file uploaded successfully`);
            } else if (info.file.status === "error") {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
        async beforeUpload(file) {

            const formData = new FormData();
            formData.append("file", file);

            await axios
                .post(`${import.meta.env.VITE_BASE_URL}/upload-file`, formData, {
                    headers: { "Content-Type": "multipart/form-data" },
                })
                .then((response) => {
                    setFileUrl(response.data.fileName);
                })
                .catch((error) => {
                    console.error("Upload failed:", error);
                });
            return false;
        },
    };

    return (
        <Upload {...props}>
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>
    );
};

export default TestUpload;
