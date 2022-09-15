import React, { PureComponent } from 'react';
import catalogData from '@/pages/Welcome/components/catalog';
import { Cascader, Button } from 'antd';
import {SearchOutlined} from "@ant-design/icons";

class SearchInput extends PureComponent {
  filter = (inputValue, path) => {
    this.props.onChange(inputValue);
    return path.some((option) => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1);
  };

  clear = () => {
    this.props.onChange([]);
    return true;
  };

  displayRender(label) {
    return label[label.length - 1];
  }
  render() {
    const { className, searchValue, onChange, search } = this.props;
    return (
      <div>
        <Cascader
          allowClear={this.clear}
          className={className}
          options={catalogData}
          onChange={onChange}
          placeholder="试一试输入感兴趣的碑帖知识检索一下~"
          displayRender={this.displayRender}
          size="large"
          showSearch={{ filter: this.filter, matchInputWidth: false }}
          value={searchValue}
        />
        <Button icon={<SearchOutlined />} type="primary" size={'large'} onClick={search}>
          知识检索
        </Button>
      </div>
    );
  }
}

export default SearchInput;
