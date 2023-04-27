import classNames from 'classnames/bind';
import styles from './PostItem.module.scss';

const cx = classNames.bind(styles);

function PostItem({ className }) {
    return (
        <div className={cx('wrapper', { [className]: className })}>
            <div className={cx('header')}>
                <div className={cx('user-avatar')}>
                    <img
                        src="https://einfosoft.com/templates/admin/kuber/source/light/assets/images/user/user2.jpg"
                        alt="user-avatar"
                    />
                </div>
                <div className={cx('info')}>
                    <div>
                        <span className={cx('user-name')}>Airi Satou</span>
                        <span> posted on </span>
                        <span className={cx('dep-name')}>Ashton Cox</span>
                    </div>
                    <span className={cx('time-stamp')}>Today 11:10 pm - 15/04/2021</span>
                </div>
            </div>
            <div className={cx('content')}>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s. Over the years, sometimes by accident,
                    sometimes on purpose (injected humour and the like).
                </p>
            </div>
        </div>
    );
}

export default PostItem;
