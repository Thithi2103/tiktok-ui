import styles from  "./page.module.scss"
import clsx from 'clsx'


function Page() {
    const iTem1 = clsx(styles.item)

    return (
        <h1 className={iTem1}>Hoang Thi</h1>
    )
}

export default Page