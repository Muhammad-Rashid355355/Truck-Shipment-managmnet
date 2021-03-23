/* eslint-disable eqeqeq */
/* eslint-disable react/display-name */
import React, { useState } from 'react';
import { Table, Input, InputNumber, Popconfirm, Form, Typography, Button, Row, Col } from 'antd';
import { EditableCellProps, Item, originData } from './BMVVehicleList.interface';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';

const EditableCell: React.FC<EditableCellProps> = ({
    editing,
    dataIndex,
    title,
    inputType,
    record,
    index,
    children,
    ...restProps
}) => {
    const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;

    return (
        <td {...restProps}>
            {editing ? (
                <Form.Item
                    name={dataIndex}
                    style={{ margin: 0 }}
                    rules={[
                        {
                            required: true,
                            message: `Please Input ${title}!`,
                        },
                    ]}
                >
                    {inputNode}
                </Form.Item>
            ) : (
                    children
                )}
        </td>
    );
};

const BMVVehicleList: React.FC = () => {
    const [form] = Form.useForm();
    const [data, setData] = useState(originData);
    const [editingKey, setEditingKey] = useState('');
    const [currentPage, setCurrentPage] = useState(57);
    const [totalRows, setTotalRows] = useState(276);
    const [rowsPerPage, setRowsPerPage] = useState('10');

    const isEditing = (record: Item) => record.key === editingKey;

    const edit = (record: Partial<Item> & { key: React.Key }) => {
        form.setFieldsValue({ name: '', age: '', address: '', ...record });
        setEditingKey(record.key);
    };

    const cancel = () => {
        setEditingKey('');
    };

    const save = async (key: React.Key) => {
        try {
            const row = (await form.validateFields()) as Item;

            const newData = [...data];
            const index = newData.findIndex(item => key === item.key);
            if (index > -1) {
                const item = newData[index];
                newData.splice(index, 1, {
                    ...item,
                    ...row,
                });
                setData(newData);
                setEditingKey('');
            } else {
                newData.push(row);
                setData(newData);
                setEditingKey('');
            }
        } catch (errInfo) {
            console.log('Validate Failed:', errInfo);
        }
    };

    const columns = [
        {
            title: 'Submitted Date',
            dataIndex: 'submittedDate',
            width: '15vw',
            editable: true,
        },
        {
            title: 'Customer Name',
            dataIndex: 'customerName',
            width: '12vw',
            editable: true,
        },
        {
            title: 'Location',
            dataIndex: 'location',
            width: '12vw',
            editable: true,
        },
        {
            title: 'Accepted Date',
            dataIndex: 'acceptedDate',
            width: '20vw',
            editable: true,
        },
        {
            title: 'Completed Date',
            dataIndex: 'completedDate',
            width: '20vw',
            editable: true,
        },

        {
            width: '8vw',

            // title: 'Last Name',
            // dataIndex: 'operation',

            render: (_: any, record: Item) => {
                const editable = isEditing(record);
                return editable ? (
                    <span>
                        <a href="javascript:;" onClick={() => save(record.key)} style={{ marginRight: 8 }}>
                            Save
            </a>
                        <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
                            <a>Cancel</a>
                        </Popconfirm>
                    </span>
                ) : (
                        <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
                            <Button>
                                Edit
                            </Button>
                        </Typography.Link>
                    );
            },
        },
    ];

    const mergedColumns = columns.map(col => {
        if (!col.editable) {
            return col;
        }
        return {
            ...col,
            onCell: (record: Item) => ({
                record,
                inputType: col.dataIndex === 'age' ? 'number' : 'text',
                dataIndex: col.dataIndex,
                title: col.title,
                editing: isEditing(record),
            }),
        };
    });
    const decreasePage = () => {
        setCurrentPage(currentPage - 1);
    };
    const IncreasePage = () => {
        if (totalRows == currentPage) {
            return;
        } else {
            setCurrentPage(currentPage + 1);
        }
    };

    const RowsPerPage = (e: React.MouseEvent<HTMLSpanElement>): void => {
        const PageRow: any = e.currentTarget.dataset.id;
        setRowsPerPage(PageRow);
    };

    return (
        <div>
            <Row className="pagination_row" justify='end'>
                <Col xs={24} lg={10} xl={8} xxl={6}>
                    <span className="row_pages_length">
                        Rows per page:
                      <span data-id="10" onClick={(e) => RowsPerPage(e)}>10 </span>
                        <span data-id="20" onClick={RowsPerPage}>20 </span>
                        <span data-id="30" onClick={RowsPerPage}>30 </span>
                        <span data-id="40" onClick={RowsPerPage}>40 </span>
                        <span data-id="50" onClick={RowsPerPage}>50 </span>
                        <span data-id="100" onClick={RowsPerPage}>100 </span>
                    </span>
                </Col>
                <Col xs={12} lg={4} xl={3} xxl={2}>
                    <span className="total_pages_length">
                        1-{rowsPerPage}  of {totalRows}
                    </span>
                </Col>

                <Col xs={12} lg={6} xl={4} xxl={3}>
                    <span className="current_page">
                        <ArrowLeftOutlined onClick={decreasePage} />{' '}
                        {currentPage}
                        <ArrowRightOutlined onClick={IncreasePage} /> {' '}

                    </span>
                </Col>
            </Row>
            <div style={{ overflowX: 'auto' }}>
                <Form style={{ width: '100%' }} form={form} component={false}>
                    <Table
                        components={{
                            body: {
                                cell: EditableCell,
                            },
                        }}

                        bordered
                        dataSource={data}
                        columns={mergedColumns}
                        rowClassName="editable-row"
                        pagination={{
                            onChange: cancel,
                        }}
                    />
                </Form>
            </div>
        </div>
    );
};
export default BMVVehicleList;