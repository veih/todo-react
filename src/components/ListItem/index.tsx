import * as C from './styles';
import { Item } from '../../types/Item';
import { ImBin } from "react-icons/im";

type Props = {
    item: Item,
    onChange: (id: number, done: boolean) => void,
    onDelete: (button: any) => void,
}

export const ListItem = ({ item, onChange, onDelete }: Props) => {
    return (
        <C.Container done={item.done}>
            <input
                type="checkbox"
                checked={item.done}
                onChange={e => onChange(item.id, e.target.checked)}
            />
            <label>{item.name}</label>
            <button onClick={onDelete}><ImBin /></button>
        </C.Container>
    );
}
