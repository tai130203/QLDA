import classNames from 'classnames/bind';
import styles from './DetailInfo.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);

function DetailInfo() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('info-group')}>
                <label className={cx('label')}>About</label>
                <div className={cx('content')}>
                    <li>
                        Completed my graduation in Arts from the well known and renowned institution of India – SARDAR
                        PATEL ARTS COLLEGE, BARODA in 2000-01, which was affiliated to M.S. University. I ranker in
                        University exams from the same university from 1996-01.
                    </li>
                    <li>
                        Worked as Professor and Head of the department at Sarda Collage, Rajkot, Gujarat from 2003-2015
                    </li>
                    <li>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining essentially unchanged.
                    </li>
                </div>
            </div>
            <div className={cx('info-group')}>
                <label className={cx('label')}>Education</label>
                <div className={cx('content')}>
                    <li>B.A.,Gujarat University, Ahmedabad,India.</li>
                    <li>M.A.,Gujarat University, Ahmedabad, India.</li>
                    <li>P.H.D., Shaurashtra University, Rajkot</li>
                </div>
            </div>
            <div className={cx('info-group')}>
                <label className={cx('label')}>Experience</label>
                <div className={cx('content')}>
                    <li>
                        One year experience as Jr. Professor from April-2009 to march-2010 at B. J. Arts College,
                        Ahmedabad.
                    </li>
                    <li>
                        Three year experience as Jr. Professor at V.S. Arts & Commerse Collage from April - 2008 to
                        April - 2011.
                    </li>
                    <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                    <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                    <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                    <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                </div>
            </div>
        </div>
    );
}

export default DetailInfo;
