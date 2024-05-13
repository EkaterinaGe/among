import {useState} from 'react';
import { v4 as uuidv4 } from "uuid";

export const AddUsers = ({users, setUsers}) => {
    const [value, setValue] = useState('');

    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    const addUser = (value) => {
        if (value.trim()) {
            setUsers([...users, {id: uuidv4(), name: value, votes: 0, color: getRandomColor(), status: false, isTraitor: false}]);
        } else {
            alert('Введите имя!')
        }
    }

    return (
        <form onSubmit={e => {
            e.preventDefault();
            addUser(value);
            setValue('');
        }}>
            <input 
                type='text' 
                placeholder='Введите имя'
                value={value}
                onChange={e => setValue(e.target.value)}
            />
            <button type='submit'>Добавить</button>
        </form>
    )
}