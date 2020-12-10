import { Helmet } from 'react-helmet'
import React from 'react'

function withHelmet (title) {
  return Component => props => (
    <>
      <Helmet>
        <link
          href='https://fonts.googleapis.com/css2?family=Nerko+One&display=swap'
          rel='stylesheet'
        />
        <link href='https://fonts.googleapis.com/css2?family=Nerko+One&family=Signika:wght@300&display=swap' rel='stylesheet' />
        <link href='https://fonts.googleapis.com/css2?family=Cabin:wght@500&family=Josefin+Sans:wght@100;400&family=Nerko+One&family=Signika:wght@300&display=swap' rel='stylesheet' />
        <title>{title}</title>
      </Helmet>
      <Component {...props} />
    </>
  )
}

export default withHelmet
