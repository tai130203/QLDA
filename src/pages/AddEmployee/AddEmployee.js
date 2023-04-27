import classNames from 'classnames/bind';
import styles from './AddEmployee.module.scss';
import PageHeader from '../components/PageHeader/PageHeader';

const cx = classNames.bind(styles);

function AddEmployee() {
    return (
        <div className={cx('wrapper')}>
            <PageHeader title="Add Employee" />
            <div className={cx('container')}>
                <div className={cx('input-container')}>
                    <div className={cx('input-box')}>
                        <input placeholder="First name*" />
                    </div>

                    <div className={cx('input-box')}>
                        <input placeholder="Last name*" />
                    </div>

                    <div className={cx('input-box')}>
                        <input placeholder="Gender name*" />
                    </div>

                    <div className={cx('input-box')}>
                        <input placeholder="Mobile*" />
                    </div>

                    <div className={cx('input-box')}>
                        <input placeholder="Password*" />
                    </div>

                    <div className={cx('input-box')}>
                        <input placeholder="Re-EnterPassword*" />
                    </div>

                    <div className={cx('input-box', 'w100', 'address-inp')}>
                        <input placeholder="Address*" />
                    </div>

                    <div className={cx('input-box')}>
                        <input placeholder="Email*" />
                    </div>

                    <div className={cx('input-box')}>
                        <input placeholder="Education*" />
                    </div>

                    <div className={cx('input-box')}>
                        <input placeholder="Education*" />
                    </div>

                    <div className={cx('input-box')}>
                        <input placeholder="Education*" />
                    </div>

                    <div className={cx('input-box')}>
                        <input placeholder="Education*" />
                    </div>

                    <div className={cx('input-box', 'upload-img-area', 'w100')}>
                        <button>Choose file</button>
                        <p>or drag and drop file here</p>
                    </div>
                </div>
                <div className={cx('footer')}>
                    <button className={cx('submit-btn')}>Submit</button>
                    <button className={cx('cancel-btn')}>Cancel</button>
                </div>
            </div>
        </div>
    );
}

export default AddEmployee;
