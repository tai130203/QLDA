import classNames from 'classnames/bind';
import styles from './Requests.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function RequestItem({ className }) {
    return (
        <div className={cx('request-row', { [className]: className })}>
            <div className={cx('col-item', 'img-item')}>
                <img
                    className={cx('employee-avatar')}
                    src="https://einfosoft.com/templates/admin/kuber/source/light/assets/images/user/user1.jpg"
                    alt="avatar"
                />
            </div>
            <div className={cx('col-item')}>John Deo</div>
            <div className={cx('col-item')}>Medical Leave</div>
            <div className={cx('col-item')}>04/10/1985</div>
            <div className={cx('col-item')}>02/25/2018</div>
            <div className={cx('col-item')}>5</div>
            <div className={cx('col-item')}>Approved</div>
            <div className={cx('col-item')}>God creature is sixth was abundantly and sea gathered i </div>
            <div className={cx('col-item')}>
                <button className={cx('action-btn', 'edit-btn')}>
                    <FontAwesomeIcon icon={faPenToSquare} />
                </button>

                <button className={cx('action-btn', 'remove-btn')}>
                    <FontAwesomeIcon icon={faTrashCan} />
                </button>
            </div>
        </div>
    );
}

export default RequestItem;
