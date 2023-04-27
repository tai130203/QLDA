import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('user-container')}>
                <p className={cx('user-name')}>Ella Jones</p>
                <img
                    className={cx('user-img')}
                    src="https://einfosoft.com/templates/admin/kuber/source/light/assets/images/user/admin.jpg"
                    alt="user-img"
                />
            </div>
        </div>
    );
}

export default Header;
