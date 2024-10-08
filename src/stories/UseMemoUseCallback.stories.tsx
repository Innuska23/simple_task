import { memo, useCallback, useMemo, useState } from "react";

export default {
    title: 'useMemo',
}

export const DifficultCountingExample = () => {

    const [a, setA] = useState<number>(5);
    const [b, setB] = useState<number>(5);

    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(() => {
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 100000000) {
                fake++;
                const fakeValue = Math.random();
            }
            tempResultA = tempResultA * i;
        }
        return tempResultA;

    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB = resultB * i;
    }

    return (
        <>
            <input
                value={a}
                onChange={(e) => setA(Number(e.currentTarget.value))} />
            <input
                value={b}
                onChange={(e) => setB(+e.currentTarget.value)} />
            <hr />
            <div>
                Result for a: {resultA}
            </div>
            <div>
                Result for b: {resultB}
            </div>
        </>
    )
}

const UsersSecret = (props: { users: Array<string> }) => {
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}

const Users = memo(UsersSecret);

export const HelpsToReactMemo = () => {
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(['Dimych', 'Valera', 'Artem', 'Katya']);

    const newArray = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf('a') > -1);
    }, [users])


    const addUser = () => {
        const newUsers = [...users, 'Sveta' + new Date().getTime()];
        setUsers(newUsers)
    }
    return <>
        <div>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            {counter}
        </div>

        <button onClick={addUser}>Add new user</button>
        <Users users={newArray} />
    </>
}

export const LikeUseCallback = () => {
    const [counter, setCounter] = useState(0);
    const [books, setBook] = useState(['React', 'JS', 'TS', 'CSS']);

    const memoizedAddBook = useCallback(() => {
        console.log(books)
        const newBook = [...books, 'Angular' + new Date().getTime()];
        setBook(newBook)
    }, [books])

    return <>
        <div>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            {counter}
        </div>

        <Book
            addBook={memoizedAddBook} />
    </>
}

type BookSecretType = {
    addBook: () => void
}

const BooksSecret = (props: BookSecretType) => {
    return <div>
        <button onClick={props.addBook}>Add new book</button>
        {/* {props.books.map((book, i) => <div key={i}>{book}</div>)} */}
    </div>
}

const Book = memo(BooksSecret)
