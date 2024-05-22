import css from '../pages-styles/NotFound.module.css'

export const NotFound = () => {

    return (
        <main className={css.main}>
            <div className={css.container}>
                <h2 className={css.subtitle}>Error 404</h2>
                <p>Page not found</p>
            </div>
        </main>
    )
}

