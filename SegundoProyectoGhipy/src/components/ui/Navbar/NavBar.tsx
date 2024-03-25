import React, { FormEvent, useState } from 'react'
import { Button, Col, Form, Navbar, Row } from 'react-bootstrap'
import { Prev } from 'react-bootstrap/esm/PageItem';

const API_KEY = import.meta.env.VITE_API_KEY;
export const NavBar = () => {

    const fetchGift = async (query:string)=>{
        try {
            const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=12`);
            const data = await response.json();
            console.log(data.data)
        } catch (error) {
            console.warn(error)
        }
    }

    const [queryInput, setQueryInput] = useState('');
    const submit = (e: FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        fetchGift(queryInput);
    }
    return (
    <Navbar className="bg-body-tertiary justify-content-center">
    <Form onSubmit={submit}>
      <Row>
        <Col xs="auto">
          <Form.Control
            onChange={(e)=>
                setQueryInput(e.target.value)
            }
            type="text"
            placeholder="Search"
            className=" mr-sm-2"
          />
        </Col>
        <Col xs="auto">
          <Button type="submit">Submit</Button>
        </Col>
      </Row>
    </Form>
  </Navbar>  )
}