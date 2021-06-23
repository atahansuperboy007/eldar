import CubickItem from './CubickItem'
import form from '../FormCub.json'

function FormCub() {
    return (
        <div className="cubick-list">
            {
            form.map((item) => (
            <CubickItem data={item}/>
            ))
        }
        </div>
    )
}

export default FormCub;