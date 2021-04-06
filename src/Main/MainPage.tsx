import React, { useCallback, useRef } from "react";
import Book from "./Book";
import { Button, Input } from 'antd';
import styled from "styled-components";
import FlexLayout from "../lib/FlexLayout";
import { useFirestore, useFirestoreConnect } from 'react-redux-firebase'
import { useSelector } from "react-redux";
import type { Props as BookType } from './Book';
const Container = styled.div`
    width: 200px
`

const MainPage = () => {
    const firestore = useFirestore();
    useFirestoreConnect(['books']);
    const books: [BookType] = (Object.values(useSelector((state: any) => state.firestore.data.books) ?? {}) as any) ?? [];
    // const books = [{ name: 'ABC', description: 'hello book' }, { name: 'XYZ', description: 'dark magic' }];
    const nameRef = useRef<any>(null);
    const descriptionRef = useRef<any>(null);
    const addBook = useCallback(
        () => {
            const name = nameRef?.current?.state?.value ?? '';
            const description = descriptionRef?.current?.state?.value ?? '';
            if (!name || !description) {
                return;
            }
            firestore.collection('books').add({ name, description }).then((result) => {
                console.log(result);
            }).catch((error) => {
                console.log(error)
            }).finally(() => {
                console.log('finally');
            })
            console.log('end');
        },
        [firestore],
    )
    return <FlexLayout direction='vertical' justify='all' align='center'>
        <Container>
            <div>New Book</div>
            <Input placeholder="Book Name" ref={nameRef} />
            <Input placeholder="Description" ref={descriptionRef} />
            <Button type='primary' onClick={addBook}>Add</Button>
        </Container>
        <div>{books && books.map((book) =>
            <Book {...book} />
        )}</div>
    </FlexLayout>
}

export default MainPage