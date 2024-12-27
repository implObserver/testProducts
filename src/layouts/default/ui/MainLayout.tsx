import React from 'react';
import styles from './styles/MainLayout.module.css'
import { Footer } from '@/structures/gadgets/footer';
import { Outlet } from 'react-router-dom';
import { Header } from '@/structures/gadgets/header';

export const MainLayout: React.FC = () => {
    return (
        <div className={styles.main_layout}>
            <div className={styles.plug}>
                <Header />
                <Outlet />
                <Footer />
            </div>
        </div>
    );
};