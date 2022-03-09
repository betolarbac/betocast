import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';

import styles from './styles.module.scss';

export function Header() {
    //formatação de data 
    const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
        locale: ptBR,
    });

    return(
        <header className={styles.headerContainer}>
            <img src="/logo.svg" alt="logo " />

            <p>
                o melhor para você ouvir, sempre 
            </p>

            <span>{currentDate}</span>

        </header>
    );
}