import { useState } from 'react';
import * as C from './App.styles';
import { Item } from './types/Item';
import { ListItem } from './components/ListItem';
import { AddArea } from './components/AddArea';
import { Api } from './components/Api';

const App = () => {
  const [list, setList] = useState<Item[]>(Api);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    });
    setList(newList);
  }

  // Função feita para tarefinha de casa.
  const handleTaskChange = (id: number, done: boolean) => {
    let newList = [...list];
    for (let i in newList) {
      if (newList[i].id === id) {
        newList[i].done = done;
      }
    }
    setList(newList);
  }

  const handleDeleteTask = (id: number) => {
    const newList = list.filter(item => item.id !== id);
    setList(newList);
  }

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>

        <AddArea onEnter={handleAddTask} />

        {list.map((item, index) => (
          <ListItem
            key={index}
            item={item}
            onChange={handleTaskChange}
            onDelete={() => handleDeleteTask(item.id)}
          />
        ))}
      </C.Area>
    </C.Container>
  );
}

export default App;
