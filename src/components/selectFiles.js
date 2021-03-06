import React from "react";
import { Upload, Button, Icon, message } from "antd";
import axios from "axios";
import "antd/dist/antd.css";
export default class Demo extends React.Component {
  constructor() {
    super();
    this.state = {
      fileList: [],
      uploading: false
    };
    this.handleUpload = this.handleUpload.bind(this);
  }

  handleUpload() {
    const { fileList } = this.state;
    const formData = new FormData();
    fileList.forEach(file => {
      formData.append("files[]", file);
    });

    this.setState({
      uploading: true
    });
  }

  // You can use any AJAX library you like
  //     axios({
  //       url: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  //       method: "post",
  //       processData: false,
  //       data: formData,
  //       success: () => {
  //         this.setState({
  //           fileList: [],
  //           uploading: false
  //         });
  //         message.success("upload successfully.");
  //       },
  //       error: () => {
  //         this.setState({
  //           uploading: false
  //         });
  //         message.error("upload failed.");
  //       }
  //     });
  //   };

  render() {
    const { uploading, fileList } = this.state;
    const props = {
      onRemove: file => {
        this.setState(state => {
          const index = state.fileList.indexOf(file);
          const newFileList = state.fileList.slice();
          newFileList.splice(index, 1);
          return {
            fileList: newFileList
          };
        });
      },
      beforeUpload: file => {
        this.setState(state => ({
          fileList: [...state.fileList, file]
        }));
        return false;
      },
      fileList
    };

    return (
      <div>
        <Upload {...props}>
          <Button>
            <Icon type="upload" /> Select File
          </Button>
        </Upload>
        <Button
          type="primary"
          onClick={this.handleUpload}
          disabled={fileList.length === 0}
          loading={uploading}
          style={{ marginTop: 16 }}
        >
          {uploading ? "Uploading" : "Ready To Upload"}
        </Button>
      </div>
    );
  }
}
