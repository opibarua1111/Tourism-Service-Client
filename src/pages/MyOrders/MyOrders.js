import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import MyOrder from '../MyOrder/MyOrder';

const MyOrders = () => {
    const { user } = useAuth();
    const [myOrders, setMyOrders] = useState([]);
    useEffect(() => {
        fetch('https://grim-zombie-63256.herokuapp.com/order/byEmail', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ email: user.email })
        })
            .then(res => res.json())
            .then(orders => {
                setMyOrders(orders);
            })
    }, [user.email])
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
                    myOrders.map(manageAllOrder => <MyOrder
                        key={manageAllOrder._id}
                        manageAllOrder={manageAllOrder}
                    ></MyOrder>)
                }
            </div>
        </div>
    );
};

export default MyOrders;