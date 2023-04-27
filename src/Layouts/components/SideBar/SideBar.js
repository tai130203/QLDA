import classNames from 'classnames/bind';
import styles from './SideBar.module.scss';
import NavItem from './components/NavItem/NavItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowRightFromBracket,
    faBarsProgress,
    faBlog,
    faBook,
    faCalendar,
    faUser,
    faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getPosition } from '~/userDefineFunction';

const cx = classNames.bind(styles);

function SideBar() {
    const { pathname } = useLocation();

    const [path, setPath] = useState();

    useEffect(() => {
        const pos = getPosition(pathname, '/', 2);
        const result = pathname.slice(0, pos);
        setPath(result);
    }, [pathname]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('side-bar-header')}>
                <img
                    className={cx('company-logo')}
                    src="https://einfosoft.com/templates/admin/kuber/source/light/assets/images/logo.png"
                    alt="header-img"
                />
                <span className={cx('company-name')}>Company</span>
            </div>
            <div className={cx('user-info')}>
                <img
                    className={cx('user-img')}
                    src="https://einfosoft.com/templates/admin/kuber/source/light/assets/images/user/admin.jpg"
                    alt="user-img"
                />
                <h4 className={cx('user-name')}>Sarah Smith</h4>
                <p className={cx('user-role')}>Admin</p>
            </div>
            <div className={cx('navigation-container')}>
                <div className={cx('nav-group')}>
                    <div className={cx('nav-group-header')}>MAIN</div>
                    <div className={cx('navigation-menu')}>
                        <NavItem
                            labelName="Posts"
                            labelIcon={<FontAwesomeIcon icon={faBlog} />}
                            navList={[{ name: 'All Posts', to: '/posts' }]}
                            active={path === '/posts'}
                        />

                        <NavItem
                            labelName="Documents"
                            labelIcon={<FontAwesomeIcon icon={faBook} />}
                            navList={[{ name: 'All Documents', to: '/documents' }]}
                            active={path === '/documents'}
                        />

                        <NavItem
                            labelName="Employees"
                            labelIcon={<FontAwesomeIcon icon={faUsers} />}
                            navList={[
                                { name: 'All Employees', to: '/all-employees' },
                                { name: 'Add Employee', to: '/add-employee' },
                            ]}
                            active={path === '/employees'}
                        />

                        <NavItem
                            to="/profile"
                            labelName="Profile"
                            labelIcon={<FontAwesomeIcon icon={faUser} />}
                            active={path === '/profile'}
                        />
                        <NavItem
                            to="/calendar"
                            labelName="Calendar"
                            labelIcon={<FontAwesomeIcon icon={faCalendar} />}
                            active={path === '/calendar'}
                        />

                        <NavItem
                            to="/requests"
                            labelName="All Requests"
                            labelIcon={<FontAwesomeIcon icon={faBarsProgress} />}
                            active={path === '/requests'}
                        />

                        <NavItem
                            to="/login"
                            labelName="Log Out"
                            labelIcon={<FontAwesomeIcon icon={faArrowRightFromBracket} />}
                            active={path === '/login'}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SideBar;
