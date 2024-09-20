Para adicionar uma img no react

primeiro vc cria a pasta aonde esta na img

ai no component vc vai importa ela
e depois para utilizar so uitlizar {} com nome da importação

Ex:

import logo from "../../assets/ignite-logo.svg";
export function Header() {
return (
<div className={styles.header}>
<img src={logo} alt="logo" />
</div>
);
}
