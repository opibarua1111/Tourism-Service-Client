import { useEffect, useState } from 'react';

const useManageAllOrders = () => {
    const [manageAllorders, setManageAllorders] = useState([]);
    useEffect(() => {
        fetch('https://grim-zombie-63256.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setManageAllorders(data))
    }, []);
    return {
        manageAllorders
    }
};

export default useManageAllOrders;