import { useState, KeyboardEvent, MouseEvent } from 'react';
import { ImPencil2 } from 'react-icons/im';
import * as C from './styles';

type Props = {
    onEnter: (taskName: string) => void
}

export const AddArea = ({ onEnter }: Props) => {
    const [inputText, setInputText] = useState('');

    const handleKeyUp = (e: KeyboardEvent) => {
        if (e.code === 'Enter' && inputText !== '') {
            onEnter(inputText);
            setInputText('');
        }
    }

    const handleClick = (e: MouseEvent) => {
        if ('click' && inputText !== '') {
            onEnter(inputText);
            setInputText('');
        }
    }

    return (
        <C.Container>
            <div className="image"></div>
            <button onClick={() => handleClick}
                value={inputText}>
                <ImPencil2 onClick={handleClick} />
            </button>
            <input
                type="text"
                placeholder="Adicione uma tarefa"
                value={inputText}
                onChange={e => setInputText(e.target.value)}
                onKeyUp={handleKeyUp}
            />
        </C.Container>
    );
}
