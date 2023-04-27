import classNames from 'classnames/bind';
import styles from './LogIn.module.scss';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function LogIn() {
    const navigate = useNavigate();

    return (
        <div className={cx('wrapper')}>
            <div className={cx('left-side')}>
                <div className={cx('company-logo')}>
                    <img
                        src="https://einfosoft.com/templates/admin/kuber/source/light/assets/images/logo.png"
                        alt="logo"
                    />
                    <h2 className={cx('company-name')}>Company</h2>
                </div>
                <div className={cx('back-ground')}></div>
            </div>
            <div className={cx('log-in-box')}>
                <div className={cx('log-in-container')}>
                    <div className={cx('header')}>
                        <h2>Welcome to Kuber</h2>
                    </div>
                    <div className={cx('form-container')}>
                        <label>Log In</label>
                        <div className={cx('form-input')}>
                            <input placeholder="User name ....." />
                            <input placeholder="Password ....." />
                        </div>
                    </div>

                    <div className={cx('footer')}>
                        <button className={cx('submit-btn')} onClick={() => navigate('/posts', { replace: true })}>
                            Log In
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LogIn;
