import React, { PureComponent } from 'react';
import { Button, Select, Input } from 'antd';
import styles from '@/pages/TimespacesEarch/index.less';
import { SearchOutlined } from '@ant-design/icons';

class SearchInput extends PureComponent {
  render() {
    const {
      mode,
      value1,
      value2,
      handleModeChange,
      valueChange1,
      valueChange2,
      search,
    } = this.props;
    return (
      <div>
        <div className={styles.search}>
          <div className={styles.content}>
            <Select size={'large'} value={mode} onChange={handleModeChange}>
              <Select.Option value="time">时间点</Select.Option>
              <Select.Option value="times">时间段</Select.Option>
              <Select.Option value="space">地点</Select.Option>
              <Select.Option value="timespace">时空</Select.Option>
            </Select>
            {mode === 'time' ? (
              <div>
                <Input
                  onChange={valueChange1}
                  size={'large'}
                  style={{ width: 400 }}
                  value={value1}
                  placeholder="请检索感兴趣的时间实体，如:1926"
                />
                <Button type="primary" icon={<SearchOutlined />} size={'large'} onClick={search}>
                  时空检索
                </Button>
              </div>
            ) : mode === 'times' ? (
              <div>
                <Input
                  onChange={valueChange1}
                  value={value1}
                  size={'large'}
                  style={{ width: 200 }}
                  placeholder="感兴趣的时间起点"
                />
                &nbsp;&nbsp;~&nbsp;&nbsp;
                <Input
                  onChange={valueChange2}
                  value={value2}
                  size={'large'}
                  style={{ width: 200 }}
                  placeholder="感兴趣的时间终点"
                />
                <Button type="primary" icon={<SearchOutlined />} size={'large'} onClick={search}>
                  时空检索
                </Button>
              </div>
            ) : mode === 'space' ? (
              <div>
                <Input
                  onChange={valueChange1}
                  size={'large'}
                  value={value1}
                  style={{ width: 400 }}
                  placeholder="请检索感兴趣的地点实体，如:吴湖帆"
                />
                <Button type="primary" icon={<SearchOutlined />} size={'large'} onClick={search}>
                  时空检索
                </Button>
              </div>
            ) : (
              <div>
                <Input
                  onChange={valueChange1}
                  size={'large'}
                  value={value1}
                  style={{ width: 220, marginRight: '5px' }}
                  placeholder="时间点，例如：民国"
                />
                <Input
                  onChange={valueChange2}
                  value={value2}
                  size={'large'}
                  style={{ width: 220 }}
                  placeholder="地点，例如：吴湖帆"
                />
                <Button type="primary" size={'large'} icon={<SearchOutlined />} onClick={search}>
                  时空检索
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default SearchInput;
