import { FC } from "react";

type Props = {
    children: React.ReactNode;
    modal: React.ReactNode;
}

const Layout: FC<Props> = ({ children, modal }) => {
    return (
        <div className='w-screen'>
            {children}
            {modal}
        </div>
    );
}

export default Layout;