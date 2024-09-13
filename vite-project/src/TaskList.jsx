export default function TaskList({ taskList, deleteTask, editeTask }) {
    return <>
        <ul>
            {taskList.map((task, index) => (
                <li key={index}>{task.name}
                    <input
                        type="checkbox"
                        value={task.complete}
                        onChange={e => {
                            console.log(e)
                        }}
                    />
                    {/*out*/}
                    <button oneClick={() => deleteTask(index)}>Удалить</button>
                </li>
            ))}
        </ul>
    </>;
}