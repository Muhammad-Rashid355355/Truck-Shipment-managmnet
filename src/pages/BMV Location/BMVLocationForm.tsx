/* eslint-disable react/display-name */
import React, { useState } from 'react';
import { Table, Input, InputNumber, Popconfirm, Form, Typography, Button } from 'antd';
import { EditableCellProps, Item, originData } from './BMVLocationForm.interface';

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

const BMVLocationForm: React.FC = () => {
    const [form] = Form.useForm();
    const [data, setData] = useState(originData);
    const [editingKey, setEditingKey] = useState('');

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
            title: 'Location',
            dataIndex: 'location_name',
            width: '10vw',
            editable: true,
        },
        {
            title: 'Address 1',
            dataIndex: 'address_1',
            width: '15vw',
            editable: true,
        },
        {
            title: 'Address 2',
            dataIndex: 'address_2',
            width: '12vw',
            editable: true,
        },
        {
            title: 'City',
            dataIndex: 'city',
            width: '8vw',
            editable: true,
        },
        {
            title: 'County',
            dataIndex: 'county',
            width: '9vw',
            editable: true,
        },
        {
            title: 'Zip',
            dataIndex: 'zip',
            width: '8vw',
            editable: true,
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            width: '10vw',
            editable: true,
        },
        {
            title: 'Fax',
            dataIndex: 'fax',
            width: '10vw',
            editable: true,
        },
        {
            title: 'Email',
            dataIndex: 'email',
            width: '18vw',
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

    return (
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
    );
};
export default BMVLocationForm;