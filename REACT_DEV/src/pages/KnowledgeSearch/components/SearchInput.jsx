import React, { PureComponent } from 'react';
import catalogData from '@/pages/KnowledgeSearch/components/catalog';
import { Input, Button } from 'antd';

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
        <Input
          allowClear={this.clear}
          className={className}
          onChange={onChange}
          placeholder="试一试输入感兴趣的单字检索一下~"
          size="large"
          value={searchValue}
        />
        <Button type="primary" size={'large'} onClick={search}>
          检索一下
        </Button>
      </div>
    );
  }
}

export default SearchInput;
