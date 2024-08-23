import style from "./CardListUnlimited.module.css"
function Card(props) {
    return (
        <div className={style.card}>
            <div className={style.cardBody}>
                <p className={style.header}>{props.header}</p>
                <p className={style.tarif}>{props.tarif}</p>
                <p className={style.speed}>{props.speed}</p>
                <p className={style.footer}>{props.footer}</p>
            </div>
        </div>
    );
}
export default Card;