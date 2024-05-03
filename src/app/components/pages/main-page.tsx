import React from 'react'
import { Container } from 'react-bootstrap'
import PicturesTable from '@containers/pictures-table'

export default function MainPage() {
    return (
        <Container className='position-relative'>
            <PicturesTable></PicturesTable>
        </Container>
    )
}