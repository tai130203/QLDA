import classNames from 'classnames/bind';
import styles from './Profile.module.scss';
import PageHeader from '../components/PageHeader/PageHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import DetailInfo from './components/DetailInfo/DetailInfo';

const cx = classNames.bind(styles);

function Profile() {
    return (
        <div className={cx('wrapper')}>
            <PageHeader title="Profile" />
            <div className={cx('container')}>
                <div className={cx('contact-box')}>
                    <div className={cx('contact-header')}>
                        <h4 className={cx('user-name')}>John Smith</h4>
                        <p>Software Engineer</p>
                    </div>
                    <div className={cx('user-avatar')}>
                        <img
                            alt="avatar"
                            src="	https://einfosoft.com/templates/admin/kuber/source/light/assets/images/user/usrbig3.jpg"
                        />
                    </div>
                    <div className={cx('contact-content')}>
                        <p className={cx('address')}>456, Estern evenue, Courtage area, New York</p>
                        <div className={cx('phone-number')}>
                            <FontAwesomeIcon className={cx('phone-icon')} icon={faPhone} />
                            <p>264-625-2583</p>
                        </div>
                        <div className={cx('email')}>
                            <FontAwesomeIcon className={cx('email-icon')} icon={faEnvelope} />
                            <p>john@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className={cx('detail-info')}>
                    <DetailInfo />
                </div>
            </div>
        </div>
    );
}

export default Profile;
