import React from "react";
import Card from "./Card";
import style from "./unlimited300.module.css"

function CardList() {
    return (
        
        <React.Fragment>
            <Card
                header="Безлимитный 300"
                tarif="руб300/мес"
                speed="До 10 Мбит/сек"
                footer="Объем включенного трафика не граничен"
            />
           <Card
                header="Безлимитный 450"
                tarif="руб450/мес"
                speed="До 10 Мбит/сек"
                footer="Объем включенного трафика не граничен"
            />
            <Card
                header="Безлимитный 550"
                tarif="руб550/мес"
                speed="До 10 Мбит/сек"
                footer="Объем включенного трафика не граничен"
            />
            <Card
                header="Безлимитный 1000"
                tarif="руб1000/мес"
                speed="До 10 Мбит/сек"
                footer="Объем включенного трафика не граничен"
            />
        </React.Fragment>
    );
}

export default CardList;