import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import PostItem from '~/components/PostItem/PostItem';
import PageHeader from '../components/PageHeader/PageHeader';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <PageHeader title="All Posts" />
            <div className={cx('container')}>
                <PostItem className={cx('mt-16')} />
                <PostItem className={cx('mt-16')} />
                <PostItem className={cx('mt-16')} />
                <PostItem className={cx('mt-16')} />
                <PostItem className={cx('mt-16')} />
            </div>
        </div>
    );
}

export default Home;
