import classNames from 'classnames';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import Container from '../../layout/Container';
import classes from "../page.module.scss";
function NoPage() {
  const navigate = useNavigate()
  return (
    <Container className={classNames(classes['page'],classes["nopage"])}>
        <h2>There's nothing here: 404!</h2>
        <button onClick={()=>navigate('/')}>Home</button>
    </Container>
    
  )
}

export default NoPage