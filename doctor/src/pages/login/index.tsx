import React, {
    useEffct
} from 'react';

import CONFIG from '../../common/config';

const {
    IDENTITY
} = CONFIG;

const Login: FC = (): JSX.Element => {

    useEffct(() => {

    }, []);

    const ChooseId = (item): void => {

    };
    const List = IDENTITY.map((item) => {
        const {
            name,
            id,
            icon
        } = item;
        return <div className="login-id" onClick={(): void => ChooseId(item)}>
                    <div>{icon}</div>
                    <div>{name}</div>
        </div>
    })
    return <div className="login">
                <div className="login-title">请选择你的身份</div>
                    {List}
    </div>
}

export default Login;