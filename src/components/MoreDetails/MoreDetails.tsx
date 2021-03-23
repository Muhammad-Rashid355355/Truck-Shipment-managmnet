import React from 'react';
import { Collapse, List } from 'antd';
import './MoreDetails.css';

const { Panel } = Collapse;

const MoreDetailsComponet: React.FC = () => {
  const summary = [
    { Text1: 'Customer', Text2: 'Public Jhon Q' },
    { Text1: 'VIN', Text2: '1GNSK123456789' },
    { Text1: 'Order ID#', Text2: '123456789' },
    {
      Text1: 'Status',
      Text2: 'Purchased',
    },
  ];
  return (
    <div className='moreDetails'>
      {/* Summary Section */}
      <Collapse defaultActiveKey={['1']} expandIconPosition='left'>
        <Panel style={{ padding: 0 }} header='Summary' key='1'>
          <div>
            <List
              header={<div></div>}
              bordered
              dataSource={summary}
              renderItem={(item) => (
                <List.Item>
                  <span className='listItem'>{item.Text1}</span>
                  <span className='listItem'>{item.Text2}</span>
                </List.Item>
              )}
            />
          </div>
        </Panel>
      </Collapse>
      <br />
      {/* Customer Section */}
      <Collapse defaultActiveKey={['1']} expandIconPosition='left'>
        <Panel style={{ padding: 0 }} header='Customer' key='1'>
          <div>
            <List
              header={<div>Previous Owner</div>}
              bordered
              dataSource={summary}
              renderItem={(item) => (
                <List.Item>
                  <span className='listItem'>{item.Text1}</span>
                  <span className='listItem'>{item.Text2}</span>
                </List.Item>
              )}
            />
            <List
              header={<div>Owner</div>}
              bordered
              dataSource={summary}
              renderItem={(item) => (
                <List.Item>
                  <span className='listItem'>{item.Text1}</span>
                  <span className='listItem'>{item.Text2}</span>
                </List.Item>
              )}
            />
          </div>
        </Panel>
      </Collapse>
      <br />
      {/* Vehicle Section */}
      <Collapse defaultActiveKey={['1']} expandIconPosition='left'>
        <Panel style={{ padding: 0 }} header='Vehicle' key='1'>
          <div>
            <List
              header={<div>Previous Owner</div>}
              bordered
              dataSource={summary}
              renderItem={(item) => (
                <List.Item>
                  <span className='listItem'>{item.Text1}</span>
                  <span className='listItem'>{item.Text2}</span>
                </List.Item>
              )}
            />
          </div>
        </Panel>
      </Collapse>
      <br />
      {/* Lessor Section */}
      <Collapse defaultActiveKey={['1']} expandIconPosition='left'>
        <Panel style={{ padding: 0 }} header='Lessor' key='1'>
          <div>
            <List
              bordered
              dataSource={summary}
              renderItem={(item) => (
                <List.Item>
                  <span className='listItem'>{item.Text1}</span>
                  <span className='listItem'>{item.Text2}</span>
                </List.Item>
              )}
            />
          </div>
        </Panel>
      </Collapse>
      <br />
      {/* Attachments Section */}
      <Collapse defaultActiveKey={['1']} expandIconPosition='left'>
        <Panel
          style={{ padding: 0, border: 'none' }}
          header='Attachments'
          key='1'
        >
          <div>
            <List
              bordered
              dataSource={summary}
              renderItem={(item) => (
                <List.Item>
                  <span className='listItem'>{item.Text1}</span>
                  <span className='listItem'>
                    <a
                      style={{
                        fontFamily: 'Montserrat',
                        fontWeight: 'bold',
                        fontSize: '16px',
                        color: '#44AA99',
                      }}
                    >
                      DOWNLOAD
                    </a>
                  </span>
                </List.Item>
              )}
            />
          </div>
        </Panel>
      </Collapse>
      <br />
      {/* Documents Section */}
      <Collapse defaultActiveKey={['1']} expandIconPosition='left'>
        <Panel
          style={{ padding: 0, border: 'none' }}
          header='Documents and Forms'
          key='1'
        >
          <div>
            <List
              bordered
              dataSource={summary}
              renderItem={(item) => (
                <List.Item>
                  <span className='listItem'>{item.Text1}</span>
                  <span className='listItem'>{item.Text2}</span>
                </List.Item>
              )}
            />
          </div>
        </Panel>
      </Collapse>
      <br />
      {/* Fee Section */}
      <Collapse defaultActiveKey={['1']} expandIconPosition='left'>
        <Panel style={{ padding: 0, border: 'none' }} header='Fee' key='1'>
          <div>
            <List
              header={<div>FEES</div>}
              bordered
              dataSource={summary}
              renderItem={(item) => (
                <List.Item>
                  <span className='listItem'>{item.Text1}</span>
                  <span className='listItem'>{item.Text2}</span>
                </List.Item>
              )}
            />
          </div>
        </Panel>
      </Collapse>
    </div>
  );
};

export default MoreDetailsComponet;
