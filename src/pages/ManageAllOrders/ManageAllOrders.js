import React from 'react';
import useManageAllOrders from '../../hooks/useManageAllOrders';
import ManageAllOrder from '../ManageAllOrder/ManageAllOrder';

const ManageAllOrders = () => {
    const { manageAllorders } = useManageAllOrders();
    return (
        <div>
            <div className="grid grid-cols-7 gap-1 py-3 border-b-2 border-gray-600">
                <div className="font-bold text-xl">Title</div>
                <div className="font-bold text-xl">Name</div>
                <div className="font-bold text-xl">Email</div>
                <div className="font-bold text-xl">City</div>
                <div className="font-bold text-xl">Phone</div>
                <div className="font-bold text-xl">Status</div>
                <div className="font-bold text-xl">Action</div>
            </div>
            <div>
                {
                    manageAllorders.map(manageAllOrder => <ManageAllOrder
                        key={manageAllOrder._id}
                        manageAllOrder={manageAllOrder}
                    ></ManageAllOrder>)
                }
            </div>
        </div>
    );
};

export default ManageAllOrders;