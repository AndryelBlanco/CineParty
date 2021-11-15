import React from 'react'
import { Error, ErrorText, PageNotFound } from './StyledNotFoundPage'

const NotFoundPage = () => {
    return (
        <PageNotFound>
            <ErrorText>Oops! Page not Found </ErrorText>
            <Error>404</Error>
        </PageNotFound>
    )
}

export default NotFoundPage
