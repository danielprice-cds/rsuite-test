import React, { useState } from 'react';
import { InputPicker } from 'rsuite';
import SpinnerIcon from '@rsuite/icons/legacy/Spinner';
import 'rsuite/dist/rsuite.min.css';

const useUsers = (defaultUsers = []) => {
    const [users, setUsers] = useState(defaultUsers);
    const [loading, setLoading] = useState(false);
    const featUsers = word => {
        setUsers([
            {
                "id": "tim",
                "login": "Tim"
            }
        ]);

        setLoading(false);
    };

    return [users, loading, featUsers];
};

const App = () => {
    const [users, loading, featUsers] = useUsers();
    return (
        <InputPicker
            data={users}
            style={{ width: 224 }}
            labelKey="login"
            valueKey="id"
            id='appUserPicker'
            data-testid="app.userPicker"
            onSearch={featUsers}
            renderMenu={menu => {
                if (loading) {
                    return (
                        <p style={{ padding: 10, color: '#999', textAlign: 'center' }}>
                            <SpinnerIcon spin /> Loading...
                        </p>
                    );
                }
                return menu;
            }}
        />
    );
};

export default App;
