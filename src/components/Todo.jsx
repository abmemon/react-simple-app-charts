import useFetch from '../hooks/useFetch';
import '../App.css';

const Todo = () => {
    const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/todos/');
    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <main>
            <div className="todolist">
                <h1>Todo List</h1>
                <ul id="todoitems">
                {data.map(dataobj => (
                    <li className="todoitem ">
                        <p><strong>User ID:</strong> <span className="userId"> {dataobj.userId} </span></p>
                        <p><strong>Title:</strong> <span className={`title${dataobj.completed ? " completed" : ""}`}>{dataobj.title}</span></p>
                    </li>
                ))}
                </ul>
            </div>            
        </main>
    );
};

export default Todo;