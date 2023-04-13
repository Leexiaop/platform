import BasicLayout from '@/components/BasicLayout';
import MainLayout from '@/components/MainLayout';

const Layouts = (props) => {
    if (props.location.pathname === '/login') {
        return <BasicLayout>{props.children}</BasicLayout>;
    }

    return (
        <MainLayout>{props.children}</MainLayout>
    );
};

Layouts.wrappers = ['@/wrappers/auth'];

export default Layouts;
