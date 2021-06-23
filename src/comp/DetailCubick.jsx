import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { cubicks } from "./Cubicks";

function DetailCubick(){
    let { id } = useParams();
    const [cubick, setCubick] = useState(false);
    useEffect(() => {
        setCubick(cubicks.filter((el) => String(el.id) == String(id))[0]);
    }, [id]);
    if (cubick) {
        return (
            <div className="DetailCubick">
                <h1>{cubick.name}</h1>
                <img src={cubick.img} alt="" />
                <p>{cubick.desc}</p>
                <p>{cubick.price}</p>
            </div>
        );
    } else {
        return "Не найдено";
    }
}

export default DetailCubick;